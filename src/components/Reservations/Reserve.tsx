import React from 'react'
import { Text } from '../Text/Text'

export const Reserve = () => {
    return (
        <div className='reservations'>
            <Text variant='h3'>LET'S TALK</Text>
            <div id='reservations-2'>
                <Text variant='h2'>Want to Reserve a Table?</Text>
                <button type="button">Contact Now</button>
            </div>
            <hr id='horizontal-divider'/>
            <Text variant='p'>If you would like to reserve a table, feel free to click the contact now button above to get in touch with us so we can make the reservations for you!</Text>
            
        </div>
    )
}
