using DiagnostiX.Application.UseCases.Home;
using Microsoft.AspNetCore.Mvc;

namespace DiagnostiX.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeController : ControllerBase
{
    private readonly IGetAppInfoUseCase _getAppInfoUseCase;

    public HomeController(IGetAppInfoUseCase getAppInfoUseCase)
    {
        _getAppInfoUseCase = getAppInfoUseCase;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var appInfo = await _getAppInfoUseCase.ExecuteAsync();
        return Ok(appInfo);
    }
}
