namespace VendingMachine.Domain.Tests
{
    using FluentValidation;
    using MediatR;
    using Moq;
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;
    using VendingMachine.Domain.Commands;
    using VendingMachine.Domain.Commands.Handlers;
    using VendingMachine.Domain.Commands.Validators;
    using VendingMachine.Domain.Models;
    using VendingMachine.Domain.Services;
    using VendingMachine.Domain.Tests.Shared;
    using VendingMachine.Entities;
    using Xunit;

    public class InsertCoinsCommandTest
    {
        private readonly ContextMoq _dataBaseMock;
        private readonly IValidator<InsertCoinsCommand> _validator;
        private readonly WalletService _walletService;

        public InsertCoinsCommandTest()
        {
            _dataBaseMock = new ContextMoq();
            _validator = new InsertCoinsCommandValidator(_dataBaseMock.CoinRepository);
            _walletService = new WalletService(_dataBaseMock.CustomerWalletCoinRepository, _dataBaseMock.MachineWalletCoinRepository, _dataBaseMock.CoinRepository, MapperMock.Mapper);
        }

        [Fact]
        public async Task ShouldNotAddInvalidCoinsToWallet()
        {
            // Arrange
            int[] coins = { 10, 10, 10, 22, 20, 50, 100 };
            var walletCoins = coins.Select(x => new CoinWithQuantityDto { CoinValue = x, Quantity = 1 }).ToArray();
            var command = new InsertCoinsCommand(walletCoins);

            // Act
            var valid = await _validator.ValidateAsync(command, options => options.IncludeRuleSets("ValidCoins"));

            // Assert
            Assert.False(valid.IsValid);
        }

        [Fact]
        public async Task ShouldReturnCoinsCommand()
        {
            // Arrange
            var command = new ReturnUserCoinsCommand();
            var logger = new MockupLogger<InsertCoinsHandler>();
            var mediator = new Mock<IMediator>();
            var handler = new ReturnUserCoinsHandler(logger, _walletService, mediator.Object);
            var customerCoins = new CustomerWalletCoin[] {
                new CustomerWalletCoin { CoinId = 1, NumberOfCoins = 2 },
                new CustomerWalletCoin { CoinId = 2, NumberOfCoins = 3 },
                new CustomerWalletCoin { CoinId = 3, NumberOfCoins = 4 },
                new CustomerWalletCoin { CoinId = 4, NumberOfCoins = 9 },
            };

            // Act
            _dataBaseMock.CustomerWalletCoinRepository.AddRange(customerCoins);
            var coinsFirstTime = await handler.Handle(command, new CancellationToken());
            var coinsSecondTime = await handler.Handle(command, new CancellationToken());

            // Assert
            Assert.NotEmpty(coinsFirstTime);
            Assert.Empty(coinsSecondTime);
            Assert.Equal(customerCoins.Sum(x => x.NumberOfCoins), coinsFirstTime.Sum(x => x.Quantity));
        }
    }
}