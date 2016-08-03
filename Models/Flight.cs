using System;

namespace BasicService.Models
{
    public class Flight
    {
        public int id {get; set;}
        public string airline { get; set; }
        public string flightNumber { get; set; }
        public DateTime startTime { get; set; }
        public DateTime endTime { get; set; }
        public int totalDuration { get; set; }
        public decimal price { get; set; }
        public DateTime date { get; set; }
        public string[] cities { get; set; }
        public bool approved { get; set; }
    }
}