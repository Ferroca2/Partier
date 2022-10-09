import logo from './logo.svg';
import Layout from './layouts/mobile';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import AddPost from './pages/AddPost';


function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='post' element={<AddPost />} />
                <Route path='profile' element={<Profile />} />
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
