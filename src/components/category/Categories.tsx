import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { category } = useParams();
  console.log(category);
  const fetchCategories = async () => {
    await getDocs(collection(db, "Categories")).then(querySnapshot => {
      const newData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCategories(newData);
      setLoading(false);
      //setTodos(newData);
      console.log(newData);
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchCategories();
  }, []);
  return (
    <div className="container" style={{ marginTop: "24px" }}>
      <h2 style={{ marginBottom: "24px" }}>Explore By Categories</h2>
      <div className="grid-container">
        {!loading &&
          categories.map(category => (
            <CategoryCard category={category} key={category.id} />
          ))}
        {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((category, indx) => (
            <CategoryCard key={indx} shimmer={true} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
