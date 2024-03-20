using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Jobs.Any()) return;
            
            var jobs = new List<Job>
            {
                new Job
                {
                    Title = "Past Job 1",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Job 2 months ago",
                    Category = "drinks",
                    City = "London",
                    Country = "UK",
                    Company = "Pub",
                },
                new Job
                {
                    Title = "Past Job 2",
                    Date = DateTime.UtcNow.AddMonths(-1),
                    Description = "Job 1 month ago",
                    Category = "culture",
                    City = "Paris",
                    Country = "France",
                    Company = "Louvre",
                },
                new Job
                {
                    Title = "Future Job 1",
                    Date = DateTime.UtcNow.AddMonths(1),
                    Description = "Job 1 month in future",
                    Category = "culture",
                    City = "London",
                    Country = "UK",
                    Company = "British Museum",
                },
                new Job
                {
                    Title = "Future Job 2",
                    Date = DateTime.UtcNow.AddMonths(2),
                    Description = "Job 2 months in future",
                    Category = "music",
                    City = "London",
                    Country = "UK",
                    Company = "O2 Arena",
                },
                new Job
                {
                    Title = "Future Job 3",
                    Date = DateTime.UtcNow.AddMonths(3),
                    Description = "Job 3 months in future",
                    Category = "drinks",
                    City = "London",
                    Country = "UK",
                    Company = "Pub",
                },
                new Job
                {
                    Title = "Future Job 4",
                    Date = DateTime.UtcNow.AddMonths(4),
                    Description = "Job 4 months in future",
                    Category = "drinks",
                    City = "London",
                    Country = "UK",
                    Company = "Pub",
                },
                new Job
                {
                    Title = "Future Job 5",
                    Date = DateTime.UtcNow.AddMonths(5),
                    Description = "Job 5 months in future",
                    Category = "drinks",
                    City = "London",
                    Country = "UK",
                    Company = "Pub",
                },
                new Job
                {
                    Title = "Future Job 6",
                    Date = DateTime.UtcNow.AddMonths(6),
                    Description = "Job 6 months in future",
                    Category = "music",
                    City = "London",
                    Country = "UK",
                    Company = "Pub",

                },
                new Job
                {
                    Title = "Future Job 7",
                    Date = DateTime.UtcNow.AddMonths(7),
                    Description = "Job 2 months ago",
                    Category = "travel",
                    City = "London",
                    Country = "UK",
                    Company = "Pub",
                },
                new Job
                {
                    Title = "Future Job 8",
                    Date = DateTime.UtcNow.AddMonths(8),
                    Description = "Job 8 months in future",
                    Category = "film",
                    City = "London",
                    Country = "UK",
                    Company = "Pub",
                }
            };

            await context.Jobs.AddRangeAsync(jobs);
            await context.SaveChangesAsync();
        }
    }
}