import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Alert } from "@mui/material";

export default function Dashboard() {
  const location = useLocation();

  useEffect(() => {
    document.title = "BCR - Binar Car Rental";
  }, []); // Perbaikan: tambahkan dependency array kosong agar useEffect hanya dijalankan sekali saat komponen mount

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Error access denied
      </Typography>

      {location.state?.maintenance ? (
        <Alert severity="warning">
          This page is currently under maintenance. Please try again later.
        </Alert>
      ) : (
        <>
          <h1>{location.state?.status || "404"} Error</h1>
          <p>{location.state?.message || "Page not found"}</p>
        </>
      )}
    </Container>
  );
}
