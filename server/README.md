# DiagnostiX Server - .NET 8 Web API

This is a .NET 8 Web API project built using Clean Architecture principles for the DiagnostiX application.

## Architecture Overview

The solution follows Clean Architecture with the following layers:

```
┌─────────────────────────────────────────────────────────────┐
│                    DiagnostiX.Api                           │
│                (Controllers, Program.cs)                    │
│                   Presentation Layer                        │
└─────────────────────┬───────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────┐
│              DiagnostiX.Infrastructure                      │
│          (External Services, Repositories)                  │
│                 Infrastructure Layer                        │
└─────────────────────┬───────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────┐
│              DiagnostiX.Application                         │
│              (Use Cases, Interfaces)                        │
│                 Application Layer                           │
└─────────────────────┬───────────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────────┐
│               DiagnostiX.Domain                             │
│                  (Entities)                                 │
│                   Domain Layer                              │
└─────────────────────────────────────────────────────────────┘
```

## Project Structure

```
server/
├── src/
│   ├── DiagnostiX.Api/              # Web API Controllers & Configuration
│   │   ├── Controllers/
│   │   │   └── HomeController.cs    # HomeController with AppInfo endpoint
│   │   └── Program.cs               # Application entry point & DI setup
│   ├── DiagnostiX.Application/      # Business Logic & Use Cases
│   │   ├── UseCases/
│   │   │   └── Home/
│   │   │       ├── IGetAppInfoUseCase.cs
│   │   │       └── GetAppInfoUseCase.cs
│   │   └── DependencyInjection/
│   ├── DiagnostiX.Infrastructure/   # External Services & Repositories
│   │   └── DependencyInjection/
│   └── DiagnostiX.Domain/           # Business Entities
│       └── Entities/
│           └── AppInfo.cs           # AppInfo entity with AppName property
├── tests/                           # Test projects (to be added)
└── DiagnostiX.Server.sln           # Solution file
```

## Features

- 🏗️ **Clean Architecture**: Separation of concerns with proper dependency direction
- 🎯 **Single Responsibility**: Each layer has a clear, focused responsibility
- 🔌 **Dependency Injection**: Configured with built-in .NET DI container
- 📊 **Swagger Integration**: API documentation and testing interface
- 🌐 **CORS Enabled**: Configured for web client at `http://localhost:3000`
- 🎨 **RESTful API**: Following REST conventions

## API Endpoints

### Home Controller

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/api/home` | Get application information | `{"appName": "Hello World"}` |

## Getting Started

### Prerequisites

- .NET 8 SDK
- Visual Studio 2022 or VS Code

### Running the API

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Restore dependencies:**
   ```bash
   dotnet restore
   ```

3. **Build the solution:**
   ```bash
   dotnet build
   ```

4. **Run the API:**
   ```bash
   dotnet run --project src/DiagnostiX.Api
   ```

5. **Access the API:**
   - API: `https://localhost:7214` or `http://localhost:5090`
   - Swagger UI: `https://localhost:7214/swagger`
   - Home endpoint: `https://localhost:7214/api/home`

## Development

### Adding New Features

1. **Domain**: Add entities to `DiagnostiX.Domain/Entities/`
2. **Application**: Create use cases in `DiagnostiX.Application/UseCases/`
3. **Infrastructure**: Add external services in `DiagnostiX.Infrastructure/`
4. **API**: Create controllers in `DiagnostiX.Api/Controllers/`

### Dependency Rules

- **Domain**: No dependencies (center of architecture)
- **Application**: Only depends on Domain
- **Infrastructure**: Depends on Application (and Domain through Application)
- **API**: Depends on Application and Infrastructure

## Testing the HomeController

You can test the HomeController endpoint using:

**cURL:**
```bash
curl -X GET "https://localhost:7214/api/home" -H "accept: application/json"
```

**Expected Response:**
```json
{
  "appName": "Hello World"
}
```

## Integration with Client

The API is configured with CORS to allow requests from the React web client running on `http://localhost:3000`. This enables seamless communication between the frontend and backend.

## Next Steps

- Add authentication and authorization
- Implement database integration with Entity Framework Core
- Add logging with Serilog
- Implement health checks
- Add unit and integration tests
- Add API versioning
- Implement caching strategies
