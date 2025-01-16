import React from "react";//
import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

const App: React.FC= () => {
    return (
        <>
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
