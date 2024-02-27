using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using fyp.Models;


namespace fyp.Controllers
{
    public class NurselController : ApiController
    {
        virtualClinicEntities db = new virtualClinicEntities();

        [HttpGet]
        public HttpResponseMessage Nurselogin(string username, string password)
        {

            var user = db.nurses.Where(u => u.username == username && u.password == password);
            if (user.Count() > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, "successfully logged in");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "user doesnt exist");
            }
        }
        [HttpPost]
        public HttpResponseMessage Addvitals(vital vit)
        {
            try
            {
                db.vitals.Add(vit);
                db.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, "current patient's vital added");
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
        [HttpGet]
        public HttpResponseMessage Fetchpatvit()
        {
            try
            {
               var fetchedpatient= (from p in db.patients join v in db.vitals on p.pid equals v.pid select new { p.fullname, p.dob, p.gender, v }).FirstOrDefault();
                return Request.CreateResponse(HttpStatusCode.OK, fetchedpatient);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}
