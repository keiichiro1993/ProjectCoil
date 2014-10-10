using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectCoilKai.Controllers
{
	public class HomeController : Controller
	{
		// GET: Home
		public ActionResult Index()
		{
			return View();
		}

		public ActionResult MarkerGenerator()
		{
			return View();
		}

		public ActionResult HowToPlay()
		{
			return View();
		}

		public ActionResult DownloadMarker()
		{
			return View();
		}
	}
}