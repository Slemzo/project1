import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import MyGallery from './Components/MyGallery/MyGallery';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="my-gallery" element={<MyGallery />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
