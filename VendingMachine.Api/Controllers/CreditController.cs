﻿namespace VendingMachine.Api.Controllers
{
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.SignalR;
    using System.Net;
    using VendingMachine.Api.Hubs;
    using VendingMachine.Domain.Commands;
    using VendingMachine.Domain.Models;
    using VendingMachine.Domain.Querys;

    [ApiController]
    [Route("api/[controller]")]
    public class CreditController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CreditController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [ProducesResponseType(typeof(UserCreditDto), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetUserCredit()
        {
            var query = new GetCreditQuery();
            var response = await _mediator.Send(query);
            return Ok(response);
        }

        [HttpGet("coins")]
        [ProducesResponseType(typeof(IEnumerable<CoinWithQuantityDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetCoins()
        {
            var query = new GetAvailableCoinsQuery();
            var response = await _mediator.Send(query);
            return Ok(response);
        }

        [HttpPost]
        [ProducesResponseType(typeof(UserCreditDto), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> AddCredit([FromBody] CoinWithQuantityDto[] coins)
        {
            var command = new InsertCoinsCommand(coins);
            var response = await _mediator.Send(command);
            return Ok(response);
        }

        [HttpPost("return")]
        [ProducesResponseType(typeof(IEnumerable<CoinWithQuantityDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> ReturnUserCredit()
        {
            var command = new ReturnUserCoinsCommand();
            var response = await _mediator.Send(command);
            return Ok(response);
        }
    }
}
