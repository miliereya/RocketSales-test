import s from '../Table/table.module.css'

export const Deal = (deals) => {
    //Получаем массив через пропсы и заполняем таблицу
    
    return (
        <tbody>
            {deals.deals.map(deal => {
                let { id, name, price, created_at, responsible_user_id, closed_at} = deal
                if(responsible_user_id===8440015) {
                    responsible_user_id = 'Даниил Шведов'
                }
                
                closed_at === null ? closed_at = 'Не закрыта' : closed_at = 'Закрыта'

                //Смена формата даты
                created_at = new Date(created_at * 1000).toLocaleDateString("ru-RU")

                return (
                    <tr key={id}>
                        <td className={s.col_1}>
                            
                        </td>
                        <td className={s.col_2}>
                            <div className={s.name}>
                                {name}
                            </div>
                        </td>
                        <td style={{color: '#EB2553'}} className={s.col_3}>
                            {closed_at}
                        </td>
                        <td className={s.col_4}>
                            <div className={s.responsible}>
                                {responsible_user_id}
                            </div>
                        </td>
                        <td className={s.col_5}>
                            <div className={s.date}>
                                {created_at}
                            </div>
                        </td>
                        <td className={s.col_6}>
                        <div className={s.price}>
                                {price + ' ₽'}
                            </div>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}