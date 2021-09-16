import { Fragment } from "react";
import useLocalState from "../utils/useLocalState";
import { Button } from 'react-bootstrap'

const appetizers = ["Spinach Puffs", "Chicken Wings", "Deviled Eggs", "Jalapeno Poppers"]
const entrees = ["Grilled Chicken and Roasted Carrots", "Catfish and Steamed Broccolini", "Salmon and Asparagus", "Steak and Baked Potato"]
const desserts = ["Key Lime Pie", "Chocolate Lava Cake", "Strawberry Shortcake"]

export const MenuOptions = () => {
    const [appetizer, setAppetizer] = useLocalState("Appetizer");
    const [entree, setEntree] = useLocalState("Entree");
    const [dessert, setDesserts] = useLocalState("Desert");

    const handleAppetizer = (e) => {
        e.preventDefault();
        setAppetizer(e.currentTarget.innerText);
    }

    const handleEntree = (e) => {
        e.preventDefault();
        setEntree(e.currentTarget.innerText);
    }

    const handleDessert = (e) => {
        e.preventDefault();
        setDesserts(e.currentTarget.innerText);
    }

    const resetAppetizer = () => setAppetizer("");
    const resetEntree = () => setEntree("");
    const resetDessert = () => setDesserts("");

    return (
        <Fragment>
            <h1>Menu Options</h1>
            <p>A React App demonstrating saving multiple states to LocalStorage with useState Hook & custom useLocalState hook</p>
            <p>Current Selection(s):
                <li>Appetizer: {appetizer}</li>
                <li>Entree: {entree}</li>
                <li>Dessert: {dessert}</li>
            </p>
            <ul>Appetizer Options:
                {appetizers.map((appetizer, index) => {
                    return <li key={index} ><Button variant="outline-primary" onClick={handleAppetizer}>{appetizer}</Button></li>
                })}
            </ul>
            <Button variant="outline-primary" onClick={resetAppetizer}>Reset Appetizer</Button>
            <ul>Entree Options:
                {entrees.map((entree, index) => {
                    return <li key={index} ><Button variant="outline-primary" onClick={handleEntree}>{entree}</Button></li>
                })}
            </ul>
            <Button variant="outline-primary" onClick={resetEntree}>Reset Entree</Button>
            <ul>Dessert Options:
                {desserts.map((dessert, index) => {
                    return <li key={index} ><Button variant="outline-primary" onClick={handleDessert}>{dessert}</Button></li>
                })}
            </ul>
            <Button variant="outline-primary" onClick={resetDessert}>Reset Desert</Button>
        </Fragment>
    )
}