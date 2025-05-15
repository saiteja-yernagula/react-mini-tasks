import React, { useReducer } from 'react';
import './expensetracker.css';

const initialState = [
    {
        id: 1,
        description: "Course Fees",
        amount: 1000,
        type: "expense"
    },
    {
        id: 2,
        description: "Salary",
        amount: 50000,
        type: "income"
    }
];

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state,action.payload];
        case 'delete':
            console.log(action.payload)
            return state.filter(item =>
                item.id !== action.payload
                );
        default:
            return state
    
}}

function Expensetracker() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form=e.target
        
        const newobj={
            id:Date.now(),
            description:e.target[0].value,
            amount:parseFloat(form.amount.value),
            type:e.target[2].value
        }
        console.log(newobj);
        dispatch({type:"add",payload:newobj})
        form.reset();
        
    };


    const balance=state.reduce((acc,item)=>{
        return item.type==="expense"? acc-item.amount:acc+item.amount;
    },0)
   

    return (
        <div className='body'>

        <div className="tracker-container">
            <h1 className="tracker-title">💸 Personal Finance Tracker</h1>

            <form className="tracker-form" onSubmit={handleSubmit}>
                <input type="text" name="description" placeholder="Description" required />
                <input type="number" name="amount" placeholder="Amount" required />
                <select name="type">
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
                <button type="submit">Add</button>
            </form>

            <h2 className="balance">Balance: ₹{balance}</h2>

            <table className="tracker-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((item) => (
                        <tr key={item.id} className={item.type}>
                            <td>{item.description}</td>
                            <td>₹{item.amount.toLocaleString()}</td>
                            <td>{item.type}</td>
                            <td>
                                <button onClick={()=>{dispatch({type:"delete",payload:item.id})}} >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default Expensetracker;
