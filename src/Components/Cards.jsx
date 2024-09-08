import React, { useState } from 'react'

const Cards = ({title,images,sounds,name="Shreyansh"}) => {
    const [isPlaying,setIsPlaying]=useState(false);
    const playSound=()=>{
        const audio=new Audio(sounds);
        setIsPlaying(true);
        audio.play();
        audio.onended=()=>{
            setIsPlaying(false);
        }
    }
  return (
    <div className="my-2 px-1 mr-2 w-full md:w-60  lg:px-4 lg:w-72 border-2 border-white bg-gray-800 rounded-3xl ">
        <article className="overflow-hidden rounded-lg shadow-lg">
            <button className='bg-white h-48 w-48 lg:ms-9 ms-16 mt-1 md:ms-10'
            onClick={playSound}>
                <img alt="Placeholder" className=" h-full w-full " src={images} draggable={false}/>
            </button>
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <h4 className="no-underline hover:underline text-white" >
                        {title}
                    </h4>
                </h1>
                <p className="text-white text-sm">
                    {isPlaying ? "Playing..." : "Drum-Set"}
                </p>
            </header>
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                    <p className="ml-2 text-sm">
                       {name}
                    </p>
                </a>
            </footer>
        </article>
    </div>
  )
}

export default Cards