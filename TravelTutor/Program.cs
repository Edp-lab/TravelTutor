using Azure.Storage.Blobs;
using Microsoft.Extensions.Options;
using TravelTutor.Configuration;
using TravelTutor.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddSingleton<BlobServiceClient>((serviceProvider) => {
    var videOptions = serviceProvider.GetRequiredService<IOptions<VideoOptions>>().Value;
    var blobServiceClient = new BlobServiceClient(videOptions.ConnectionString);
    return blobServiceClient;
});
builder.Services.Configure<VideoOptions>(
    builder.Configuration.GetSection(VideoOptions.SectionKey));
builder.Services
    .AddMemoryCache()
    .AddHttpContextAccessor()
    .AddSingleton<VideoService>()
    .AddSingleton<TravelDataService>()
    .AddSession();
var app = builder.Build();
app.UseSession();
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();