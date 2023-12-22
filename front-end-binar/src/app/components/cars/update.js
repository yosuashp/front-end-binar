import React from 'react';
import { Box, TextField, Switch, Stack } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import CommonPage from '../common-page/common-page';
import useAction from './update.hooks';
import { VisuallyHiddenInput } from './create.styled';
import './create.css';

export default function Update() {
  const {
    formValues,
    handleUploadCover,
    loadingCover,
    setFormValues,
    handleSubmit,
    loadingSubmit,
    fileItem,
  } = useAction();

  return (
    <CommonPage
      withBack
      component={'form'}
      actionElement={
        <LoadingButton
          type="button"
          variant="contained"
          loading={loadingSubmit}
          className='submit-form'
          sx={{ float: 'right', margin: '0 0' }}
          onClick={handleSubmit}
        >
          Submit
        </LoadingButton>
      }
      onSubmit={handleSubmit}
      // title="Create Cars"
    >
      <Box
        sx={{
          width: '100%',
          marginLeft:'0rem',
          marginRight:'0rem',
          paddingTop:'0rem'
        }}
      >
         <h1>Create Cars</h1>
         <TextField
  name="plate"
  size="small"
  sx={{ width: '100%', mb: 3 }}
  label="Plate"
  onChange={(e) =>
    setFormValues({
      ...formValues,
      plate: e.target.value,
    })
  }
  variant="filled"
  value={formValues?.plate}
/>

<TextField
  name="manufacture"
  size="small"
  sx={{ width: '100%', mb: 3 }}
  label="Manufacture"
  onChange={(e) =>
    setFormValues({
      ...formValues,
      manufacture: e.target.value,
    })
  }
  variant="filled"
  value={formValues?.manufacture}
/>
<TextField
  name="rentPerDay"
  size="small"
  sx={{ width: '100%', mb: 3, }}
  label="rent perday"
  onChange={(e) =>
    setFormValues({
      ...formValues,
      rentPerDay: e.target.value,
    })
  }
  variant="filled"
  value={formValues?.rentPerDay}
/>
<TextField
  name="capacity"
  size="small"
  sx={{ width: '100%', mb: 3 }}
  label="Capacity"
  onChange={(e) =>
    setFormValues({
      ...formValues,
      capacity: e.target.value,
    })
  }
  variant="filled"
  value={formValues?.capacity}
/>
        <TextField
  name="description"
  size="small"
  sx={{ width: '100%', mb: 3 }}
  label="Description"
  onChange={(e) =>
    setFormValues({
      ...formValues,
      description: e.target.value,
    })
  }
  variant="filled"
  value={formValues?.description}
/>

<TextField
  name="availableAt"
  size="big"
  sx={{ width: '100%', mb: 3, pt:1, pb:0}}
  label="Available At"
  type="date" // Change to the appropriate type if needed
  onChange={(e) =>
    setFormValues({
      ...formValues,
      availableAt: e.target.value,
    })
  }
  variant="filled"
  value={formValues?.availableAt}
/>

<TextField
  name="transmission"
  size="small"
  sx={{ width: '100%', mb: 3 }}
  label="Transmission"
  onChange={(e) =>
    setFormValues({
      ...formValues,
      transmission: e.target.value,
    })
  }
  variant="filled"
  value={formValues?.transmission}
/>

<TextField
  name="Available"
  size="small"
  sx={{ width: '100%', mb: 3 }}
  label="Available"
  onChange={(e) =>
    setFormValues({
      ...formValues,
      available: e.target.value,
    })
  }
  variant="filled"
  value={formValues?.available}
/>

<TextField
  name="type"
  size="small"
  sx={{ width: '100%', mb: 3 }}
  label="Type"
  onChange={(e) =>
    setFormValues({
      ...formValues,
      type: e.target.value,
    })
  }
  variant="filled"
  value={formValues?.type}
/>

<TextField
  name="model"
  size="small"
  sx={{ width: '100%', mb: 3 }}
  label="Model"
  onChange={(e) =>
    setFormValues({
      ...formValues,
      model: e.target.value,
    })
  }
  variant="filled"
  value={formValues?.model}
/>

<TextField
  name="year"
  size="small"
  sx={{ width: '100%', mb: 3 }}
  label="Year"
  type="number"
  onChange={(e) =>
    setFormValues({
      ...formValues,
      year: Number(e.target.value),
    })
  }
  variant="filled"
  value={formValues?.year}
/>

{/* Options and Specs might be multi-select, you can use Autocomplete or other components */}

{/* For Options */}
<TextField
  name="options"
  size="small"
  sx={{ width: '100%', mb: 3 }}
  label="Options"
  onChange={(e) =>
    setFormValues({
      ...formValues,
      options: e.target.value.split(','), // Assuming options are comma-separated
    })
  }
  variant="filled"
  value={Array.isArray(formValues?.options) ? formValues?.options.join(',') : ''}
// value={formValues?.options?.join(',')}
/>

<TextField
  name="specs"
  size="small"
  sx={{ width: '100%', mb: 3 }}
  label="Specs"
  onChange={(e) =>
    setFormValues({
      ...formValues,
      specs: e.target.value.split(','), // Assuming specs are comma-separated
    })
  }
  variant="filled"
  value={Array.isArray(formValues?.specs) ? formValues?.specs.join(',') : ''}
// value={formValues?.specs?.join(',')}
/>

        <LoadingButton
          component="label"
          variant="contained"
          startIcon={<CloudUpload />}
          sx={{ mb: 3 }}
          loading={loadingCover}
        >
          Upload Car Image
          <VisuallyHiddenInput
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleUploadCover}
          />
        </LoadingButton>
        {fileItem && (
  <Box>
    <img
      src={fileItem}
      alt="preview"
      style={{ width: '60%', objectFit: 'cover' }}
    />
  </Box>
)}

        <Box>
        {/* <Stack direction={'row'} alignItems={'center'}>
  <div>Publish</div>
  <Switch
    name="published"
    title="Published"
    checked={formValues.published}
    onChange={(e) =>
      setFormValues({
        ...formValues,
        published: e.target.checked,
      })
    }
  />
</Stack> */}
        </Box>
      </Box>
    </CommonPage>
  );
  
}
