using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PCI_Analyzer.Models
{
    public class Street
    {
        public Street(int ID,String Name,String From,String To,int PCI)
        {
            this.ID = ID;
            this.Name = Name;
            this.From = From;
            this.To = To;
            this.PCI = PCI;
        }

        public int ID { get; set; }
        public String Name { get; set; }
        public String From { get; set; }
        public String To { get; set; }

        public int PCI { get; set; }
    }
}
