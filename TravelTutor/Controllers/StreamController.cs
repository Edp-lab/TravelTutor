using System.Web;
using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using TravelTutor.Configuration;

namespace TravelTutor.Controllers;

public class StreamController(IOptions<VideoOptions> videoOptions, BlobServiceClient blobServiceClient) : Controller
{
    public async Task<IResult> Video()
    {
        var video = Request.Query["id"];
        var container = blobServiceClient.GetBlobContainerClient(videoOptions.Value.ContainerName);
        
        var blob = container.GetBlobClient(HttpUtility.UrlDecode(video));
        // https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.results.stream?view=aspnetcore-7.0
        var stream = await blob.OpenReadAsync(); // don't use a "using" statement here as the stream must live on
        return Results.Stream(stream, "video/mp4", enableRangeProcessing: true);
    }
}