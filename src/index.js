import React from "react";
import ReactDOM from "react-dom/client";

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
            <Food />
            <Food />
            <Food />
        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;

    if (hour < openHour || hour > closeHour) {
        alert("Closed");
    } else {
        alert("Open");
    }

    return (
        <footer className="footer">
            {new Date().getFullYear()} Warung Tegal Riyanda | Open at:{" "}
            {openHour} - Close at: {closeHour}
        </footer>
    );
}

function Food() {
    return (
        <div>
            <img src="food/soto-betawi.jpg" width={100} height={70} />
            <h2>Soto Betawi</h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
