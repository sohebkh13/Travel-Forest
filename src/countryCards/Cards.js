// import React from "react";
// import CardItem from "./CardItem";
// import "./Cards.css"
//
// function Cards(){
//     return(
//         <div className="cards">
//             <h1>Check out the following Countries</h1>
//             <div className="cards-container">
//                 <div className="cards-wrapper">
//                     <ul className="cards-items">
//                         <CardItem
//                             src='https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg'
//                             text='Welcome to Spain'
//                             label='Adventure'
//                             path='/Spain'
//                         />
//                         <CardItem
//                             src='https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg'
//                             text='Welcome to Spain'
//                             label='Adventure'
//                             path='/Spain'
//                         />
//
//                     </ul>
//                     <ul className="cards-items">
//                         <CardItem
//                             src='https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg'
//                             text='Welcome to Spain'
//                             label='Adventure'
//                             path='/Spain'
//                         />
//                         <CardItem
//                             src='https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg'
//                             text='Welcome to Spain'
//                             label='Adventure'
//                             path='/Spain'
//                         />
//                         <CardItem
//                             src='https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg'
//                             text='Welcome to Spain'
//                             label='Adventure'
//                             path='/Spain'
//                         />
//
//                     </ul>
//
//
//                 </div>
//             </div>
//         </div>
//     )
//
// }
// export default Cards

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/Spain'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;