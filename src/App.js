import logo from './logo.svg';
import './App.css';
import List from "./componant/list.js"
import { createContext } from 'react';


let listarray = []


export const Lisst = createContext()
function App() {


  return (
    
    <div className="App">

        
        <Lisst.Provider value={listarray}>
          <List />
        </Lisst.Provider>
    
        
    </div>
  );
}

export default App;
