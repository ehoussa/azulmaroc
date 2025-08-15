import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  // Get all Morocco regions
  async getAllRegions() {
    return this.prisma.morocco_regions.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        imageURL: true,
        HTMLcolor: true,
        createdAt: true,
        updatedAt: true
      }
    });
  }

  // Get region by ID
  async getRegionById(id: number) {
    return this.prisma.morocco_regions.findUnique({
      where: { id },
      include: {
        cities: {
          select: {
            id: true,
            name: true,
            description: true,
            imageURL: true,
            createdAt: true,
            updatedAt: true
          }
        }
      }
    });
  }

  // Get all cities
  async getAllCities() {
    return this.prisma.cities.findMany({
      include: {
        region: {
          select: {
            HTMLcolor: true,
            imageURL: true
          }
        }
      }
    });
  }

  // Get city by ID
  async getCityById(id: number) {
    return this.prisma.cities.findUnique({
      where: { id },
      include: {
        region: {
          select: {
            id: true,
            name: true,
            HTMLcolor: true,
            imageURL: true
          }
        },
        beaches: true,
        activities: true,
        museums: true,
        attractions: true
      }
    });
  }

  // Get all cities by region ID
  async getCitiesByRegionId(regionId: number) {
    return this.prisma.cities.findMany({
      where: {
        regionId: regionId,
      },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        }
      }
    });
  }

  // Create a new region
  async createRegion(data: any) {
    return this.prisma.morocco_regions.create({
      data: {
        name: data.name,
        description: data.description || null,
        imageURL: data.imageURL || null,
        HTMLcolor: data.HTMLcolor || null,
      },
    });
  }

  // Create a new city
  async createCity(data: any) {
    return this.prisma.cities.create({
      data: {
        name: data.name,
        description: data.description || null,
        imageURL: data.imageURL || null,
        regionId: data.regionId,
      },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        }
      }
    });
  }

  // Create a new beach
  async createBeach(data: any) {
    return this.prisma.beaches.create({
      data: {
        name: data.name,
        description: data.description || null,
        imageURL: data.imageURL || null,
        cityId: data.cityId,
        regionId: data.regionId,
      },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        }
      }
    });
  }

  // Create a new activity
  async createActivity(data: any) {
    return this.prisma.activities.create({
      data: {
        name: data.name,
        description: data.description || null,
        imageURL: data.imageURL || null,
        cityId: data.cityId,
        regionId: data.regionId,
      },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        }
      }
    });
  }

  // Create a new museum
  async createMuseum(data: any) {
    return this.prisma.museums.create({
      data: {
        name: data.name,
        description: data.description || null,
        imageURL: data.imageURL || null,
        cityId: data.cityId,
        regionId: data.regionId,
      },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        }
      }
    });
  }

  // Create a new attraction
  async createAttraction(data: any) {
    return this.prisma.attractions.create({
      data: {
        name: data.name,
        description: data.description || null,
        imageURL: data.imageURL || null,
        cityId: data.cityId,
        regionId: data.regionId,
      },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        }
      }
    });
  }

  // Get all beaches
  async getAllBeaches() {
    return this.prisma.beaches.findMany({
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get beach by ID
  async getBeachById(id: number) {
    return this.prisma.beaches.findUnique({
      where: { id },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get beaches by city ID
  async getBeachesByCityId(cityId: number) {
    return this.prisma.beaches.findMany({
      where: { cityId },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get beaches by region ID
  async getBeachesByRegionId(regionId: number) {
    return this.prisma.beaches.findMany({
      where: { regionId },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get all activities
  async getAllActivities() {
    return this.prisma.activities.findMany({
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get activity by ID
  async getActivityById(id: number) {
    return this.prisma.activities.findUnique({
      where: { id },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get activities by city ID
  async getActivitiesByCityId(cityId: number) {
    return this.prisma.activities.findMany({
      where: { cityId },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get activities by region ID
  async getActivitiesByRegionId(regionId: number) {
    return this.prisma.activities.findMany({
      where: { regionId },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get all museums
  async getAllMuseums() {
    return this.prisma.museums.findMany({
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get museum by ID
  async getMuseumById(id: number) {
    return this.prisma.museums.findUnique({
      where: { id },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get museums by city ID
  async getMuseumsByCityId(cityId: number) {
    return this.prisma.museums.findMany({
      where: { cityId },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get museums by region ID
  async getMuseumsByRegionId(regionId: number) {
    return this.prisma.museums.findMany({
      where: { regionId },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get all attractions
  async getAllAttractions() {
    return this.prisma.attractions.findMany({
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get attraction by ID
  async getAttractionById(id: number) {
    return this.prisma.attractions.findUnique({
      where: { id },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get attractions by city ID
  async getAttractionsByCityId(cityId: number) {
    return this.prisma.attractions.findMany({
      where: { cityId },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }

  // Get attractions by region ID
  async getAttractionsByRegionId(regionId: number) {
    return this.prisma.attractions.findMany({
      where: { regionId },
      include: {
        region: {
          select: {
            HTMLcolor: true
          }
        },
        city: {
          select: {
            name: true
          }
        }
      }
    });
  }
}
