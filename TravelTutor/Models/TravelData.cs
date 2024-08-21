namespace TravelTutor.Models;

public class TravelData
{
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public bool HasChildren { get; set; }
    public List<string> Activities { get; set; } = [];
    public string Destination { get; set; } = null!;

    public string Season => StartDate.Month switch
    {
        12 or 1 or 2 => "winter",
        3 or 4 or 5 => "spring",
        6 or 7 or 8 => "summer",
        9 or 10 or 11 => "fall",
        _ => "unknown"
    };
}