import type { Metadata } from "next";
import {
  AIRecommendations,
  BirthdayOutfits,
  CustomStudioTeaser,
  DeliveryBanner,
  EventPackages,
  FeaturedCollections,
  HappyKidsGallery,
  HomeHero,
  InstagramGallery,
  NewbornEssentials,
  NewsletterSignup,
  PhotographyTeaser,
  Testimonials,
  TrendingCartoons,
} from "@/components/home/home-sections";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedCollections />
      <NewbornEssentials />
      <BirthdayOutfits />
      <TrendingCartoons />
      <CustomStudioTeaser />
      <PhotographyTeaser />
      <Testimonials />
      <HappyKidsGallery />
      <EventPackages />
      <DeliveryBanner />
      <InstagramGallery />
      <AIRecommendations />
      <NewsletterSignup />
    </>
  );
}
