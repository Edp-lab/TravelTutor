using Microsoft.Extensions.Caching.Memory;
using TravelTutor.Models;

namespace TravelTutor.Services;

public class TravelDataService(IMemoryCache cache, IHttpContextAccessor httpContextAccessor)
{
    private const string Key = "TravelData";

    public void Store(TravelData data, string sessionId)
    {
        cache.Set($"{Key}-{sessionId}", data);
    }

    public TravelData? Get(string sessionId)
    {
        return cache.Get<TravelData>($"{Key}-{sessionId}");
    }

    public TravelData? GetCurrent()
    {
        var sessionId = httpContextAccessor.HttpContext?.Session.Id;
        var data = sessionId != null ? Get(sessionId) : null;

        return data;
    }

    public void SetCurrent(TravelData data)
    {
        httpContextAccessor.HttpContext!.Session.Set("travelData", [0]);
        var sessionId = httpContextAccessor.HttpContext!.Session.Id;
        Store(data, sessionId);
    }
}