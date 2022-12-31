import React, { useState } from "react";
import NavLink from "./navLink";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [menuItems, setMenuItems] = useState(/* ... */);
  
    const handleMenuClick = () => {/* ... */};
    const handleItemClick = (id) => {
      const newMenuItems = menuItems.map((item) =>({
        ...item,
        // Аналог выражения item.id === id ? true : false
        active: item.id === id
      }));
      setMenuItems(newMenuItems);
    };

  return (
    <div>
        <button
            className="btn btn-sm btn-primary"
            onClick={handleMenuClick}
        >
            меню
        </button>
        {open && (
            <ul className="nav nav-pills flex-column mb-auto">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.id}
                        {...item}
                        onActiveChange={handleItemClick}
                    />
                ))}
            </ul>
        )}
    </div>
);
};

export default Navbar;