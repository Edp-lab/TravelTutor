using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using TravelTutor.Configuration;
using TravelTutor.Models;

namespace TravelTutor.Controllers;

public class VideoController(IOptions<VideoOptions> options, BlobServiceClient blobServiceClient) : Controller
{
    public async Task<IActionResult> Index()
    {
        VideoViewModel model = new(){Videos = []};
        var container = blobServiceClient.GetBlobContainerClient(options.Value.ContainerName);
        var blobs = container.GetBlobsAsync();
        await foreach(var blob in blobs)
        {
            if (blob.Name.EndsWith(".mp4"))
            {
                model.Videos.Add(new Video{Id = blob.Name, Title = blob.Name});
            }
        }
        
        return View(model);
    }
}