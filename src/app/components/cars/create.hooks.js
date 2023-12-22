import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAction() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    plate: '',
    manufacture: '',
    rentPerDay: '',
    capacity: '',
    description: '',
    availableAt: '',
    transmission: '',
    available: '',
    type: '',
    model: '',
    year: '',
    options: [],
    specs: [],
    published: false,
  });
  const [loadingCover, setLoadingCover] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [fileItem, setFileItem] = useState();

  const handleSubmit = async () => {
    try {
      setLoadingSubmit(true);
      const payload = { ...formValues, image: fileItem };
      const response = await axios.post('http://localhost:8000/api/v1/cars', payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(response.data);
      navigate(-1);
    } catch (error) {
      console.log('error > ', error.response.data);
    } finally {
      setLoadingSubmit(false);
    }
  };

  const handleUploadCover = async (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      try {
        setLoadingCover(true);
        const formData = new FormData();
        formData.append('image', files[0]);
  
        const response = await axios.post(
          'http://localhost:8000/api/v1/images',
          formData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
  
        // Periksa struktur respons dan pastikan sesuai dengan yang diharapkan
        if (response.data && response.data.data && response.data.data.url) {
          setFileItem(response.data.data.url); // Menyimpan nilai string URL
        } else {
          console.error('Invalid response structure:', response);
        }
      } catch (error) {
        console.log('error > ', error);
      } finally {
        setLoadingCover(false);
      }
    }
  };
  

  return {
    handleSubmit,
    handleUploadCover,
    setFormValues,
    formValues,
    loadingCover,
    loadingSubmit,
    fileItem,
  };
}
