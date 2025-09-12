import Image from "next/image";
import philosophy from "../../../public/images/9.jpg";
import { Divider } from "../divider";
import st from "./Philosophy.module.scss";

export const Philosophy = () => {
  return (
    <section className={st.philosophy} id='about'>
      <h2 className={st.title}>О нас</h2>
      <div className={st.container}>
        <div className={st.description}>
          <h2 className={st.subtitle}>Наш подход к работе</h2>
          <Divider className={st.divider}/>
          <p className={st.text}>
            "Порядок" - это команда опытных барберов, создающих уникальный мужской стиль. Мы предлагаем профессиональные стрижки и уход, учитывая вашу индивидуальность. Ценим ваше время и предлагаем доступный ценник. Здесь вы найдете свой "порядок" - стиль, уверенность и качество в каждой детали.
          </p>
        </div>
        <Image
          className={st.image}
          src={philosophy} 
          alt={"Философия барбершопа"} 
          width={1920} 
          height={1920}
        />
      </div>
    </section>
  );
};
