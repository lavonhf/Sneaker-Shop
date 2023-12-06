import { useState } from 'react'
import Slider from '../componen/slider'

export default function Shop() {
    const [onShow, setOnShow] = useState({
        id: 1,
        name: 'Red Nike',
        price: 99.99,
        img: 'src/assets/[removal.ai]_688ca9e1-4bf1-44de-b2be-ced00bdb9b7c-domino-164_6wvehfi-unsplash_V68788.png'
    })

    function handleShow(id, name, img, price) {
        setOnShow({
            id: id,
            name: name,
            price: price,
            img: img
        })
    }

    return <div className="bg-gradient-to-r from-zinc-700 to-neutral-800 pt-24 flex flex-col h-screen overflow-x-hidden">
        <div className="flex flex-col-reverseol justify-center items-center md:flex-row flex-1 h-3/4">
            <div className="w-1/2 flex justify-center items-center">
                <img src={onShow.img} />
            </div>
            <div className="w-1/2 text-white">
                <h1 className='text-3xl'>{onShow.name}</h1>
                <p className='text-xl'>price: $ {onShow.price} dolar</p>
                <button className='bg-zinc-800 hover:bg-zinc-700 rounded-md mt-4 mr-3 w-28 h-12'>Purcase Now</button>
                <button className='bg-zinc-800 hover:bg-zinc-700 rounded-md mt-4 w-28 h-12'>Ask Seller</button>
            </div>
        </div>
        <div>
            <Slider handleShow={handleShow} />
        </div>



    </div>
}