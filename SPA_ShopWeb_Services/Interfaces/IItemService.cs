using SPA_ShopWeb_Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPA_ShopWeb_Services.Interfaces
{
    public interface IItemService
    {
        IEnumerable<ItemViewModel>GetAllItems();
    }
}
