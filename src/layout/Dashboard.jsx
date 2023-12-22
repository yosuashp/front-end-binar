// Import semua yang diperlukan
import React, { useEffect } from "react";
import styled from '@emotion/styled';
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Typography, Alert, Avatar, Box, Divider, MenuItem, MenuList, Stack } from "@mui/material";
// import DashboardContainerStyled from "./DashboardStyles"; // Perubahan pada import
// import SidebarStyled from "./DashboardStyles"; // Perubahan pada import
// import MainStyled from "./DashboardStyles"; // Perubahan pada import
// import MainPageStyled from "./DashboardStyles"; // Perubahan pada import
const DashboardContainerStyled = styled.div`
  height: 100vh;
  background: #f2f2f2;
`;
const SidebarStyled = styled.aside`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;

  z-index: 20;
`;
const MainStyled = styled.main`
  height: 100%;
  overflow-y: auto;
  padding-left: 250px;
`;

const MainPageStyled = styled.div`
  padding: 1rem;
`;

export default function Dashboard({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "BCR - Binar Car Renta";
  }, []); 

  const handleLogout = () => {
    const c = window.confirm('Are you sure you want to logout?');
    if (c) {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      window.location.href = '/login';
    }
  };

  // Periksa role pada localStorage
  const userRole = localStorage.getItem('userRole');

  useEffect(() => {
    // Periksa role dan arahkan ke /error jika role bukan admin atau superadmin
    if (userRole !== 'admin' && userRole !== 'superadmin') {
      navigate("/error", {
        state: {
          status: '403',
          message: 'Unauthorized Access'
        }
      });
    }
  }, [userRole, navigate]);

  return (
    <DashboardContainerStyled>
      <SidebarStyled>
        <Box sx={{ position: 'relative', height: '100%' }}>
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
            <MenuList>
              <Divider />
              <MenuItem sx={{ py: 1 }} onClick={handleLogout}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar>S</Avatar>
                  <Box>Sahat</Box>
                </Stack>
              </MenuItem>
            </MenuList>
          </Box>
        </Box>
      </SidebarStyled>
      <MainStyled>
        <MainPageStyled>{children}</MainPageStyled>
      </MainStyled>
    </DashboardContainerStyled>
  );
}
