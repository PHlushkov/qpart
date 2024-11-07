import React from 'react'
import AppHeader from '../../widgets/header/ui/AppHeader';

function Home() {
    return (
        <div>
            <AppHeader/>
            <div className='mt-24 text-center px-2'>
                <h2 className="font-bold text-lg">Главная Страница</h2>
                <p>По ТЗ не было сказанно что указывать на главной странице.....</p>
                <p>Для перехода между страницами, можно воспользоваться "бургер" меню и перейти на нужную страницу</p>
            </div>
        </div>
    )
}

export default Home;