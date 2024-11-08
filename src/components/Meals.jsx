import "../styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );

      setItems(data.meals);
    }

    getItems();
  }, []);

  const itemsList = items.map(({ idMeal, strMealThumb, strMeal }) => {
    return (
      <section className="card" key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{itemsList}</div>;
};

export default Meals;
