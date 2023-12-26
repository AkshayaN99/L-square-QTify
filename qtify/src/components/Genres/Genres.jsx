import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Carousel from "../Carousel/Carousel";
import Section from "../Section/section";
import styles from "./Genres.module.css"


  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  function Genres({songs,filters,selectedFilterIndex,setselectedFilterIndex}){
    
   const pop=songs.filter(songs => songs.genre.label ==="pop")
   const rock=songs.filter(songs => songs.genre.label ==="rock")
   const jazz=songs.filter(songs => songs.genre.label ==="jazz")
   const blues=songs.filter(songs => songs.genre.label ==="blues")

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return(
   
      <div>
  <Tabs value={selectedFilterIndex} onChange={handleChange} aria-label="basic tabs example"
  TabIndicatorProps={{
    style: {backgroundColor: 'var(--color-primary)',},
  }}>
 <div className={styles.wrap}>
    <Tab label="All" {...a11yProps(0)} />
    <Tab label="Pop" {...a11yProps(1)} />
    <Tab label="Rock" {...a11yProps(2)} />
    <Tab label="Jazz" {...a11yProps(3)} />
    <Tab label="Blues" {...a11yProps(4)} />
    </div> 
   
    
  </Tabs>

  <CustomTabPanel value={value} index={0}>
  <Carousel 
      data={songs}
      renderComponent={(songs)=> <Section  data={songs}
      type={"song"}/>}

      />
</CustomTabPanel>
  <CustomTabPanel value={value} index={1}>
  <Carousel 
      data={pop}
      renderComponent={(pop)=> <Section  data={pop}
      type={"song"}/>}

      />
</CustomTabPanel>
<CustomTabPanel value={value} index={2}>
  <Carousel 
      data={rock}
      renderComponent={(rock)=> <Section  data={rock}
      type={"song"}/>}

      />
</CustomTabPanel>
<CustomTabPanel value={value} index={3}>
  <Carousel 
      data={jazz}
      renderComponent={(jazz)=> <Section  data={jazz}
      type={"song"}/>}

      />
</CustomTabPanel>
<CustomTabPanel value={value} index={4}>
  <Carousel 
      data={blues}
      renderComponent={(blues)=> <Section  data={blues}
      type={"song"}/>}

      />
</CustomTabPanel>


 
</div>
)
}
export default Genres;