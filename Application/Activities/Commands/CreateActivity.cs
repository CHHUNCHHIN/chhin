using MediatR;
using Microsoft.EntityFrameworkCore;
using Domain;
using Persistence;

namespace Application.Activities.Commands;

public class CreateActivity
{
    public class Command : IRequest<string>
    {
        public required Activity Activity { get; set; }
    }

    // ✅ Use your actual DbContext name (example: ApplicationDbContext)
   // Ensure it uses AppDbContext, not DbContext
public class Handler(AppDbContext context) : IRequestHandler<Command, string>
{
    public async Task<string> Handle(Command request, CancellationToken cancellationToken)
    {
        context.Activities.Add(request.Activity);
        await context.SaveChangesAsync();
        return request.Activity.Id;
    }
}
}