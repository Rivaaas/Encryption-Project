import React, { useEffect, useState } from 'react'
import { Grid, Button, Typography, Container, Checkbox, FormControlLabel, TextField } from '@mui/material';
import './App.css';

function App() {

  const [palabra, setPalabra] = useState("")
  const [palabrax, setPalabrax] = useState("")


  // const nombre = "Victor"
  // const apellido = "Rivas"
  // const correo = "rivas.v@icloud.com"
  // const base64 = btoa(nombre)
  // console.log("ENCRIPTADO", base64)
  // const nobase64 = atob(base64)
  // console.log("Desencriptado", nobase64)


  const handleSubmit = () => {
    setPalabrax(btoa(palabra))
    
  }

  useEffect(() => {
    handleSubmit()
  }, [palabra])



  return (
    <div className="App ">
      <Grid marginTop="3rem">
        <Container >
          <FormControlLabel control={<Checkbox id="check" defaultChecked />} label="Encriptar" />
        </Container>
        <Typography marginTop="1rem">
          <TextField id="palabra" variant="outlined"
            onChange={(e) => setPalabra(e.target.value)} />
        </Typography>
        <Typography marginTop="1rem">
          <Button variant="contained" type="submit" onSubmit={handleSubmit} color="success">
            Encriptar
          </Button>
        </Typography>

        <div>
          <h3>-----</h3>
          <h1>{palabrax}</h1>
          <h3>-----</h3>
        </div>

      </Grid>
    </div>
  );
}

export default App;
