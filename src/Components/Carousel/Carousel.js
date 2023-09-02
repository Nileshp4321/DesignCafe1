import React from 'react'
import "../../App.css";

const Carousel = () => {
  return (
    <>
        
<div id="controls-carousel" className="relative w-screen  " data-carousel="static">
    <div className="relative imgcon overflow-hidden rounded-lg md:h-96 ">
        <div className="hidden duration-700 ease-in-out  " data-carousel-item="active">
            <img src="https://media.designcafe.com/wp-content/uploads/2019/12/17130122/home-interiors-interior-designers-bangalore-mumbai-hyderabad-chennai-kolkata-india.jpg" className="object-cover  absolute block w-full h-screen w-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"  alt="..." />
        </div>
        <div className="hidden duration-700 ease-in-out  " data-carousel-item>
            <img src="https://media.designcafe.com/wp-content/uploads/2019/12/17130320/top-interior-designers-india-offer-space-saving-home-interior-solutions.jpg" className="object-cover absolute block w-full h-screen w-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"  alt="..." />
        </div>
        <div className="hidden duration-700 ease-in-out  " data-carousel-item>
            <img src="https://media.designcafe.com/wp-content/uploads/2019/12/17130320/top-interior-designers-india-offer-space-saving-home-interior-solutions.jpg" className="object-cover  absolute block w-full h-screen w-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"  alt="..." />
        </div>
    </div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>

    </>
  )
}

export default Carousel
