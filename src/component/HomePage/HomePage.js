import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Header } from 'semantic-ui-react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Dropdown } from 'semantic-ui-react';
import Me from './Me';
import { Link } from "react-router-dom";


const languageOptions = [
  { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
  { key: 'Danish', text: 'Danish', value: 'Danish' },
  { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Greek', text: 'Greek', value: 'Greek' },
  { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
  { key: 'Italian', text: 'Italian', value: 'Italian' },
  { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
  { key: 'Korean', text: 'Korean', value: 'Korean' },
  { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
  { key: 'Persian', text: 'Persian', value: 'Persian' },
  { key: 'Polish', text: 'Polish', value: 'Polish' },
  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
  { key: 'Russian', text: 'Russian', value: 'Russian' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
  { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
  { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
]

const HomePage = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div>
      <Navbar sticky="top" bg="danger" variant="danger">
      <Container>
      <Header as='h2'
       image='https://react.semantic-ui.com/images/icons/school.png'
       content='Task Me'
       aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} />
        <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Link to="/" style={{textDecoration:"none", color:"grey"}} >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="/pagetask" style={{textDecoration:"none", color:"grey"}}>
        <MenuItem onClick={handleClose}>Task Page</MenuItem>
        </Link>
        <Link to="/calendar" style={{textDecoration:"none", color:"grey"}} >
        <MenuItem onClick={handleClose}>Calendar</MenuItem>
        </Link>
      <Link to="/" style={{textDecoration:"none", color:"grey"}} >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Link>
      </Menu>
      </Container>
      <div className="language">
      <Dropdown
    button
    className='icon'
    floating
    labeled
    icon='world'
    options={languageOptions}
    search
    text='Select Language'
  />
      </div>
      
      <Me />
      </Navbar>
          
    </div>
  );
};

export default HomePage;
