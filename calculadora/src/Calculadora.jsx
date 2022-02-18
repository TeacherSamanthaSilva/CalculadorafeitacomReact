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
        setNum(num + input)
    }

    function clear(e) {
        setNum(0)
    }
    return (
        <h1 className="Resultado"></h1>
        <Box>
        <Container maxWidth="xs">
        <div className="wrapper">
        <button>C</button>
        <button>()</button>
        <button>%</button>
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
        <button>+/-</button>
        <button>0</button>
        <button>,</button>
        <button>=</button>
        </div>
        </Container>
        </Box>
    )
}