import React from 'react'
import Cards from './Cards'
import '../Css/Player.css'
const Player = () => {
    const images={
        crash:"./assets/images/crash.png",
        kick:"./assets/images/kick.png",
        snare:"./assets/images/snare.png",
        tom_1:"./assets/images/tom1.png",
        tom_2:"./assets/images/tom2.png",
        tom_3:"./assets/images/tom3.png",
        tom_4:"./assets/images/tom4.png",
    };
    const Sounds={
        crash:"./assets/Sounds/crash.mp3",
        kick:"./assets/Sounds/kick-bass.mp3",
        snare:"./assets/Sounds/snare.mp3",
        tom_1:"./assets/Sounds/tom-1.mp3",
        tom_2:"./assets/Sounds/tom-2.mp3",
        tom_3:"./assets/Sounds/tom-3.mp3",
        tom_4:"./assets/Sounds/tom-4.mp3",
    }
  return (
    <div className='w-full h-full duration-200  bg-cover bg-center first'>
        <div className="container  mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <Cards title="Crash" images={images.crash} sounds={Sounds.crash}/>
                <Cards title="Kick" images={images.kick} sounds={Sounds.kick}/>
                <Cards title="Snare" images={images.snare} sounds={Sounds.snare}/>
                <Cards title="Tom-1" images={images.tom_1} sounds={Sounds.tom_1}/>
                <Cards title="Tom-2" images={images.tom_2} sounds={Sounds.tom_2}/>
                <Cards title="Tom-3" images={images.tom_3} sounds={Sounds.tom_3}/>
                <Cards title="Tom-4" images={images.tom_4} sounds={Sounds.tom_4}/>
            </div>
        </div>
    </div>
  )
}

export default Player