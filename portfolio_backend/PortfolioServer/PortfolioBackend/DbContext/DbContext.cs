using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.IO;
using PortfolioBackend.Models;

namespace PortfolioBackend.Models
{
  public class AppDbContext : IdentityDbContext
  {
    public DbSet<FormSubmission> FormSubmissions { get; set; }

    //protected override void OnModelCreating(ModelBuilder modelBuilder)
    //{
    //  base.OnModelCreating(modelBuilder);
    //}
  }
}
