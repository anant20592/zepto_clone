import React from "react";

export interface MenuItem {
  id: number;
  label: string;
  link: string;
  children: MenuItem[] | null;
}

interface MenuProps {
  menuArr: MenuItem[];
}

const Menu = ({ menuArr }: MenuProps) => {
  return (
    <div>
      {menuArr.map(item => (
        <ul key={item.id}>
          <li>
            <strong>{item.label}</strong>
          </li>
          {item.children?.map(child => (
            <ul key={child.id}>
              <li>{child.label}</li>
            </ul>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Menu;
