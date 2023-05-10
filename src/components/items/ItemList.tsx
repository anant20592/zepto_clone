import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Header from "../dashboard/Header";
import {
  collection,
  collectionGroup,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import Sidebar from "./Sidebar";
import { useParams, useNavigate } from "react-router-dom";

const ItemList = () => {
  const [categories, setCategories] = useState([]);
  const { category, sub_category } = useParams();
  const [items, setItems] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<
    string | undefined
  >(undefined);
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  console.log(category);
  const fetchCategories = async () => {
    const categoriesRef = collection(db, "Categories");
    const q = query(categoriesRef, where("url", "==", category));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async doc => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUrl(doc.id);
      const sub_categoriesRef = collection(
        db,
        `Categories/${doc.id}/sub_categories`
      );
      const qu = query(sub_categoriesRef);
      await getDocs(qu).then(querySnapshot => {
        const newData = querySnapshot.docs.map((doc, i) => {
          if (i == 0) {
            setSelectedSubCategory(doc.id);
            navigate(`/${category}/${doc.data().url}`);
          }
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        setCategories(newData);
        console.log(newData);
      });
    });
  };

  const fetchItems = () => {
    console.log("fetch - ", url, selectedSubCategory);
    const itemsRef = collection(
      db,
      `Categories/${url}/sub_categories/${selectedSubCategory}/items`
    );
    const qu = query(itemsRef);
    getDocs(qu).then(querySnapshot => {
      const newData = querySnapshot.docs.map((doc, i) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      console.log(newData);
      setItems(newData);
    });
  };

  useEffect(() => {
    if (selectedSubCategory) fetchItems();
    console.log(selectedSubCategory);
  }, [selectedSubCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (id: string) => {
    setSelectedSubCategory(id);
  };

  return (
    <>
      <Header />
      <div style={{ marginRight: "96px", marginLeft: "96px" }}>
        <div className="flex-container">
          <Sidebar
            subcategories={categories}
            category={category}
            handleChange={(id: string) => handleChange(id)}
          />
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <h3 style={{ padding: "24px" }}>Fruits & Vegetables</h3>
            <div className="item-list-container">
              {items.length > 0 &&
                items.map(item => <ItemCard details={item} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemList;
