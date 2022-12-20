import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Content } from "./pages/Content";

export default function App() {
    return (
        <div>
            <Header/>
                <Content />
            <Footer />
        </div>
    );
}