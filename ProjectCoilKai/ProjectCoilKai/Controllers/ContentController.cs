﻿using System;
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

		public ActionResult GetContentsJson()
		{
			return new JsonResult();
		}
    }
}