import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import MyGallery from './Components/MyGallery/MyGallery';

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false)  

  useEffect(() => {
    console.log(process.env.REACT_APP_PASS)
    var password = prompt("Enter in the password");
    if (password === process.env.REACT_APP_PASS) setAuthenticated(true)
  }, [])

  if (authenticated) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="my-gallery" element={<MyGallery />} />
      </Routes>
      <Footer />
    </Box>
    )
  } else {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <p>Refresh webpage and reenter correct password</p>
      </Box>
    )
  }
}

export default App;
