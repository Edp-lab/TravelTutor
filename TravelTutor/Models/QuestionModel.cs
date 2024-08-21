using System.Text.Json.Serialization;

namespace TravelTutor.Models;

public class QuestionModel
{
    [JsonPropertyName("question")]
    public string Question { get; set; }
    
    [JsonPropertyName("correct_answer")]
    public string CorrectAnswer { get; set; }
    
    [JsonPropertyName("options")]
    public List<string> Options { get; set; }
}