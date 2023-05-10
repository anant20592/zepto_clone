import React, { useState } from "react";
import data from "./menu.json";
import Menu, { MenuItem } from "./Menu";
const CategoryTab = () => {
  const [menuList, setMenuList] = useState<MenuItem[]>([]);
  const handleTab = (tabData: MenuItem[]) => {
    setMenuList(tabData);
  };

  return (
    <div className="category-tab">
      <ul style={{ display: "flex", flexDirection: "row" }}>
        {data.map(category => (
          <li
            onClick={() => handleTab(category.children)}
            key={category.categoryId}
            style={{ listStyle: "none", cursor: "pointer" }}
          >
            {category.category}
          </li>
        ))}
      </ul>
      <Menu menuArr={menuList} />
    </div>
  );
};

export default CategoryTab;
