# DiagnostiX

A full-stack application with a responsive web client and a .NET 8 Web API backend built using Clean Architecture.

## 🏗️ Project Structure

```
DiagnostiX/
├── client/                 # 🌐 React Native Web Application
│   ├── public/            # Static web assets
│   ├── App.tsx            # Main React component
│   ├── index.web.js       # Web entry point
│   ├── webpack.config.js  # Webpack configuration
│   └── package.json       # Client dependencies
├── server/                # 🔧 .NET 8 Web API (Clean Architecture)
│   ├── src/
│   │   ├── DiagnostiX.Api/           # Controllers & Web API
│   │   ├── DiagnostiX.Application/   # Business Logic & Use Cases
│   │   ├── DiagnostiX.Infrastructure/# External Services
│   │   └── DiagnostiX.Domain/        # Core Entities
│   └── DiagnostiX.Server.sln        # Solution file
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 18 or higher)
- **.NET 8 SDK**
- **npm** or **yarn**

### 1. Start the Backend API

```bash
cd server
dotnet restore
dotnet run --project src/DiagnostiX.Api
```

**API will be available at:**
- 🔒 **HTTPS**: `https://localhost:7214`
- 🌐 **HTTP**: `http://localhost:5090`
- 📚 **Swagger**: `https://localhost:7214/swagger`

### 2. Start the Frontend Client

```bash
cd client
npm install
npm start
```

**Web app will be available at:**
- 🌐 **Development**: `http://localhost:3000`

## 💻 Client - Responsive Web Application

### Features

- 📱 **Mobile-Responsive Design** - Works on desktop and mobile browsers
- ⚡ **Hot Reloading** - Instant updates during development
- 🎨 **Modern UI** - Clean, card-based interface
- 🌓 **Dark/Light Mode** - Automatic theme detection
- 🏗️ **TypeScript Support** - Type safety and better development experience

### Development

```bash
cd client

# Start development server
npm start
# or
npm run web

# Build for production
npm run build

# Run linting
npm run lint
```

### Technology Stack

- **React** - UI library
- **React Native Web** - Cross-platform components for web
- **TypeScript** - Type safety
- **Webpack** - Module bundler
- **Babel** - JavaScript transpiler

## 🏛️ Server - .NET 8 Clean Architecture API

### Architecture Overview

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

### API Endpoints

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/api/home` | Get application information | `{"appName": "Hello World"}` |

### Development

```bash
cd server

# Restore dependencies
dotnet restore

# Build solution
dotnet build

# Run API
dotnet run --project src/DiagnostiX.Api

# Run tests (when available)
dotnet test
```

### Technology Stack

- **.NET 8** - Runtime and framework
- **ASP.NET Core** - Web API framework
- **Clean Architecture** - Architectural pattern
- **Dependency Injection** - Built-in DI container
- **Swagger/OpenAPI** - API documentation

## 🔗 Integration

The client and server are configured to work together:

- **CORS**: API allows requests from `http://localhost:3000`
- **API Communication**: Client can call server endpoints
- **Development**: Both can run simultaneously for full-stack development

## 🧪 Testing the Integration

1. **Start both applications** (server and client)
2. **Test API directly**:
   ```bash
   curl -X GET "https://localhost:7214/api/home"
   ```
   Expected response: `{"appName": "Hello World"}`

3. **Access web app**: Open `http://localhost:3000` in your browser

## 📦 Production Deployment

### Client (Static Web App)

```bash
cd client
npm run build
# Deploy the web-build/ folder to any static hosting
```

**Deploy to:**
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Server (Web API)

```bash
cd server
dotnet publish src/DiagnostiX.Api -c Release -o ./publish
# Deploy to your hosting provider
```

**Deploy to:**
- Azure App Service
- AWS Elastic Beanstalk
- Docker containers
- IIS

## 🛠️ Development Workflow

1. **Feature Development**:
   - Backend: Add entities → use cases → controllers
   - Frontend: Create components → integrate with API

2. **Testing**:
   - API: Use Swagger UI for testing endpoints
   - Web: Use browser dev tools and hot reload

3. **Code Quality**:
   - Frontend: ESLint + Prettier
   - Backend: .NET analyzers

## 🎯 Next Steps

### Backend Enhancements
- Add authentication and authorization
- Implement database integration (Entity Framework Core)
- Add logging with Serilog
- Implement health checks
- Add unit and integration tests
- API versioning

### Frontend Enhancements
- Add routing with React Router
- Implement state management (Redux/Zustand)
- Add authentication UI
- Progressive Web App (PWA) features
- Component library integration

### DevOps
- CI/CD pipelines
- Docker containerization
- Infrastructure as Code
- Monitoring and observability

## 📄 License

This project is part of the DiagnostiX application suite.