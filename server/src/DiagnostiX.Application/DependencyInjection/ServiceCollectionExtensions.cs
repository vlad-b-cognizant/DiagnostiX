using DiagnostiX.Application.UseCases.Home;
using Microsoft.Extensions.DependencyInjection;

namespace DiagnostiX.Application.DependencyInjection;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<IGetAppInfoUseCase, GetAppInfoUseCase>();
        
        return services;
    }
}
