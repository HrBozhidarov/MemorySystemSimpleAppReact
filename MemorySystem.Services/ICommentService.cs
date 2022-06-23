namespace MemorySystem.Services
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using MemorySystem.Services.Models;

    public interface ICommentService
    {
        Task<Result<CommentInfoModel>> GetInfo(int id);

        Task<Result<int>> CreateAsync(CreateCommentModel commentModel, string userId);

        Task<Result<IEnumerable<CommentInfoModel>>> GetAllCommentsByMemoryId(int memoryId);
    }
}
