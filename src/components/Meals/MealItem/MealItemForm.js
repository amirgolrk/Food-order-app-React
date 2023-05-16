import React from "react";
import Input from "../../UI/Input";
import classes from './MealItemForm.module.css'
const MealItemForm = props =>{
    return (
        <form>
            <Input label ='Amount' input ={{id:'amount', type:'number', min:'1', max:'5', step:'1', defaultValue:'1'}}/>
            <button> + Add to cart</button>
        </form>
    )
}
export default MealItemForm