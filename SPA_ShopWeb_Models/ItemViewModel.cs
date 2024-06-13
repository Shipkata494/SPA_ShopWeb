using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPA_ShopWeb_Models
{
    public class ItemViewModel
    {
        public byte[]? ImageData { get; set; }

        public string? ContentType { get; set; }

        public decimal Price { get; set; }
    }
}
