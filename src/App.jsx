import { useState } from 'react'

import './App.css'
import Screen from './components/Screen'
import Button from './components/Button'

import { HiOutlineBackspace } from "react-icons/hi";
import { TbMath, TbDivide } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function App() {
  const [display, setDisplay] = useState("")
  const [result, setResult] = useState(0)
  const [amount, setAmount] = useState(0)
  const [operator, setOperator] = useState(false)
  const [dark, setDark] = useState(true)
  
  const darkMode = () => {    
    setDark(!dark)
    if(dark) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark");
    }
    
  }
  const addDigit = (digit) => {
    if((digit == "+" || digit == "-" || digit == "*" || digit == "/" || digit == "**2" || digit == "**0.5") && operator == true) {
      setOperator(false)
      setDisplay(result + digit)
      return
    } 

    if(operator) {
      setDisplay(digit)
      setOperator(false)
      return
    }

    const enteredValue = display + digit
    setDisplay(enteredValue)
  }

  const clean = () => {
    setOperator(false)
    setDisplay("")
    setResult(0)
    setAmount(0)
    return
  }

  const operation = (oper) => {
    if(oper =="backspace") {
      let valueScreen = display
      valueScreen = valueScreen.substring(0, (display.length - 1))
      setDisplay(valueScreen)
      setOperator(false)
      return
    }

    if(oper =="%") {
      let valueScreen = display
      valueScreen =+ "/100"
      setDisplay(valueScreen)
    }
    try {
      const r = eval(display) //Eval faz o calculo do que está na tela
      setAmount(r)
      setResult(r)
      setOperator(true)
    } catch {
      setResult('ERRO')
    }
  }
  const xSquared = <span>x<sup>2</sup></span>;
  return (
    <>
      <div className='calculator'>
        <Screen value={display} res={result} />

        <div className='buttons'>
          <Button label="C" onclick={clean} classname="operator"/>          
          <Button label={xSquared} onclick={() => addDigit("**2")} classname="operator"/>
          <Button label={<TbMath />} onclick={() => addDigit("**0.5")} classname="operator"/>
          <Button label={<HiOutlineBackspace/>} onclick={() => operation("backspace")} classname="operator"/>
          <Button label="7" onclick={() => addDigit("7")}/>
          <Button label="8" onclick={() => addDigit("8")}/>
          <Button label="9" onclick={() => addDigit("9")}/>
          <Button label={<TbDivide />} onclick={() => addDigit("/")} classname="operator"/>
          <Button label="4" onclick={() => addDigit("4")}/>
          <Button label="5" onclick={() => addDigit("5")}/>
          <Button label="6" onclick={() => addDigit("6")}/>
          <Button label={<IoIosClose size={20}/>} onclick={() => addDigit("*")} classname="operator"/>
          <Button label="1" onclick={() => addDigit("1")}/>
          <Button label="2" onclick={() => addDigit("2")}/>
          <Button label="3" onclick={() => addDigit("3")}/>
          <Button label="-" onclick={() => addDigit("-")} classname="operator"/>
          <Button label={dark ?  <BsFillMoonStarsFill fill='#ff5c00'/> 
          : <BsFillSunFill fill='#ff5c00'/> } 
          onclick={() => darkMode()}/>
          <Button label="0" onclick={() => addDigit("0")}/>
          <Button label="." onclick={() => addDigit(".")}/>
          <Button label="+" onclick={() => addDigit("+")} classname="operator"/>
        </div>          
          <button onClick={() => operation("=")} className="equal">=</button>
      </div>
      <footer>
        Elas na tech 🧡 - Valeska Leandro
      </footer>
    </>
  )
}

export default App
