namespace MemorySystem.Controllers.Models.Output
{
    using MemorySystem.Infrastructure.AutomapperSettings;
    using MemorySystem.Services.Models;

    public class UserProfileResponseModel : IMapFrom<UserProfileModel>
    {
        public string UserName { get; set; }

        public string Email { get; set; }

        public int Comments { get; set; }

        public int Favorites { get; set; }

        public int Memories { get; set; }
    }
}
