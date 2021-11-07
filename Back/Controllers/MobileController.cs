using System;
using System.Collections;
using System.IO;
using System.Linq;
using Back.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
namespace Back.Controllers
{
    // [EnableCors(origins: "*", headers: "accept,content-type,origin,x-my-header", methods: "*")]

    [ApiController]

    public class MobileController : Controller
    {
        private readonly ILogger<MobileController> _logger;
        private readonly IWebHostEnvironment _env;

        private readonly lavenderContext lavenderContext;

        public MobileController(ILogger<MobileController> logger, IWebHostEnvironment env, lavenderContext lavenderContext)
        {
            _logger = logger;
            _env = env;
            this.lavenderContext = lavenderContext;
        }

        [Route("mobile")]
        public IActionResult GetAllMobile()
        {
            Console.WriteLine("From: Mobile");
            var sanpham = lavenderContext.Sanpham.Where(s => s.Maloai.Contains("1")).ToList();
            return StatusCode(200, sanpham);
        }

    }
}


