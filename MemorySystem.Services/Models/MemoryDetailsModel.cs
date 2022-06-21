namespace MemorySystem.Services.Models
{
    using AutoMapper;
    using MemorySystem.Data.Models;
    using MemorySystem.Infrastructure.AutomapperSettings;

    public class MemoryDetailsModel : IHaveCustomMappings, IMapFrom<Memory>
    {
        public int Id { get; set; }

        public string Author { get; set; }

        public string Category { get; set; }

        public string Url { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public int Likes { get; set; }

        public int Favorites { get; set; }

        public void CreateMappings(IProfileExpression configuration)
        {
            configuration.CreateMap<Memory, MemoryDetailsModel>()
                .ForMember(dest => dest.Author, opt => opt.MapFrom(s => s.Owner.UserName))
                .ForMember(dest => dest.Category, opt => opt.MapFrom(s => s.Category.Type.ToString()))
                .ForMember(dest => dest.Favorites, opt => opt.MapFrom(s => s.Favorites.Count))
                .ForMember(dest => dest.Likes, opt => opt.MapFrom(s => s.Likes.Count));
        }
    }
}
