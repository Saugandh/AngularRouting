using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AngularRouting.Models;

namespace AngularRouting.Controllers
{
    public class UsersController : ApiController
    {
        private EIS_TrainingEntities2 db = new EIS_TrainingEntities2();

        // GET: api/Users
        [HttpGet]
       [Route("api/Users")]
        public  IHttpActionResult GetUsers()
        {
            return Ok(db.UserDetails);
        }

        // GET: api/Users/5
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(long id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(long id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.User_id)
            {
                return BadRequest();
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Users
        [HttpPost]
        [Route("api/Users")]
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(UserReg userReg)
        {
            var logins = new Login()
            {
                Username = userReg.Username,
                Password = userReg.Password
            };

            db.Logins.Add(logins);
            db.SaveChanges();

            var user = new User()
            {
                Name = userReg.Name,
                Email = userReg.Email,
                Phone = userReg.Phone,
                Login_id = logins.Login_id

            };

            //
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Users.Add(user);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = user.User_id }, user);
        }

        // DELETE: api/Users/5
        [ResponseType(typeof(User))]

        [HttpDelete]
        [Route("api/Users/{id}")]
        public IHttpActionResult DeleteUser(long id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            db.Users.Remove(user);
            db.SaveChanges();

            return Ok(user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(long id)
        {
            return db.Users.Count(e => e.User_id == id) > 0;
        }

        [HttpPost]
        [Route("api/Users/fetchUser")]
        public IHttpActionResult fetchUser(UserReg user) {
            return Ok(db.UserDetails.Where(a => a.Username == user.Username && a.Password == user.Password));
        }
    }
}