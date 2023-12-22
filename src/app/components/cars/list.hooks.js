import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8000/api/v1/cars';

export default function useList() {
  const navigate = useNavigate();
  const [params, setParams] = useState({
    page: 1,
    size: 5,
    search: '',
  });
  const [meta, setMeta] = useState();
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setParams({
      ...params,
      search: value,
    });
  };

  const handleRemove = async (e, record) => {
    e.stopPropagation();
    const confirmed = window.confirm('Are you sure want to delete?');
    if (confirmed) {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          return;
        }

        await axios.delete(`${API_BASE_URL}/${record.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        await fetchCars();
      } catch (error) {
        console.error('Error deleting car:', error);
      }
    }
  };

  const handleEdit = (e, record) => {
    e.stopPropagation();
    navigate(`/update/${record.id}`);
  };

  const fetchCars = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_BASE_URL, {
        params: {
          ...params,

        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
        },
      });
      setCars(response.data.data);
      setMeta(response.data.meta);
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, [params.page, params.size, params.search]);

  return {
    cars,
    params,
    setParams,
    loading,
    meta,
    handleEdit,
    handleRemove,
    handleSearch,
  };
}