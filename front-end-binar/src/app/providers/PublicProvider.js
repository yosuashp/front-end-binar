// publicprovider.js

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PublicProvider({ children }) {
  const [show, setShow] = useState(false);
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const checkUserRoleAndRedirect = () => {
      if (token) {
        if (userRole === 'superadmin' || userRole === 'admin') {
          // Allow access to /dashboard for superadmin and admin
          setShow(true);
        } else if (userRole === 'member') {
          // Redirect member to / for unauthorized access to /dashboard
          navigate('/', { replace: true });
        } else {
          // For other roles, show the component
          setShow(true);
        }
      } else {
        // For unauthenticated users, show the component
        setShow(true);
      }
    };

    checkUserRoleAndRedirect();

    return () => {
      isMounted = false; // Cleanup to avoid state updates on an unmounted component
    };
  }, [token, userRole, navigate]);

  return show ? children : null;
}
