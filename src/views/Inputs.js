import { Input, TextField } from '@material-ui/core';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  form: {
    '& .MuiTextField-root, & .MuiInput-root': {
      margin: theme.spacing(2),
      width: 300
    },

    '& .MuiInput-input, & .MuiInput-root': {
      cursor: 'pointer'
    },

    '& .MuiInput-input': {
      margin: theme.spacing(1),
    },

    '&': {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: 'center',
    }
  }

}));

function Inputs({view, setView, setRes}) {
  const styles = useStyles();

  const handleSubmit = ev => {
    ev.preventDefault();

    if (!name.length) setNameErr(true);
    if (!surname.length) setSurnameErr(true);

    if (!name.length || !surname.length) return;

    const data = {
      name,
      surname,
      address
    };

    const url = 'http://localhost:3000';
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(url, options)
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => setRes(res))
      .then(() => setView(view + 1));
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

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
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
          value={address} onChange={setAddress} />
      </div>
      
      <div>
        <Input type="submit" value="Zapisz" />
      </div>
    </form>
  );
}

export default Inputs;
