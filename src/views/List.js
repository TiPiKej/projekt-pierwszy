import { useEffect, useState } from "react";
import { connect } from "react-redux";
import UserBlock from "../components/UserBlock";

const url = 'http://localhost:8080/api/getUsers';

function List(props) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (!res.ok) return;

        if (props.userData.name === '' && props.userData.surname === '') {
          setUsers(res.users);
          return;
        }

        setUsers(res.users.filter(u => 
          u.name === props.userData.name && u.surname === props.userData.surname
        ));
        
      })

  }, [props.userData]);

  return (
    <div className="List">
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
