import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
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
        <div>
            <h2>Menu Kita Bersama</h2>
            <Food />
            <Food />
            <Food />
        </div>
    );
}

function Footer() {
    return <footer>{new Date().getFullYear()} Warteg RYCS</footer>;
}

function Food() {
    return (
        <div>
            <img src="food/soto-betawi.jpg" width={100} height={70} />
            <h2>Soto Betawi dari Jakarta</h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
