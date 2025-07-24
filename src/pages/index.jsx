import { useState } from 'react';
import HeaderMain from "../layout/header.jsx";
import SobreMiPage from '../components/sobreMi.jsx';
import '../style/styles.css'; 

export default function Index() {
  return (
    <>
      <HeaderMain/>
      <SobreMiPage/>
      <h1>Hola Mundo</h1>
    </>
  );
}
