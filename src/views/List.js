import { connect } from "react-redux";

function List(props) {
  return (
    <div className="List">
      <p>{props.userData.name}</p>
      <p>{props.userData.surname}</p>
      <p>{props.userData.address}</p>
    </div>
  );
}

const mapStateToProps = ({userData}) => {
  return {
  	userData
  }
};

export default connect(mapStateToProps)(List);
