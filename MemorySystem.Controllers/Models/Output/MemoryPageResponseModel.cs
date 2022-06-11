namespace MemorySystem.Controllers.Models.Output
{
    using System.Collections.Generic;

    using MemorySystem.Infrastructure.AutomapperSettings;
    using MemorySystem.Services.Models;

    public class MemoryPageResponseModel : IMapFrom<MemoryPageModel>
    {
        public MemoryPageResponseModel()
        {
            this.Memories = new List<MemoryResponseModel>();
        }

        public int TotalCount { get; set; }

        public IEnumerable<MemoryResponseModel> Memories { get; set; }
    }
}
