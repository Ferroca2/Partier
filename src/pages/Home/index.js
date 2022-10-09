import React from 'react';
import Post from '../../components/post';
import style from './home.module.css'

export default function Home() {
  return (
    <div className={style.wrapper}>
        <Post/>
    </div>
  );
}
