import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { productInputs, userInputs } from "./formSource";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import List1 from "./pages/list1/List1";
import List3 from "./pages/list3/List3";
import List4 from "./pages/list4/List4";
import List5 from "./pages/list5/List5";
import List6 from "./pages/list6/List6";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.scss";
import Datatable from "./components/datatable1/Datatable1";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />          
          <Route path="/pacientes">
            <Route index element={<List />} />
            <Route path=":pacienteId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Agregar Nuevo Paciente" />}
            />
          </Route>
          <Route path="/usuario">
            <Route index element={<List1 />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Agregar Nuevo Usuario" />}
            />
          </Route>
          <Route path="/tratamientos">
            <Route index element={<List6 />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Agregar Nuevo Tratamiento" />}
            />
          </Route>
          <Route path="/historialDental">
            <Route index element={<List3 />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Agregar Nuevo Historial Dental" />}
            />
          </Route>
          <Route path="/facturas">
            <Route index element={<List4 />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
          <Route path="/reportes">
            <Route index element={<List5 />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
