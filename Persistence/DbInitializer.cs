using Domain; // Important: Point to your Activity model
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class DbInitializer
{
    public static async Task SeedData(AppDbContext context)
    {
       
        if ( context.Activities.Any()) return;

        
        var activities = new List<Activity>
        {
            new ()
    {
        Title = "Past Activity 2",
        Date = DateTime.UtcNow.AddMonths(-1),
        Description = "Activity 1 month ago",
        Category = "culture",
        City = "London",
        Venue = "Natural History Museum",
        Latitude = 51.4967,
        Longitude = -0.1764  
    },
    new ()
    {
        Title = "Future Activity 2",
        Date = DateTime.UtcNow.AddMonths(1),
        Description = "Activity 1 month in future",
        Category = "music",
        City = "London",
        Venue = "O2 Arena",
        Latitude = 51.5030,
        Longitude = 0.0032  
    },
    new ()
    {
        Title = "Future Activity 3",
        Date = DateTime.UtcNow.AddMonths(3),
        Description = "Activity 3 months in future",
        Category = "drinks",
        City = "London",
        Venue = "Another pub",
        Latitude = 51.5113,
        Longitude = -0.1285  
    },
    new ()
    {
        Title = "Future Activity 4",
        Date = DateTime.UtcNow.AddMonths(4),
        Description = "Activity 4 months in future",
        Category = "culture",
        City = "London",
        Venue = "British Museum",
        Latitude = 51.5194,
        Longitude = -0.1270  
    },
    new ()
    {
        Title = "Future Activity 5",
        Date = DateTime.UtcNow.AddMonths(5),
        Description = "Activity 5 months in future",
        Category = "drinks",
        City = "London",
        Venue = "Punch and Judy",
        Latitude = 51.5117,
        Longitude = -0.1223  
    },
    new ()
    {
        Title = "Future Activity 6",
        Date = DateTime.UtcNow.AddMonths(6),
        Description = "Activity 6 months in future",
        Category = "music",
        City = "London",
        Venue = "Roundhouse Camden",
        Latitude = 51.5430,
        Longitude = -0.1494  
    },
    new ()
    {
        Title = "Future Activity 7",
        Date = DateTime.UtcNow.AddMonths(7),
        Description = "Activity 7 months in future",
        Category = "travel",
        City = "Berlin",
        Venue = "Brandenburg Gate",
        Latitude = 52.5163,
        Longitude = 13.3777  
    },
    new ()
    {
        Title = "Future Activity 8",
        Date = DateTime.UtcNow.AddMonths(8),
        Description = "Activity 8 months in future",
        Category = "film",
        City = "London",
        Venue = "Cinema",
        Latitude = 51.5072,
        Longitude = -0.1276  
        }
        };

        context.Activities.AddRange(activities);
        await context.SaveChangesAsync();
    }

}