import { ReactElement } from "react";
import Tabs from "./components/Tabs";

export default function App(): ReactElement {
  return (
    <div className="text-center text-purple-700 text-4xl font-bold">
      <h1>Tabs Demo</h1>
      <Tabs>
        <div id="Range">
          This is the <strong>Range Body</strong>!
        </div>
        <div id="Overview">
          This is the <strong>Overview Body</strong>!
        </div>
      </Tabs>
    </div>
  );
}
