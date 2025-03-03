import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AdminModule } from "./admin/admin.module";
import { UserModule } from "./user/user.module";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from "./profile/profile.module";
import { LanguageModule } from "./language/language.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { SubscriptionPlansModule } from "./subscription-plans/subscription-plans.module";
import { BillingHistoryModule } from "./billing-history/billing-history.module";
import { PaymentMethodModule } from "./payment-method/payment-method.module";
import { CategoryModule } from "./category/category.module";
import { CategoryContentModule } from "./category-content/category-content.module";
import { GenresModule } from "./genres/genres.module";
import { GeneralImagesModule } from "./general-images/general-images.module";
import { ContentGenresModule } from "./content-genres/content-genres.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AdminModule,
    UserModule,
    PrismaModule,
    AuthModule,
    ProfileModule,
    LanguageModule,
    SubscriptionModule,
    SubscriptionPlansModule,
    BillingHistoryModule,
    PaymentMethodModule,
    CategoryModule,
    CategoryContentModule,
    GenresModule,
    GeneralImagesModule,
    ContentGenresModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
