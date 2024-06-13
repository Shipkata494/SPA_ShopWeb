using Microsoft.AspNetCore.Mvc;
using SPA_ShopWeb_Models;
using SPA_ShopWeb_Services.Interfaces;

namespace SPA_ShopWeb.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {

        private readonly ILogger<ItemController> logger;
        private readonly IItemService itemService;
        public ItemController(ILogger<ItemController> _logger, IItemService _itemService)
        {
            logger = _logger;
            itemService = _itemService;
        }

        [HttpGet("/items")]
        public IEnumerable<ItemViewModel> Get()
        {
            return itemService.GetAllItems();
        }
    }
}
