import React from 'react'
const Slide = ({ image, name, revirew }) => {
    return (
        <div className='grid grid-cols-1 lg:w-[480px] min-xs:w-[85%] max-sm:w-[85%] text-start lg:h-[250px] m-8 bg-white border-2 rounded-2xl border-[--foreground] shadow-xl'>
        <p className='p-8 max-sm:text-sm'>
                {revirew}
            </p>
            <div className="place-self-start">
            <div className='flex justify-start items-center gap-4 px-4 pb-4'>
                <span className='bg-cover bg-center rounded-full  border-[3px] border-[--foreground] w-[60px] lg:w-[60px] h-[60px] lg:h-[60px] max-sm:h-[45px]  max-sm:w-[45px]' style={{ backgroundImage: `url(${image})` }}>
                </span>
                <div>
                    <h3 className='font-normal text-lg max-sm:text-sm' >{name} </h3>
                    <h4 className='max-sm:text-sm'>عميل سابق</h4>
                </div>
                </div>
                </div>
        </div>
    )
}

export default Slide