import React,{useState} from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import ButtonList from "./ButtonList";

const default_rows = 3;
const default_columns = 3;

const App = () => {
  const [rows] = useState(default_rows);
  const [columns] = useState(default_columns);

  return (
    <div classname="app">
      <h1>Grid Maker</h1>
      <div className="grid">
        <table>
          <tbody>
            {Array.from({length: rows}).map((_,rowsIDX)=>(
              <tr key = {rowsIDX}>
            {Array.from({length: columns}).map((_,columnsIDX)=>(
              <td key = {columnsIDX}></td>
            ))}
            </tr>
            ))}
          </tbody>
        </table> {}
      </div>
      <ButtonList />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
