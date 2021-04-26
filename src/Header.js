import React from 'react';
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

function Header() {
  return (
    <div>
      <h2> This is the header</h2>

      <IconButton>
        <PersonIcon fontSize='large' className='header_icon' />
      </IconButton>
    </div>
  );
}

export default Header;
