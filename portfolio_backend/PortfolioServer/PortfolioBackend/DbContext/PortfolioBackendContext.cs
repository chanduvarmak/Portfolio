using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PortfolioBackend.Models;

namespace PortfolioBackend.Data
{
    public class PortfolioBackendContext : DbContext
    {
        public PortfolioBackendContext (DbContextOptions<PortfolioBackendContext> options)
            : base(options)
        {
        }

        public DbSet<PortfolioBackend.Models.FormSubmission> FormSubmission { get; set; } = default!;
    }
}
