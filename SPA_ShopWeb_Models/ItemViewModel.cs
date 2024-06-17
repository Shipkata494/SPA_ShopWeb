using System;
using System.Buffers.Text;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPA_ShopWeb_Models
{
    public class ItemViewModel
    {
        public Guid Id { get; set; }

        public string? ImageData { get; set; }

        public string? ContentType { get; set; }

        public decimal Price { get; set; }
    }
}
