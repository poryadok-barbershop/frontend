import Image from "next/image";
import banner from "../../../public/images/banner.jpg";
import st from "./Banner.module.scss";
import { SmartLink } from '@/components/smart-link';
import Link from 'next/link';

export const Banner = () => {
  return (
    <section 
      className={st.banner} 
      aria-label='Баннер раздела'
      aria-labelledby="banner" 
    >
      <Image
        className={st.image}
        src={banner}
        alt="Баннер раздела"
        width={1920}
        height={1080}
        priority
      />
      <div className={st.container}>
        <h2 className={st.title} id="banner">
          Это твой 
          <br/>
          новый
          <span> порядок</span>
        </h2>
        <div className={st.buttons}>
          <Link
            href="https://n1094654.yclients.com"
            className={st.appointment}
            target="_blank"
          >
            Записаться
          </Link>
          <SmartLink
            href="#about"
            className={st.more}
            replace
          >
            Узнать больше
          </SmartLink>
        </div>
        <div className={st.bottom}>
          <p className={st.sale}>
            Первый визит со скидкой 20%,
            <br />
            {' '}
            если запишешься онлайн
          </p>
          <p className={st.sale}>
            *сертификат можно приобрести
            <br />
            {' '}
            на кассе барбершопа
          </p>
        </div>
      </div>
    </section>
  );
};
