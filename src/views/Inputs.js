import { TextField, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { userData } from './../actions/'

const url = 'http://localhost:8080/api/addUser';

const useStyles = makeStyles(theme => ({

  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 300
    },

    '&': {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: 'center',
    }
  },

  submit: {
    '& .MuiButton-root': {
      margin: theme.spacing(2),
      width: 300,
    },

    '&': {
      display: 'flex',
      justifyContent: 'center',
      minHeight: '5em'
    },
  }

}));

function Inputs(props) {
  const styles = useStyles();

  const handleSubmit = ev => {
    if (!name.length) setNameErr(true);
    if (!surname.length) setSurnameErr(true);

    if (!name.length || !surname.length) return;

    const user = {
      name,
      surname,
      address
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'Content-Type': 'application/json'
      }
  }

  fetch(url, options)
    .then(res => res.json())
    .then(res => {
      if (!res.ok) return;

      props.userData(user);
      props.setView(props.view + 1)
    });
  }

  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const handleNameChange = ev => {
    setName(ev.target.value)
    setNameErr(false)
  };

  const [surname, setSurname] = useState('');
  const [surnameErr, setSurnameErr] = useState(false);
  const handleSurnameChange = ev => {
    setSurname(ev.target.value);
    setSurnameErr(false);
  }

  const [address, setAddress] = useState('');
  const handleAddressChange = ev => {
    setAddress(ev.target.value);
  }

  return (
    <form noValidate autoComplete="off" className={styles.form} action={url}>
      <div>
        <TextField
          error={nameErr}
          helperText={nameErr ? "Dane wymagane" : ""}
          label="Imie"
          variant="outlined" required
          value={name} onChange={handleNameChange} />
      </div>
        
      <div>
        <TextField
          error={surnameErr}
          helperText={surnameErr ? "Dane wymagane" : ""}
          label="Nazwisko"
          variant="outlined" required
          value={surname} onChange={handleSurnameChange} />
      </div>

      <div>
        <TextField
          label="Adres zamieszkania" variant="outlined"
          value={address} onChange={handleAddressChange} />
      </div>
      
      <div className={styles.submit}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<Send />}
          onClick={handleSubmit}
        >
          Zapisz
        </Button>
      </div>
    </form>
  );
}

const mapDispatchToProps = { userData };

export default connect(null, mapDispatchToProps)(Inputs);
