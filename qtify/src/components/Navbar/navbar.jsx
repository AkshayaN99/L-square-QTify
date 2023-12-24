import React from "react";
import styles from "./navbar.module.css";
import searchicon from "../../assets/searchicon.svg";
import logo from "../../assets/logo.png";
//import { Box } from '@mui/material'; 


function Navbar(){

    const handleSumbit=(e)=>{
    
    e.preventDefault();
    
    }
    
    return(
    
    < div className={styles.wrap}> 

    <br></br>
    
    <img src={logo} alt="Logo" />
     
    
    
    
    <form className={styles.wrapper} onSubmit={handleSumbit}>
    
    <input className={styles.search} required placeholder={"Search a album of your choice"}/>
    
    <button className={styles.searchButton} type="submit">
    
   <img src={searchicon} alt="SearchIcon" />
    
    </button>
    
    </form>
    
 
    <button className={styles.button}> Give Feedback</button>
    
    
    
    </div>
    
    )
    
    }
    

export default Navbar;