using Microsoft.Extensions.DependencyInjection;

namespace DiagnostiX.Infrastructure.DependencyInjection;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        // Add infrastructure services here (repositories, external services, etc.)
        
        return services;
    }
}
