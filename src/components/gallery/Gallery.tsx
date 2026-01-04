/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */

import Image from "next/image";
import { IMAGES } from "./constants";
import st from "./Gallery.module.scss";

export const Gallery = () => {

  return (
    <section
      className={st.gallery}
      id="gallery"
      aria-labelledby="gallery-title"
      aria-label='Галерея барбершопа'
    >
      <h2 className={st.title} id="gallery-title">Галерея</h2>
      <div className={st.list}>
        <div className={st.images}>
          {IMAGES.map(({ src, alt }, index) => (
            <Image
              key={index}
              src={src}
              alt={alt}
              className={st.image}
              width={1920}
              height={1080}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
