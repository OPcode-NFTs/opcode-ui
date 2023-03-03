import React from 'react'
import img120 from '../assets/img120.svg'
import img66k from '../assets/img66.svg'
import img1075 from '../assets/img1075.svg'
import img1009k from '../assets/img1009k.svg'
import img12 from '../assets/img12.svg'


const DataBar = () => {
    return (
        <div className='databar-wrapper'>
            <div className='databar'>
                <div>
                <img src={img120} alt='img120' />
                <p>Items</p>
                </div>
                <div>
                <img src={img66k} alt='img66k' />
                <p>Owners</p>
                </div>
                <div>
                <img src={img1009k} alt='img1009k' />
                <p>Total Volume</p>
                </div>
                <div>
                <img src={img1075} alt='img1075' />
                <p>Total Volume</p>
                </div>
                <div>
                <img src={img12} alt='img12' />
                <p>Best Offer</p>
                </div>
            </div>
            <div className='data-text-wrapper'>
            <div className='data-text'>
            </div>
            </div>
        </div>
    )
}

export default DataBar
