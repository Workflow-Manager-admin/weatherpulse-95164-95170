import React from 'react';
import './MainContainer.css';

/**
 * MainContainer component for WeatherPulse application
 * Serves as the primary container for displaying weather information,
 * forecasts, and personalized insights.
 */
const MainContainer = () => {
  return (
    <div className="main-container">
      <section className="weather-section current-weather">
        <h2 className="section-title">Current Weather</h2>
        <div className="weather-card">
          <div className="weather-info">
            <div className="temperature">72°</div>
            <div className="weather-condition">Partly Cloudy</div>
            <div className="location">San Francisco, CA</div>
          </div>
          <div className="weather-icon">
            {/* Weather icon placeholder */}
            <div className="icon-placeholder">☀️</div>
          </div>
        </div>
        <div className="weather-details">
          <div className="detail-item">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">65%</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Wind</span>
            <span className="detail-value">12 mph</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Feels like</span>
            <span className="detail-value">75°</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">1012 hPa</span>
          </div>
        </div>
      </section>

      <section className="weather-section forecast">
        <h2 className="section-title">5-Day Forecast</h2>
        <div className="forecast-container">
          {/* Placeholder for forecast items */}
          {[1, 2, 3, 4, 5].map((day) => (
            <div key={day} className="forecast-item">
              <div className="forecast-day">Day {day}</div>
              <div className="forecast-icon">🌤️</div>
              <div className="forecast-temp">
                <span className="high">75°</span>
                <span className="low">62°</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="weather-section insights">
        <h2 className="section-title">Weather Insights</h2>
        <div className="insights-container">
          <div className="insight-card">
            <h3 className="insight-title">UV Index</h3>
            <div className="insight-value">Moderate</div>
            <p className="insight-description">
              UV levels are moderate today. Consider wearing sunscreen if you'll be outside for extended periods.
            </p>
          </div>
          <div className="insight-card">
            <h3 className="insight-title">Air Quality</h3>
            <div className="insight-value">Good</div>
            <p className="insight-description">
              Air quality is good in your area. Great day for outdoor activities!
            </p>
          </div>
          <div className="insight-card">
            <h3 className="insight-title">Precipitation</h3>
            <div className="insight-value">20%</div>
            <p className="insight-description">
              Low chance of precipitation today. You likely won't need an umbrella.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContainer;
