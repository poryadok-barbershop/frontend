import Link from 'next/link';
import st from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <section className={st.contacts} id='contacts'>
      <div className={st.container}>
        <div className={st.info}>
          <h2 className={st.title}>Контактная информация</h2>
          <p className={st.text}>
            Телефон: <Link href={'tel:+79112690672'}>+7(911)269-06-72</Link>
            <br/>
            Адрес: г. Санкт-Петербург, улица Декабристов, 11
            <br/>
            График работы: с 10:00 до 22:00
          </p>
          <Link 
            className={st.button}
            href="https://n1094654.yclients.com"
          >
            Записаться
          </Link>
        </div>
        <iframe
          className={st.iframe}
          title="Расположение барбершопа"
          src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=25804563179"
          width="560"
          height="400"
          frameBorder="0"
        />
      </div>
    </section>
  )
}
