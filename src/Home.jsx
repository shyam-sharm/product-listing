import Listing from "./components/Listing";
import Filter from "./components/Filter";
import { useEffect, useState } from "react";
import axios from "axios";

 function Home() {
  const [categories,setCategories] = useState([]);
  
  const [cat,setCat] = useState([])
  const [rating,setRating] = useState(null);
  const [range,setRange] = useState({
    from: 0,
    to: 0
  });

  const catHandler = (category) => {
    if (category == null) {
      setCat([]);
      return;
    }
    const i = cat.lastIndexOf(category);
    if (i != -1) {
      const newCat = cat.filter(
        (d) => {
          if(d != category) return true;
          else return false;
        }
      );
      setCat(newCat);
    }else{
      const newCat = [...cat, category];
      setCat(newCat);
    }
  }

   useEffect(
    () => {
      axios.get("https://fakestoreapi.com/products/categories")
      .then(
        (success) => {
          setCategories(success.data)
        }
      )
      .catch(
        (error) => {

        }
      )
    },
    []
   )

  return (
    <div className="gap-[10px] max-w-[1200px] mx-auto grid grid-cols-5 " >
      <Filter  rating={rating} ratingHandler={setRating} range={range} rangeHandler={setRange} categories={categories} cat={cat} catHandler={catHandler} />
      <Listing rating={rating} range={range} cat={cat}/>
    </div>
  );
}

export default Home;
