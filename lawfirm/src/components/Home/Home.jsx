import React from "react";
import styles from "./Home.module.css";
import lines1 from "../../assets/lines1.png";
import lines2 from "../../assets/lines2.png";
import lines9 from "../../assets/lines9.png";
import lines7 from "../../assets/lines7.png";
import lines6 from "../../assets/lines6.png";
import lines3 from "../../assets/lines3.png";
import lines4 from "../../assets/lines4.png";
import lines5 from "../../assets/lines5.png";

function Home(){
    return(
        <div className={styles.home}>

        <div className={styles.wrapper}>
            <div className={styles.wrap}>
            <div className={styles.log}><img src={lines1} width={350} alt="Logo" /></div>
            <div className={styles.log}><img src={lines9} width={350} alt="Logo" /></div>
            <div className={styles.log}><img src={lines2} width={250} alt="Logo" /></div>
            </div>
            <div>
            <div className={styles.logs}><img src={lines7} width={280} alt="Logo" /></div>
            </div>
        </div>

        <div className={styles.cop}>

        <div className={styles.copp}><img src={lines6} width={700} alt="Logo" /></div>
        </div>
        
        <div className={styles.percentcop}>
        <div className={styles.percent}>
            <h2>Why Choose Us?</h2>
        </div>
        <div className={styles.img}>
            <div className={styles.gapimg}><img src={lines3} width={250} alt="Logo" /></div>
            <div className={styles.gapimg}><img src={lines4} width={250} alt="Logo" /></div>
            <div className={styles.gapimg}><img src={lines5} width={250} alt="Logo" /></div>
            </div>
    
        </div>
        
        </div>
        
       
        
        


    )
}

export default Home;
