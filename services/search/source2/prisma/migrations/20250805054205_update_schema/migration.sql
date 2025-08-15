/*
  Warnings:

  - Added the required column `difficulty` to the `AdventureActivity` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."CraftCenter_city_key";

-- AlterTable
ALTER TABLE "public"."AdventureActivity" ADD COLUMN     "bestSeasons" TEXT[],
ADD COLUMN     "difficulty" TEXT NOT NULL;
