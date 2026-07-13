import React from 'react'
import { Text } from '../Text/Text'
import coffeeBeans from '../../assets/coffee-beans.png'
export const MoreInfo = () => {
    return (
        <div className='more-info'>
            <Text variant='h2'>The Best In Town?</Text>
            <Text variant='p'>Want to join our coffee family? Click the button below to learn more about us.</Text>
            <div id='learn-more'>
                <button type="button">Learn More</button>
            </div>
            <div id='coffee-spilled-beans'>
                <img src={coffeeBeans} alt='Coffee with Beans Spilled' />
                <Text variant='h3'>$2.50</Text>
            </div>
        </div>
    )
}
