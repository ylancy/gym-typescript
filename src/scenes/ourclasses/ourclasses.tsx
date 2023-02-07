import React from 'react'

type Props = {
    name: string,
    description?: string,
    image: string
}

const Class = ({ name, description, image }: Props) => {
    return (
        <div className='w-[450px] h-[380px] inline-block mx-5 relative'>
            <div className='absolute text-center z-10 flex items-center justify-center whitespace-normal 
            flex-col w-[450px] h-[380px] opacity-0 hover:bg-primary-500 hover:opacity-80 px-5
            text-white transition duration-500'>
                <p className='text-2xl'>{name}</p>
                <p className='mt-5'>{description}</p>
            </div>
            <img src={image} alt='classname' className='h-full w-auto' />
        </div>
    )
}

export default Class;