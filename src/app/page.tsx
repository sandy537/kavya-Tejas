import { OpeningScene } from "@/components/invitation/OpeningScene";
import { HeroScene } from "@/components/invitation/HeroScene";
import { StorySection } from "@/components/invitation/StorySection";
import { CelebrationsIntro } from "@/components/invitation/CelebrationsIntro";
import { CeremonyScene } from "@/components/invitation/CeremonyScene";
import { SaptapadiSection } from "@/components/invitation/SaptapadiSection";
import { Countdown } from "@/components/invitation/Countdown";
import { VenueSection } from "@/components/invitation/VenueSection";
import { PhotoGallery } from "@/components/invitation/PhotoGallery";
import { CoupleIntro } from "@/components/invitation/CoupleIntro";
import { FloatingControls } from "@/components/ui/FloatingControls";
import { ScrollThread } from "@/components/ui/ScrollThread";

export default function Page() {
  return (
    <>
      <OpeningScene />

      <main className="relative">
        <HeroScene />
        <StorySection />
        <CelebrationsIntro />
        <SaptapadiSection />
        <CeremonyScene ceremony="haldi" />
        <CeremonyScene ceremony="reception" />
        <CeremonyScene ceremony="muhurtham">
          <Countdown tone="light" />
        </CeremonyScene>
        <PhotoGallery />
        <VenueSection />
        <CoupleIntro />
      </main>

      <ScrollThread />
      <FloatingControls />
    </>
  );
}
