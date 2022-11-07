import React,{useState} from 'react'

const Operation2 = ({sentRangeValue,sentRadioValue}) => {

    const [radio,setRadio] = useState();

    const rangeValue = (e) =>  {
        sentRangeValue(Number(e.target.value))
    };
    
    const radio1Value = (e) =>{ 
        setRadio(e.target.value)
        sentRadioValue(Number(e.target.value))

    }
 
    const radio2Value = (e) =>{ 
        setRadio(e.target.value)
        sentRadioValue(Number(e.target.value))
    }

    return (
      <div>
            <label>0</label>
            <input type="range" onChange={rangeValue} min="0" max="1" step="1"/>
            <label>1</label>
            <br></br>
            <label>1</label>
            <input type="radio" onChange={radio1Value} value="1" checked={radio === "1"} />
            <br></br>
            <label>0</label>
            <input type="radio" onChange={radio2Value} value="0" checked={radio === "0"} />
            <br></br>     
      </div>
  
    )
}

export default Operation2;