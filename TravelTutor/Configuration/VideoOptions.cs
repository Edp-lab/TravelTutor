namespace TravelTutor.Configuration;

public class VideoOptions
{
    public const string SectionKey = "Videos";
    public string ConnectionString { get; set; }
    public string ContainerName { get; set; }
    public string TenantId { get; set; }
    
}