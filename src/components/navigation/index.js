import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Home, AddBox, AccountCircle} from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import style from './navigation.module.css'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
      <div className={style.navigation}>
        <Divider variant="middle" />
        <BottomNavigation
          style={{background: 'transparent'}}
          showLabels
        >
          <BottomNavigationAction icon={<Home fontSize='large' style={{color: '#FE8900'}}/>} component={Link} to='/'/>
          <BottomNavigationAction icon={<AddBox fontSize='large' style={{color: '#FE8900'}}/>} component={Link} to='/post'/>
          <BottomNavigationAction icon={<AccountCircle fontSize='large' style={{color: '#FE8900'}}/>} component={Link} to='/profile'/>
        </BottomNavigation>
      </div>
  );
}
