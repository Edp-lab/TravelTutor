using Azure;
using Azure.Data.Tables;

namespace TravelTutor.Models;

public class TableEntity : ITableEntity
{
    public string PartitionKey { get; set; }
    public string RowKey { get; set; }
    public DateTimeOffset? Timestamp { get; set; }
    public ETag ETag { get; set; }

    public string DataJson { get; set; }
}