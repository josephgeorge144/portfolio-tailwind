import React from "react";
import fb from "../assets/portfolio/scv.png";
import netflixx from "../assets/portfolio/netflixx.png";
import navbar from "../assets/portfolio/navbar.jpg";
import covid from "../assets/portfolio/covid.png";
import chatlive from "../assets/portfolio/chatlive.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fb,
      name:'Socialmedia App',
      code:'https://github.com/josephgeorge144/sociallive',
      link:'https://jgvenmeli.netlify.app/'
    },
    {
      id: 2,
      src: covid,
      name:'Covid Reporter',
      link:'https://covidjgvenmeli.netlify.app/',
      code:'https://github.com/josephgeorge144/covid19live',

    },
    
    {
      id: 3,
      name:'Netflix Clone',
      src: netflixx,
      link:'https://josephnetflix.netlify.app/',
      code:'https://github.com/josephgeorge144/sociallive',
    },
    {
      id: 4,
      src: chatlive,
      name:'Chatting App',
      link:'https://chatjgv.netlify.app/',
      code:'https://github.com/josephgeorge144/chatlive'    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,link,code,name}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={link}>View</a> 
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}> Code</a> 
                </button>
                
              </div>
              <h1 className="flex justify-center font-bold" >{name} </h1>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
