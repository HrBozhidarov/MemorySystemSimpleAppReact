namespace MemorySystem.Controllers.Models.Output
{
    using System;

    using MemorySystem.Infrastructure.AutomapperSettings;
    using MemorySystem.Services.Models;

    public class CommentInfoResponseModel : IMapFrom<CommentInfoModel>
    {
        public int Id { get; set; }

        public string Author { get; set; }

        public string AuthorImage { get; set; }

        public string Content { get; set; }

        public DateTime PublishedOn { get; set; }
    }
}
