namespace MemorySystem.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using AutoMapper.QueryableExtensions;
    using MemorySystem.Common.Infrastructure.AutomapperSettings;
    using MemorySystem.Data;
    using MemorySystem.Data.Models;
    using MemorySystem.Services.Models;
    using Microsoft.EntityFrameworkCore;

    public class CommentService : ICommentService
    {
        private readonly MemorySystemDbContext db;

        public CommentService(MemorySystemDbContext db)
        {
            this.db = db;
        }

        public async Task<Result<int>> CreateAsync(CreateCommentModel commentModel, string userId)
        {
            var comment = Mapper.Map<Comment>(commentModel);
            comment.OwnerId = userId;
            comment.CreatedOn = DateTime.UtcNow;

            this.db.Comments.Add(comment);
            await this.db.SaveChangesAsync();

            return Result<int>.Success(comment.Id);
        }

        public async Task<Result<CommentInfoModel>> GetInfo(int id)
        {
            var info = await this.db.Comments.Where(c => c.Id == id).ProjectTo<CommentInfoModel>().FirstOrDefaultAsync();
            if (info == null)
            {
                return Result<CommentInfoModel>.Error("Comment not found");
            }

            return Result<CommentInfoModel>.Success(info);
        }

        public async Task<Result<IEnumerable<CommentInfoModel>>> GetAllCommentsByMemoryId(int memoryId)
            => Result<IEnumerable<CommentInfoModel>>.Success(
                await this.db.Comments.Where(c => c.MemoryId == memoryId).ProjectTo<CommentInfoModel>().ToListAsync());
    }
}
