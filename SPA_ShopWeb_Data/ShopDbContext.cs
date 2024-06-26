using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SPA_ShopWeb_Data;

public partial class ShopDbContext : DbContext
{
    public ShopDbContext()
    {
    }

    public ShopDbContext(DbContextOptions<ShopDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Item> Items { get; set; }
    public virtual DbSet<Gallery> Photos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer(@"Server=DESKTOP-RNDBM95\SQLEXPRESS;Database=ShopDb;Trusted_Connection=True;Integrated Security=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Item>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.ContentType).HasMaxLength(int.MaxValue).IsUnicode(true);
            entity.Property(e => e.Price).HasColumnType("decimal(8, 2)");
            entity.Property(e=>e.Title).HasMaxLength(200).IsUnicode(true);
        });

            OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
