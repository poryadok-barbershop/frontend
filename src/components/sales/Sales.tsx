import st from './Sales.module.scss';

export const Sales = () => {
  return (
    <section 
      className={st.sales} 
      id='promotions' 
      aria-labelledby="promotions-title" 
      aria-label='Акции барбершопа'
    >
      <h2 className={st.title} id="promotions-title">Акции</h2>
      <div className={st.list}>
        <p className={st.item}>
          Новичкам &mdash; скидка&nbsp;20% на&nbsp;первую стрижку
        </p>
        <p className={st.item}>
          Студентам &mdash; всегда &minus;20% при предъявлении студенческого билета
        </p>
        <p className={st.item}>
          Именинникам &mdash; &laquo;Уход за&nbsp;лицом&raquo; в&nbsp;подарок!
        </p>
      </div>
    </section>
  )
}
