import React from "react";
import ReactDOM from "react-dom/client";

import data from "./data.js";
import "./index.css";

function App() {
    return (
        <div className="container">
            <Header></Header>
            <Menu></Menu>
            <Footer></Footer>
        </div>
    );
}

function Header() {
    return <h1>Warteg RYCS</h1>;
}

function Menu() {
    const food = data;
    const numOfFoods = food.length;
    return (
        <main className="menu">
            <h2
                style={{
                    color: "red",
                    fontSize: "50px",
                    textTransform: "uppercase",
                }}
            >
                Menu Kita Bersama
            </h2>
            {numOfFoods > 0 ? (
                <ul className="foods">
                    {data.map((food) => (
                        <Food foodObj={food} key={food.name} />
                    ))}
                </ul>
            ) : (
                <p>Kosong, bro. Besok datang lagi</p>
            )}
        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    if (isOpen) {
        return <OpenStore openHour={openHour} closeHour={closeHour} />;
    } else {
        return <CloseStore openHour={openHour} closeHour={closeHour} />;
    }
}

function CloseStore(props) {
    return (
        <p>
            Maaf bro masih tutup. Warteg buka sekitar jam {props.openHour} -{" "}
            {props.closeHour}.
        </p>
    );
}

function OpenStore(props) {
    return (
        <footer className="footer">
            <div className="order">
                <p>
                    {new Date().getFullYear()} Warung Tegal Riyanda | Open at:{" "}
                    {props.openHour} - Close at: {props.closeHour}
                </p>
                <button className="btn">Order</button>
            </div>
        </footer>
    );
}

function Food(props) {
    return (
        <li className="food">
            <img
                src={props.foodObj.source}
                alt={props.foodObj.name}
                width={100}
                height={70}
            />
            <div>
                <h3>{props.foodObj.name}</h3>
                <p>{props.foodObj.description}</p>
                <span>{props.foodObj.fare}</span>
            </div>
        </li>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
