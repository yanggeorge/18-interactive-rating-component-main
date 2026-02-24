import "./App.css";

import { useAtom } from "jotai";

import { scoreAtom } from "./atoms";
import Card from "./components/Card";
import Final from "./components/Final";

function App() {
  const [score, _] = useAtom(scoreAtom);
  return (
    <main className="flex-1 flex flex-col w-full bg-grey-950">
      {score === null && <Card />}
      {score && <Final />}
    </main>
  );
}

export default App;
