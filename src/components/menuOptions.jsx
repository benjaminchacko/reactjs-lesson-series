// Counter with React.useState Hook
import React from 'react';

const useLocalState = (localItem) => {
    const [loc, setstate] = React.useState(localStorage.getItem(localItem))

    const setLocalState = (newItem) => {
        localStorage.setItem(localItem, newItem)
        setstate(newItem)
    }
    return [loc, setLocalState]
}

export const MenuOptions = () => {
    const [appetizer, setAppetizer] = useLocalState("Appetizer");
    const [entree, setEntree] = useLocalState("Entree");
    const [desert, setDesert] = useLocalState("Desert");

    const appetizer1 = () => setAppetizer("Spinach Puffs");
    const appetizer2 = () => setAppetizer("Chicken Wings");
    const appetizer3 = () => setAppetizer("Deviled Eggs");
    const appetizer4 = () => setAppetizer("Jalapeno Poppers");

    const entree1 = () => setEntree("Grilled Chicken and Roasted Carrots");
    const entree2 = () => setEntree("Catfish and Steamed Broccolini");
    const entree3 = () => setEntree("Salmon and Asparagus");
    const entree4 = () => setEntree("Steak and Baked Potato");

    const desert1 = () => setDesert("Key Lime Pie");
    const desert2 = () => setDesert("Chocolate Lava Cake");

    const resetAppetizer = () => setAppetizer("");
    const resetEntree = () => setEntree("");
    const resetDesert = () => setDesert("");

    return (
        <React.Fragment>
            <h1>Menu Options</h1>
            <p>A React App demonstrating saving multiple states to LocalStorage with useState Hook & custom useLocalState hook</p>
            <p>Current Selection(s):
                <li>Appetizer: {appetizer}</li>
                <li>Entree: {entree}</li>
                <li>Desert: {desert}</li>
            </p>
            <ul>Appetizer Options:
                <li><button onClick={appetizer1}>Spinach Puffs</button></li>
                <li><button onClick={appetizer2}>Chicken Wings</button></li>
                <li><button onClick={appetizer3}>Deviled Eggs</button></li>
                <li><button onClick={appetizer4}>Jalapeno Poppers</button></li>
            </ul>
            <button onClick={resetAppetizer}>Reset Appetizer</button>
            <ul>Entree Options:
                <li><button onClick={entree1}>Grilled Chicken and Roasted Carrots</button></li>
                <li><button onClick={entree2}>Catfish and Steamed Broccolini</button></li>
                <li><button onClick={entree3}>Salmon and Asparagus</button></li>
                <li><button onClick={entree4}>Steak and Baked Potato</button></li>
            </ul>
            <button onClick={resetEntree}>Reset Entree</button>
            <ul>Desert Options:
                <li><button onClick={desert1}>Key Lime Pie</button></li>
                <li><button onClick={desert2}>Chocolate Lava Cake</button></li>
            </ul>
            <button onClick={resetDesert}>Reset Desert</button>
        </React.Fragment>
    )
}