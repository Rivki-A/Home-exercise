using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMO.Core.Entity
{
 
    public class Vaccination
    {
        public int Id { get; set; }
        public string Producer { get; set; }
        public DateTime Date { get; set; }
        public int MemberId { get; set; }
        //public string MemberName { get; set; }
    }
}
