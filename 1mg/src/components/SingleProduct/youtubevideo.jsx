import React from 'react';
import style from "../../styles/SingleProduct.module.css"

const Youtubevideo = () => {
  return (
    <div className={style.youtubebox} >
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DIG-EZCILEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
    </div>
  )
}

export default Youtubevideo;