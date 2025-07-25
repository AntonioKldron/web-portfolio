// src/components/layout/sidebar/SidebarButton.jsx
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'; // Import Link, useMatch, useResolvedPath for routing

const SidebarButton = ({ icon: IconComponent, to, label }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true }); 

  // Define colors based on active state
  const activeBgColor = 'bg-slate-500'; 
  const inactiveBgColor = 'bg-slate-100'; 
  const activeIconColor = 'text-slate';
  const inactiveIconColor = 'text-slate-400';

  return (
    <Link
      to={to}
      className={`
        flex items-center justify-center
        w-14 h-14 /* Size of the circular button */
        rounded-full /* Makes it circular */
        transition-colors duration-200 ease-in-out
        ${match ? activeBgColor : inactiveBgColor}
        ${match ? 'shadow-md' : 'hover:bg-gray-600'} /* Add shadow for active, hover for inactive */
      `}
      title={label} // For accessibility
    >
      {/* The actual icon */}
      {IconComponent && (
        <IconComponent
          className={`
            text-2xl /* Icon size */
            ${match ? activeIconColor : inactiveIconColor}
          `}
        />
      )}
    </Link>
  );
};

export default SidebarButton;