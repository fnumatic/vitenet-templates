using ViteNetReactEF.Model;

namespace ViteNetReactEF.Db;

public static class SeedData
{
    public static void Seed(this MyContext context)
    {
        context.SeedUser();
    }
    public static void SeedUser(this MyContext context)
    {
        if (!context.Users.Any())
        {
            context.Users.Add(new User
            {
                Name = "johndoe",
            });
            context.SaveChanges();
        }
    }
}