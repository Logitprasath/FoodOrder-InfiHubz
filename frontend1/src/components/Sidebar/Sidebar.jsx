import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faPlusCircle, faListAlt, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        
        <NavLink to='/admin-dashboard/add' className="sidebar-option">
          <FontAwesomeIcon icon={faPlusCircle} />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/admin-dashboard/list' className="sidebar-option">
          <FontAwesomeIcon icon={faListAlt} />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/admin-dashboard/orders' className="sidebar-option">
          <FontAwesomeIcon icon={faClipboardList} />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
