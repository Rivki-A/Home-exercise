namespace HMO.API.Models
{
   
    public class VaccinationPostModel
    {
        public string Producer { get; set; }
        public DateTime Date { get; set; }
        public int MemberId { get; set; }
        //public string MemberName { get; set; }
    }
}
