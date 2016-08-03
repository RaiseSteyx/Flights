using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BasicService.Models;
using Microsoft.AspNetCore.Cors;

namespace BasicService.Controllers
{
    [Route("api/[controller]")]
    public class FlightsController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Flight> Get()
        {
            var flights = new List<Flight>();
            flights.Add(new Flight() {id = 1, airline = "United", flightNumber = "207", startTime = DateTime.Now, endTime = DateTime.Now.AddHours(2), totalDuration = 2, price = 500, date = DateTime.Today, cities = new [] { "ORD", "LAS" }, approved = false });
            flights.Add(new Flight() {id = 2, airline = "Delta", flightNumber = "208", startTime = DateTime.Now, endTime = DateTime.Now.AddHours(2), totalDuration = 2, price = 300, date = DateTime.Today, cities = new [] { "SFA", "LAS" }, approved = false });

            return flights;
            // return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value" + id.ToString();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
