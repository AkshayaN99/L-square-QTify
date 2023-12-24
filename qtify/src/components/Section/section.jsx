import React from "react";
import styles  from "./section.module.css";
import {   Tooltip } from "@mui/material";

import {
    
    Card,
    CardContent,
    CardMedia,
    
  } from "@mui/material";



function Section({data,type}){
   

    const getCard=(type)=>{
        switch(type){
            case "album":{
                const {image,title,follows,songs,slug}=data;
                return(
                   
                    
                    
                     
                    <Tooltip  title={`${songs.length}songs`} placement="top" arrow>
                    <a href={`/album/${slug}`}>
                <Card className={styles.wrapper}>
                    <div  className={styles.card}>
                        
                        <CardMedia component="img" src={image} alt="song" loading="lazy"/>
                        <CardContent>
                        <div  className={styles.banner}>
    
                        <div  className={styles.pill}>
                             <p>{follows} Follows</p>
                             </div>
                        
                        </div>
                        </CardContent>
                    </div>
                    <div  className={styles.titlewrapper}>
                         <p>{title}</p>
                    </div>
                </Card>
                </a>
                </Tooltip>
               
                
              
                
               
                )
            }
            case "song":{
                const {image,likes,title}=data;
                return(
               
                   
                <Card className={styles.wrapper}>
                    <div  className={styles.card}>
                        <CardMedia component="img" src={image} alt="song" loading="lazy"/>
                        <CardContent>
                        <div  className={styles.banner}>
                           <div  className={styles.pill}>
                             <p>{likes} Likes</p>
                             </div>
                        </div>
                        </CardContent>
                    </div>
                    
                    <div  className={styles.titlewrapper}>
                         <p>{title}</p>
                    </div>
                </Card>
                
                )
            }   
            default:
                return <></>
         }
    }

    return getCard(type);
}

export default Section;