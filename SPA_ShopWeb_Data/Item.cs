using System;
using System.Collections.Generic;

namespace SPA_ShopWeb_Data;

public partial class Item
{
    public Guid Id { get; set; }

    public byte[]? ImageData { get; set; }

    public string? ContentType { get; set; }

    public decimal Price { get; set; }
}
