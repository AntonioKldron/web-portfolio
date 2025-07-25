import React from 'react';
import SobreMiPage from '../components/sobreMi.jsx'; 
import StackSection from '../components/stack.jsx';
import Sidebar from '../layout/Sidebar.jsx'; 


export default function Index() {
  return (
    <>
      <SobreMiPage />
      <StackSection />
      <Sidebar />
    </>
  );
}