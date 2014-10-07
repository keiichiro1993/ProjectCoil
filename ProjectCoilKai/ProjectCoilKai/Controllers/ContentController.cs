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
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/lattice.js")), "text/javascript");
				case 1024:
					return File(System.IO.File.ReadAllBytes(Server.MapPath("~/Assets/lattice.js")), "text/javascript");
			}
		}
	}
}