"use client"
import { useState } from "react";
import Nav from "./components/Nav"

const images = [
  'https://images.pexels.com/photos/18696933/pexels-photo-18696933.jpeg',
  'https://images.pexels.com/photos/17886629/pexels-photo-17886629.jpeg',
  'https://images.pexels.com/photos/1095601/pexels-photo-1095601.jpeg'
];
export default function Home() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex + 1 >= images.length) {
        return 0; // Reset to the first image when reaching the end
      } else {
        return prevIndex + 1; // Increment index normally
      }
    });
  };
  
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex - 1 < 0) {
        return images.length - 1; // Wrap around to the last image when reaching the beginning
      } else {
        return prevIndex - 1; // Decrement index normally
      }
    });
  };
  

  return (
    <div className="overflow-x-hidden relative">
      <header className="flex flex-col h-screen">
        <Nav/>
        <div className="flex-auto">Header</div>
      </header>
      <main className="min-h-screen p-4 flex lg:flex-row flex-col">
        <div className="w-full lg:w-2/3 lg:p-2 lg:flex items-center lg:h-96 mb-8 md:mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, minus. 
        Necessitatibus tempora voluptatem at perferendis doloribus eos obcaecati est eum voluptate! Consectetur quo nulla cum tempora minima neque doloremque ea. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nulla, iste nobis nam modi eius nisi at,
         hic deserunt voluptatem tenetur possimus vel mollitia odit? Quod repellat vel rerum placeat.</div>
         <div className="w-full relative overflow-hidden lg:w-1/3 h-96 border-2 lg:p-2">
          <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img src={image} alt="main-images" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2">Prev</button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2">Next</button>
        </div>
      </main>
      <footer className="bg-black text-white h-16">footer</footer>
    </div>
  );
}
