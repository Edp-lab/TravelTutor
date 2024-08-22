namespace TravelTutor.Models;

public class QuestionViewModel
{
    public QuestionModel Question { get; set; }
    public string AnswerInput { get; set; }
    public bool IsError { get; set; }
}