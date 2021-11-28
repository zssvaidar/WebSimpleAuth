using Microsoft.EntityFrameworkCore;

namespace WebSimpleAuth.Entities
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {     
        }

        
        public DbSet<User> Users { get; set; }

    }
}