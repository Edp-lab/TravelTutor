using Microsoft.AspNetCore.Mvc;
using TravelTutor.Models;
using TravelTutor.Services;

namespace TravelTutor.Controllers;

public class VideoController(
    VideoService videoService,
    TravelDataService travelDataService) : Controller
{
    public async Task<IActionResult> Index()
    {
        VideoViewModel model = new();
        var travelData = travelDataService.GetCurrent();
        var videos = await videoService.GetVideos(travelData!);
        model.Videos.AddRange(videos);

        return View(model);
    }

    public IActionResult ToQuiz()
    {
        return RedirectToAction("Index", "Quiz");
    }
}