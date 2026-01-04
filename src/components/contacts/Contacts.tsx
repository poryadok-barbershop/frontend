import Link from 'next/link';
import st from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <section 
      className={st.contacts} 
      id='contacts' 
      aria-labelledby="contacts-title" 
      aria-label='Контакты барбершопа'
    >
      <div className={st.container}>
        <div className={st.info}>
          <h2 className={st.title} id="contacts-title">Контактная информация</h2>
          <div className={st.text}>
            <p>
              Телефон:
              {" "}
              <Link
                href={'tel:+79112690672'}
                className={st.underline}
                target="_blank"
              >
                +7(911)269-06-72
              </Link>
            </p>
            <p>
              Почта:
              {" "} 
              <Link
                href={'mailto:barbershopporyadok@mail.ru'}
                className={st.underline}
                target="_blank"
              >
                barbershopporyadok@mail.ru
              </Link>
            </p>
            <p>
              Адрес: г. Санкт-Петербург, м. Сенная площадь, ул. Декабристов, 11
            </p>
            <p>
              График работы: с 10:00 до 22:00
            </p>
          </div>
          <Link 
            className={st.button}
            href="https://n1094654.yclients.com"
            target="_blank"
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
