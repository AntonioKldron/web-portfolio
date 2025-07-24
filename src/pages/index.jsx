import React from 'react';
import SobreMiPage from '../components/sobreMi.jsx'; // Adjust path if needed
import Sidebar from '../layout/Sidebar.jsx'; // Ensure this path is correct

export default function Index() {
  return (
    <>
      <SobreMiPage />
      <SobreMiPage />
      <SobreMiPage />
      <SobreMiPage />
      <Sidebar />
    </>
  );
}