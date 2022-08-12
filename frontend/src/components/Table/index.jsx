import { useEffect, useState } from 'react'
import { dealsAPI } from '../../api/dealsAPI'
import { Deal } from '../Deal/index.jsx'
import s from './table.module.css'

export const Table = () => {
    const [deals, setDeals] = useState([])
    const [input, setInput] = useState('')
    const [query, setQuery] = useState('')
    const [inputInfoStyle, setInputInfoStyle] = useState('none')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const data = await dealsAPI.getDeals(query)
                console.log(data)
                setDeals(data)
            } catch (e) {
                console.log(e)
            }
            setIsLoading(false)
        }
        if(isLoading===false){
            fetchData()
        }
    }, [query])
 
    const inputHandler = val => {
        setInput(val)

        val.length < 3 && val.length !== 0 ? setInputInfoStyle('block') : (
                setQuery(val),
                setInputInfoStyle('none')
            )
    }

    return (
        <section className={s.section}>
            <div className={s.wrapper}>
                <h2>Тестовое задание RocketSales</h2>
                <div className={s.input_wrapper}>
                    <input
                        className={s.input}
                        type="text"
                        placeholder='Поиск сделок'
                        value={input}
                        onInput={(e)=>inputHandler(e.target.value)}
                    />
                    <p style={{display: inputInfoStyle}} className={s.input_info}>Поиск работает от 3х символов</p>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className={s.col_1}>
                            
                        </th>
                        <th className={s.col_2}>
                            Название
                        </th>
                        <th className={s.col_3}>
                            Статус
                        </th>
                        <th className={s.col_4}>
                            Ответственный
                        </th>
                        <th className={s.col_5}>
                            Дата создания
                        </th>
                        <th className={s.col_6}>
                            Бюджет
                        </th>
                    </tr>
                </thead>
                    {deals === 'Nothing was found' ? (
                    <tbody>
                        <tr>
                            <td className={s.noDeals}>
                                {isLoading ? 'Поиск...' : 'Ничего не найдено...'}
                            </td>
                        </tr>
                    </tbody>
                    ) : (
                        <Deal deals={deals} />
                    )}
            </table>
        </section>
    )
}