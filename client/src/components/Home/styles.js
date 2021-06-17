import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
      // color: '#63ffab',
      color: '#89CFF0',
  },
  image: {
    marginLeft: '25px',
  },
  [theme.breakpoints.down('sm')]:{
     MainContainer: {
      flexDirection:'column-reverse'
    },
    heading: {
      fontSize:'2rem'

    }
  }

}));

