/*
  Warnings:

  - You are about to drop the column `location` on the `AdventureActivity` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `NaturalWonder` table. All the data in the column will be lost.
  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Festival` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KeyAttraction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Museum` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OasisTown` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TraditionalCraft` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UNESCOHeritageSite` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name,categoryId]` on the table `AdventureActivity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `ArchaeologicalSite` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,categoryId]` on the table `NaturalWonder` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `AdventureActivity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `AdventureActivity` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `AdventureActivity` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `period` to the `ArchaeologicalSite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ArchaeologicalSite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `NaturalWonder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `NaturalWonder` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `NaturalWonder` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Activity" DROP CONSTRAINT "Activity_cityId_fkey";

-- DropForeignKey
ALTER TABLE "public"."City" DROP CONSTRAINT "City_regionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."KeyAttraction" DROP CONSTRAINT "KeyAttraction_cityId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Museum" DROP CONSTRAINT "Museum_cityId_fkey";

-- AlterTable
ALTER TABLE "public"."AdventureActivity" DROP COLUMN "location",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "locations" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."ArchaeologicalSite" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "keyFeatures" TEXT[],
ADD COLUMN     "period" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."NaturalWonder" DROP COLUMN "type",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- DropTable
DROP TABLE "public"."Activity";

-- DropTable
DROP TABLE "public"."City";

-- DropTable
DROP TABLE "public"."Festival";

-- DropTable
DROP TABLE "public"."KeyAttraction";

-- DropTable
DROP TABLE "public"."Museum";

-- DropTable
DROP TABLE "public"."OasisTown";

-- DropTable
DROP TABLE "public"."Region";

-- DropTable
DROP TABLE "public"."TraditionalCraft";

-- DropTable
DROP TABLE "public"."UNESCOHeritageSite";

-- CreateTable
CREATE TABLE "public"."ImperialCity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keyAttractions" TEXT[],
    "museums" TEXT[],
    "activities" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImperialCity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CoastalCity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keyAttractions" TEXT[],
    "museums" TEXT[],
    "activities" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoastalCity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AtlasMountainRegion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AtlasMountainRegion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AtlasMountainDestination" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keyAttractions" TEXT[],
    "museums" TEXT[],
    "activities" TEXT[],
    "regionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AtlasMountainDestination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RifMountainDestination" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keyAttractions" TEXT[],
    "museums" TEXT[],
    "activities" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RifMountainDestination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."NaturalWonderCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NaturalWonderCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DesertDestination" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keyAttractions" TEXT[],
    "museums" TEXT[],
    "activities" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DesertDestination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."NationalPark" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "wildlife" TEXT[],
    "activities" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NationalPark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AdventureCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdventureCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EventCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "when" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CraftCenter" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "specialties" TEXT[],
    "famousFor" TEXT[],
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CraftCenter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CuisineCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CuisineCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Dish" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ingredients" TEXT[],
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ImperialCity_name_key" ON "public"."ImperialCity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CoastalCity_name_key" ON "public"."CoastalCity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AtlasMountainRegion_name_key" ON "public"."AtlasMountainRegion"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AtlasMountainDestination_name_regionId_key" ON "public"."AtlasMountainDestination"("name", "regionId");

-- CreateIndex
CREATE UNIQUE INDEX "RifMountainDestination_name_key" ON "public"."RifMountainDestination"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NaturalWonderCategory_name_key" ON "public"."NaturalWonderCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DesertDestination_name_key" ON "public"."DesertDestination"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NationalPark_name_key" ON "public"."NationalPark"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AdventureCategory_name_key" ON "public"."AdventureCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "EventCategory_name_key" ON "public"."EventCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Event_name_categoryId_key" ON "public"."Event"("name", "categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "CraftCenter_city_key" ON "public"."CraftCenter"("city");

-- CreateIndex
CREATE UNIQUE INDEX "CuisineCategory_name_key" ON "public"."CuisineCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Dish_name_categoryId_key" ON "public"."Dish"("name", "categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "AdventureActivity_name_categoryId_key" ON "public"."AdventureActivity"("name", "categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "ArchaeologicalSite_name_key" ON "public"."ArchaeologicalSite"("name");

-- CreateIndex
CREATE UNIQUE INDEX "NaturalWonder_name_categoryId_key" ON "public"."NaturalWonder"("name", "categoryId");

-- AddForeignKey
ALTER TABLE "public"."AtlasMountainDestination" ADD CONSTRAINT "AtlasMountainDestination_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "public"."AtlasMountainRegion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."NaturalWonder" ADD CONSTRAINT "NaturalWonder_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."NaturalWonderCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AdventureActivity" ADD CONSTRAINT "AdventureActivity_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."AdventureCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "Event_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."EventCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Dish" ADD CONSTRAINT "Dish_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."CuisineCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
