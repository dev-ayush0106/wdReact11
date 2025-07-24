import First from "./First/First";
import Second ,{Second1, Second2}  from "./Second/Second";
import Third from "./Third/Third";
import "./App.css"

function App(){

  let name1="Prince";
  let name2="Kartik";
  let name3="Aahan";

  return(
    <>
    {/* <h1>Hello React</h1>
    <First/> */}
    {/* <Second/> */}
    {/* <Second1/>
    <Second2/> */}

    <Third/>
    </>
    
  )
}

export default App;