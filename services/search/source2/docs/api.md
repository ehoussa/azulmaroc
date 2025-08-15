# AzulMaroc Search API Documentation

This document provides information about the available API endpoints for the AzulMaroc search service.

## Database Models

The API interacts with the following main models:

- **morocco_regions**: Regions of Morocco (with name, description, imageURL, HTMLcolor)
- **cities**: Cities within Morocco (with name, description, imageURL), associated with regions
- **beaches**, **activities**, **museums**, **attractions**: Tourism entities (with name, description, imageURL) associated with cities and regions

## API Endpoints

### Regions

#### GET /search/regions

- **Description**: Get all regions of Morocco
- **Query Parameters**: None
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Marrakech-Safi",
    "description": "A region in western Morocco",
    "imageURL": "https://example.com/marrakech-safi.jpg",
    "HTMLcolor": "#E83611",
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  },
  {
    "id": 2,
    "name": "Casablanca-Settat",
    "description": "A region in western Morocco including Casablanca",
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

#### GET /search/regions/:id

- **Description**: Get region by ID with all its cities
- **Path Parameters**: `id` - Region ID
- **Example Response**:

```json
{
  "id": 1,
  "name": "Marrakech-Safi",
  "description": "A region in western Morocco",
  "imageURL": "https://example.com/marrakech-safi.jpg",
  "HTMLcolor": "#E83611",
  "createdAt": "2025-08-09T17:30:00.000Z",
  "updatedAt": "2025-08-09T17:30:00.000Z",
  "cities": [
    {
      "id": 1,
      "name": "Marrakech",
      "description": "The fourth largest city in Morocco",
      "imageURL": "https://example.com/marrakech.jpg",
      "createdAt": "2025-08-09T17:30:00.000Z",
      "updatedAt": "2025-08-09T17:30:00.000Z"
    },
    {
      "id": 3,
      "name": "Essaouira",
      "description": "A port city on Morocco's Atlantic coast",
      "imageURL": "https://example.com/essaouira.jpg",
      "createdAt": "2025-08-09T17:30:00.000Z",
      "updatedAt": "2025-08-09T17:30:00.000Z"
    }
  ]
}
```

#### GET /search/cities/:cityId/regions

- **Description**: Get regions by city ID
- **Path Parameters**: `cityId` - City ID
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Marrakech-Safi",
    "description": "A region in western Morocco",
    "imageURL": "https://example.com/marrakech-safi.jpg",
    "HTMLcolor": "#E83611",
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

#### GET /search/regions/:regionId/cities

- **Description**: Get cities by region ID
- **Path Parameters**: `regionId` - Region ID
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Marrakech",
    "description": "The fourth largest city in Morocco",
    "regionId": 1,
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  },
  {
    "id": 3,
    "name": "Essaouira",
    "description": "A port city on Morocco's Atlantic coast",
    "regionId": 1,
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

### Cities

#### GET /search/cities

- **Description**: Get all cities
- **Query Parameters**: None
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Marrakech",
    "description": "The fourth largest city in Morocco",
    "imageURL": "https://example.com/marrakech.jpg",
    "regionId": 1,
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z",
    "region": {
      "HTMLcolor": "#E83611",
      "imageURL": "https://example.com/marrakech-safi.jpg"
    }
  },
  {
    "id": 2,
    "name": "Casablanca",
    "description": "The largest city in Morocco",
    "regionId": 2,
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

#### GET /search/cities/:id

- **Description**: Get city by ID with all its related tourism entities
- **Path Parameters**: `id` - City ID
- **Example Response**:

```json
{
  "id": 1,
  "name": "Marrakech",
  "description": "The fourth largest city in Morocco",
  "imageURL": "https://example.com/marrakech.jpg",
  "regionId": 1,
  "createdAt": "2025-08-09T17:30:00.000Z",
  "updatedAt": "2025-08-09T17:30:00.000Z",
  "region": {
    "id": 1,
    "name": "Marrakech-Safi",
    "HTMLcolor": "#E83611",
    "imageURL": "https://example.com/marrakech-safi.jpg"
  },
  "beaches": [],
  "activities": [
    {
      "id": 1,
      "name": "Hot Air Balloon Ride",
      "description": "Experience Marrakech from above",
      "imageURL": "https://example.com/balloon.jpg",
      "cityId": 1,
      "regionId": 1,
      "createdAt": "2025-08-09T17:30:00.000Z",
      "updatedAt": "2025-08-09T17:30:00.000Z"
    }
  ],
  "museums": [
    {
      "id": 1,
      "name": "Marrakech Museum",
      "description": "Moroccan art in a former palace",
      "imageURL": "https://example.com/marrakech-museum.jpg",
      "cityId": 1,
      "regionId": 1,
      "createdAt": "2025-08-09T17:30:00.000Z",
      "updatedAt": "2025-08-09T17:30:00.000Z"
    }
  ],
  "attractions": [
    {
      "id": 1,
      "name": "Jardin Majorelle",
      "description": "Botanical garden and artist's landscape garden",
      "imageURL": "https://example.com/jardin-majorelle.jpg",
      "cityId": 1,
      "regionId": 1,
      "createdAt": "2025-08-09T17:30:00.000Z",
      "updatedAt": "2025-08-09T17:30:00.000Z"
    }
  ]
}
```

#### GET /search/regions/:regionId/cities

- **Description**: Get cities by region ID
- **Path Parameters**: `regionId` - Region ID
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Marrakech",
    "description": "The fourth largest city in Morocco",
    "regionId": 1,
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  },
  {
    "id": 3,
    "name": "Essaouira",
    "description": "A port city on Morocco's Atlantic coast",
    "regionId": 1,
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

### Beaches

#### GET /search/beaches

- **Description**: Get all beaches
- **Query Parameters**: None
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Legzira Beach",
    "description": "Famous for its natural stone arches",
    "imageURL": "https://example.com/legzira-beach.jpg",
    "cityId": 5,
    "regionId": 4,
    "region": {
      "HTMLcolor": "#3B7080"
    },
    "city": {
      "name": "Sidi Ifni"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  },
  {
    "id": 2,
    "name": "Agadir Beach",
    "description": "Popular tourist beach with golden sand",
    "imageURL": "https://example.com/agadir-beach.jpg",
    "cityId": 2,
    "regionId": 2,
    "region": {
      "HTMLcolor": "#F5A623"
    },
    "city": {
      "name": "Agadir"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

#### GET /search/beaches/:id

- **Description**: Get beach by ID
- **Path Parameters**: `id` - Beach ID
- **Example Response**:

```json
{
  "id": 1,
  "name": "Legzira Beach",
  "description": "Famous for its natural stone arches",
  "imageURL": "https://example.com/legzira-beach.jpg",
  "cityId": 5,
  "regionId": 4,
  "region": {
    "HTMLcolor": "#3B7080"
  },
  "city": {
    "name": "Sidi Ifni"
  },
  "createdAt": "2025-08-09T17:30:00.000Z",
  "updatedAt": "2025-08-09T17:30:00.000Z"
}
```

#### GET /search/cities/:cityId/beaches

- **Description**: Get beaches by city ID
- **Path Parameters**: `cityId` - City ID
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Legzira Beach",
    "description": "Famous for its natural stone arches",
    "imageURL": "https://example.com/legzira-beach.jpg",
    "cityId": 5,
    "regionId": 4,
    "region": {
      "HTMLcolor": "#3B7080"
    },
    "city": {
      "name": "Sidi Ifni"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

#### GET /search/regions/:regionId/beaches

- **Description**: Get beaches by region ID
- **Path Parameters**: `regionId` - Region ID
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Legzira Beach",
    "description": "Famous for its natural stone arches",
    "imageURL": "https://example.com/legzira-beach.jpg",
    "cityId": 5,
    "regionId": 4,
    "region": {
      "HTMLcolor": "#3B7080"
    },
    "city": {
      "name": "Sidi Ifni"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

### Activities

#### GET /search/activities

- **Description**: Get all activities
- **Query Parameters**: None
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Desert Camel Trekking",
    "description": "Explore the Sahara on camelback",
    "imageURL": "https://example.com/camel-trekking.jpg",
    "cityId": 6,
    "regionId": 5,
    "region": {
      "HTMLcolor": "#D4B254"
    },
    "city": {
      "name": "Merzouga"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  },
  {
    "id": 2,
    "name": "Surfing Lessons",
    "description": "Learn to surf with professional instructors",
    "imageURL": "https://example.com/surfing-lessons.jpg",
    "cityId": 2,
    "regionId": 2,
    "region": {
      "HTMLcolor": "#F5A623"
    },
    "city": {
      "name": "Agadir"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

#### GET /search/activities/:id

- **Description**: Get activity by ID
- **Path Parameters**: `id` - Activity ID
- **Example Response**:

```json
{
  "id": 1,
  "name": "Desert Camel Trekking",
  "description": "Explore the Sahara on camelback",
  "imageURL": "https://example.com/camel-trekking.jpg",
  "cityId": 6,
  "regionId": 5,
  "region": {
    "HTMLcolor": "#D4B254"
  },
  "city": {
    "name": "Merzouga"
  },
  "createdAt": "2025-08-09T17:30:00.000Z",
  "updatedAt": "2025-08-09T17:30:00.000Z"
}
```

#### GET /search/cities/:cityId/activities

- **Description**: Get activities by city ID
- **Path Parameters**: `cityId` - City ID
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Desert Camel Trekking",
    "description": "Explore the Sahara on camelback",
    "imageURL": "https://example.com/camel-trekking.jpg",
    "cityId": 6,
    "regionId": 5,
    "region": {
      "HTMLcolor": "#D4B254"
    },
    "city": {
      "name": "Merzouga"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

#### GET /search/regions/:regionId/activities

- **Description**: Get activities by region ID
- **Path Parameters**: `regionId` - Region ID
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Desert Camel Trekking",
    "description": "Explore the Sahara on camelback",
    "imageURL": "https://example.com/camel-trekking.jpg",
    "cityId": 6,
    "regionId": 5,
    "region": {
      "HTMLcolor": "#D4B254"
    },
    "city": {
      "name": "Merzouga"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

### Museums

#### GET /search/museums

- **Description**: Get all museums
- **Query Parameters**: None
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Museum of Moroccan Arts",
    "description": "Traditional Moroccan art and crafts",
    "imageURL": "https://example.com/moroccan-arts-museum.jpg",
    "cityId": 1,
    "regionId": 1,
    "region": {
      "HTMLcolor": "#E83611"
    },
    "city": {
      "name": "Casablanca"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  },
  {
    "id": 2,
    "name": "Berber Museum",
    "description": "Dedicated to Berber culture and history",
    "imageURL": "https://example.com/berber-museum.jpg",
    "cityId": 4,
    "regionId": 3,
    "region": {
      "HTMLcolor": "#E83611"
    },
    "city": {
      "name": "Marrakech"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

#### GET /search/museums/:id

- **Description**: Get museum by ID
- **Path Parameters**: `id` - Museum ID
- **Example Response**:

```json
{
  "id": 1,
  "name": "Museum of Moroccan Arts",
  "description": "Traditional Moroccan art and crafts",
  "imageURL": "https://example.com/moroccan-arts-museum.jpg",
  "cityId": 1,
  "regionId": 1,
  "region": {
    "HTMLcolor": "#E83611"
  },
  "city": {
    "name": "Casablanca"
  },
  "createdAt": "2025-08-09T17:30:00.000Z",
  "updatedAt": "2025-08-09T17:30:00.000Z"
}
```

#### GET /search/cities/:cityId/museums

- **Description**: Get museums by city ID
- **Path Parameters**: `cityId` - City ID
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Museum of Moroccan Arts",
    "description": "Traditional Moroccan art and crafts",
    "imageURL": "https://example.com/moroccan-arts-museum.jpg",
    "cityId": 1,
    "regionId": 1,
    "region": {
      "HTMLcolor": "#E83611"
    },
    "city": {
      "name": "Casablanca"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

#### GET /search/regions/:regionId/museums

- **Description**: Get museums by region ID
- **Path Parameters**: `regionId` - Region ID
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Museum of Moroccan Arts",
    "description": "Traditional Moroccan art and crafts",
    "imageURL": "https://example.com/moroccan-arts-museum.jpg",
    "cityId": 1,
    "regionId": 1,
    "region": {
      "HTMLcolor": "#E83611"
    },
    "city": {
      "name": "Casablanca"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

### Attractions

#### GET /search/attractions

- **Description**: Get all attractions
- **Query Parameters**: None
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Jardin Majorelle",
    "description": "Botanical garden and artist's landscape garden",
    "imageURL": "https://example.com/jardin-majorelle.jpg",
    "cityId": 4,
    "regionId": 3,
    "region": {
      "HTMLcolor": "#E83611"
    },
    "city": {
      "name": "Marrakech"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  },
  {
    "id": 2,
    "name": "Hassan II Mosque",
    "description": "Largest mosque in Morocco and 5th largest in the world",
    "imageURL": "https://example.com/hassan-ii-mosque.jpg",
    "cityId": 1,
    "regionId": 1,
    "region": {
      "HTMLcolor": "#E83611"
    },
    "city": {
      "name": "Casablanca"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

#### GET /search/attractions/:id

- **Description**: Get attraction by ID
- **Path Parameters**: `id` - Attraction ID
- **Example Response**:

```json
{
  "id": 1,
  "name": "Jardin Majorelle",
  "description": "Botanical garden and artist's landscape garden",
  "imageURL": "https://example.com/jardin-majorelle.jpg",
  "cityId": 4,
  "regionId": 3,
  "region": {
    "HTMLcolor": "#E83611"
  },
  "city": {
    "name": "Marrakech"
  },
  "createdAt": "2025-08-09T17:30:00.000Z",
  "updatedAt": "2025-08-09T17:30:00.000Z"
}
```

#### GET /search/cities/:cityId/attractions

- **Description**: Get attractions by city ID
- **Path Parameters**: `cityId` - City ID
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Jardin Majorelle",
    "description": "Botanical garden and artist's landscape garden",
    "imageURL": "https://example.com/jardin-majorelle.jpg",
    "cityId": 4,
    "regionId": 3,
    "region": {
      "HTMLcolor": "#E83611"
    },
    "city": {
      "name": "Marrakech"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

#### GET /search/regions/:regionId/attractions

- **Description**: Get attractions by region ID
- **Path Parameters**: `regionId` - Region ID
- **Example Response**:

```json
[
  {
    "id": 1,
    "name": "Jardin Majorelle",
    "description": "Botanical garden and artist's landscape garden",
    "imageURL": "https://example.com/jardin-majorelle.jpg",
    "cityId": 4,
    "regionId": 3,
    "region": {
      "HTMLcolor": "#E83611"
    },
    "city": {
      "name": "Marrakech"
    },
    "createdAt": "2025-08-09T17:30:00.000Z",
    "updatedAt": "2025-08-09T17:30:00.000Z"
  }
]
```

## Setup and Usage

1. Make sure the Prisma schema is up to date and migrations have been applied:
   ```
   npx prisma generate
   npx prisma migrate dev
   ```

2. Start the NestJS application:
   ```
   npm run start:dev
   ```

3. Access the API endpoints using the base URL of your application (e.g., `http://localhost:3000/search/regions`).

## Database Connection

The application uses PostgreSQL with the following connection details:
- **Connection String**: `postgresql://azulmaroc:azulmaroc1234@azulmaroc_postgres:5432/azulmaroc`
- **Database Container**: `azulmaroc_postgres`

## Error Handling

All endpoints return appropriate HTTP status codes:

- `200 OK`: Request successful
- `201 Created`: Resource created successfully
- `400 Bad Request`: Invalid input
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

## Future Endpoints

Additional endpoints for beaches, activities, museums, and attractions will be added in future updates.
