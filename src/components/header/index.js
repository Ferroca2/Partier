import React from 'react';
import style from './header.module.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
      <div className={style.header}>
        <Link to='/'>Partier</Link>
      </div>
  );
}
