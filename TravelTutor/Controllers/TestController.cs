using Microsoft.AspNetCore.Mvc;

namespace TravelTutor.Controllers;

public class TestController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}