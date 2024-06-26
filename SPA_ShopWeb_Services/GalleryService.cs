using SPA_ShopWeb_Data;
using SPA_ShopWeb_Models;
using SPA_ShopWeb_Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPA_ShopWeb_Services
{
    public class GalleryService : IGalleryService
    {
        private readonly ShopDbContext dbContext;
        public GalleryService(ShopDbContext _dbContext)
        {
            dbContext = _dbContext;
        }
        public IEnumerable<PhotoViewModel> GetAllPhotos()
        {
            var photos = dbContext.Photos.Select(i => new PhotoViewModel
            {
                Id = i.Id,
                ImageData = i.ImageData,
            }).ToList();
            return photos;
        }
    }
}
