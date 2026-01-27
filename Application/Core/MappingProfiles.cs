using System;
using AutoMapper;
using Domain;

namespace Application.Core;

public class MappingProfiles : Profile
{
    MappingProfiles()
    {
        CreateMap<Activity, Activity>();
    }
}
