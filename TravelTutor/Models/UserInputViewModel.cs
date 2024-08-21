using System.ComponentModel.DataAnnotations;

namespace TravelTutor.Models
{
    public class UserInputViewModel
    {
        public string Destination { get; set; }
        [DataType(DataType.Date)]
        public DateTime StartDate { get; set; }
        [DataType(DataType.Date)]
        public DateTime EndDate { get; set; }
        public string Activities { get; set; }
        public string Purpose { get; set; }
    }
}
