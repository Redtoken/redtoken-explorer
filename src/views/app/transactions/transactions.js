import React, { useState,useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setHeaderTitle } from '../../../redux/headerTitle/actions';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Box,
  TablePagination,
} from '@mui/material';
import api from "../../../service/api/api"
import Loader from 'react-loader';
import moment from "moment";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Transactions = props => {
  const { history } = props;
  const dispatch = useDispatch();

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(setHeaderTitle('Unisot Transactions'));
    onGetTransactions()

  }, []);

  const onGetTransactions = () => {
    setLoading(true)
    api.getTransactions( async (err, res) => {
      setLoading(false)
      if(!err){
        console.log('err:',err,res)
        setTransactions(res?.result||[])
      }
    })
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onClickHash= (row)=>{
    history.push({
      pathname: `/app/transactions/details/${row.tokenid}`,
      state: { detail: row },
    });
  }

  return (
    <Box 
      style={{padding:20}}
    >
      {loading && <Loader loaded={!loading} />}
      <Paper>
        <TableContainer 
          style={{padding:20}}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{border:'none'}}>Hash</StyledTableCell>
                <StyledTableCell style={{border:'none'}}>Device id</StyledTableCell>
                <StyledTableCell style={{border:'none'}}>Device type</StyledTableCell>
                <StyledTableCell style={{border:'none'}}>Lat</StyledTableCell>
                <StyledTableCell style={{border:'none'}}>Lon</StyledTableCell>
                <StyledTableCell align="right"  style={{border:'none'}}>Updated</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <StyledTableRow key={row.name}  >
                  <StyledTableCell style={{color:'#0075ff',border:'none',cursor:'pointer' }}
                    onClick={(e) => { onClickHash(row) }}
                  >{row.tokenid }</StyledTableCell >                  <StyledTableCell component="th" scope="row" style={{border:'none'}}> {row.deviceid}</StyledTableCell>
                  <StyledTableCell component="th" scope="row" style={{border:'none'}}> {row.devicetype}</StyledTableCell>
                  <StyledTableCell component="th" scope="row" style={{border:'none'}}> {row.lat}</StyledTableCell>
                  <StyledTableCell component="th" scope="row" style={{border:'none'}}> {row.lon}</StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row" style={{border:'none'}}> {moment(row.updatedAt).format("YYYY-MM-DD HH:mm")}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={transactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
      </Box>
    );
  }

export default Transactions;
