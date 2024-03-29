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
    // const food = [];
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
                <>
                    <p>
                        Aneka makanan Indonesia yang disajikan oleh Warteg RYCS
                        sebagai pemenuhan makanan kesehatan yang diperlukan
                        dalam kehidupan sehari-hari
                    </p>
                    <ul className="foods">
                        {data.map((food) => (
                            <Food foodObj={food} key={food.name} />
                        ))}
                    </ul>
                </>
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
        return <OpenStore openHours={openHour} closeHours={closeHour} />;
    } else {
        return <CloseStore openHours={openHour} closeHours={closeHour} />;
    }
}

function CloseStore({ openHours, closeHours }) {
    return (
        <p>
            Maaf bro masih tutup. Warteg buka sekitar jam {openHours} -{" "}
            {closeHours}.
        </p>
    );
}

function OpenStore({ openHours, closeHours }) {
    return (
        <footer className="footer">
            <div className="order">
                <p>
                    {new Date().getFullYear()} Warung Tegal Riyanda | Open at:{" "}
                    {openHours} - Close at: {closeHours}
                </p>
                <button className="btn">Order</button>
            </div>
        </footer>
    );
}

function Food(props) {
    const { name, description, fare, source, stock } = props.foodObj;
    return (
        <li className={`food ${!stock ? "sold-out" : ""}`}>
            <img src={source} alt={name} width={100} height={70} />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>{stock ? fare : "Sold Out"}</span>
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
