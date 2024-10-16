using Microsoft.AspNetCore.Mvc;

namespace ViteNetReactApi.Controllers;
[ApiController]
[Route("api/[controller]")]
public class TestController: ControllerBase{

    [HttpGet("")]
    public IActionResult Index()
    {
        return Ok("hello from TestController");
    }

}

