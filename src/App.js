import React, { useEffect, useState } from 'react'
import { Grid, Button, Typography, Container, Checkbox, FormControlLabel, TextField } from '@mui/material';
import './App.css';

function App() {

  const [palabra, setPalabra] = useState("")
  const [palabrax, setPalabrax] = useState("")
  const [checkbox, setCheckBox] = useState(false)


  const handleSubmit = () => {
    setPalabrax(btoa(palabra))
  }
  const handleSubmit2 = () => {
    setPalabrax(atob(palabra))
  }

  const handleClick = () => {
    setCheckBox(!checkbox)
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  const reset= (e) => {

    document.getElementById("txt").value = "";


  }

  


  const copiarPortapapeles = (e) => {
    navigator.clipboard.writeText(palabrax)
      .then(() => {
        console.log('Texto copiado al portapapeles');
      })
      .catch((error) => {
        console.error('Error al copiar el texto: ', error);
        });
  }

  return (
    <div className="App ">
      <Grid marginTop="3rem">
        <Container>
          {checkbox ? <p>ENCRIPTAR</p> : <p>DESENCRIPTAR</p>}
          <Checkbox id="check1" defaultChecked onClick={handleClick} />
        </Container>
        <Typography marginTop="1rem">
          <TextField id="txt" variant="outlined"
            onChange={(e) => setPalabra(e.target.value)}  />
        </Typography>
        <Typography marginTop="1rem">
          <Button variant="outlined" color="error" onClick={reset}>
            Limpiar
          </Button>
        </Typography>
        <Typography marginTop="1rem">
          <Button variant="contained" type="submit" onClick={checkbox ? handleSubmit : handleSubmit2} color="success" >
            {checkbox ? <a>Encriptar</a> : <a>DESENCRIPTAR</a>}
          </Button>
        </Typography>

        <div>
          <h3>---------------------------</h3>
          <h1>{palabrax}</h1>
            {palabrax ? <svg onClick={copiarPortapapeles} xmlns="http://www.w3.org/2000/svg" fill="none" width={30} height={30}  stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
          </svg> : <a></a> }
          <h3>---------------------------</h3>
        </div>

      </Grid>
    </div>
  );
}

export default App;
