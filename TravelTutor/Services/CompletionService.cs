using System.Text.Json;
using Azure.Data.Tables;
using Microsoft.Extensions.Caching.Memory;
using TravelTutor.Models;
using TableEntity = TravelTutor.Models.TableEntity;

namespace TravelTutor.Services;

public class CompletionService(
    IMemoryCache cache,
    TravelDataService travelDataService,
    TableServiceClient tableServiceClient)
{
    private const string Key = "Completed";
    private const string TableName = "completion";

    public async Task<string> GetCompletionCode(QuizViewModel model)
    {
        var travelData = travelDataService.GetCurrent();
        var code = await GenerateCode(travelData!, model);
        model.SuccessModel.Code = code;

        cache.Set($"{Key}{code}", new { TravelData = travelData, QuizViewModel = model });

        return code;
    }

    public void Complete(QuizViewModel model)
    {
        var travelData = travelDataService.GetCurrent();
        var client = tableServiceClient.GetTableClient(TableName);
        var data = new
        {
            ConsentData = model.SuccessModel,
            Questions = model.Questions,
            TravelData = travelData!,
        };
        client.AddEntity(new TableEntity
        {
            RowKey = model.SuccessModel.Code,
            PartitionKey = "user_completion_data",
            Timestamp = DateTimeOffset.Now,
            DataJson = JsonSerializer.Serialize(data),
        });
    }

    private async Task<string> GenerateCode(TravelData travelData, QuizViewModel model)
    {
        return Random.Shared.Next(100000, 999999).ToString();
    }
}