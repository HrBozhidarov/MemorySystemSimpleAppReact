namespace MemorySystem.Controllers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using AutoMapper;
    using MemorySystem.Controllers.Infrastructure.Extentions;
    using MemorySystem.Controllers.Models.Output;
    using MemorySystem.Services;
    using MemorySystem.Services.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [Authorize]
    public class CommentController : BaseResponseController
    {
        private readonly ICommentService commentService;

        public CommentController(ICommentService commentService)
        {
            this.commentService = commentService;
        }

        [HttpPost]
        [Route(nameof(Create))]
        public async Task<IActionResult> Create(Models.Input.CreateCommentModel model)
            => this.ResponseResult<int, int>(await this.commentService.CreateAsync(
                Mapper.Map<Services.Models.CreateCommentModel>(model), this.User.GetUserId()));

        [HttpGet]
        [Route(nameof(GetAllbyMemoryId))]
        public async Task<IActionResult> GetAllbyMemoryId(int memoryId)
            => this.ResponseResult<IEnumerable<CommentInfoModel>, IEnumerable<CommentInfoResponseModel>>(
                await this.commentService.GetAllCommentsByMemoryId(memoryId));

        [HttpGet]
        [Route(nameof(GetCommentById))]
        public async Task<IActionResult> GetCommentById(int id)
            => this.ResponseResult<CommentInfoModel, CommentInfoResponseModel>(await this.commentService.GetInfo(id));
    }
}
