namespace DiagnostiX.Domain.Entities;

public class AppInfo
{
    public string AppName { get; set; } = string.Empty;
    
    public AppInfo()
    {
    }
    
    public AppInfo(string appName)
    {
        AppName = appName;
    }
}
