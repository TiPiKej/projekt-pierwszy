import { useEffect, useState } from "react";
import { connect } from "react-redux";
import UserBlock from "../components/UserBlock";
import { makeStyles } from '@material-ui/core/styles';
import url from '../assets/url';

const useStyles = makeStyles(theme => ({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  }

}));

function List(props) {
  const styles = useStyles();
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`${url}/api/getUsers`)
      .then(res => res.json())
      .then(res => {
        if (!res.ok) return;

        if (props.userData.name === '' && props.userData.surname === '') {
          if (res.users.length > 0) setUsers(res.users);
          else {
            setUsers([{
              name: "Brak",
              surname: "Danych",
              address: "do wyswietlenia"
            }])
          }
          return;
        }

        setUsers(res.users.filter(u => 
          u.name === props.userData.name && u.surname === props.userData.surname
        ));

        if (res.users.length === 0) {
          setUsers([{
            name: "Brak",
            surname: "Danych",
            address: "do wyswietlenia"
          }])
        }
        
      })
      .catch(err => {
        console.log(err)
      })

  }, [props.userData]);

  return (
    <div className={styles.root}>
      { users.map((user, i) => <UserBlock user={user} key={`${user.name}${i}`} />) }
    </div>
  );
}

const mapStateToProps = ({userData}) => {
  return {
  	userData
  }
};

export default connect(mapStateToProps)(List);
