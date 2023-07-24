using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Descontrolada.ViewModels
{
    public class CreateProductViewModel
    {
        [Required]
        public string ProductName { get; set; }
        public decimal ProductPrice { get; set; }
        public string ProductDescription { get; set; }
        public int ProductQtd { get; set; }
        public string ProductType { get; set; }
    }
}
