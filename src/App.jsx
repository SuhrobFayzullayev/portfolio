// React hooks
import { useEffect, useState } from "react";

// Components
import About from "./Pages/About";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";
import LetsTalk from "./Pages/LetsTalk";
import Layout from "./Layout";

// Libraries
import { Routes, Route } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore/lite";
import db from "./Firebase/config";

// Data Context
import Data from "./Context/Data";

// Global Styled Component
import GlobalStyle from "./StyledComponents/GlobalStyle";

function App() {
  // Data
  const [data, setData] = useState([]);
  const portfolio = collection(db, "data");
  const getData = async () => {
    const request = await getDocs(portfolio);
    setData(request.docs.map((v) => v.data()));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((v) => (
        // Send Data
        <Data.Provider key={v} value={v}>
          <GlobalStyle />
          <div className="app">
            {/* Routing */}
            <Routes>
              <Route element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Skills />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="lets-talk" element={<LetsTalk />} />
              </Route>
            </Routes>
          </div>
        </Data.Provider>
      ))}
    </>
  );
}

export default App;
