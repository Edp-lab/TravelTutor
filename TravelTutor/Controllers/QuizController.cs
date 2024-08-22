using Microsoft.AspNetCore.Mvc;
using TravelTutor.Models;
using TravelTutor.Services;

namespace TravelTutor.Controllers;

public class QuizController(
    QuestionsService questionsService,
    TravelDataService travelDataService,
    CompletionService completionService) : Controller
{
    public async Task<IActionResult> Index()
    {
        var travelData = travelDataService.GetCurrent();
        var questions = await questionsService.GetQuestions(travelData!);
        QuizViewModel model = new()
        {
            Questions = questions.Select(question => new QuestionViewModel { Question = question }).ToList()
        };
        return View(model);
    }

    [HttpPost]
    public async Task<IActionResult> SubmitResult(QuizViewModel model)
    {
        var travelData = travelDataService.GetCurrent();
        var allQuestions = await questionsService.GetQuestions(travelData!);
        foreach (var question in model.Questions)
        {
            var correctQuestion = allQuestions.First(q => q.Question == question.Question.Question);
            question.IsError = question.AnswerInput != correctQuestion.CorrectAnswer;
        }

        if (model.Questions.Any(question => question.IsError))
        {
            return View("Index", model);
        }

        model.IsSuccess = true;
        model.SuccessModel = new();
        var code = await completionService.GetCompletionCode(model);
        model.SuccessModel.Code = code;

        return View("Index", model);
    }

    [HttpPost]
    public IActionResult SubmitConsent(QuizViewModel model)
    {
        completionService.Complete(model);
        return RedirectToAction("Index", "Home");
    }
}