import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ICars } from './cars.types';
import { IFileItem } from './service/types';

export function useDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [fileItem, setFileItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8000/api/v1/cars/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        
        // Perhatikan penggunaan properti yang benar dari respons API
        console.log('API Response:', response.data);  // Tambahkan log ini
        setFileItem(response.data.data.image);  // <-- Menggunakan properti image
        setCar(response.data.data);
      } catch (error) {
        console.error('Error fetching car details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { car, fileItem, loading };
}
