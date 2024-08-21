using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TravelTutor.Models;
using TravelTutor.Services;

namespace TravelTutor.Controllers;

public class HomeController(TravelDataService travelDataService) : Controller
{
    public IActionResult Index()
    {
        var current = travelDataService.GetCurrent();
        if (current is null)
        {
            travelDataService.SetCurrent(new()
            {
                Destination = "Egypt",
                StartDate = new DateTime(2024, 09, 01),
                EndDate = new DateTime(2024, 09, 24),
                HasChildren = false,
                Activities = ["hiking", "diving"],
            });
        }

        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}