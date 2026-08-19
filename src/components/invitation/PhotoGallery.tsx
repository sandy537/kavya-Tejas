import { weddingConfig } from "@/config/wedding";
import { Reveal } from "@/components/ui/Reveal";

export function PhotoGallery() {
  const photos = weddingConfig.gallery;

  return (
    <section id="gallery" className="parchment-scene relative overflow-hidden px-5 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="label-caps text-xs text-gold">జ్ఞాపకాలు · memories</p>
            <h2 className="display-name mt-4 text-4xl text-ink sm:text-5xl">Moments, held forever.</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-ink-soft">
              A few moments from Kavya and Tejas, kept together as part of their wedding story.
            </p>
          </div>
        </Reveal>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={Math.min(index * 0.04, 0.2)} className="mb-4 break-inside-avoid">
              <figure className="foil-frame group relative overflow-hidden rounded-sm border border-gold/20 bg-paper">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="block h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent px-4 pb-4 pt-12 text-xs text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {photo.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
