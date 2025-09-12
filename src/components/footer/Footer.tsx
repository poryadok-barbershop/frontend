import st from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={st.footer}>
      <span className={st.info}>
        Набифари Роман Алиевич
        <br/>
        ОГРНИП 325470400084161
        <br/>
        ИНН 470421745290
      </span>
      <span className={st.logo}>Порядок</span>
      <span className={st.copyright}>
        © 2019 Mariano Diez
        <br/>
        Все права защищены
      </span>
    </div>
  )
}
