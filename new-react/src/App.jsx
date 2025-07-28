import First from "./1.First/First";
import Second ,{Second1, Second2}  from "./2.Second/Second";
import Third from "./3.Third/Third";
import Fourth from "./4.Fourth/Fourth";
import Fourth1 from "./4.Fourth/Fourth1";
import Fourth2 from "./4.Fourth/Fourth2";
import Fifth from "./5.Fifth/fifth";
import "./App.css"

function App(){

  let name1="Prince";
  let name2="Kartik";
  let name3="Aahan";

  return(
    <>
    {/* Class 1 */}
    {/* <h1>Hello React</h1>
    <First/> */}

    {/* Class 2 */}
    {/* <Second/> */}
    {/* <Second1/>
    <Second2/> */}

    {/* Class 3 */}
    {/* <Third/> */}

    {/* Class 4 */}
    {/* <Fourth/> */}
    {/* <Fourth1/> */}
    {/* <Fourth2/> */}

    {/* Class 5 */}
    <Fifth/>
    
    </>
    
  )
}

export default App;