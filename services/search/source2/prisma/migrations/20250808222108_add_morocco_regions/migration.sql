/*
  Warnings:

  - You are about to drop the `AdventureActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AdventureCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArchaeologicalSite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AtlasMountainDestination` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AtlasMountainRegion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CoastalCity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CraftCenter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CuisineCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DesertDestination` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dish` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EventCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ImperialCity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NationalPark` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NaturalWonder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NaturalWonderCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RifMountainDestination` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."AdventureActivity" DROP CONSTRAINT "AdventureActivity_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."AtlasMountainDestination" DROP CONSTRAINT "AtlasMountainDestination_regionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Dish" DROP CONSTRAINT "Dish_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Event" DROP CONSTRAINT "Event_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."NaturalWonder" DROP CONSTRAINT "NaturalWonder_categoryId_fkey";

-- DropTable
DROP TABLE "public"."AdventureActivity";

-- DropTable
DROP TABLE "public"."AdventureCategory";

-- DropTable
DROP TABLE "public"."ArchaeologicalSite";

-- DropTable
DROP TABLE "public"."AtlasMountainDestination";

-- DropTable
DROP TABLE "public"."AtlasMountainRegion";

-- DropTable
DROP TABLE "public"."CoastalCity";

-- DropTable
DROP TABLE "public"."CraftCenter";

-- DropTable
DROP TABLE "public"."CuisineCategory";

-- DropTable
DROP TABLE "public"."DesertDestination";

-- DropTable
DROP TABLE "public"."Dish";

-- DropTable
DROP TABLE "public"."Event";

-- DropTable
DROP TABLE "public"."EventCategory";

-- DropTable
DROP TABLE "public"."ImperialCity";

-- DropTable
DROP TABLE "public"."NationalPark";

-- DropTable
DROP TABLE "public"."NaturalWonder";

-- DropTable
DROP TABLE "public"."NaturalWonderCategory";

-- DropTable
DROP TABLE "public"."RifMountainDestination";

-- CreateTable
CREATE TABLE "public"."morocco_regions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "morocco_regions_pkey" PRIMARY KEY ("id")
);
