using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPA_ShopWeb_Data
{
    public class Gallery
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string ImageData { get; set; } = null!;
    }
}
