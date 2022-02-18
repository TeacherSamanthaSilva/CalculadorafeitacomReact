import React from 'react'
import './Calculadora.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function Calculadora() {

    const [num,setNum] = useState(0)

    function inputNum(valor) {
        setNum(valor)
        var input = e.target.value
        if(input == 0){
            setNum(input)
        }else{
            
        setNum(num + input)
        }
        
    }

    function porcentagem() {
        setNum(num/100)
    }

    function operatorHandler(params) {
        if(num > 0){
            setNum(-num)
        }
    }

    function clear(e) {
        setNum(0)
    }
    return (
        <h1 className="Resultado"></h1>
        <Box>
        <Container maxWidth="xs">
        <div className="wrapper">
        <button onClick = {clear}>C</button>
        <button>()</button>
        <button onClick={porcentagem}>%</button>
        <button>/</button>
        </div>
        <div className="wrapper">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>X</button>
        </div>
        <div className="wrapper">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        </div>
        <div className="Wrapper">
        <button onClick={operatorHandler}>+/-</button>
        <button>0</button>
        <button>,</button>
        <button>=</button>
        </div
        </Container>
        </Box>
    )
}