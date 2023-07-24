import { useEffect, useState, useContext } from "react";
import { usercontext, usercontexts } from "./App";

function Hi({hamid}) {
  const [count, setcount] = useState(2)
  const name = useContext(usercontext)
  const names = useContext(usercontexts)

  const handleClick = () => {
    setcount(count + 1)
  }

  useEffect(() => {
    console.log('amir')
  },[])

  let amir = 'salam';
  const click = (javab,e) => {
      console.log(javab)
      console.log(e.target)
  }

  return(
      <>
      <h1 style={{color : 'red'}}>{amir} {hamid}</h1>
      <button onClick={(e) => click('khodafez', e)}>{name}</button>
      <button onClick={handleClick}>{count}</button>
      <button>{names}</button>
      </>
  )
}

export default Hi;
