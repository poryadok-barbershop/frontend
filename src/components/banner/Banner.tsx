import Image from "next/image";
import Link from "next/link";
import banner from "../../../public/images/banner.jpg";
import st from "./Banner.module.scss";

export const Banner = () => {
  return (
    <section className={st.banner}>
      <Image
        className={st.image}
        src={banner}
        alt="Баннер раздела"
        width={1920}
        height={1080}
      />
      <div className={st.container}>
        <h2 className={st.title}>
          Это твой 
          <br/>
          новый
          <span> порядок</span>
        </h2>
        <div className={st.buttons}>
          <Link
            href="https://n1094654.yclients.com"
            className={st.appointment}
          >
            Записаться
          </Link>
          <Link
            href="#about"
            className={st.more}
          >
            Узнать больше
          </Link>
        </div>
        <p>
          Запишись онлайн и получи скидку 20%
          <br className={st.br}/>
          {' на первое посещение'}
        </p>
      </div>
    </section>
  );
};
