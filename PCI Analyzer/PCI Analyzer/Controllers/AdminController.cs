using Microsoft.AspNetCore.Mvc;
using PCI_Analyzer.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace PCI_Analyzer.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
           
            return View();
        }

        public IActionResult PCITable()
        {
            List<Street> streets = new List<Street>();

            using (var reader = new StreamReader(@"./Data/PCI_DATA.csv"))
            {
                reader.ReadLine();
                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();
                    var values = line.Split(',');

                    if (values.Length == 5)
                    {
                        Street street = new Street(int.Parse(values[0]), values[1], values[2], values[3], int.Parse(values[4]));
                        streets.Add(street);
                    }

                }
            }
            streets.Sort((p, q) => p.PCI.CompareTo(q.PCI));
            return View(streets);
        }
    }
}
