namespace MemorySystem.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Threading.Tasks;

    using AutoMapper;
    using AutoMapper.QueryableExtensions;
    using MemorySystem.Data;
    using MemorySystem.Data.Models;
    using MemorySystem.Services.Models;

    using Microsoft.EntityFrameworkCore;

    public class MemoryService : IMemoryService
    {
        private readonly MemorySystemDbContext db;

        public MemoryService(MemorySystemDbContext db)
        {
            this.db = db;
        }

        public async Task<Result> Create(CreateMemoryModel model, string userId)
        {
            if (model == null)
            {
                throw new NullReferenceException(nameof(model));
            }

            var category = await this.db.Categories.FirstOrDefaultAsync(x => x.Type == model.Type);
            if (category == null)
            {
                return Result.Error($"Category of this type {model.Type} does not exists");
            }

            var entity = Mapper.Map<Memory>(model);
            entity.OwnerId = userId;
            entity.CategoryId = category.Id;

            this.db.Memories.Add(entity);

            await this.db.SaveChangesAsync();

            return Result.Success;
        }

        public async Task<Result<int>> FavoriteAsync(int id, string userId)
        {
            var memory = await this.db.Memories.Include(l => l.Favorites).FirstOrDefaultAsync(p => p.Id == id);
            if (memory == null)
            {
                return Result<int>.Error("Memory not found!");
            }

            // Make with flag
            if (memory.Favorites.Any(u => u.UserId == userId))
            {
                memory.Favorites.Remove(memory.Favorites.First(p => p.UserId == userId));
            }
            else
            {
                memory.Favorites.Add(new Favorite
                {
                    UserId = userId,
                    MemoryId = id,
                });
            }

            await this.db.SaveChangesAsync();

            return Result<int>.Success(memory.Favorites.Count);
        }

        public async Task<Result<int>> LikeAsync(int id, string userId)
        {
            var memory = await this.db.Memories.Include(l => l.Likes).FirstOrDefaultAsync(p => p.Id == id);
            if (memory == null)
            {
                return Result<int>.Error("Memory not found!");
            }

            if (memory.Likes.Any(u => u.UserId == userId))
            {
                memory.Likes.Remove(memory.Likes.First(p => p.UserId == userId));
            }
            else
            {
                memory.Likes.Add(new Like
                {
                    UserId = userId,
                    MemoryId = id,
                });
            }

            await this.db.SaveChangesAsync();

            return Result<int>.Success(memory.Likes.Count);
        }

        public async Task<Result<MemoryDetailsModel>> Details(int id)
        {
            var memoryDetailsModel = await this.db.Memories.Where(m => m.Id == id).ProjectTo<MemoryDetailsModel>().FirstOrDefaultAsync();
            if (memoryDetailsModel == null)
            {
                return Result<MemoryDetailsModel>.Error($"Memory with id {id} was not found");
            }

            return Result<MemoryDetailsModel>.Success(memoryDetailsModel);
        }

        public async Task<Result<MemoryPageModel>> UserMemories(
            string userId,
            string category,
            int pageNumber,
            int pageSize,
            string search)
        {
            Enum.TryParse(category, ignoreCase: true, out CategoryType categoryType);

            var query = categoryType == CategoryType.All
                ? this.db.Memories.Where(p => p.OwnerId == userId)
                : this.db.Memories.Where(m => m.Category.Type == categoryType && m.Owner.Id == userId);

            if (!string.IsNullOrEmpty(search))
            {
                pageNumber = 1;
                query = query.Where(m => m.Title.ToLower().Contains(search.ToLower()));
            }

            var memories = await query
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ProjectTo<MemoryModel>()
                .ToListAsync();

            var result = new MemoryPageModel
            {
                Memories = memories,
                TotalCount = await query.CountAsync(),
            };

            return Result<MemoryPageModel>.Success(result);
        }
    }
}
