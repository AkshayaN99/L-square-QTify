import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";


function Navbar(){

    
    
    return(
    
    < div className={styles.wrap}> 
    
    <img src={logo} alt="Logo" />
     
     <div className={styles.wrapper}>
       <div className={styles.gap}><h4>Home</h4></div> 
       <div className={styles.gap}><h4>Attorneys</h4></div> 
       <div className={styles.gap}><h4>Practice Areas</h4></div> 
       <div className={styles.gap}><h4>About Us</h4></div> 
     </div>
    
 
    <button className={styles.button}> Contact Now</button>
    
    </div>
    
    )
    
    }
    

export default Navbar;