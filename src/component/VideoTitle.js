import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video mt-28 md-mt-20  px-4 md-px-20 absolute text-white bg-gradient-to-r from-black'>
        <div className='mt-4 md:mt-24 '>
          <h1 className='font-bold text-2xl md:text-6xl'>{title}</h1>
        <p className='hidden lg:block  py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black font-bold mt-2 rounded-lg px-2 md:px-12 p-2 md:p-4 hover:bg-opacity-35'>play</button>
            <button className='bg-gray-500 bg-opacity-35 rounded-lg p-2 px-2 md:px-12 md:p-4  lg:px-12 mx-4'> more info</button>
        </div>
        </div>
    </div>
  )
}

export default VideoTitle