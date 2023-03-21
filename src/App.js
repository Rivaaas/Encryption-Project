import React, { useEffect, useState } from 'react'
import { Grid, Box, Button, Typography, Container, Checkbox, FormControlLabel, TextField } from '@mui/material';
import './App.css';
import SnackbarComponent from './components/SnackbarComponent';

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

  const reset = () => {
    setPalabra("")
  }






  return (
    <div className="App ">
      <div>
        <Grid marginTop="3rem">
          <Container>
            {checkbox ? <p>ENCRIPTAR</p> : <p>DESENCRIPTAR</p>}
            <Checkbox id="check1" defaultChecked onClick={handleClick} />
          </Container>
          <div>
            <Typography marginTop="1rem" component={'span'}>
              <TextField id="txt" variant="outlined"
                onChange={(e) => setPalabra(e.target.value)}
                value={palabra} />
            </Typography>
          </div>
          <Grid marginTop="5px">
            <Typography component={'span'}>
              <Button variant="outlined" color="error" onClick={reset}>
                Limpiar
              </Button>
            </Typography>
          </Grid>
          <Grid marginTop="5px">
            <Typography component={'span'} marginTop={2}>
              <Button variant="contained" type="submit" onClick={checkbox ? handleSubmit : handleSubmit2} color="success" >
                {checkbox ? <a>Encriptar</a> : <a>DESENCRIPTAR</a>}
              </Button>
            </Typography>
          </Grid>
          <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <h1>{palabrax}</h1>
            <Box sx={{ cursor: 'pointer' }}>
              <SnackbarComponent palabrax={palabrax} />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
