using MediatR;
using Microsoft.EntityFrameworkCore;
using Domain;

namespace Application.Activities.Commands;

public class CreateActivity
{
    public class Command : IRequest<string>
    {
        public required Activity Activity { get; set; }
    }

    // ✅ Use your actual DbContext name (example: ApplicationDbContext)
   public class Handler(DbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken ct)
        {
            context.Set<Activity>().Add(request.Activity);
            await context.SaveChangesAsync(ct);
            return request.Activity.Id;
        }
    }
}