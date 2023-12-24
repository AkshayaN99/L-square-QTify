import React, { useEffect } from "react";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import Section from "../Section/section";
import styles from  "./cardcom.module.css";





function Cardcom (){
    const [topAlbums, settopAlbums] = useState([]);
    const [newAlbums, setnewAlbums] = useState([]);
    const [songsData, setsongsData] = useState([]);
    const [istopChecked, setIstopChecked] = useState(false);
    const [isnewChecked, setIsnewChecked] = useState(false);

    const handletopToggle=()=>{
      setIstopChecked((prevState)=>!prevState);
    }
    const handlenewToggle=()=>{
      setIsnewChecked((prevState)=>!prevState);
    }

const performCalltop = async () => {
   

    try {
      let res = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
      settopAlbums(res.data);
    } catch (error) {
        console.log(error)
    }
  }
  const performCallnew = async () => {
   

    try {
      let res = await axios.get(`https://qtify-backend-labs.crio.do/albums/new`);
      setnewAlbums(res.data);
    } catch (error) {
        console.log(error)
    }
  }
  const performCallsongs = async () => {
   

    try {
      let res = await axios.get(`https://qtify-backend-labs.crio.do/songs`);
      setsongsData(res.data);
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() =>
  {
    performCalltop();
    performCallnew();
    performCallsongs();
  },[])
  
  return(
  <div >
    <div>
    <div className={styles.header}>
       <style>{'body { background-color: black; }'}</style>
       
       <h3 style={{ color: 'white' }}>Top Albums</h3>
         <h4 className={styles.toggletext} onClick={handletopToggle}>{!istopChecked? "CollapseAll":"Show All"}</h4>
         </div>
      <br></br>
   <div className={styles.totalwrap}>
    {topAlbums.length===0 ? (
      <CircularProgress/>):(
        <div className={styles.cardWrapper}>
          {!istopChecked?(
            <div className={styles.wrapper}>
      {topAlbums.map((ele) => (
       
          <Section
            
            data={ele}
            type={"album"}
          />
         
      ))}
      </div>
      
    ):(//Carousal
    null)}
    </div>
      )}
      </div>
      </div>

   <div>
    <div className={styles.header}>
    <h3 style={{ color: 'white' }}>New Albums</h3>
    <h4 className={styles.toggletext} onClick={handlenewToggle}>{!isnewChecked? "CollapseAll":"Show All"}</h4>
    </div>
    <div className={styles.totalwrap}>
    {newAlbums.length===0 ? (
      <CircularProgress/>):(
        <div className={styles.cardWrapper}>
          {!isnewChecked?(
            <div className={styles.wrapper}>
      {newAlbums.map((ele) => (
         
          <Section
         
            data={ele}
            type={"album"}
          />
         
      ))}
      </div>
    ):(//Carousal
    null)}
     </div>
      )}
      </div>
      </div>
  
    <div>
  <div className={styles.header}>
     <h3 style={{ color: 'white' }}>Songs</h3>
     </div>  
     <div className={styles.totalwrap}>   
     {songsData.length===0 ? (
      <CircularProgress/>):(
        <div className={styles.cardWrapper}>
          
          <div className={styles.wrapper}> 
      {songsData.map((ele) => (
        
          <Section
          
            data={ele}
            type={"song"}
          />
         
      ))}
      
     </div>
     </div>
      )}
      </div>
      </div> 
     </div>
  )
}

export default Cardcom;