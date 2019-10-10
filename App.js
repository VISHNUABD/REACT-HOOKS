import React,{useState} from 'react';
const App=()=>{
  return <Insert/>
}
const Insert=()=>{
  const[input,inputchange]=useState([]);
  const[print,printchange]=useState([]);

  const changevalue=(event)=>{
  inputchange(event.target.value)
  }

  const printvalues=()=>{
    if(print.length===0){
      alert("please enter the text here");
    }else{
      printchange([...print,input])
    }
    
  }
  return(
    <div>
      <input type="text" placeholder="lets Rock" value={input} onChange={changevalue} ></input>
      <button onClick={printvalues}>PRESS HERE</button>
      <ul>
      {
        print.map(i=>{
          return (<li key={i}>{i}</li>)
          
        })
      }
      </ul>
    </div>
  );
}

export default App;
  



