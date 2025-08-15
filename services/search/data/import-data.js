// Import script for AzulMaroc data
const fs = require('fs');
const path = require('path');

// API base URL - adjusted for Docker port mapping (3001)
const API_BASE_URL = 'http://localhost:3001/search';

// Read the JSON data file
const dataFilePath = path.join(__dirname, 'data1.json');
const jsonData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

// Map to store region IDs by region key
const regionIdMap = {};
// Map to store city IDs by region key and city key
const cityIdMap = {};

// Function to create a region
async function createRegion(regionKey, regionData) {
  try {
    const regionPayload = {
      name: regionData.region_name,
      description: `Capital: ${regionData.capital}`
    };
    
    console.log(`Creating region: ${regionData.region_name}`);
    const response = await fetch(`${API_BASE_URL}/regions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(regionPayload)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Store the region ID for later use
    regionIdMap[regionKey] = data.id;
    console.log(`Created region ${regionData.region_name} with ID: ${data.id}`);
    
    return data;
  } catch (error) {
    console.error(`Error creating region ${regionData.region_name}:`, error.message);
    throw error;
  }
}

// Function to create a city
async function createCity(regionKey, cityKey, cityData, regionId) {
  try {
    const cityPayload = {
      name: cityData.city_name,
      description: cityData.type || null,
      regionId: regionId
    };
    
    console.log(`Creating city: ${cityData.city_name}`);
    const response = await fetch(`${API_BASE_URL}/cities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cityPayload)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Store the city ID for later use
    if (!cityIdMap[regionKey]) {
      cityIdMap[regionKey] = {};
    }
    cityIdMap[regionKey][cityKey] = data.id;
    console.log(`Created city ${cityData.city_name} with ID: ${data.id}`);
    
    return data;
  } catch (error) {
    console.error(`Error creating city ${cityData.city_name}:`, error.message);
    throw error;
  }
}

// Function to create attractions for a city
async function createAttractions(attractions, cityId, regionId) {
  const createdAttractions = [];
  
  for (const attraction of attractions) {
    try {
      const attractionPayload = {
        name: attraction,
        description: null,
        cityId: cityId,
        regionId: regionId
      };
      
      console.log(`Creating attraction: ${attraction}`);
      const response = await fetch(`${API_BASE_URL}/attractions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(attractionPayload)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      createdAttractions.push(data);
      console.log(`Created attraction ${attraction} with ID: ${data.id}`);
    } catch (error) {
      console.error(`Error creating attraction ${attraction}:`, error.message);
    }
  }
  
  return createdAttractions;
}

// Function to create beaches for a city
async function createBeaches(beaches, cityId, regionId) {
  const createdBeaches = [];
  
  for (const beach of beaches) {
    try {
      const beachPayload = {
        name: beach,
        description: null,
        cityId: cityId,
        regionId: regionId
      };
      
      console.log(`Creating beach: ${beach}`);
      const response = await fetch(`${API_BASE_URL}/beaches`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(beachPayload)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      createdBeaches.push(data);
      console.log(`Created beach ${beach} with ID: ${data.id}`);
    } catch (error) {
      console.error(`Error creating beach ${beach}:`, error.message);
    }
  }
  
  return createdBeaches;
}

// Function to create activities for a city
async function createActivities(activities, cityId, regionId) {
  const createdActivities = [];
  
  for (const activity of activities) {
    try {
      const activityPayload = {
        name: activity,
        description: null,
        cityId: cityId,
        regionId: regionId
      };
      
      console.log(`Creating activity: ${activity}`);
      const response = await fetch(`${API_BASE_URL}/activities`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(activityPayload)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      createdActivities.push(data);
      console.log(`Created activity ${activity} with ID: ${data.id}`);
    } catch (error) {
      console.error(`Error creating activity ${activity}:`, error.message);
    }
  }
  
  return createdActivities;
}

// Function to create museums for a city
async function createMuseums(museums, cityId, regionId) {
  const createdMuseums = [];
  
  for (const museum of museums) {
    try {
      const museumPayload = {
        name: museum,
        description: null,
        cityId: cityId,
        regionId: regionId
      };
      
      console.log(`Creating museum: ${museum}`);
      const response = await fetch(`${API_BASE_URL}/museums`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(museumPayload)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      createdMuseums.push(data);
      console.log(`Created museum ${museum} with ID: ${data.id}`);
    } catch (error) {
      console.error(`Error creating museum ${museum}:`, error.message);
    }
  }
  
  return createdMuseums;
}

// Main function to import all data
async function importData() {
  try {
    // First, create all regions
    for (const regionKey in jsonData) {
      const regionData = jsonData[regionKey];
      await createRegion(regionKey, regionData);
    }
    
    // Then create cities for each region
    for (const regionKey in jsonData) {
      const regionData = jsonData[regionKey];
      const regionId = regionIdMap[regionKey];
      
      if (!regionId) {
        console.error(`Region ID not found for ${regionKey}`);
        continue;
      }
      
      const cities = regionData.cities || {};
      for (const cityKey in cities) {
        const cityData = cities[cityKey];
        await createCity(regionKey, cityKey, cityData, regionId);
      }
    }
    
    // Finally, create tourism entities for each city
    for (const regionKey in jsonData) {
      const regionData = jsonData[regionKey];
      const regionId = regionIdMap[regionKey];
      
      if (!regionId) {
        console.error(`Region ID not found for ${regionKey}`);
        continue;
      }
      
      const cities = regionData.cities || {};
      for (const cityKey in cities) {
        const cityData = cities[cityKey];
        const cityId = cityIdMap[regionKey]?.[cityKey];
        
        if (!cityId) {
          console.error(`City ID not found for ${cityKey} in region ${regionKey}`);
          continue;
        }
        
        // Create attractions
        if (cityData.attractions && cityData.attractions.length > 0) {
          await createAttractions(cityData.attractions, cityId, regionId);
        }
        
        // Create beaches
        if (cityData.beaches && cityData.beaches.length > 0) {
          await createBeaches(cityData.beaches, cityId, regionId);
        }
        
        // Create activities
        if (cityData.activities && cityData.activities.length > 0) {
          await createActivities(cityData.activities, cityId, regionId);
        }
        
        // Create museums
        if (cityData.museums && cityData.museums.length > 0) {
          await createMuseums(cityData.museums, cityId, regionId);
        }
      }
    }
    
    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

// Run the import
importData().catch(console.error);
