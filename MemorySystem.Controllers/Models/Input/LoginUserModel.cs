namespace MemorySystem.Controllers.Models.Input
{
    using System.ComponentModel.DataAnnotations;

    using MemorySystem.Infrastructure.AutomapperSettings;
    using MemorySystem.Services.Models;

    public class LoginUserModel : IMapTo<BaseUserModel>
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
