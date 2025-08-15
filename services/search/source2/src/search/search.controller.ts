import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { SearchService } from './search.service';

// DTOs for data validation
class CreateRegionDto {
  name: string;
  description?: string;
  imageURL?: string;
  HTMLcolor?: string;
}

class CreateCityDto {
  name: string;
  description?: string;
  imageURL?: string;
  regionId: number;
}

class CreateTourismEntityDto {
  name: string;
  description?: string;
  imageURL?: string;
  cityId: number;
  regionId: number;
}

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  /**
   * Get all Morocco regions
   * @returns Array of all regions with their id, name, description, imageURL, and HTMLcolor
   * @example GET /search/regions
   */
  @Get('regions')
  async getAllRegions() {
    return this.searchService.getAllRegions();
  }

  /**
   * Get region by ID
   * @param id The ID of the region to get
   * @returns Region details including id, name, description, imageURL, and HTMLcolor
   * @example GET /search/regions/1
   */
  @Get('regions/:id')
  async getRegionById(@Param('id', ParseIntPipe) id: number) {
    return this.searchService.getRegionById(id);
  }

  /**
   * Get all cities
   * @returns Array of all cities with their id, name, description, imageURL, regionId, and region's HTMLcolor
   * @example GET /search/cities
   */
  @Get('cities')
  async getAllCities() {
    return this.searchService.getAllCities();
  }

  /**
   * Get city by ID
   * @param id The ID of the city to get
   * @returns City details including id, name, description, imageURL, regionId, region details, and related tourism entities
   * @example GET /search/cities/1
   */
  @Get('cities/:id')
  async getCityById(@Param('id', ParseIntPipe) id: number) {
    return this.searchService.getCityById(id);
  }

  /**
   * Get all cities that belong to a specific region
   * @param id The ID of the region to get cities for
   * @returns Array of cities that belong to the specified region, including region's HTMLcolor
   * @example GET /search/regions/1/cities
   */
  @Get('regions/:id/cities')
  async getCitiesByRegionId(@Param('id', ParseIntPipe) id: number) {
    return this.searchService.getCitiesByRegionId(id);
  }

  /**
   * Create a new region
   * @param data Region data containing name, optional description, imageURL, and HTMLcolor
   * @returns The created region
   * @example POST /search/regions
   */
  @Post('regions')
  async createRegion(@Body() data: CreateRegionDto) {
    return this.searchService.createRegion(data);
  }

  /**
   * Create a new city
   * @param data City data containing name, optional description, imageURL, and regionId
   * @returns The created city with region's HTMLcolor
   * @example POST /search/cities
   */
  @Post('cities')
  async createCity(@Body() data: CreateCityDto) {
    return this.searchService.createCity(data);
  }

  /**
   * Create a new beach
   * @param data Beach data containing name, optional description, imageURL, cityId, and regionId
   * @returns The created beach with region's HTMLcolor
   * @example POST /search/beaches
   */
  @Post('beaches')
  async createBeach(@Body() data: CreateTourismEntityDto) {
    return this.searchService.createBeach(data);
  }

  /**
   * Create a new activity
   * @param data Activity data containing name, optional description, imageURL, cityId, and regionId
   * @returns The created activity with region's HTMLcolor
   * @example POST /search/activities
   */
  @Post('activities')
  async createActivity(@Body() data: CreateTourismEntityDto) {
    return this.searchService.createActivity(data);
  }

  /**
   * Create a new museum
   * @param data Museum data containing name, optional description, imageURL, cityId, and regionId
   * @returns The created museum with region's HTMLcolor
   * @example POST /search/museums
   */
  @Post('museums')
  async createMuseum(@Body() data: CreateTourismEntityDto) {
    return this.searchService.createMuseum(data);
  }

  /**
   * Create a new attraction
   * @param body - The attraction data
   * @returns The created attraction
   */
  @Post('attractions')
  createAttraction(@Body() body: CreateTourismEntityDto) {
    return this.searchService.createAttraction(body);
  }

  @Get('beaches')
  /**
   * Get all beaches
   * @returns Array of beaches with their details including imageURL and region's HTMLcolor
   */
  getAllBeaches() {
    return this.searchService.getAllBeaches();
  }

  @Get('beaches/:id')
  /**
   * Get beach by ID
   * @param id - The beach ID
   * @returns Beach details including imageURL and region's HTMLcolor
   */
  getBeachById(@Param('id', ParseIntPipe) id: number) {
    return this.searchService.getBeachById(id);
  }

  @Get('cities/:cityId/beaches')
  /**
   * Get beaches by city ID
   * @param cityId - The city ID
   * @returns Array of beaches in the specified city including imageURL and region's HTMLcolor
   */
  getBeachesByCityId(@Param('cityId', ParseIntPipe) cityId: number) {
    return this.searchService.getBeachesByCityId(cityId);
  }

  @Get('regions/:regionId/beaches')
  /**
   * Get beaches by region ID
   * @param regionId - The region ID
   * @returns Array of beaches in the specified region including imageURL and region's HTMLcolor
   */
  getBeachesByRegionId(@Param('regionId', ParseIntPipe) regionId: number) {
    return this.searchService.getBeachesByRegionId(regionId);
  }

  @Get('activities')
  /**
   * Get all activities
   * @returns Array of activities with their details including imageURL and region's HTMLcolor
   */
  getAllActivities() {
    return this.searchService.getAllActivities();
  }

  @Get('activities/:id')
  /**
   * Get activity by ID
   * @param id - The activity ID
   * @returns Activity details including imageURL and region's HTMLcolor
   */
  getActivityById(@Param('id', ParseIntPipe) id: number) {
    return this.searchService.getActivityById(id);
  }

  @Get('cities/:cityId/activities')
  /**
   * Get activities by city ID
   * @param cityId - The city ID
   * @returns Array of activities in the specified city including imageURL and region's HTMLcolor
   */
  getActivitiesByCityId(@Param('cityId', ParseIntPipe) cityId: number) {
    return this.searchService.getActivitiesByCityId(cityId);
  }

  @Get('regions/:regionId/activities')
  /**
   * Get activities by region ID
   * @param regionId - The region ID
   * @returns Array of activities in the specified region including imageURL and region's HTMLcolor
   */
  getActivitiesByRegionId(@Param('regionId', ParseIntPipe) regionId: number) {
    return this.searchService.getActivitiesByRegionId(regionId);
  }

  @Get('museums')
  /**
   * Get all museums
   * @returns Array of museums with their details including imageURL and region's HTMLcolor
   */
  getAllMuseums() {
    return this.searchService.getAllMuseums();
  }

  @Get('museums/:id')
  /**
   * Get museum by ID
   * @param id - The museum ID
   * @returns Museum details including imageURL and region's HTMLcolor
   */
  getMuseumById(@Param('id', ParseIntPipe) id: number) {
    return this.searchService.getMuseumById(id);
  }

  @Get('cities/:cityId/museums')
  /**
   * Get museums by city ID
   * @param cityId - The city ID
   * @returns Array of museums in the specified city including imageURL and region's HTMLcolor
   */
  getMuseumsByCityId(@Param('cityId', ParseIntPipe) cityId: number) {
    return this.searchService.getMuseumsByCityId(cityId);
  }

  @Get('regions/:regionId/museums')
  /**
   * Get museums by region ID
   * @param regionId - The region ID
   * @returns Array of museums in the specified region including imageURL and region's HTMLcolor
   */
  getMuseumsByRegionId(@Param('regionId', ParseIntPipe) regionId: number) {
    return this.searchService.getMuseumsByRegionId(regionId);
  }

  /**
   * Get all attractions
   * @returns Array of attractions with their details including imageURL and region's HTMLcolor
   */
  @Get('attractions')
  getAllAttractions() {
    return this.searchService.getAllAttractions();
  }

  @Get('attractions/:id')
  /**
   * Get attraction by ID
   * @param id - The attraction ID
   * @returns Attraction details including imageURL and region's HTMLcolor
   */
  getAttractionById(@Param('id', ParseIntPipe) id: number) {
    return this.searchService.getAttractionById(id);
  }

  @Get('cities/:cityId/attractions')
  /**
   * Get attractions by city ID
   * @param cityId - The city ID
   * @returns Array of attractions in the specified city including imageURL and region's HTMLcolor
   */
  getAttractionsByCityId(@Param('cityId', ParseIntPipe) cityId: number) {
    return this.searchService.getAttractionsByCityId(cityId);
  }

  @Get('regions/:regionId/attractions')
  /**
   * Get attractions by region ID
   * @param regionId - The region ID
   * @returns Array of attractions in the specified region including imageURL and region's HTMLcolor
   */
  getAttractionsByRegionId(@Param('regionId', ParseIntPipe) regionId: number) {
    return this.searchService.getAttractionsByRegionId(regionId);
  }
}
