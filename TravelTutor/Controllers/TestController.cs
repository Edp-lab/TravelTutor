using Microsoft.AspNetCore.Mvc;
using TravelTutor.Models;
using TravelTutor.Services;

namespace TravelTutor.Controllers;

public class TestController(QuestionsService questionsService, TravelDataService travelDataService) : Controller
{
    public async Task<IActionResult> Index()
    {
        var travelData = travelDataService.GetCurrent();
        var questions = await questionsService.GetQuestions(travelData!);
        TestViewModel model = new()
        {
            Input = "fffff",
            Questions = questions.Select(question => new QuestionViewModel { Question = question }).ToList()
        };
        return View(model);
    }

    [HttpPost]
    public IActionResult SubmitResult(TestViewModel model)
    {
        return View(model);
    }
}