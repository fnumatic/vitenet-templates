using Microsoft.EntityFrameworkCore;
using ViteNetReactEF.Model;

namespace ViteNetReactEF.Db;
public class MyContext : DbContext
{
    public MyContext(DbContextOptions<MyContext> options) : base(options) { }
    public DbSet<User> Users { get; set; }
}
