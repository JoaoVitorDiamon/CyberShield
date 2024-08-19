// routes.jsx
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Game from './Game';
import Login from './Login.tsx';
import Register from './Register.tsx';

export default function AppRoutes(){
  return (
    <Routes>
      <Route  element={<App/>}  path="/"/>
      <Route element={<Game/>} path="/game"  />
      <Route element={<Login/>} path="/login"  />
      <Route element={<Register/>} path="/register"  />
    </Routes>
  );
}