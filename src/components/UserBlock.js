import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Person } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({

  root: {
    minWidth: theme.spacing(40),
    margin: theme.spacing(3),
    padding: theme.spacing(2),

    "& .MuiSvgIcon-root": {
      width: '100%',
      height: theme.spacing(20)
    },

    "& .MuiTypography-root": {
      textAlign: 'center'
    },
  }

}));

function UserBlock(props) {
  const styles = useStyles();

  return (
    <Paper elevation={3} className={styles.root}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Person color='inherit' />
        </Grid>
        
        <Grid item >
          <Typography variant="h5" gutterBottom>
            { props.user.name }
          </Typography>
        </Grid>

        <Grid item >
          <Typography variant="h5" gutterBottom>
            { props.user.surname }
          </Typography>
        </Grid>

        {props.user.address.length > 0 ?
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
          { props.user.address }
          </Typography>
        </Grid> : ""}
      </Grid>
    </Paper>
  )
}

export default UserBlock;