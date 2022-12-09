import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { animalSlice } from '../../features/animalSlice'
import { Box, Typography, Tabs, Tab } from '@mui/material';
import { speciesTabs } from '../../assets/dummyData/data'


const styles = {
  title: {
    padding: '10px'
  }
}

function Categories() {
  const dispatch = useDispatch();
  const [currentTabs, setCurrentTabs] = useState('all');

  const handleCategoryPicked = (e, value) => {
    setCurrentTabs(value);
    dispatch(animalSlice.actions.selectCategory(value));

  }
  return (
    <Box >
      <Typography sx={styles.title} variant="h2"> Browse our Animals</Typography>
      <Tabs textColor="inherit" TabIndicatorProps={{ style: { backgroundColor: 'salmon' } }} sx={{
        "& button:focus": { color: "salmon" },
        "& button:active": { color: "black" }
      }} value={currentTabs} onChange={handleCategoryPicked}>

        {speciesTabs.map((data, key) => (
          <Tab sx={{ color: 'rgb(60, 201, 226)' }} key={key} label={data.title} value={data.value} />
        ))}
      </Tabs>
    </Box >
  )
}

export default Categories;