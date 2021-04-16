import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
function Cards() {
    return (
        <div className='cards'>

            <h1>Ready to Explore?</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg'
                            text='Welcome to Spain! Spanish - Bienvenido a España'
                            label='Spain'
                            path='/Spain'
                        />
                        <CardItem
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png'
                            text='Welcome to Scotland! Scottish Gaethic - Fàilte gu Alba'
                            path='/scotland'
                            label='Scotland'
                        />
                        <CardItem
                            src='https://cdn.britannica.com/49/1049-004-AE4BAD3E/Flag-Greece.jpg'
                            text='Welcome to Greece! Greek - Καλως ηρθες στην ΕΛΛΑΔΑ'
                            label='Greece'
                            path='/greece'
                        />
                        <CardItem
                            src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'
                            text='Welcome to India! Hindi - भारत में आपका स्वागत है'
                            path='/india'
                            label='India'
                        />
                        <CardItem
                            src='https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png'
                            text='Welcome to Italy! Italian - Benvenuto in Italia'
                            path='/italy'
                            label='Italy'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'
                            text='Welcome to United States of America!'
                            path='/usa'
                            label='USA'
                        />
                        <CardItem
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/255px-Flag_of_Morocco.svg.png'
                            text='Welcome to Morocco! Arabic - مرحبا بك في المغرب'
                            label='Morocco'
                            path='/morocco'
                        />
                        <CardItem
                            src='https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png'
                            text='Welcome to Sweden! Swedish - Välkommen till Sverige'
                            label='Sweden'
                            path='/sweden'
                        />
                        <CardItem
                            src='https://www.countryflags.com/wp-content/uploads/thailand-flag-png-large.png'
                            text='Welcome to Thailand! Thai - ยินดีต้อนรับสู่ประเทศไทย'
                            label='Thailand'
                            path='/thailand'
                        />
                        <CardItem
                            src='https://www.countryflags.com/wp-content/uploads/finland-flag-png-large.png'
                            text='Welcome to Finland! Finnish - Tervetuloa Suomeen'
                            label='Finland'
                            path='/finland'
                        />
                    </ul>
                    <ul className='cards__items'>
                            <CardItem
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png'
                                text='Welcome to Denmark! Danish - Velkommen til Danmark'
                                path='/denmark'
                                label='Denmark'
                            />
                            <CardItem
                                src='https://cdn.britannica.com/27/4227-004-B2E23E61/Flag-South-Africa.jpg'
                                text='Welcome South Africa! Zulu, Xhosa'
                                path='/south africa'
                                label='South Africa'
                            />
                            <CardItem
                                src='https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg'
                                text='Welcome to Japan! Japanese - 日本へようこそ'
                                path='/japan'
                                label='Japan'
                            />
                            <CardItem
                                src='https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg'
                                text='Welcome to Malaysia! Malay - Selamat datang ke Malaysia'
                                path='/malaysia'
                                label='Malaysia'
                            />
                        <CardItem
                            src='https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png'
                            text='Welcome to Brazil! Malay - Bem vindo ao Brasil'
                            path='/brazil'
                            label='Brazil'
                        />
                    </ul>


                </div>
            </div>

        </div>
    );
}

export default Cards;