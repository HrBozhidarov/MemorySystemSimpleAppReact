namespace MemorySystem.Controllers.Models.Input
{
    using MemorySystem.Infrastructure.AutomapperSettings;

    public class CreateCommentModel : IMapTo<MemorySystem.Services.Models.CreateCommentModel>
    {
        public int MemoryId { get; set; }

        public string Content { get; set; }
    }
}
