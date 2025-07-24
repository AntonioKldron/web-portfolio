// src/components/layout/Sidebar.jsx
import React from 'react';
import SidebarButton from './sidebarComponents/sidebarButton.jsx'; // Ensure correct path

import {
  AiOutlineBulb,
  AiOutlineInbox,
  AiOutlineRead,
} from 'react-icons/ai';

const Sidebar = () => {
  return (
    <aside
      className="
        fixed           /* Posicionamiento fijo */
        top-0           /* Pegado a la parte superior */
        right-0         /* Pegado a la parte derecha */
        h-full          /* Ocupa el 100% de la altura del viewport */
        z-50            /* Asegura que esté por encima de otros elementos */
        w-20            /* Ancho de la barra lateral */
        flex flex-col   /* Arrange items vertically */
        items-center    /* Center items horizontally within the sidebar */
        py-8            /* Vertical padding (changed from py-15 as it's not a standard Tailwind class) */
        space-y-6       /* Space between buttons (changed from space-y-3 for more spacing) */
        shadow-lg       /* Optional: Add a subtle shadow to make it stand out */
      "
    >
      <SidebarButton icon={AiOutlineBulb} to="/ideas" label="Ideas" />
      <SidebarButton icon={AiOutlineInbox} to="/portfolio" label="Portfolio" />
      <SidebarButton icon={AiOutlineRead} to="/education" label="Education" />

      <div className="flex-grow flex items-end w-0.5 mb-4">
        <div className="w-full h-10 bg-blue-500 rounded-full"></div>
      </div>
    </aside>
  );
};

export default Sidebar;