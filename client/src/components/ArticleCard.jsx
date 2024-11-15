import React from 'react'

import { images } from '../constants'

const ArticleCard = ({ className }) => {
  return (
    <div 
    className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`} 
    >
        <img 
        src={images.Post1Image} 
        alt="title" 
        className="w-full h-auto object-cover object-center md:h-52 lg:h-48 xl:h-60"
        />
        <div className='p-5'>
            <h2 className='font-roboto font-bold text-x1 text-dark-soft'>
                dsmdfk'jasdfasd
            </h2>
            <p className='text-dark-light mt-3 text-sm'>
                amsdfpaksdkfaskd\fasodkf\aks\dkfas
            </p>
            <div className='flex justify-between flex-nowrap items-center mt-6'>
                <div className='flex items-center gap-x-2'>
                    <img src={images.PostProfileImage} className="w-20 h-15" alt='post profile'/>
                    <div className='flex flex-col'>
                        <h4 className='font-bold italic text-dark-soft text-sm'>
                            โหนง ทดสอบ
                        </h4>
                        <div className='flex- items-center gap-x-2'>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <span>02 May</span>
            </div>
        </div>
    </div>
  )
}

export default ArticleCard