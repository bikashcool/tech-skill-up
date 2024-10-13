import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

function App() {

  const [courses, setCourses] = useState({});

  useEffect(() => {
    const fetchData = async() => {
      try{
        const res = await fetch(apiUrl);
        const apiResult = await res.json();
        // save data into variable
        setCourses(apiResult.data);
      }catch(error){
        toast.error("Something went wrong");
      }
    }
    fetchData();
  });

  return (
    <div>
      <Navbar/>
      <Filter filterData={filterData}/>
      <Cards courses={courses}/>
    </div>
  );
}

export default App;
