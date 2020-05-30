import React from 'react';
import { Button } from 'react-bootstrap'

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
                <li><Button variant="outline-primary" onClick={appetizer1}>Spinach Puffs</Button></li>
                <li><Button variant="outline-primary" onClick={appetizer2}>Chicken Wings</Button></li>
                <li><Button variant="outline-primary" onClick={appetizer3}>Deviled Eggs</Button></li>
                <li><Button variant="outline-primary" onClick={appetizer4}>Jalapeno Poppers</Button></li>
            </ul>
            <Button variant="outline-primary" onClick={resetAppetizer}>Reset Appetizer</Button>
            <ul>Entree Options:
                <li><Button variant="outline-primary" onClick={entree1}>Grilled Chicken and Roasted Carrots</Button></li>
                <li><Button variant="outline-primary" onClick={entree2}>Catfish and Steamed Broccolini</Button></li>
                <li><Button variant="outline-primary" onClick={entree3}>Salmon and Asparagus</Button></li>
                <li><Button variant="outline-primary" onClick={entree4}>Steak and Baked Potato</Button></li>
            </ul>
            <Button variant="outline-primary" onClick={resetEntree}>Reset Entree</Button>
            <ul>Desert Options:
                <li><Button variant="outline-primary" onClick={desert1}>Key Lime Pie</Button></li>
                <li><Button variant="outline-primary" onClick={desert2}>Chocolate Lava Cake</Button></li>
            </ul>
            <Button variant="outline-primary" onClick={resetDesert}>Reset Desert</Button>
        </React.Fragment>
    )
}