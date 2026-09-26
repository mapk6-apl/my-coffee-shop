import { Text } from '../Text/Text'
import coffeeBeans from '../../assets/coffee-and-beans.png'
export const MoreInfo = () => {
    return (
        <div id='about-us' className='more-info'>
            <Text variant='h2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <Text variant='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
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
