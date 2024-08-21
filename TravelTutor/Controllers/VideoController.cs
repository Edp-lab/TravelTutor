using Microsoft.AspNetCore.Mvc;

namespace TravelTutor.Controllers;

public class VideoController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}