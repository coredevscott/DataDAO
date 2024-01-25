import { List } from '@mui/material';
import './App.css';
import Landing from './components/Landing';
import Mission from './components/Mission';
import Policy from './components/Policy';
import Nodes from './components/Nodes';
import MyNode from './components/MyNode';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/mission' element={<Mission />}></Route>
        <Route path='/policy' element={<Policy />}></Route>
        <Route path='/nodes' element={<Nodes />}></Route>
        <Route path='/mynode' element={<MyNode />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
