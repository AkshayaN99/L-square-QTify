import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Rec1 from "../../assets/Rec1.png";
import Rec2 from "../../assets/Rec2.png";
import Rec3 from "../../assets/Rec3.png";
import Rec4 from "../../assets/Rec4.png";
import Rec5 from "../../assets/Rec5.png";
import Rec6 from "../../assets/Rec6.png";
import styles from "./Practice.module.css";

function Practice(){
    return (
<div className={styles.wrap}>
    
<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2} className={styles.aks}>
  <Grid xs={8}>
  <img src={Rec1} width={250} alt="Logo" />
  </Grid>
  <Grid xs={4}>
  <img src={Rec2} width={250} alt="Logo" />
  </Grid>
  <Grid xs={4}>
  <img src={Rec3} width={250} alt="Logo" />
  </Grid>
  <Grid xs={8}>
  <img src={Rec4} width={250} alt="Logo" />
  </Grid>
  <Grid xs={8}>
  <img src={Rec5} width={250} alt="Logo" /> 
  </Grid>
  <Grid xs={4}>
  <img src={Rec6} width={250} alt="Logo" />
  </Grid>
</Grid>
</Box>
</div>
)
}

export default Practice;