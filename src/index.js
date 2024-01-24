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
            <Food
                name="Nasi Goreng"
                description="Nasi yang digoreng dengan bumbu rempah khas Indonesia"
                fare={25000}
                source="food/nasi-goreng.jpg"
                stock={Math.random() >= 0.5 ? true : false}
            />
            <Food
                name="Rendang"
                description="Rendang adalah hidangan berbahan dasar daging yang dihasilkan dari
                proses memasak suhu rendah dalam waktu lama dengan menggunakan aneka rempah-rempah dan santan"
                fare={20000}
                source="food/rendang.jpg"
                stock={Math.random() >= 0.5 ? true : false}
            />
            <Food
                name="Sate Ayam"
                description="Sate ayam adalah makanan khas Indonesia. Sate Ayam dibuat dari daging ayam."
                fare={15000}
                source="food/sate-ayam.jpg"
                stock={Math.random() >= 0.5 ? true : false}
            />
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

function Food(props) {
    return (
        <div className="food">
            <img src={props.source} alt={props.name} width={100} height={70} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <span>{props.fare}</span>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
