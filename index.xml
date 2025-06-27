<?xml version="1.0" encoding="utf-8"?>
import React, { useEffect } from "react";
import "./style.css";

const App = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <h1 className="fade-in">Welcome to Jejak Warisan Penang</h1>
      <p className="fade-in">Explore the rich cultural heritage and vibrant traditions of Penang.</p>

      <div style={{ height: "1500px" }}>
        <p style={{ marginTop: "1000px" }} className="fade-in">Scroll to see more animation!</p>
      </div>
    </div>
  );
};

export default App;
