﻿namespace MemorySystem.Controllers
{
    using MemorySystem.Common;
    using MemorySystem.Common.Infrastructure.AutomapperSettings;
    using MemorySystem.Controllers.Models.Output;
    using MemorySystem.Services;
    using Microsoft.AspNetCore.Mvc;

    public class BaseResponseController : ApiController
    {
        public IActionResult ResponseResult<TModel, TResult>(Result<TModel> result)
        {
            if (result.IfHasError)
            {
                return this.BadRequest(new ErrorResponseModel
                {
                    ErrorMessage = result.ErrorMessage,
                    StatusCode = StatusCodeConstants.BadRequest,
                });
            }

            return this.Ok(new SuccessResponseModel<TResult>
            {
                Data = Mapper.Map<TResult>(result.Data),
                StatusCode = StatusCodeConstants.Ok,
            });
        }

        public IActionResult ResponseResult(Result result)
        {
            if (result.IfHasError)
            {
                return this.BadRequest(new ErrorResponseModel
                {
                    ErrorMessage = result.ErrorMessage,
                    StatusCode = StatusCodeConstants.BadRequest,
                });
            }

            return this.Ok(new SuccessResponseModel { StatusCode = StatusCodeConstants.Ok });
        }
    }
}
