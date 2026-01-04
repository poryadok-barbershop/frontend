import Image from "next/image";
import philosophy from "../../../public/images/9.jpg";
import { Divider } from "../divider";
import st from "./Philosophy.module.scss";

export const Philosophy = () => {
  return (
    <section
      className={st.philosophy}
      id='about'
      aria-labelledby="about-title"
      aria-label='О нас'
    >
      <h2 className={st.title} id="about-title">О нас</h2>
      <div className={st.container}>
        <div className={st.description}>
          <h2 className={st.subtitle}>Наш подход к&nbsp;работе</h2>
          <Divider className={st.divider}/>
          <p className={st.text}>
            &laquo;Порядок&raquo;&nbsp;&mdash; это команда опытных барберов, создающих уникальный мужской стиль. Мы&nbsp;предлагаем профессиональные стрижки и&nbsp;уход, учитывая вашу индивидуальность. Ценим ваше время и&nbsp;предлагаем доступный ценник. Здесь вы&nbsp;найдете свой &laquo;порядок&raquo;&nbsp;&mdash; стиль, уверенность и&nbsp;качество в&nbsp;каждой детали.
          </p>
        </div>
        <Image
          className={st.image}
          src={philosophy} 
          alt={"Философия барбершопа"} 
          width={1920} 
          height={1920}
          priority
        />
      </div>
    </section>
  );
};
