using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebSimpleAuth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Authorize : ControllerBase
    {
        // GET: api/<Authorize>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            System.Diagnostics.Debug.WriteLine("nice");
            Console.Write("my aop");
            return new string[] { "value1", "value2" };
        }

        // GET api/<Authorize>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<Authorize>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<Authorize>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<Authorize>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
