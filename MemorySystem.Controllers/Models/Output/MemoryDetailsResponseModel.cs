namespace MemorySystem.Controllers.Models.Output
{
    using MemorySystem.Infrastructure.AutomapperSettings;
    using MemorySystem.Services.Models;

    public class MemoryDetailsResponseModel : IMapFrom<MemoryDetailsModel>
    {
        public int Id { get; set; }

        public string Author { get; set; }

        public string Category { get; set; }

        public string Url { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int Likes { get; set; }

        public int Favorites { get; set; }
    }
}
