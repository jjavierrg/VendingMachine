﻿namespace VendingMachine.Core.Commands.Handlers
{
    using FluentValidation;
    using MediatR;
    using Microsoft.Extensions.Logging;
    using VendingMachine.Core.Models;
    using VendingMachine.Core.Services;

    public class InsertCoinsHandler : IRequestHandler<InsertCoinsCommand, UserCreditDto>
    {
        private readonly ILogger<InsertCoinsHandler> _logger;
        private readonly IWalletService _walletService;
        private readonly IValidator<InsertCoinsCommand> _validator;

        public InsertCoinsHandler(ILogger<InsertCoinsHandler> logger, IWalletService walletService, IValidator<InsertCoinsCommand> validator)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _walletService = walletService ?? throw new ArgumentNullException(nameof(walletService));
            _validator = validator ?? throw new ArgumentNullException(nameof(validator));
        }

        public async Task<UserCreditDto> Handle(InsertCoinsCommand request, CancellationToken cancellationToken)
        {
            var coinsAreValid = await AreAllCoinsValid(request);
            if (!coinsAreValid)
            {
                // TODO RETURN COINS
                return null;
            }

            var hasCoins = request?.Coins?.Any() ?? false;
            if (hasCoins)
            {
                var coins = request.Coins.Select(x => (x.CoinValue, x.Quantity));
                await _walletService.AddCoinsToCustomerWalletAsync(coins);
                _logger.LogInformation($"Added coins to wallet: { string.Join(", ", coins) }");
            }

            var credit = await _walletService.GetCustomerCreditAsync();
            _logger.LogInformation($"New User Credit: { credit }");

            return new UserCreditDto { Credit = credit};
        }

        private async Task<bool> AreAllCoinsValid(InsertCoinsCommand request)
        {
            var hasCoins = request?.Coins?.Any() ?? false;
            if (!hasCoins)
                return true;

            var result = await _validator.ValidateAsync(request, options => options.IncludeRuleSets("ValidCoins"));
            return result.IsValid;
        }
    }
}
