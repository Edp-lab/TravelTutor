namespace TravelTutor.Models;

public class VideoViewModel
{
    public List<Video> Videos { get; set; }
}

public class Video
{
    public string Id { get; set; }
    public string Title { get; set; }
}