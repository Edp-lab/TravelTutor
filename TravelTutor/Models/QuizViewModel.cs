namespace TravelTutor.Models;

public class QuizViewModel
{
    public List<QuestionViewModel> Questions { get; set; }
    public bool IsSuccess { get; set; }
    public QuizSuccessViewModel SuccessModel { get; set; }
}