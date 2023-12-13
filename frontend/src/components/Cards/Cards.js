import React from 'react';
import './Cards.css';
import CardItem from '../CardItem.js';
import strawberries from "../images/strawberries.jpeg";
import nutrition from "../images/nutrition.jpg";
import sensory from "../images/sensory.jpg";
import convenience from "../images/convenience.jpg";
import sustainable from "../images/sustainable.jpg";


function Cards() {
    return (
        <div>
            <div className='cards'>
                <h1>Food Health And Safety? - We Keep your Food Safe & Fresh</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src={nutrition}
                                text=' Read up on the innovations seeking to make the food sector healthier'
                                label='Nutrition'
                                path='/signup'
                            />
                            <CardItem
                                src={sensory}
                                text='Make sense of product perception'
                                label='Sensory'
                                path='/signup'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src={convenience}
                                text='Discover how to eat food for maximum benefit, how to fast & how to maintain high energy'
                                label='Convenience'
                                path='/signup'
                            />
                            <CardItem
                                src={strawberries}
                                text='Food safety – a critical matter for your brand’s reputation'
                                label='Food Safety'
                                path='/signup'
                            />
                            <CardItem
                                src={sustainable}
                                text='What is Sustainable Food? A Guide to Eating More Sustainably'
                                label='Sustainable'
                                path='/signup'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;