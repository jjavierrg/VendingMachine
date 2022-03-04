namespace VendingMachine.Core.Tests
{
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;
    using VendingMachine.Api.Controllers;
    using VendingMachine.Core.Querys;
    using VendingMachine.Core.Tests.Shared;
    using Xunit;

    public class Queries
    {
        private readonly ContextMoq _dataBaseMock;

        public Queries()
        {
            _dataBaseMock = new ContextMoq();
        }

        [Fact]
        public async Task GetAllProductsQuery()
        {
            // Arrange
            var query = new GetProductsQuery();
            var handler = new GetProductsQueryHandler(_dataBaseMock.SlotRepository, MapperMock.Mapper);

            // Act
            var existingProducts = await _dataBaseMock.SlotRepository.GetListAsync();
            var result = await handler.Handle(query, new CancellationToken());

            // Assert
            Assert.Equal(existingProducts.Count(), result.Count());
            Assert.True(result.All(x => existingProducts.Any(y => x.Id == y.Id)));
        }
    }
}