import  React from 'react';
import './App.css';
import Slider from './component/slider';

const sliders = [
  {
    id: 1,
    imageUrl: [
      {url:"/img/slide-1/layer-back.jpg", swiperparallax:"35%"},
      {url:"img/slide-1/layer-middle.png", swiperparallax:"22%"},
      {url:"img/slide-1/layer-front.png", swiperparallax:"15%"}
    ],
    convasColor:"#BE9164"
  },
  {
    id: 2,
    imageUrl:[
      {url:"img/slide-2/layer-back.jpg", swiperparallax:"35%"}, 
      {url:"img/slide-2/layer-gera.png", swiperparallax:"25%"}, 
      {url:"img/slide-2/layer-yen.png", swiperparallax:"20%"}, 
      {url:"img/slide-2/layer-front.png", swiperparallax:"13%"}
    ],
    convasColor:"#525A6D"
  },
  {
    id: 3,
    imageUrl:[ 
       {url:"img/slide-3/layer-back.jpg", swiperparallax:"35%"},
       {url:"img/slide-3/layer-middle.png", swiperparallax:"28%"}, 
       {url:"img/slide-3/layer-ciri.png", swiperparallax:"23%"}, 
       {url:"img/slide-3/layer-front.png", swiperparallax:"18%"}
      ],
    convasColor:"#938086"
  }
];

export default function App (){

    return (
      <div className="App">
        <Slider sliders={sliders}/>
      </div>
    );
}

