using System.Collections.Generic;
using Application.Jobs;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class JobsController : BaseApiController
    {
        

        [HttpGet] //api/Jobs
        public async Task<ActionResult<List<Job>>> GetJobs()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] //api/Jobs/id
        public async Task<ActionResult<Job>> GetJob(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost] //api/Jobs
        public async Task<IActionResult> CreateJob(Job job)
        {
            await Mediator.Send(new Create.Command {Job = job});
            return Ok();
        }

        [HttpPut("{id}")] //api/Jobs/id
        public async Task<IActionResult> EditJob(Guid id, Job job)
        {
            job.Id = id;
            await Mediator.Send(new Edit.Command {Job = job});
            return NoContent();
        }

        [HttpDelete("{id}")] //api/Jobs/id
        public async Task<IActionResult> DeleteJob(Guid id)
        {
            await Mediator.Send(new Delete.Command {Id = id});
            return NoContent();
        }
    }
}