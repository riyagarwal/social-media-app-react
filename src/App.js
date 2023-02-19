import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [likes, setLikes] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const url =
    "https://jsonplaceholder.typicode.com/posts?_page=$%7Bpage%7D&_limit=20";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <input placeholder="Search" onChange={handleOnChange} />
      <Card id="" title="" likes={likes} />
    </>
  );
}

export default App;
