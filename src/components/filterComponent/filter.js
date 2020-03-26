import React, {useState} from 'react';
import css from './filter.module.css'
import {Link} from "react-router-dom";
import {DatePickerInput} from "rc-datepicker";

const Filter = props => {
    console.log(props)
    const [date,setDate] = useState('');
    const [todate,setTodate] = useState('');
    const [city,setCity] =useState('')
    const [rooms,setRooms] =useState('')
    const [priceFrom,setPriceFrom] = useState('')
    const [priceTo,setPriceTo] = useState('')
    const onDataChange = (jsDate,dateString) => {
        console.log(jsDate,dateString)
    }
    return (
        <div className={css.filterWrapper}>
            <div className={css.filterWrapperSecond}>
                <div className={css.links}>
                    <Link to="/">Аренда</Link>
                    <Link to="/">Новостройка</Link>
                </div>
                <div className={css.inputsWrapper}>
                    <select value={city} onChange={(e)=>setCity(e.target.value)} name="find_by_city" >
                        <option value="">Все регионы</option>
                        <option value="1">Чуй</option>
                        <option value="2">Ош</option>
                        <option value="3">Нарын</option>
                        <option value="4">Талас</option>
                        <option value="5">Иссык-Куль</option>
                        <option value="6">Джалал-Абад</option>
                        <option value="7">Баткен</option>
                    </select>
                    <div className={css.dateWrapper}>
                        <DatePickerInput
                            placeholder={'От какого числа занято'}
                            onChange={onDataChange}
                            value={date}
                            className='my-custom-datepicker-component'
                            onHide={()=>0}
                            showOnInputClick={true}
                        />
                        <DatePickerInput
                            placeholder={'От какого числа занято'}
                            onChange={onDataChange}
                            value={todate}
                            className='my-custom-datepicker-component'
                            onHide={()=>0}
                            showOnInputClick={true}
                        />
                    </div>
                    <select value={rooms} onChange={(e)=>setRooms(e.target.value)} >
                        <option value="">Количество комнат</option>
                        <option value="1">1 комнат</option>
                        <option value="2">2 комнат</option>
                        <option value="3">3 комнат</option>
                        <option value="4">4 комнат</option>
                        <option value="5">5 комнат</option>
                        <option value="6">6 комнат</option>
                    </select>
                    <div className={css.dateWrapper}>
                        <input value={priceFrom} onChange={e=>setPriceFrom(e.target.value)} type="text" placeholder={'Цена от'}/>
                        <input value={priceTo} onChange={e=>setPriceTo(e.target.value)} type="text" placeholder={'Цена до'}/>
                    </div>
                </div>
                <div className={css.moreWrapper}>
                    <div className={css.moreSettings}>
                        {/*<img src="../../img/moreSettings.png" alt="settings"/>*/}
                        <p>Дополнительные параметры</p>
                    </div>
                    <div className={css.findButton}>
                        <div className={css.show}>
                            <Link to={"/map"}>Показать на карте</Link>
                        </div>
                        <div className={css.search}>
                            <Link onClick={()=>props.setFilterData({city,rooms,priceFrom,priceTo})} to="/map">Начать поиск</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Filter;



































/*
*
* Рыбалов Арсений Сергеевич
1. 0
2. 1
3. 1
4. 1
5. 0.5
6. 0
7. 0
8. 1
9. 1
10. 0.5
11. 1
12. 1
13. 1
14. 0
15. 0.5
16. 1
17. 1
18. 0
19. 1
20. 0
21. 1
22. 1
23. 0
24. 1
25. 1
26. 0
27. 0.5
====17


Герасько Вадим


1. 1
2. 1
3. 1
4. 0
5. 0.5
6. 0
7. 0
8. 0.5
9. 1
10. 1
11. 1
12. 0
13. 0.5
14. 1
15. 1
16. 1
17. 0.5
18. 0
19. 0
20. 0.5
21. 1
22. 0.5
23. 0
24. 1
25. 1
26. 0
27. 1
====16





*
*
* */