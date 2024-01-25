import {useEffect, useState} from "react";
import styles from './App.css';

function App() {
const [countries,setCountries]=useState([])
useEffect(()=>{
  fetch("https://restcountries.com/v3.1/all")
  .then((res)=>res.json())
  .then((data)=>setCountries(data))
  .catch((err)=>console.error("error fetching data:",err))
},[]);


return (
   <div className={styles.containerStyle}>
    {countries.map((country)=>(
      <div key={country.cca3} className={styles.cardStyle}>
        <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        className={styles.imageStyle}
        />
        <h2>{country.name.common}</h2>
        </div>
    ))}
   </div>
  );
}

export default App;
