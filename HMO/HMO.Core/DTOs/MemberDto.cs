using HMO.Core.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMO.Core.DTOs
{
    public class MemberDto
    {
        public int Id { get; set; }
        public string Identity { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public int HouseNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Phone { get; set; }
        public string MobilePhone { get; set; }
        public List<Vaccination> Vaccinations { get; set; }
        public int NumOfVaccination { get; set; }
        public DateTime StartOfIll { get; set; }
        public DateTime EndOfIll { get; set; }
        public string Image { get; set; }
    }
}
