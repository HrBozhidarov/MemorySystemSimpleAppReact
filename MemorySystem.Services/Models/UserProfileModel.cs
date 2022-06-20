namespace MemorySystem.Services.Models
{
    using System.Linq;

    using AutoMapper;
    using MemorySystem.Data.Models;
    using MemorySystem.Infrastructure.AutomapperSettings;

    public class UserProfileModel : IHaveCustomMappings, IMapFrom<User>
    {
        public string UserName { get; set; }

        public string Email { get; set; }

        public int Comments { get; set; }

        public int Favorites { get; set; }

        public int Memories { get; set; }

        public void CreateMappings(IProfileExpression configuration)
        {
            configuration.CreateMap<User, UserProfileModel>()
                .ForMember(md => md.Comments, opt => opt.MapFrom(p => p.Comments.Count()))
                .ForMember(md => md.Memories, opt => opt.MapFrom(p => p.Memories.Count()))
                .ForMember(md => md.Favorites, opt => opt.MapFrom(p => p.Favorites.Count()));
        }
    }
}
