using Microsoft.EntityFrameworkCore;
using SPA_ShopWeb_Data;
using SPA_ShopWeb_Services;
using SPA_ShopWeb_Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IItemService,ItemService>();
builder.Services.AddScoped<IGalleryService, GalleryService>();
builder.Services.AddDbContext<ShopDbContext>(options =>
    options.UseSqlServer("Server=DESKTOP-1M168L7;Database=ShopDb;Trusted_Connection=true;Integrated Security=true;TrustServerCertificate=true"));
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
