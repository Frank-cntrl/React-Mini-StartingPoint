import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import ButtonList from "./ButtonList";

const App = () => {
  return (
    <div classname="app">
      <h1>Grid Maker</h1>
      <div className="grid">
        <table>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table> {}
      </div>
      <ButtonList />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
