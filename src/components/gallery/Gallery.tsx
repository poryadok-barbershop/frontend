/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
"use client";

import Image from "next/image";
import { IMAGES } from "./constants";
import st from "./Gallery.module.scss";

export const Gallery = () => {

  return (
    <section
      className={st.gallery}
      id="gallery"
    >
      <h2 className={st.title}>Галерея</h2>
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
          {/* <button
            type="button"
            className={`${st.button} ${st.left}`}
            aria-label="Предыдущее изображение"
            onClick={prevSlide}
          >
            <svg
              className={st.icon}
              fill="none"
              stroke="#f2f2f2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            className={`${st.button} ${st.right}`}
            aria-label="Следующее изображение"
            onClick={nextSlide}
          >
            <svg
              className={st.icon}
              fill="none"
              stroke="#f2f2f2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button> */}
        </div>
      </div>
    </section>
  );
};
