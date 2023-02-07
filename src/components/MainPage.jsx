import { Button, Table, TableHead } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductApi } from "../actions/action";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";
import LandingPage from "./LandingPage";

function MainPage() {
  const contentsOfTable = useSelector((state) => state.TableReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductApi());
  }, []);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <Box>
      <LandingPage />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">ID</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Image</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="outlined">Add Product</Button>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contentsOfTable.map((data) => (
              <StyledTableRow key={data._id}>
                <StyledTableCell align="left">{data._id}</StyledTableCell>
                <StyledTableCell align="left">{data.pName}</StyledTableCell>
                <StyledTableCell align="left">
                  {" "}
                  <img
                    src={data.pImg}
                    srcSet={data.pImg}
                    alt={data.pName}
                    loading="lazy"
                    height={"100px"}
                    width={"100px"}
                  />
                </StyledTableCell>
                <StyledTableCell align="left">{data.pDesc}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {data.pPrice}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton aria-label="delete" color="error">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="edit" color="secondary">
                    <EditIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MainPage;
