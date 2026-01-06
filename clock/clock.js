/**
 * Script Purpose: Multi-timezone clock component for Notion embeds
 * Version: 1.0.0
 */

console.log("Clock Embed v1.0.0");

//
//------- Utility Functions -------//
//

// Parse URL parameters to get cities list
const getCitiesFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const citiesParam = params.get('cities');
  
  if (citiesParam) {
    return citiesParam.split(',').map(city => city.trim()).filter(Boolean);
  }
  
  // Default to London if no cities provided
  return ['Europe/London'];
};

// Get city name from timezone identifier
const getCityName = (timezone) => {
  const parts = timezone.split('/');
  return parts[parts.length - 1].replace(/_/g, ' ');
};

// Get timezone abbreviation
const getTimezoneAbbr = (date, timezone) => {
  try {
    const formatter = new Intl.DateTimeFormat('en', {
      timeZone: timezone,
      timeZoneName: 'short'
    });
    const parts = formatter.formatToParts(date);
    const tzPart = parts.find(part => part.type === 'timeZoneName');
    return tzPart ? tzPart.value : '';
  } catch (e) {
    return '';
  }
};

// Format time for a specific timezone (24-hour format)
const formatTime = (date, timezone) => {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(date);
  } catch (e) {
    return '--:--';
  }
};

// Create a clock column element
const createClockColumn = (timezone, cityName, time, timezoneAbbr) => {
  const column = document.createElement('div');
  column.className = 'clock-column block gap-s';
  column.setAttribute('data-timezone', timezone);
  
  const timeElement = document.createElement('time');
  timeElement.className = 'clock-time font-3xl';
  timeElement.setAttribute('datetime', new Date().toISOString());
  timeElement.textContent = time;
  
  const cityElement = document.createElement('div');
  cityElement.className = 'clock-city font-m';
  cityElement.textContent = cityName;
  
  const tzElement = document.createElement('div');
  tzElement.className = 'clock-timezone font-xs';
  tzElement.textContent = timezoneAbbr;
  
  column.appendChild(timeElement);
  column.appendChild(cityElement);
  column.appendChild(tzElement);
  
  return column;
};

// Update time in existing clock columns
const updateClockTimes = () => {
  const clockColumns = document.querySelectorAll('.clock-column');
  const now = new Date();
  
  clockColumns.forEach(column => {
    const timezone = column.getAttribute('data-timezone');
    const timeElement = column.querySelector('.clock-time');
    const tzElement = column.querySelector('.clock-timezone');
    
    if (timeElement && timezone) {
      const time = formatTime(now, timezone);
      timeElement.textContent = time;
      timeElement.setAttribute('datetime', now.toISOString());
    }
    
    if (tzElement && timezone) {
      const timezoneAbbr = getTimezoneAbbr(now, timezone);
      tzElement.textContent = timezoneAbbr;
    }
  });
};

// Initialize clock displays
const renderClocks = () => {
  const cities = getCitiesFromURL();
  const clockRow = document.getElementById('clock-row');
  
  // Clear existing columns
  clockRow.innerHTML = '';
  
  // Create and append clock columns
  cities.forEach(timezone => {
    const cityName = getCityName(timezone);
    const now = new Date();
    const time = formatTime(now, timezone);
    const timezoneAbbr = getTimezoneAbbr(now, timezone);
    
    const column = createClockColumn(timezone, cityName, time, timezoneAbbr);
    clockRow.appendChild(column);
  });
};

//
//------- Main Functions -------//
//

// Initialize clock component
const initClock = () => {
  renderClocks();
  
  // Update times every 60 seconds
  setInterval(updateClockTimes, 60000);
};

//
//------- Initialize -------//
//

document.addEventListener('DOMContentLoaded', () => {
  initClock();
});

