import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';

const TopNav =(props)=> {
  const [title, setTitle] = useState(props.title)
  const headerTitleData = useSelector((state) => state.data.headerTitle)

  const onLounchApp=()=>{
  }
  useEffect(() => {
  }, []);


  return (
    <div 
      className="top-nav"
    >
      <div className="d-flex align-items-center navbar-left, justify-content-between"
        style={{width:'100%'}}
      >
        <div style={{fontSize:30}}>
          {headerTitleData}
        </div>
        <div>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800 }}
          >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Paper>
        </div>
      </div>
      <div className="navbar-right" style={{zIndex:1000, cursor:"pointer"}}>
        <NavLink
          to="#"
          className="menu-button d-none d-md-block"
          onClick={()=>onLounchApp()}
        >
        </NavLink>
      </div>
    </div>
  );
}

export default TopNav;
