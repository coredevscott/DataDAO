import { List } from '@mui/material';
import './App.css';
import Landing from './components/Landing';
import Delysium from './components/Delysium';
import Policy from './components/Policy';
import Nodes from './components/Nodes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/delysium' element={<Delysium />}></Route>
        <Route path='/policy' element={<Policy />}></Route>
        <Route path='/nodes' element={<Nodes />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
