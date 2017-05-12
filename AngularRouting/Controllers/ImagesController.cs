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
using System.Web;

namespace AngularRouting.Controllers
{
    public class ImagesController : ApiController
    {
        private EIS_IMAGE db = new EIS_IMAGE();

        // GET: api/Images
        public IQueryable<Image> GetImages()
        {
            return db.Images;
        }

        // GET: api/Images/5
        [ResponseType(typeof(Image))]
        public IHttpActionResult GetImage(long id)
        {
            Image image = db.Images.Find(id);
            if (image == null)
            {
                return NotFound();
            }

            return Ok(image);
        }

        // PUT: api/Images/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutImage(long id, Image image)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != image.Image_id)
            {
                return BadRequest();
            }

            db.Entry(image).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImageExists(id))
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

        // POST: api/Images
        [HttpPost]
        [Route("api/Images")]
        [ResponseType(typeof(Image))]
        public HttpResponseMessage PostImage(Image image)
        {
            HttpResponseMessage response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;
            if (httpRequest.Files.Count > 0)
            {
                foreach (string file in httpRequest.Files)
                {
                    var postedFile = httpRequest.Files[file];
                    var filePath = HttpContext.Current.Server.MapPath("../app/src/images/" + postedFile.FileName);
                    postedFile.SaveAs(filePath);

                    //db.Images.Add(image);
                }
            }
            return response;


            
            //db.SaveChanges();

           // return CreatedAtRoute("DefaultApi", new { id = image.Image_id }, image);
        }

        // DELETE: api/Images/5
        [ResponseType(typeof(Image))]
        public IHttpActionResult DeleteImage(long id)
        {
            Image image = db.Images.Find(id);
            if (image == null)
            {
                return NotFound();
            }

            db.Images.Remove(image);
            db.SaveChanges();

            return Ok(image);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ImageExists(long id)
        {
            return db.Images.Count(e => e.Image_id == id) > 0;
        }
    }
}