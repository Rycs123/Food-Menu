import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <h1>Hello, React</h1>
            <Food />
            <Food />
            <Food />
        </div>
    );
}

function Food() {
    return (
        <div>
            <img src="food/soto-betawi.jpg" alt="" srcset="" />
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