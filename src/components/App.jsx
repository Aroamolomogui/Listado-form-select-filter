import { useState } from "react";
import "../styles/App.scss";
import data from "../services/data.json"
import AllClubs from "./AllClubs";
import Form from "./Form";
import Filter from "./Filter";

function App() {
  const [clubs, setClubs] = useState(data)
  const [newClub, setNewClub] = useState( {
    name: "", openOnWeekdays: false, openOnWeekend: false })
    const [filter, setFilter] = useState ("all")

    const changeNewClub = (object) => {
       setNewClub({...newClub, [object.key]: object.value })
    }

    const addNewClub = () =>{
      setClubs([...clubs,newClub])

    }

    const filterClubs = clubs.filter((club) =>{
      if(filter === "weekend") {
        return club.openOnWeekend === true
      }else if(filter === "weekdays") {
        return club.openOnWeekdays === true
      }
      return true

    } )


  return (
  <>
  <Filter setFilter={setFilter}/>
  <AllClubs clubs={filterClubs}/>
  <Form changeNewClub ={changeNewClub}  addNewClub={addNewClub}/>
  </>
)
}

export default App;
