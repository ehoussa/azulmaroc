/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `KeyAttraction` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `KeyAttraction` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Museum` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Museum` table. All the data in the column will be lost.
  - Added the required column `regionId` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Activity" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "public"."City" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "regionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."KeyAttraction" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "public"."Museum" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "public"."Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."NaturalWonder" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT,
    "activities" TEXT[],

    CONSTRAINT "NaturalWonder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OasisTown" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keyAttractions" TEXT[],
    "activities" TEXT[],

    CONSTRAINT "OasisTown_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UNESCOHeritageSite" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "UNESCOHeritageSite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ArchaeologicalSite" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "ArchaeologicalSite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Festival" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "month" TEXT,

    CONSTRAINT "Festival_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TraditionalCraft" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT,

    CONSTRAINT "TraditionalCraft_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AdventureActivity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "description" TEXT,

    CONSTRAINT "AdventureActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_key" ON "public"."Region"("name");

-- AddForeignKey
ALTER TABLE "public"."City" ADD CONSTRAINT "City_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "public"."Region"("id") ON DELETE CASCADE ON UPDATE CASCADE;
