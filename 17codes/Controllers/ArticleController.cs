using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace _17codes.Controllers
{
    public class ArticleController : Controller
    {
        // GET: Article
        [HttpGet]
        public ActionResult GetArticles()
        {
            string[] arr = new string[] { "string[] arr =", "new string[]" };
            //此请求已被阻止，因为当用在 GET 请求中时，会将敏感信息透漏给第三方网站。若要允许 GET 请求，请将 JsonRequestBehavior 设置为 AllowGet。
            return Json(arr, JsonRequestBehavior.AllowGet);
        }
    }
}