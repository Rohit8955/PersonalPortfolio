import React from 'react'

const CardSkills = () => {
  return (
    <div className='w-[75%] h-[250px] md:w-[40%] border-gray-200 border-[2px] rounded-[10px]'>
                <h1 className='text-center font-[500] md:text-[22px] text-[18px] mt-2'>Frontend Development</h1>
                <div className='flex items-center justify-center mt-3'>
                    <div className='grid grid-cols-2 md:gap-x-[150px]'>
                        <div className='flex flex-col text-[14px]'>
                            <div className='flex gap-3 items-center'><i className="fa-solid fa-circle-check text-black"></i>
                            <h1 className='font-[600] text-black'>HTML</h1></div>
                            <h1 className='text-[12px]'>Advanced</h1>
                        </div>
                        <div className='flex flex-col text-[14px]'>
                            <div className='flex gap-3 items-center'><i className="fa-solid fa-circle-check text-black"></i>
                            <h1 className='font-[600] text-black'>CSS</h1></div>
                            <h1 className='text-[12px]'>Advanced</h1>
                        </div>
                        <div className='flex flex-col text-[14px]'>
                            <div className='flex gap-3 items-center'><i className="fa-solid fa-circle-check text-black"></i>
                            <h1 className='font-[600] text-black'>Tailwind CSS</h1></div>
                            <h1 className='text-[12px]'>Intermediate</h1>
                        </div>
                        <div className='flex flex-col text-[14px]'>
                            <div className='flex gap-3 items-center'><i className="fa-solid fa-circle-check text-black"></i>
                            <h1 className='font-[600] text-black'>Javascript</h1></div>
                            <h1 className='text-[12px]'>Intermediate</h1>
                        </div>
                        <div className='flex flex-col text-[14px]'>
                            <div className='flex gap-3 items-center'><i className="fa-solid fa-circle-check text-black"></i>
                            <h1 className='font-[600] text-black'>Typescript</h1></div>
                            <h1 className='text-[12px]'>Intermediate</h1>
                        </div>
                        <div className='flex flex-col text-[14px]'>
                            <div className='flex gap-3 items-center'><i className="fa-solid fa-circle-check text-black"></i>
                            <h1 className='font-[600] text-black'>React</h1></div>
                            <h1 className='text-[12px]'>Advanced</h1>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default CardSkills