using System.ComponentModel.DataAnnotations;

namespace TravelTutor.Models
{
    public class UserInputViewModel
    {
        public List<string> AllDestinations { get; set; } = [];


        public string Destination { get; set; }
        [DataType(DataType.Date)]
        public DateTime StartDate { get; set; } = DateTime.Now;
        [DataType(DataType.Date)]
        public DateTime EndDate { get; set; } = DateTime.Now.AddDays(2);
        public string Activities { get; set; }
        public string Purpose { get; set; }
        public int AdultsCount { get; set; }
        public int InfantCount { get; set; }
        public int ChildrenCount { get; set; }
    }
}
