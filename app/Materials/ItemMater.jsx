import React from 'react'
import dynamic from 'next/dynamic';
const AccordionMater=dynamic(()=>import('./AccordionMater'))
const ItemMater = ({ data , Visible}) => {
    return (
        <div className=" lg:w-[100%]  pt-8">
            <div className=" pt-2 pb-4  text-center mx-auto">
                {data?.slice(0,Visible).map((faq, index) => (
                    <AccordionMater key={index} question={faq.question} answer={faq.answer} />
                ))} 
                <br />
            </div >
        </div >
    )
}

export default ItemMater