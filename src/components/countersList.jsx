import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {

    let initialState = [
        {id:0, value:0, name:'ложка'},
        {id:1, value:4, name:'вилка'},
        {id:2, value:0, name:'тарелка'},
        {id:3, value:0, name:'ненужная вещь'},
        {id:4, value:0, name:'набор минималиста'},
    ]

    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
       const newCounters = counters.filter(counter => counter.id !== id)
       setCounters(newCounters)
    }

    const handleReset = () => {
        // console.log('sbros');
        setCounters(initialState)
    }

    const handleIncrement = (id) => {
        const incrementCounters = counters.map((counter) => {
            (counter.id === id) ? counter.value +=1 : counter.value +=0
            return counter})

            setCounters(incrementCounters)
    }




    const handleDecrement = (id) => {
        const decrementCounters = counters.map((counter) => {
            (counter.id === id) ? counter.value -=1 : counter.value +=0

            return counter})

        setCounters(decrementCounters)
    }


    return (
    <>
        {counters.map(count => 
        <Counter 
                key={count.id} 
                onDelete = {handleDelete}
                onIncrement = {handleIncrement}
                onDecrement = {handleDecrement}
                {...count}
        />
        )}
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
        )
}

export default CountersList
