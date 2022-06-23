namespace MemorySystem.Services
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using MemorySystem.Services.Models;

    public interface IMemoryService
    {
        Task<Result> Create(CreateMemoryModel model, string userId);

        Task<Result<MemoryPageModel>> UserMemories(string userId, string category, int pageNumber, int pageSize, string search);

        Task<Result<MemoryPageModel>> AllMemories(string category, int pageNumber, int pageSize, string search);

        Task<Result<int>> LikeAsync(int id, string userId);

        Task<Result<int>> FavoriteAsync(int id, string userId);

        Task<Result<MemoryDetailsModel>> Details(int id);
    }
}
