import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 
function App(){
  return <Element/>
}
const Element=()=>{
  const [grett,fungreetings]=useState('');
  const [butt,funbutt]=useState();
   const handlepost=()=>{
     funbutt(grett)
   }
  return (
    <div>
    <input type="text" value={grett} onChange={event=>fungreetings(event.target.value)}/>
    <button onClick={handlepost}>press</button>
    {butt ? (<ul>
     <li>{butt}</li>
     </ul>):null
      }
    </div>
  );   
  }
export default App;
