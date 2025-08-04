using DiagnostiX.Domain.Entities;

namespace DiagnostiX.Application.UseCases.Home;

public class GetAppInfoUseCase : IGetAppInfoUseCase
{
    public Task<AppInfo> ExecuteAsync()
    {
        var appInfo = new AppInfo("Hello World");
        return Task.FromResult(appInfo);
    }
}
