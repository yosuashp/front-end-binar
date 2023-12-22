import React from 'react';
import "./list.css"
import {
  Box,
  Button,
  CircularProgress,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import useAction from './list.hooks';
import { ICars } from './cars.types'; // Ganti "IBooks" dengan "ICars" agar sesuai dengan tipe data yang benar
import CommonPage from '../common-page/common-page';
import { parseISO, format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderElementStyled } from './list.styled';

export default function List() {
  const navigate = useNavigate();
  const {
    cars,
    loading,
    setParams,
    params,
    meta,
    handleEdit,
    handleRemove,
    handleSearch,
  } = useAction();

  const renderLoading = () => {
    return (
      <TableRow>
        <TableCell colSpan={5}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1rem 0',
            }}
          >
            <CircularProgress />
          </div>
        </TableCell>
      </TableRow>
    );
  };

  const renderContent = () => {
    if (loading) {
      return renderLoading();
    }
    return cars?.map((record) => (
      <TableRow
        key={record.id}
        sx={{
          '&:last-child td, &:last-child th': { border: 0 },
          '&:hover': {
            cursor: 'pointer',
          },
          position: 'relative',
        }}
        onClick={() => navigate(`/detail/${record.id}`)}
      >
        <TableCell component="th">
          <Box sx={{ mb: 1}}>{record.plate}</Box>
          <Box >
            <strong>Manufacture:</strong> {record.manufacture}
          </Box>
        </TableCell>

        <TableCell>{record.type}</TableCell>
        <TableCell>{record.year}</TableCell>
        <TableCell align="right">{record.available ? 'Yes' : 'No'}</TableCell>
        <TableCell>
          {format(parseISO(`${record.createdAt}`), 'dd/MM/yyyy HH:mm:ss')}
        </TableCell>
        <TableCell>
          <Stack
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
              height: '100%',
            }}
            gap={1}
          >
            <Button
              type="button"
              variant="contained"
              color="error"
              onClick={(e) => handleRemove(e, record)}
            >
              Remove
            </Button>
            <Button
              type="button"
              variant="outlined"
              onClick={(e) => handleEdit(e, record)}
            >
              Edit
            </Button>
          </Stack>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <CommonPage
      actionElement={
        <HeaderElementStyled>
          <h1 style={{marginRight:'42rem'}}>List Cars</h1>
          <TextField
            name="search"
            placeholder="Search cars plate or manufacture"
            onChange={handleSearch}
            size="small"
          />
          <Link to={'/create'}>
            <Button type="button" variant="contained">
              Create new
            </Button>
          </Link>
        </HeaderElementStyled>
      }
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Plate</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Year</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                Available
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Created At</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderContent()}</TableBody>
        </Table>
      </TableContainer>
      {/* <Pagination
        sx={{ mt: 3 }}
        count={meta?.totalPages}
        variant="outlined"
        shape="rounded"
        onChange={(_, page) => {
          setParams({
            ...params,
            page,
          });
        }}
      /> */}
       {meta && (
       <Pagination
       sx={{ mt: 3 }}
       count={meta?.totalPages}
       variant="outlined"
       shape="rounded"
       onChange={(_, page) => {
         setParams({
           ...params,
           page,
         });
       }}
     />
    )}
    </CommonPage>
  );
}
