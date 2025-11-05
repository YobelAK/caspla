import { Hero } from '@/components/homepage/hero';
import { SearchBar } from '@/components/homepage/search-bar';
import { PlatformFeatures } from '@/components/homepage/platform-features';
import { PopularDestinations } from '@/components/homepage/popular-destinations';
import { SpecialOffers } from '@/components/homepage/special-offers';
import { Testimonials } from '@/components/homepage/testimonials';
import { Newsletter } from '@/components/homepage/newsletter';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SearchBar />
      <PlatformFeatures />
      <PopularDestinations />
      <SpecialOffers />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
