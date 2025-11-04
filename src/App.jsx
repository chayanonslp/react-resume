import React,{ useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import DevelopmentTools from "./components/DevelopmentTools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/resume-data.json")
      .then((res) => res.json())
      .then(setData); 
  }, []);

  if (!data) return <div className="text-center mt-10">Loading...</div>;
  return (
    <>
    
      <div className="max-w-4xl mx-auto p-6 font-sans">
        <Header urlImg={data.urlImg} name={data.name} role={data.role} />
        <About text={data.about} contact={data.contact} />
        <Skills list={data.skills} />
        <DevelopmentTools items={data.DevelopmentTools} />
        <Experience items={data.experience} />
        <Projects items={data.projects} />
        <Contact />
      </div>
  
     
    </>
  );
  
}

export default App;
