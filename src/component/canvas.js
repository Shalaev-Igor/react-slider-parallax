import React from "react";

const Canvas = ({convasColor}) =>{

    return (
        <canvas className="particles slider__layer" data-swiper-parallax="18%"  data-color={convasColor}></canvas>
    )
}

export default Canvas;
