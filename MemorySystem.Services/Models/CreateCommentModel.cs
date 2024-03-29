﻿namespace MemorySystem.Services.Models
{
    using AutoMapper;
    using MemorySystem.Data.Models;
    using MemorySystem.Infrastructure.AutomapperSettings;

    public class CreateCommentModel : IMapTo<Comment>
    {
        public int MemoryId { get; set; }

        public string Content { get; set; }
    }
}
