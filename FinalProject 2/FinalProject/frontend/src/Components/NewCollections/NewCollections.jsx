import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Items/Item';
import { Container, Typography, Grid, Box } from '@mui/material';

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/newcollections')
      .then((response) => response.json())
      .then((data) => setNewCollection(data));
  }, []);

  return (
    <Box className='new-collections-background' bgcolor='white' py={4}>
      <Container>
        <Box bgcolor='white' borderRadius={8} boxShadow={5} p={4}>
          <Typography variant='h3' align='center' gutterBottom>
            New Collections
          </Typography>

          <Grid container spacing={3} justifyContent='center'>
            {newCollection.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default NewCollections;
