const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Configuration
const BASE_URL = 'http://localhost:3001';
const IMPORT_API_URL = `${BASE_URL}/search/import`;
const CLEAR_DB_API_URL = `${BASE_URL}/search/clear-database`;
const DATA_DIR = path.join(__dirname, 'data');

// Map file names to data types expected by the API
const fileToDataTypeMap = {
  'imperial-cities.json': 'imperialCities',
  'coastal-cities.json': 'coastalCities',
  'atlas-mountains.json': 'atlasMountains',
  'rif-mountains.json': 'rifMountains',
  'natural-wonders.json': 'naturalWonders',
  'archaeological-sites.json': 'archaeologicalSites',
  'desert-destinations.json': 'desertDestinations',
  'national-parks.json': 'nationalParks',
  'adventure-activities.json': 'adventureActivities',
  'festivals-events.json': 'festivalsEvents',
  'traditional-crafts.json': 'traditionalCrafts',
  'moroccan-cuisine.json': 'moroccanCuisine'
};

// Data extractors for different file structures
const dataExtractors = {
  'imperial-cities.json': (data) => data.cities || [],
  'coastal-cities.json': (data) => data.cities || [],
  'atlas-mountains.json': (data) => data.regions || [],
  'rif-mountains.json': (data) => data.destinations || [],
  'natural-wonders.json': (data) => data.categories || [],
  'archaeological-sites.json': (data) => data.sites || [],
  'desert-destinations.json': (data) => data.cities || [],
  'national-parks.json': (data) => data.parks || [],
  'adventure-activities.json': (data) => data.categories || [],
  'festivals-events.json': (data) => data.categories || [],
  'traditional-crafts.json': (data) => [data], // Special case: wrap the entire object
  'moroccan-cuisine.json': (data) => data.categories || []
};

// Function to clear all data from the database using the API
async function clearDatabase() {
  console.log('Clearing existing data from the database...');
  
  try {
    const response = await axios.post(CLEAR_DB_API_URL);
    console.log('Database cleared successfully:', response.data.message);
    return response.data;
  } catch (error) {
    console.error('Error clearing database:', error.response?.data || error.message);
    throw error;
  }
}

// Function to read and process a single JSON file
async function processFile(filename) {
  try {
    console.log(`Processing ${filename}...`);
    
    // Get the data type from the filename
    const dataType = fileToDataTypeMap[filename];
    if (!dataType) {
      console.log(`Skipping ${filename}: No data type mapping found`);
      return;
    }
    
    // Read and parse the JSON file
    const filePath = path.join(DATA_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const rawData = JSON.parse(fileContent);
    
    // Extract the relevant data using the appropriate extractor
    const extractor = dataExtractors[filename] || ((data) => data);
    const extractedData = extractor(rawData);
    
    if (!extractedData || extractedData.length === 0) {
      console.log(`Skipping ${filename}: No data extracted`);
      return;
    }
    
    // Prepare the request payload
    const payload = {
      dataType,
      items: extractedData
    };
    
    // Send the data to the API
    const response = await axios.post(IMPORT_API_URL, payload);
    
    console.log(`Successfully imported ${filename}: ${response.data.imported} items`);
    return response.data;
  } catch (error) {
    console.error(`Error processing ${filename}:`, error.response?.data || error.message);
    return null;
  }
}

// Main function to process all files
async function importAllData() {
  try {
    // Clear existing data first
    await clearDatabase();
    
    // Get all JSON files in the data directory
    const files = fs.readdirSync(DATA_DIR)
      .filter(file => file.endsWith('.json'))
      .filter(file => fileToDataTypeMap[file]); // Only process files we have mappings for
    
    console.log(`Found ${files.length} JSON files to process`);
    
    // Process each file sequentially
    const results = [];
    for (const file of files) {
      const result = await processFile(file);
      if (result) results.push(result);
    }
    
    console.log('Import completed!');
    console.log(`Successfully imported ${results.length} out of ${files.length} files`);
    
    // Print summary
    console.log('\nImport Summary:');
    results.forEach(result => {
      console.log(`- ${result.dataType}: ${result.imported} items`);
    });
  } catch (error) {
    console.error('Error during import process:', error.message);
  }
}

// Run the import process
importAllData();
