import NewTrain from "./NewTrain";
import Hi from "./Train";
import React from "react";

export const usercontext = React.createContext()
export const usercontexts = React.createContext()

function App() {
  let hamid = 'khaste'

  return (
    <usercontext.Provider value={'mohammad'}>
    <usercontexts.Provider value={'hamed'}>
    <Hi hamid={hamid}/>
    <NewTrain/>
    </usercontexts.Provider>
    </usercontext.Provider>
  );
}

export default App;
