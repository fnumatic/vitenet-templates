using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ViteNetReactEF.Db;
using Vite.AspNetCore;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddControllers();
builder.Services.AddDbContext<MyContext>(options =>
                options.UseSqlite(builder.Configuration.GetConnectionString("TestDb")));



// Add the Vite services.
builder.Services.AddViteServices(options =>
{
    options.Server.AutoRun = true;
    options.Server.Https = true;
    options.Server.UseReactRefresh = true;
    
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<MyContext>();
    context.Database.EnsureCreated();
    SeedData.Seed(context);
}

app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllers();
app.MapRazorPages();
app.MapFallbackToPage("/client");

if (app.Environment.IsDevelopment())
{
    // enable all routes listing 
    app.MapGet("/debug/routes", (IEnumerable<EndpointDataSource> endpointSources) =>
        string.Join("\n", endpointSources.SelectMany((source) => source.Endpoints  )).ToLower());
    app.UseWebSockets();
    // Use Vite Dev Server as middleware.
    app.UseViteDevelopmentServer(true);
}

// Add this new code block
//app.MapFallbackToFile("index.html");



app.Run();
