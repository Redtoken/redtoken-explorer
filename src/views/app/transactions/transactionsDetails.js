import React, { useState , useEffect} from "react";
import QRCode from "react-qr-code";
import { setHeaderTitle } from '../../../redux/headerTitle/actions';
import { useDispatch } from 'react-redux';
import  TextLine  from "../../../components/common/TextLine";
import moment from "moment";
import {
  Typography,
  Paper,
  Box,
} from '@mui/material';

const TransactionsDetails = (props) => {
  const dispatch = useDispatch();

  const [tokenid, setTokenid] = useState(props.match.params.id)
  const [transactionDetails, setTransactionDetails] = useState()

  useEffect(() => {
    dispatch(setHeaderTitle('Transaction Details'));
    setTransactionDetails(props.location.state.detail)
  }, [])

  return (
    <Box className='d-flex navbar-left, justify-content-between'
      style={{padding:20}}
    >
      <Paper elevation={0} style={{ width:'100%',padding:20}}>
        <Box className='d-flex navbar-left, justify-content-between'
          style={{borderBottom:'1px solid #ddd'}}
        >
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Overview
          </Typography>
        </Box>
        <TextLine label={'Hash'} value={transactionDetails?.tokenid}/>
        <TextLine label={'Device id'} value={transactionDetails?.deviceid}/>
        <TextLine label={'Device type'} value={transactionDetails?.devicetype}/>
        <TextLine label={'Fingerprint'} value={transactionDetails?.fingerprint}/>
        <TextLine label={'Lat'} value={transactionDetails?.lat}/>
        <TextLine label={'Lon'} value={transactionDetails?.lon}/>
        <TextLine label={'Updated'} value={moment(transactionDetails?.updatedAt).format("YYYY-MM-DD HH:mm")}/>
      </Paper>
      <Paper elevation={0} style={{padding:20, marginLeft:20}}>
        <Box className='d-flex align-items-center navbar-left, justify-content-between'
          style={{borderBottom:'1px solid #ddd'}}
        >
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            QrCode
          </Typography>
        </Box>
        <Box style={{ height: "auto", maxWidth: 400, width: "100%" , marginTop:'20px'}}>
          <QRCode
            size={400}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={tokenid}
            viewBox={`0 0 256 256`}
            />
        </Box>
      </Paper>
    </Box>
    );
  }

export default TransactionsDetails;
