import headphones from "../../assets/headphones.png";
import React from "react";
import styles from "./hero.module.css";
 

function Heroimage(){

return (

<div className={styles.rectangle}>

<div className={styles.htext}>

<p>100 Thousand Songs, ad-free</p>

<p>Over thousands podcast episodes</p>

</div>
<div className={styles.hlogo} >

<img src={headphones} width={212}  alt="headphones"/>
</div>

</div>

)

}

 

export default Heroimage;

 

 

 

 

 

 
