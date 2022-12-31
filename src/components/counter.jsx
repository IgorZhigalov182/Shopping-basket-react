import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'

const Counter = (props) => {    
    // const [value, setValue] = useState(props.value)
    let {value} = props
    console.log(props);

    const formatValue = () => {
        return value === 0 ? 'empty' : value
    }
    
    const getBadgeClasses = () => {
            let classes = 'badge m-2 '
            classes += value === 0 ? 'bg-warning' : 'bg-primary'
        return classes
    }

    // const handleIncrement = (val) => {
    //     // setValue((prevState) => prevState + 1);
    //     console.log(value);
    //     console.log(props);
    //     value = value + 1
    // }
    // const handleDecrement = () => {
    //     // setValue((prevState) => prevState - 1);
    // }

    // const deleteItem = (id) => {
    //     // setValue((value.filter(item => item!==id)))
    //     console.log(props);
    // }

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={()=>props.onIncrement(props.id)}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={()=>props.onDecrement(props.id)}>-</button>
            <button className="btn btn-danger btm-sm m-2" onClick={()=>props.onDelete(props.id)}>delete</button>
        </div>
    )
}

export default Counter