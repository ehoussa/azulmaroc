-- AlterTable
ALTER TABLE "public"."activities" ADD COLUMN     "imageURL" TEXT;

-- AlterTable
ALTER TABLE "public"."attractions" ADD COLUMN     "imageURL" TEXT;

-- AlterTable
ALTER TABLE "public"."beaches" ADD COLUMN     "imageURL" TEXT;

-- AlterTable
ALTER TABLE "public"."cities" ADD COLUMN     "imageURL" TEXT;

-- AlterTable
ALTER TABLE "public"."morocco_regions" ADD COLUMN     "HTMLcolor" TEXT,
ADD COLUMN     "imageURL" TEXT;

-- AlterTable
ALTER TABLE "public"."museums" ADD COLUMN     "imageURL" TEXT;
