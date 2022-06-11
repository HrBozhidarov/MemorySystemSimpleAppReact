namespace MemorySystem.Services.Models
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class MemoryPageModel
    {
        public MemoryPageModel()
        {
            this.Memories = new List<MemoryModel>();
        }

        public int TotalCount { get; set; }

        public IEnumerable<MemoryModel> Memories { get; set; }
    }
}
