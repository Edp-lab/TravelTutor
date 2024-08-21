using Azure.Storage.Blobs;
using Microsoft.Extensions.Options;
using TravelTutor.Configuration;
using TravelTutor.Models;

namespace TravelTutor.Services;

public class VideoService(IOptions<VideoOptions> options, BlobServiceClient blobServiceClient)
{
    public async Task<List<string>> GetAllDestinations()
    {
        List<string> destinations = [];
        var container = blobServiceClient.GetBlobContainerClient(options.Value.ContainerName);
        var blobs = container.GetBlobsAsync();
        await foreach (var blob in blobs)
        {
            var parts = blob.Name.Split('/');
            var destination = parts[0];
            destinations.Add(destination);
        }

        return destinations;
    }

    public async Task<List<Video>> GetVideos(TravelData travelData)
    {
        List<Video> videos = [];
        var container = blobServiceClient.GetBlobContainerClient(options.Value.ContainerName);
        var blobs = container.GetBlobsAsync();
        await foreach (var blob in blobs)
        {
            if (blob.Name.StartsWith(travelData.Destination, StringComparison.InvariantCultureIgnoreCase) &&
                blob.Name.Contains("general") &&
                blob.Name.EndsWith(".mp4"))
            {
                videos.Add(new Video
                {
                    Id = blob.Name,
                    Title = travelData.Destination
                });
            }

            if (travelData.HasChildren &&
                blob.Name.StartsWith(travelData.Destination, StringComparison.InvariantCultureIgnoreCase) &&
                blob.Name.Contains("children") &&
                blob.Name.EndsWith(".mp4"))
            {
                videos.Add(new Video
                {
                    Id = blob.Name,
                    Title = $"{travelData.Destination} with children"
                });
            }

            if (blob.Name.StartsWith(travelData.Destination, StringComparison.InvariantCultureIgnoreCase) &&
                blob.Name.Contains("season") &&
                blob.Name.EndsWith(".mp4"))
            {
                videos.Add(new Video
                {
                    Id = blob.Name,
                    Title = $"{travelData.Destination} with season {travelData.Season}"
                });
            }

            foreach (var activity in travelData.Activities)
            {
                if (blob.Name.StartsWith(travelData.Destination, StringComparison.InvariantCultureIgnoreCase) &&
                    blob.Name.Contains($"activity-{activity.ToLower()}") &&
                    blob.Name.EndsWith(".mp4"))
                {
                    videos.Add(new Video
                    {
                        Id = blob.Name,
                        Title = $"{travelData.Destination} with activity {activity}"
                    });
                }
            }
        }

        return videos;
    }
}