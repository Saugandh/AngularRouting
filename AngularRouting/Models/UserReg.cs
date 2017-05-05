using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularRouting.Models
{
    public class UserReg
    {
        public long User_id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public decimal Phone { get; set; }
        public long Login_id { get; set; }

        public string Username { get; set; }
        public string Password { get; set; }



        public virtual Login Login { get; set; }

    }
}