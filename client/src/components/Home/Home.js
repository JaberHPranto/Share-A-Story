import { Container, Grid, Grow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/post';
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import useStyles from './styles';


function Home() {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return (
    <Container maxWidth='lg'>
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

export default Home;
