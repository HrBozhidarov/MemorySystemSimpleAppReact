﻿namespace MemorySystem.Controllers
{
    using System.Threading.Tasks;

    using MemorySystem.Common.Infrastructure.AutomapperSettings;
    using MemorySystem.Controllers.Models.Input;
    using MemorySystem.Controllers.Models.Output;
    using MemorySystem.Services;
    using MemorySystem.Services.Models;
    using Microsoft.AspNetCore.Mvc;

    public class AccountController : BaseResponseController
    {
        private readonly IAccountService accountService;

        public AccountController(IAccountService accountService)
        {
            this.accountService = accountService;
        }

        [HttpPost]
        [Route(nameof(Login))]
        public async Task<IActionResult> Login(LoginUserModel model)
            => this.ResponseResult<UserLogedModel, LoginUserResponseModel>(await this.accountService.Login(Mapper.Map<BaseUserModel>(model)));
    }
}
