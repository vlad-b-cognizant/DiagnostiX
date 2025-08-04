using DiagnostiX.Domain.Entities;

namespace DiagnostiX.Application.UseCases.Home;

public interface IGetAppInfoUseCase
{
    Task<AppInfo> ExecuteAsync();
}
