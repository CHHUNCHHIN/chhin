using System;
using Application.Activities.Commands;
using Application.Activities.Queries;
using Application.Activities.Queries.GetActivityDetail;
using Domain; // Assuming your Activity entity is in this namespace
using MediatR;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        
        return await Mediator.Send(new GetActivityList.Query());
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetail(string id)
    {
        return await Mediator.Send(new GetActivityDetail.Query { Id = id });
    }
    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(Activity activity)
    {
       return await Mediator.Send(new CreateActivity.Command { Activity = activity });
    }
}