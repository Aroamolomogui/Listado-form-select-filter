

function Filter({setFilter}) {

    const handleChange = (ev) =>{
        setFilter(ev.target.value)
    }
  return <div>
    <label htmlFor="">Mostrar</label>
    <select onChange={handleChange} name="" id="">
        <option value="all">Todos</option>
        <option value="weekend">Abren los findes</option>
        <option value="weekdays">Abren entre semana</option>
    </select>
  </div>;
}

export default Filter;
