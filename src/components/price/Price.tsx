/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { Fragment } from 'react';
import { BARBERS, SERVICES } from './constants';
import st from './Price.module.scss';

export const Price = () => {
  return (
    <section className={st.prices} id='price'>
      <h2 className={st.title}>Услуги и цены</h2>
      <div>
        <div className={st.table}>
          <div/>
          {BARBERS.map((barber) => (
            <div key={barber} className={st.barber}>{barber}</div>
          ))}
        </div>
        {Object.entries(SERVICES).map(([category, services]) => (
          <div
            key={category} 
            className={st.category}
          >
            <h3 className={st.subtitle}>{category}</h3>
            <div className={st.table}>
              {Object.entries(services).map(([service, prices]) => (
                <Fragment key={service}>
                  {
                    service === "Порядок 2.0" 
                      ? 
                        <div className={st.poryadok}>
                          <span>Порядок 2.0</span>
                          <span className={st.description}>борода + уход за лицом</span>
                        </div> 
                      :
                    service === "Порядок 3.0" 
                      ? 
                        <div className={st.poryadok}>
                          <span>Порядок 3.0</span>
                          <span className={st.description}>стрижка + борода + уход за лицом</span>
                        </div> 
                      :
                    <div className={st.item}>{service}</div>
                  }
                  {prices.map((price, index) => (
                    <div key={`${price}-${index}`} className={st.price}>{price}</div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
