import st from './Sales.module.scss';

export const Sales = () => {
  return (
    <section className={st.sales} id='promotions'>
      <h2 className={st.title}>Акции</h2>
      <div className={st.list}>
        <p className={st.item}>Новеньким - скидка 20% на первую стрижку</p>
        <p className={st.item}>Студентам - всегда -20% при предъявлении студенческого билета</p>
        <p className={st.item}>Именинникам - "Уход за лицом" в подарок!</p>
      </div>
    </section>
  )
}
