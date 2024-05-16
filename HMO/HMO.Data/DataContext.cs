using HMO.Core.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMO.Data
{
    public class DataContext:DbContext
    {
        public DbSet<Member> members { get; set; }
        public DbSet<Vaccination> vaccinations { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\ProjectModels;Database=HMO_DB");

            //optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=HMO_DB");
        }
    }
}
