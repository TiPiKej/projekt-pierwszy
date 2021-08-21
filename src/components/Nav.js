import { AppBar, Divider, IconButton, List, ListItem, ListItemText, Toolbar } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { Menu, Close } from '@material-ui/icons';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  closeButton: {
    '&': {
      width: "50px",
      height: "50px",
      margin: "10px auto",
    }
  },

  openButton: {
    '&': {
      margin: "10px 30px"
    }
  },

  listItems: {
    '& .MuiListItem-root': {
      padding: "15px 60px",
      margin: "5px 0"
    }
  }

}));

function Nav({setView, viewsList}) {
  const styles = useStyles();

  const [open, setOpen] = useState(false);

  const openNav = () => setOpen(true);
  const closeNav = () => setOpen(false);

  return (
    <div className="Nav">

      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={openNav}
            className={styles.openButton}
            color='inherit'>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}>
        
        <IconButton
          onClick={closeNav}
          className={styles.closeButton}>
          <Close />
        </IconButton>

        <Divider />

        <List className={styles.listItems}>
          {viewsList.map((el, i) => 
            <ListItem button key={el.navInfo}
              onClick={() => {
                closeNav();
                setView(i);
              }}>
              <ListItemText primary={el.navInfo} />
            </ListItem>
          )}
        </List>
      </Drawer>
    </div>
  );
}

export default Nav;
