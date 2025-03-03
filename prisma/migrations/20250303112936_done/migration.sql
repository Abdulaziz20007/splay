-- AlterTable
ALTER TABLE "profiles" ALTER COLUMN "avatar" DROP NOT NULL,
ALTER COLUMN "is_active" SET DEFAULT false,
ALTER COLUMN "language_id" SET DEFAULT 1;
