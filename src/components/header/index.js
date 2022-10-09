import React from 'react';
import style from './header.module.css'
import { Link } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from '../../logo.svg'


export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.header2}>
        <img src={logo} alt='' width='25px' className={style.logo}/>
        <Link to='/'>Partier</Link>
      </div>
      <div className={style.buttonWrapper}>
      <ConnectButton label='Connect'>Connect</ConnectButton>
    </div>
    </div>
  );
}
