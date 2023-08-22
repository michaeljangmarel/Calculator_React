 import './App.css';
import Output from './components/Output'
import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react';

function App() { 
   let [input , setinput] = useState(0)
   let [output , setoutput] = useState(0) 

   function onclickButton(value){
     if(value == 'Clear') { 
      setinput(0)
      setoutput(0)
    }else if(value == '='){ 
      setoutput(eval(input))
      setinput(0)
    }else if(value == 'Back'){ 
      if(input != 0){
        input.length == 1 ? setinput(0) : setinput(input.slice(0,input.length -1))
      }
    } 
    else{ 
      input == 0 ? setinput(value) : setinput(input + value)
     }
   }
  return (
    <div className="container">
      <div className='frame'>
      <Output output={output}/>
      < Input input={input}/>
      <Button onclickButton={onclickButton}/>
      </div>
     </div>
  );
}

export default App;
