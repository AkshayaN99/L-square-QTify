import React, {useEffect,useState} from "react";
import styles from "./CarouselLeftNavigation.module.css"
import {ReactComponent as LeftArrow} from "../../../assets/prev.svg";
import { useSwiper } from "swiper/react";

function  CarouselLeftNavigation(){
      const swiper=useSwiper();
      const[isBeginning,setIsBeginning]=useState(swiper.isBeginning);
      useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsBeginning(swiper.isBeginning);
        })
      },[]);

      return(
        <div className={styles.left}>
            {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
            </div>
      )

}

export  default  CarouselLeftNavigation;