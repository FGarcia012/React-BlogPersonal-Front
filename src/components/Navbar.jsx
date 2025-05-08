import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/courses" className="nav-link">Cursos</Link>
        <Link to="/publications" className="nav-link">Publicaciones</Link>
        <Link to="/comments" className="nav-link">Comentarios</Link>
      </div>
    </nav>
  );
};