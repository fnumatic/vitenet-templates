using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ViteNetReactEF.Db;
using ViteNetReactEF.Model;

namespace ViteNetReactEF.Controllers;
[ApiController]
[Route("api/[controller]")]
public class TestController: ControllerBase{
    private readonly MyContext _context;

    public TestController(MyContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public IActionResult Index()
    {
        return Ok("hello from TestController");
    }

    [HttpGet("users")]
    public async Task<IActionResult> GetUsers()
    {
        var users= await _context.Users.ToListAsync();
        return Ok(users);
    }


}

