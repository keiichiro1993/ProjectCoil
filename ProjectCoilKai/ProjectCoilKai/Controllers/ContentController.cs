using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectCoilKai.Controllers
{
	public class ContentController : Controller
	{
		// GET: Content
		public ActionResult Content()
		{
			return View();
		}

		public FileContentResult GetContentsJson(int markerId)
		{
			switch (markerId)
			{
				default:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/ban.js")), "text/javascript"); ;
				case 1:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/shape_key.js")), "text/javascript");
				case 2:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/colorful.js")), "text/javascript");
				case 3:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/plate.js")), "text/javascript");
				case 4:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/lattice_1.js")), "text/javascript");
				case 5:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/snake.js")), "text/javascript");
				case 6:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/rotate.js")), "text/javascript");
				case 11:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/lattice_2.js")), "text/javascript");
				case 12:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/appear.js")), "text/javascript");
				case 13:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/block.js")), "text/javascript");
				case 14:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/circle.js")), "text/javascript");
				case 15:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/gear.js")), "text/javascript");
				case 16:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/sacchi.js")), "text/javascript");
			}
		}
	}
}