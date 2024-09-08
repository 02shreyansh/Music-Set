import React from 'react'
import Cards from './Cards'
import '../Css/Player.css'
const Player = () => {
    const images={
        crash:"src/assets/images/crash.png",
        kick:"src/assets/images/kick.png",
        snare:"src/assets/images/snare.png",
        tom_1:"src/assets/images/tom1.png",
        tom_2:"src/assets/images/tom2.png",
        tom_3:"src/assets/images/tom3.png",
        tom_4:"src/assets/images/tom4.png",
    };
  return (
    <div className='w-full h-full duration-200  bg-cover bg-center first'>
        <div className="container  mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <Cards title="Crash" images={images.crash}/>
                <Cards title="Kick" images={images.kick}/>
                <Cards title="Snare" images={images.snare}/>
                <Cards title="Tom-1" images={images.tom_1}/>
                <Cards title="Tom-2" images={images.tom_2}/>
                <Cards title="Tom-3" images={images.tom_3}/>
                <Cards title="Tom-4" images={images.tom_4}/>
            </div>
        </div>
    </div>
  )
}

export default Player