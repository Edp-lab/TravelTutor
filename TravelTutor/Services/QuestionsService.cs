using System.Text;
using System.Text.Json;
using Azure.Storage.Blobs;
using Microsoft.Extensions.Options;
using TravelTutor.Configuration;
using TravelTutor.Models;

namespace TravelTutor.Services;

public class QuestionsService(IOptions<VideoOptions> options, BlobServiceClient blobServiceClient)
{
    public async Task<List<QuestionModel>> GetQuestions(TravelData travelData)
    {
        List<QuestionModel> questions = [];
        var container = blobServiceClient.GetBlobContainerClient(options.Value.ContainerName);
        var blobs = container.GetBlobsAsync();
        await foreach (var blob in blobs)
        {
            if (blob.Name.StartsWith(travelData.Destination, StringComparison.InvariantCultureIgnoreCase) &&
                blob.Name.EndsWith(".json"))
            {
                var json = await container.GetBlobClient(blob.Name).DownloadContentAsync();
                var jsonText = Encoding.UTF8.GetString(json.Value.Content.ToArray());
                var questionList = JsonSerializer.Deserialize<List<QuestionModel>>(jsonText);
                questions.AddRange(questionList ?? []);
            }
        }

        return questions;
    }
}