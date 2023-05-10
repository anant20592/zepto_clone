import { useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

interface SubCategoryI {
  img: string;
  desc: string;
  url: string;
  id: string;
}

interface SidebarProps {
  subcategories: SubCategoryI[];
  category?: string;
  handleChange: (id: string) => void;
}

const Sidebar = ({ subcategories, category, handleChange }: SidebarProps) => {
  // useEffect(() => {
  //   console.log(categories);
  // }, [categories]);

  // const handleChange = (id: string) => {
  //   console.log(id);
  // };

  return (
    <div className="sidebar">
      <ol>
        {subcategories.length > 0 &&
          subcategories.map((cate: SubCategoryI) => (
            <NavLink to={`/${category}/${cate.url}`}>
              <li onClick={() => handleChange(cate.id)}>
                <div>
                  <div>
                    <img src={cate.img} width={48} />
                  </div>
                </div>
                <p>{cate.desc}</p>
              </li>
            </NavLink>
          ))}
      </ol>
    </div>
  );
};

export default Sidebar;
