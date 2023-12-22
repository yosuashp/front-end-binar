import { Box, Typography, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import CommonPage from '../common-page/common-page';
import { useDetail } from './detail.hooks';

export default function CarDetail() {
  const { id } = useParams();
  const { car, fileItem, loading } = useDetail(id || '');

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!car) {
    return <Typography>Car not found.</Typography>;
  }

  return (
    <CommonPage withBack >
      <Stack spacing={2} style={{marginRight: '20rem'}}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Detail Information</Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Box sx={{ width: '100%'}}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Plate</Typography>
            <Typography variant="body1">{car.plate}</Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>Manufacture</Typography>
            <Typography variant="body1">{car.manufacture}</Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>Model</Typography>
            <Typography variant="body1">{car.model}</Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>Capacity</Typography>
            <Typography variant="body1">{car.capacity}</Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2.5 }}>Year</Typography>
            <Typography variant="body1">{car.year}</Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2.5 }}>Specs</Typography>
            <Typography variant="body1">{car.specs}</Typography>
          </Box>

          <Box sx={{ width: '100%', marginTop:'20rem' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Rent Per Day</Typography>
            <Typography variant="body1">{car.rentPerDay}</Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>Description</Typography>
            <Typography variant="body1">{car.description}</Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>Transmission</Typography>
            <Typography variant="body1">{car.transmission}</Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>Type</Typography>
            <Typography variant="body1">{car.type}</Typography>


            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2.5 }}>availableAt</Typography>
            <Typography variant="body1">{car.availableAt}</Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>Lain-Lain</Typography>
            <Typography variant="body1">{car.options}</Typography>
          </Box>

          {fileItem && (
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb:1, pb: 4}}>Images</Typography>
              <img
                src={fileItem}
                alt="Car Image"
                style={{ width: '20%', objectFit: 'cover', position: 'fixed'}}
              />
            </Box>
          )}
        </Stack>
      </Stack>
    </CommonPage>
  );
}