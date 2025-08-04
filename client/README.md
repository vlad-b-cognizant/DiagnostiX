# DiagnostiX Client - Web Application

This is a responsive web application built with React Native Web for the DiagnostiX project.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

## Getting Started

### Installation

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Development Server:
```bash
npm start
```
or
```bash
npm run web
```

This will start the development server at `http://localhost:3000` with hot reloading enabled.

#### Production Build:
```bash
npm run build
```
or
```bash
npm run web:build
```

## Available Scripts

- `npm start` - Start the development server (alias for `npm run web`)
- `npm run web` - Start the development server
- `npm run build` - Create production build
- `npm run web:build` - Create production build (alias)
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Project Structure

```
client/
├── public/           # Static assets and HTML template
│   └── index.html    # Main HTML template
├── web-build/        # Production build output (generated)
├── App.tsx           # Main app component
├── index.web.js      # Web entry point
├── package.json      # Dependencies and scripts
├── webpack.config.js # Webpack configuration
├── babel.config.js   # Babel configuration
├── tsconfig.json     # TypeScript configuration
└── README.md         # This file
```

## Features

- 📱 **Mobile-Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Hot Reloading** - Instant updates during development
- 🎨 **Modern UI** - Clean, card-based interface
- 🌓 **Dark/Light Mode** - Automatic theme detection
- 🏗️ **TypeScript Support** - Type safety and better development experience
- 🧪 **Testing Ready** - Jest configuration for unit testing
- 📦 **Production Ready** - Optimized webpack build configuration

## Development

The main application code is in `App.tsx`. This component is designed to be responsive and work well on both desktop and mobile browsers.

### Responsive Design

The application automatically adapts to different screen sizes:
- **Desktop**: Centered layout with maximum width
- **Mobile**: Full-width layout optimized for touch interaction
- **Dark/Light Mode**: Automatically detects system preference

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be generated in the `web-build/` directory, ready for deployment to any static hosting service.

## Deployment

You can deploy the contents of the `web-build/` folder to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Next Steps

- Add routing with React Router
- Implement state management (Redux, Zustand, etc.)
- Connect to backend APIs
- Add authentication
- Implement specific DiagnostiX features
- Add progressive web app (PWA) capabilities
