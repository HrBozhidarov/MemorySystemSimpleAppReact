namespace MemorySystem.Controllers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using MemorySystem.Common.Infrastructure.AutomapperSettings;
    using MemorySystem.Controllers.Infrastructure.Extentions;
    using MemorySystem.Controllers.Models.Input;
    using MemorySystem.Controllers.Models.Output;
    using MemorySystem.Services;
    using MemorySystem.Services.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [Authorize]
    public class MemoryController : BaseResponseController
    {
        private readonly IMemoryService memoryService;

        public MemoryController(IMemoryService memoryService)
        {
            this.memoryService = memoryService;
        }

        [HttpPost]
        [Route(nameof(Create))]
        public async Task<IActionResult> Create(Models.Input.CreateMemoryModel model)
            => this.ResponseResult(await this.memoryService.Create(
                Mapper.Map<Services.Models.CreateMemoryModel>(model), this.User.GetUserId()));

        [HttpPost]
        [Route(nameof(Like))]
        public async Task<IActionResult> Like(int id)
            => this.ResponseResult<int, int>(await this.memoryService.LikeAsync(id, this.User.GetUserId()));

        [HttpPost]
        [Route(nameof(Favorite))]
        public async Task<IActionResult> Favorite(int id)
            => this.ResponseResult<int, int>(await this.memoryService.FavoriteAsync(id, this.User.GetUserId()));

        [HttpGet]
        [Route(nameof(Details))]
        public async Task<IActionResult> Details(int id)
            => this.ResponseResult<MemoryDetailsModel, MemoryDetailsResponseModel>(await this.memoryService.Details(id));

        [HttpGet]
        [Route(nameof(UserMemories))]
        public async Task<IActionResult> UserMemories(string category, int pageNumber, int pageSize, string search)
            => this.ResponseResult<MemoryPageModel, MemoryPageResponseModel>(
                await this.memoryService.UserMemories(this.User.GetUserId(), category, pageNumber, pageSize, search));

        [HttpGet]
        [Route(nameof(AllMemories))]
        public async Task<IActionResult> AllMemories(string category, int pageNumber, int pageSize, string search)
            => this.ResponseResult<MemoryPageModel, MemoryPageResponseModel>(
                await this.memoryService.AllMemories(category, pageNumber, pageSize, search));
    }
}
