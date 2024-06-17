using Microsoft.EntityFrameworkCore;
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
    public class ItemService : IItemService
    {
        private readonly ShopDbContext dbContext;
        public ItemService(ShopDbContext _dbContext)
        {
            dbContext = _dbContext;
        }
        public IEnumerable<ItemViewModel> GetAllItems()
        {

            var items = dbContext.Items.Select(i => new ItemViewModel 
            {
                Id = i.Id,
                Price = i.Price,
                ContentType = i.ContentType,
            }).ToList();
            return items;
        }
    }
}
