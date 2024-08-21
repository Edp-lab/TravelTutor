using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TravelTutor.Models;
using TravelTutor.Services;

namespace TravelTutor.Controllers;

public class HomeController(TravelDataService travelDataService, VideoService videoService) : Controller
{
    public async Task<IActionResult> Index()
    {
        //var current = travelDataService.GetCurrent();
        //if (current is null)
        //{
        //    travelDataService.SetCurrent(new()
        //    {
        //        Destination = "Egypt",
        //        StartDate = new DateTime(2024, 09, 01),
        //        EndDate = new DateTime(2024, 09, 24),
        //        HasChildren = false,
        //        Activities = ["hiking", "diving"],
        //    });
        //}

        var allDestinations = await videoService.GetAllDestinations();
        allDestinations = [.. allDestinations.Select(destination => char.ToUpper(destination[0]) + destination.Substring(1).ToLower())
            .Distinct()
            .OrderBy(destination => destination)];

        return View(new UserInputViewModel() { AllDestinations = allDestinations });
    }

    [HttpPost]
    public IActionResult PostData(UserInputViewModel travelDataInput)
    {
        var current = travelDataService.GetCurrent();
        travelDataService.SetCurrent(new()
        {
            Destination = travelDataInput.Destination,
            StartDate = travelDataInput.StartDate,
            EndDate = travelDataInput.EndDate,
            HasChildren = (travelDataInput.ChildrenCount + travelDataInput.InfantCount) > 0,
            Activities = travelDataInput.Activities.Split(',').ToList()
        });

         return RedirectToAction("Index", "Video");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}