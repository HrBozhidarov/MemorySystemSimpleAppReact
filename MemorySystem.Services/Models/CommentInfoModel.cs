namespace MemorySystem.Services.Models
{
    using System;

    using AutoMapper;
    using MemorySystem.Data.Models;
    using MemorySystem.Infrastructure.AutomapperSettings;

    public class CommentInfoModel : IMapFrom<Comment>, IHaveCustomMappings
    {
        public int Id { get; set; }

        public string Author { get; set; }

        public string AuthorImage { get; set; }

        public string Content { get; set; }

        public DateTime PublishedOn { get; set; }

        public void CreateMappings(IProfileExpression configuration)
        {
            configuration.CreateMap<Comment, CommentInfoModel>()
                .ForMember(md => md.Author, opt => opt.MapFrom(p => p.Owner.UserName))
                .ForMember(md => md.AuthorImage, opt => opt.MapFrom(p => p.Owner.ProfileUrl))
                .ForMember(md => md.PublishedOn, opt => opt.MapFrom(p => p.CreatedOn));
        }
    }
}
