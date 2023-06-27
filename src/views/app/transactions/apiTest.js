import React, { useState,useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setHeaderTitle } from '../../../redux/headerTitle/actions';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import {
  Paper,
  Box,
  Button,
  TextField,
  Divider,  
  Grid,
  Alert  
} from '@mui/material';
import api from "../../../service/api/api"
import Loader from 'react-loader';
import moment from "moment";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const APITest = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    tokenId: false,
    deviceId: false,
    deviceType: false,
    lat: false,
    lon: false,
  });

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [tokenId, setTokenId] = useState("0x016a0ecfebf7f345f9559a2130c1757dcdda5958d7da96445bfb7b6c1b3ad05c");
  const [deviceId, setDeviceId] = useState("deviceID-7100");
  const [deviceType, setDeviceType] = useState("Web");
  const [lat, setLat] = useState("112.01");
  const [lon, setLon] = useState("121.152");  
  const [isAlerted, setAlerted] = useState(false);  
  const [alertText, setAlertText] = useState("");  
  const [response, setResponse] = useState("");
  

  useEffect(() => {
    dispatch(setHeaderTitle('Test API - Generate Tx'));    
  }, []);

  const cancel = () => {
    window.location.href = "/";
  }

  const callAPI = () => {
    console.log('callAPI')    
    setAlertText("")
    setAlerted(false);

    let isValidated = true;
    let errorNew = {}
    if (username == ""){
      errorNew["username"] = true;      
      isValidated = false;
    } else {
      errorNew["username"] = false;
    }

    if (password == ""){
      errorNew["password"] = true;
      isValidated = false;
    } else {
      errorNew["password"] = false;
    }

    if (tokenId == ""){
      errorNew["tokenId"] = true;
      isValidated = false;
    } else {
      errorNew["tokenId"] = false;
    }

    if (deviceId == ""){
      errorNew["deviceId"] = true;
      isValidated = false;
    } else {
      errorNew["deviceId"] = false;
    }

    if (deviceType == ""){
      errorNew["deviceType"] = true;
      isValidated = false;
    } else {
      errorNew["deviceType"] = false;
    }

    if (lat == ""){
      errorNew["lat"] = true;
      isValidated = false;
    } else {
      errorNew["lat"] = false;
    }

    if (lon == ""){
      errorNew["lon"] = true;
      isValidated = false;
    } else {
      errorNew["lon"] = false;
    }

    setErrors(errorNew);
    if (!isValidated) return;
    setLoading(true);
    api.authenticate({username, password}, (err, res) => {
      if (err){
        console.log('err', err);
        errorNew["username"] = true;
        errorNew["password"] = true;
        setErrors(errorNew);
        setLoading(false);
        setAlertText("Login API is failed! Invalid username or password!")
        setAlerted(true);
        return;      
      }
      console.log('authencate res' ,res);
      api.createTransaction({tokenId, deviceId, deviceType, lat, lon}, res.access_token, (err1, res1) => {
        if (err1){
          console.log('err1', err1);
          setAlertText("Creating Tx API is failed!")
          setAlerted(true);          
          setLoading(false);          
          return;      
        }
        console.log('res1', res1)
        if (res1.error){
          setResponse(`error: ${res1.error}`);  
        } else {
          setResponse("success: OK");
        }        
        setLoading(false);
      })  
    })  
  }
  return (
    <Box 
      style={{padding:20}}
      component="form"
      autoComplete="off"
    >
      {loading && <Loader loaded={!loading} />}      
      <Paper style={{padding:20}}>
        {isAlerted && <Alert severity="error">{alertText}</Alert>}
        <Divider style={{paddingTop: "10px", paddingBottom: "10px"}}>API Authencation</Divider>
        <Grid container spacing={2}>
          <Grid item xs={4}>
              <TextField error={errors["username"]} value={username} required id="username" label="username" variant="standard"   
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUserName(event.target.value);
              }}/>
          </Grid>          
          <Grid item xs={4}>
              <TextField error={errors["password"]} value={password}  required id="password" label="password" variant="standard"  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}/>
          </Grid>
        </Grid> 
        <Divider style={{paddingTop: "10px", paddingBottom: "10px"}}>API Request Data</Divider>
        <Grid container spacing={2}>
          <Grid item xs={4}>
              <TextField fullWidth error={errors["tokenId"]}  value={tokenId}  required id="tokenId" label="tokenId" variant="standard" defaultValue="0x4f6a0ecfebf7f345f9559a2130c1757dcdda5958d7da96445bfb7b6c1b3ad05c" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTokenId(event.target.value);
              }}/>
          </Grid>          
          <Grid item xs={4}>
              <TextField required error={errors["deviceId"]}  value={deviceId}  id="deviceId" label="deviceId" variant="standard" defaultValue="deviceID-10000" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDeviceId(event.target.value);
              }}/>
          </Grid>
          <Grid item xs={4}>
              <TextField required error={errors["deviceType"]} value={deviceType} id="deviceType" label="deviceType" variant="standard" defaultValue="IPhone" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDeviceType(event.target.value);
              }}/>
          </Grid>
        </Grid> 
        <Grid container spacing={2}>
          <Grid item xs={4}>
              <TextField required error={errors["lat"]} value={lat} id="lat" label="lat" variant="standard" defaultValue="40.7128" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setLat(event.target.value);
              }}/>          
          </Grid>          
          <Grid item xs={4}>
              <TextField required error={errors["lon"]}  value={lon} id="lon" label="lon" variant="standard" defaultValue="74.0060" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setLon(event.target.value);
              }}/>          
          </Grid>
        </Grid> 
        <Divider style={{paddingTop: "10px", paddingBottom: "10px"}}>API Response</Divider>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="response"
              label="API response"
              multiline
              rows={4}
              value={response}
              defaultValue=""
            />
          </Grid>  
        </Grid>       
        <Divider style={{paddingTop: "10px", marginBottom: "10px"}}></Divider> 
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={() => callAPI()}>Call API</Button>
            <Button variant="outlined" onClick={() => cancel()} style={{marginLeft: "10px"}}>Cancel</Button>
          </Grid>
        </Grid>        
      </Paper>
    </Box>
    );
  }

export default APITest;
