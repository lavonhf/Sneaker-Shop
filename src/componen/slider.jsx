import data from '../data/data'

import ScrollContainer from 'react-indiana-drag-scroll'

export default function Slider({ handleShow }) {
    return (
        <ScrollContainer vertical={false}
            className='overflow-x-scroll overflow-y-hidden w-screen' >
            <div className='w-fit h-[17rem] gap-4 flex-none flex flex-row py-4'>
                {data.map((item) => (
                    <div className='w-48 h-[15rem] bg-neutral-500 rounded-md flex flex-col p-3 hover:scale-110'
                        key={item.id} onClick={() => handleShow(item.id, item.name, item.img, item.price)}>
                        <div className=' flex-1 flex items-center '>
                            <img src={item.img} className='w-48' />
                        </div>
                        <h1 className='text-base'>{item.name}</h1>
                        <p>${item.price}</p>
                    </div>
                ))}

            </div>
        </ScrollContainer>)
}