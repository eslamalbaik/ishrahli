import React from 'react'
const Slide = ({ image, name, revirew }) => {
    return (
        <section className='grid grid-cols-1 lg:w-[480px] min-xs:w-[85%] max-sm:w-[85%] text-start lg:h-[250px] m-8 bg-white border-2 rounded-2xl border-[--foreground] shadow-xl'>
        <p className='p-8'>{revirew}</p>
        <div className='flex justify-start items-center gap-4 px-4 pb-4'>
          <span
            className='bg-cover bg-center rounded-full border-[3px] border-[--foreground] w-[60px] h-[60px] max-sm:h-[45px] max-sm:w-[45px]'
            style={{ backgroundImage: `url(${image})` }}
          />
          <div>
            <h3 className='font-normal text-base'>{name}</h3>
            <h4>عميل سابق</h4>
          </div>
        </div>
      </section>
    )
}

export default Slide