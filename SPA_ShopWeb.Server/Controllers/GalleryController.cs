using Microsoft.AspNetCore.Mvc;
using SPA_ShopWeb_Data;
using SPA_ShopWeb_Models;
using SPA_ShopWeb_Services.Interfaces;

namespace SPA_ShopWeb.Server.Controllers
{
    public class GalleryController : Controller
    {
        private readonly ILogger<GalleryController> logger;
        private readonly IGalleryService galleryService;
        public GalleryController(ILogger<GalleryController> _logger, IGalleryService _galleryService)
        {
            logger = _logger;
            galleryService = _galleryService;
        }

        [HttpGet("/gallery")]
        public IEnumerable<PhotoViewModel> Get()
        {
            var photos = galleryService.GetAllPhotos();
            return photos;
        }
    }
}
