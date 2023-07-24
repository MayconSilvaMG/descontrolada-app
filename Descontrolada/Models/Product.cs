using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Descontrolada.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
        public string ProductDescription { get; set; }
        public int ProductQtd { get; set; }
        public string ProductType { get; set; }
        public DateTime DateRegister { get; set; } = DateTime.Now;
    }
}
