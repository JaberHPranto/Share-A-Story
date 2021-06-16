import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/post';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import memory from './images/memory.jpg';
import useStyles from './styles';

function App() {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return (
      <Container maxWidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant="h3" align='center' >Share Stories</Typography>
          <img src={memory} alt="memories" className={classes.image} height="50" width="auto"/>
        </AppBar>
        <Grow in>
          <Container>
            <Grid className={classes.MainContainer} container justify='space-between' alignItems='stretch' spacing={4}>
              <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
  );
}

export default App;
