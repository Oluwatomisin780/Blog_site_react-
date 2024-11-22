import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import CreateBlog from './pages/CreateBlog';
import { BlogProvider } from './context/BlogContext';

function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="create-blog" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
