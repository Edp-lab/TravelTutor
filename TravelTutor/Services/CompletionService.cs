using Microsoft.Extensions.Caching.Memory;
using TravelTutor.Models;

namespace TravelTutor.Services;

public class CompletionService(IMemoryCache cache, TravelDataService travelDataService)
{
    private const string Key = "Completed";

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
        cache.Set($"{Key}{model.SuccessModel.Code}", new { TravelData = travelData, QuizViewModel = model });
    }

    private async Task<string> GenerateCode(TravelData travelData, QuizViewModel model)
    {
        return Random.Shared.Next(100000, 999999).ToString();
    }
}