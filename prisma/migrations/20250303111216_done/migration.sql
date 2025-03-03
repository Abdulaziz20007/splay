/*
  Warnings:

  - You are about to drop the column `audioTrackId` on the `audio` table. All the data in the column will be lost.
  - You are about to drop the column `contentId` on the `audio` table. All the data in the column will be lost.
  - You are about to drop the column `languageId` on the `audio_tracks` table. All the data in the column will be lost.
  - You are about to drop the column `paymentMethodId` on the `billing_history` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionId` on the `billing_history` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `billing_history` table. All the data in the column will be lost.
  - You are about to drop the column `parentCategoryId` on the `categories` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `category_content` table. All the data in the column will be lost.
  - You are about to drop the column `contentId` on the `category_content` table. All the data in the column will be lost.
  - You are about to drop the column `audioTrackId` on the `content_audio` table. All the data in the column will be lost.
  - You are about to drop the column `contentId` on the `content_audio` table. All the data in the column will be lost.
  - You are about to drop the column `contentId` on the `content_genres` table. All the data in the column will be lost.
  - You are about to drop the column `genreId` on the `content_genres` table. All the data in the column will be lost.
  - You are about to drop the column `audioId` on the `contents` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `devices` table. All the data in the column will be lost.
  - You are about to drop the column `audioTrackId` on the `episode_audio` table. All the data in the column will be lost.
  - You are about to drop the column `episodeId` on the `episode_audio` table. All the data in the column will be lost.
  - You are about to drop the column `seasonId` on the `episodes` table. All the data in the column will be lost.
  - You are about to drop the column `genreId` on the `genre_images` table. All the data in the column will be lost.
  - You are about to drop the column `languageId` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `contentId` on the `ratings` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `ratings` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `search_history` table. All the data in the column will be lost.
  - You are about to drop the column `seriesId` on the `seasons` table. All the data in the column will be lost.
  - You are about to drop the column `contentId` on the `series` table. All the data in the column will be lost.
  - You are about to drop the column `planId` on the `subscriptions` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `subscriptions` table. All the data in the column will be lost.
  - You are about to drop the column `contentId` on the `watch_history` table. All the data in the column will be lost.
  - You are about to drop the column `episodeId` on the `watch_history` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `watch_history` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[audio_track_id]` on the table `audio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[content_id]` on the table `series` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `audio_track_id` to the `audio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content_id` to the `audio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language_id` to the `audio_tracks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_method_id` to the `billing_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscription_id` to the `billing_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `billing_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_category_id` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `category_content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content_id` to the `category_content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `audio_track_id` to the `content_audio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content_id` to the `content_audio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content_id` to the `content_genres` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre_id` to the `content_genres` table without a default value. This is not possible if the table is not empty.
  - Added the required column `audio_id` to the `contents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `devices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `audio_track_id` to the `episode_audio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `episode_id` to the `episode_audio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `season_id` to the `episodes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre_id` to the `genre_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language_id` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content_id` to the `ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_id` to the `ratings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_id` to the `search_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `series_id` to the `seasons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content_id` to the `series` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plan_id` to the `subscriptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_id` to the `subscriptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content_id` to the `watch_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `episode_id` to the `watch_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_id` to the `watch_history` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "audio" DROP CONSTRAINT "audio_audioTrackId_fkey";

-- DropForeignKey
ALTER TABLE "audio" DROP CONSTRAINT "audio_contentId_fkey";

-- DropForeignKey
ALTER TABLE "audio_tracks" DROP CONSTRAINT "audio_tracks_languageId_fkey";

-- DropForeignKey
ALTER TABLE "billing_history" DROP CONSTRAINT "billing_history_paymentMethodId_fkey";

-- DropForeignKey
ALTER TABLE "billing_history" DROP CONSTRAINT "billing_history_subscriptionId_fkey";

-- DropForeignKey
ALTER TABLE "billing_history" DROP CONSTRAINT "billing_history_userId_fkey";

-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_parentCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "category_content" DROP CONSTRAINT "category_content_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "category_content" DROP CONSTRAINT "category_content_contentId_fkey";

-- DropForeignKey
ALTER TABLE "content_audio" DROP CONSTRAINT "content_audio_audioTrackId_fkey";

-- DropForeignKey
ALTER TABLE "content_audio" DROP CONSTRAINT "content_audio_contentId_fkey";

-- DropForeignKey
ALTER TABLE "content_genres" DROP CONSTRAINT "content_genres_contentId_fkey";

-- DropForeignKey
ALTER TABLE "content_genres" DROP CONSTRAINT "content_genres_genreId_fkey";

-- DropForeignKey
ALTER TABLE "contents" DROP CONSTRAINT "contents_audioId_fkey";

-- DropForeignKey
ALTER TABLE "devices" DROP CONSTRAINT "devices_userId_fkey";

-- DropForeignKey
ALTER TABLE "episode_audio" DROP CONSTRAINT "episode_audio_audioTrackId_fkey";

-- DropForeignKey
ALTER TABLE "episode_audio" DROP CONSTRAINT "episode_audio_episodeId_fkey";

-- DropForeignKey
ALTER TABLE "episodes" DROP CONSTRAINT "episodes_seasonId_fkey";

-- DropForeignKey
ALTER TABLE "genre_images" DROP CONSTRAINT "genre_images_genreId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_languageId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_userId_fkey";

-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_contentId_fkey";

-- DropForeignKey
ALTER TABLE "ratings" DROP CONSTRAINT "ratings_profileId_fkey";

-- DropForeignKey
ALTER TABLE "search_history" DROP CONSTRAINT "search_history_profileId_fkey";

-- DropForeignKey
ALTER TABLE "seasons" DROP CONSTRAINT "seasons_seriesId_fkey";

-- DropForeignKey
ALTER TABLE "series" DROP CONSTRAINT "series_contentId_fkey";

-- DropForeignKey
ALTER TABLE "subscriptions" DROP CONSTRAINT "subscriptions_planId_fkey";

-- DropForeignKey
ALTER TABLE "subscriptions" DROP CONSTRAINT "subscriptions_profileId_fkey";

-- DropForeignKey
ALTER TABLE "watch_history" DROP CONSTRAINT "watch_history_contentId_fkey";

-- DropForeignKey
ALTER TABLE "watch_history" DROP CONSTRAINT "watch_history_episodeId_fkey";

-- DropForeignKey
ALTER TABLE "watch_history" DROP CONSTRAINT "watch_history_profileId_fkey";

-- DropIndex
DROP INDEX "audio_audioTrackId_key";

-- DropIndex
DROP INDEX "series_contentId_key";

-- AlterTable
ALTER TABLE "audio" DROP COLUMN "audioTrackId",
DROP COLUMN "contentId",
ADD COLUMN     "audio_track_id" INTEGER NOT NULL,
ADD COLUMN     "content_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "audio_tracks" DROP COLUMN "languageId",
ADD COLUMN     "language_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "billing_history" DROP COLUMN "paymentMethodId",
DROP COLUMN "subscriptionId",
DROP COLUMN "userId",
ADD COLUMN     "payment_method_id" INTEGER NOT NULL,
ADD COLUMN     "subscription_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "parentCategoryId",
ADD COLUMN     "parent_category_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "category_content" DROP COLUMN "categoryId",
DROP COLUMN "contentId",
ADD COLUMN     "category_id" INTEGER NOT NULL,
ADD COLUMN     "content_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "content_audio" DROP COLUMN "audioTrackId",
DROP COLUMN "contentId",
ADD COLUMN     "audio_track_id" INTEGER NOT NULL,
ADD COLUMN     "content_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "content_genres" DROP COLUMN "contentId",
DROP COLUMN "genreId",
ADD COLUMN     "content_id" INTEGER NOT NULL,
ADD COLUMN     "genre_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "contents" DROP COLUMN "audioId",
ADD COLUMN     "audio_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "devices" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "episode_audio" DROP COLUMN "audioTrackId",
DROP COLUMN "episodeId",
ADD COLUMN     "audio_track_id" INTEGER NOT NULL,
ADD COLUMN     "episode_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "episodes" DROP COLUMN "seasonId",
ADD COLUMN     "season_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "genre_images" DROP COLUMN "genreId",
ADD COLUMN     "genre_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "languageId",
DROP COLUMN "userId",
ADD COLUMN     "language_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ratings" DROP COLUMN "contentId",
DROP COLUMN "profileId",
ADD COLUMN     "content_id" INTEGER NOT NULL,
ADD COLUMN     "profile_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "search_history" DROP COLUMN "profileId",
ADD COLUMN     "profile_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "seasons" DROP COLUMN "seriesId",
ADD COLUMN     "series_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "series" DROP COLUMN "contentId",
ADD COLUMN     "content_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "subscriptions" DROP COLUMN "planId",
DROP COLUMN "profileId",
ADD COLUMN     "plan_id" INTEGER NOT NULL,
ADD COLUMN     "profile_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "watch_history" DROP COLUMN "contentId",
DROP COLUMN "episodeId",
DROP COLUMN "profileId",
ADD COLUMN     "content_id" INTEGER NOT NULL,
ADD COLUMN     "episode_id" INTEGER NOT NULL,
ADD COLUMN     "profile_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "audio_audio_track_id_key" ON "audio"("audio_track_id");

-- CreateIndex
CREATE UNIQUE INDEX "series_content_id_key" ON "series"("content_id");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billing_history" ADD CONSTRAINT "billing_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billing_history" ADD CONSTRAINT "billing_history_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "subscriptions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billing_history" ADD CONSTRAINT "billing_history_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "payment_methods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "subscription_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_content" ADD CONSTRAINT "category_content_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_content" ADD CONSTRAINT "category_content_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_category_id_fkey" FOREIGN KEY ("parent_category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contents" ADD CONSTRAINT "contents_audio_id_fkey" FOREIGN KEY ("audio_id") REFERENCES "audio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_audio" ADD CONSTRAINT "content_audio_audio_track_id_fkey" FOREIGN KEY ("audio_track_id") REFERENCES "audio_tracks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_audio" ADD CONSTRAINT "content_audio_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audio" ADD CONSTRAINT "audio_audio_track_id_fkey" FOREIGN KEY ("audio_track_id") REFERENCES "audio_tracks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audio" ADD CONSTRAINT "audio_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audio_tracks" ADD CONSTRAINT "audio_tracks_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "genre_images" ADD CONSTRAINT "genre_images_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_genres" ADD CONSTRAINT "content_genres_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_genres" ADD CONSTRAINT "content_genres_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "devices" ADD CONSTRAINT "devices_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "search_history" ADD CONSTRAINT "search_history_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watch_history" ADD CONSTRAINT "watch_history_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watch_history" ADD CONSTRAINT "watch_history_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watch_history" ADD CONSTRAINT "watch_history_episode_id_fkey" FOREIGN KEY ("episode_id") REFERENCES "episodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "series" ADD CONSTRAINT "series_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seasons" ADD CONSTRAINT "seasons_series_id_fkey" FOREIGN KEY ("series_id") REFERENCES "series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "episodes" ADD CONSTRAINT "episodes_season_id_fkey" FOREIGN KEY ("season_id") REFERENCES "seasons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "episode_audio" ADD CONSTRAINT "episode_audio_episode_id_fkey" FOREIGN KEY ("episode_id") REFERENCES "episodes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "episode_audio" ADD CONSTRAINT "episode_audio_audio_track_id_fkey" FOREIGN KEY ("audio_track_id") REFERENCES "audio_tracks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
