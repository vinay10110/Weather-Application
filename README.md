# Weather Application

## What is the Project About?
A modern, user-friendly weather application built with React that provides real-time weather information for cities worldwide. The application offers both current weather conditions and a 7-day forecast, making it easy for users to plan ahead.

## What Does it Do?
- Provides real-time weather data for any major city
- Displays detailed current weather information including:
  - Temperature in Celsius
  - Weather description
  - Visibility conditions
  - Wind speed
  - Humidity levels
  - Atmospheric pressure
- Features a 7-day weather forecast with:
  - Daily temperature ranges
  - Weather conditions
  - Detailed meteorological data
- Offers city search functionality with autocomplete
- Responsive design for both desktop and mobile use

## How Does it Help in Real-Life?
- **Travel Planning**: Helps travelers prepare for weather conditions at their destination
- **Outdoor Activities**: Assists in planning outdoor events and activities
- **Daily Planning**: Enables better preparation for daily commutes and activities
- **Weather Monitoring**: Keeps users informed about changing weather conditions
- **Safety Awareness**: Provides advance warning of potential adverse weather conditions

## Tech Stack
### Frontend
- React.js (v18.2.0)
- CSS3
- HTML5
- Modern JavaScript (ES6+)

### APIs
1. OpenWeather API
   - Provides current weather data
   - Delivers 7-day weather forecasts
   - Weather condition icons
   - Units in metric system

2. GeoDB Cities API
   - City search functionality
   - Population-based filtering
   - Geographic coordinates
   - City information worldwide

### Frameworks and Libraries
- React (^18.2.0)
- React DOM (^18.2.0)
- React Accessible Accordion (^5.0.0) - For expandable forecast details
- React Select (^5.8.0) - For enhanced city selection
- React Select Async Paginate (^0.7.3) - For paginated city search
- React Testing Library - For component testing
- Jest - For unit testing

## Getting Started

### Prerequisites
- Node.js 20.11.0 or higher
- npm (Node Package Manager)

### Installation
1. Clone the repository
2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

### Running the Application
Start the development server:
\`\`\`bash
npm start
\`\`\`
The application will be available at http://localhost:3000

### Building for Production
Create a production build:
\`\`\`bash
npm run build
\`\`\`

## Docker Support
The application can be containerized using Docker:
\`\`\`bash
docker build -t weather-app .
docker run -p 3000:3000 weather-app
\`\`\`

## Testing
Run the test suite:
\`\`\`bash
npm test
\`\`\`
