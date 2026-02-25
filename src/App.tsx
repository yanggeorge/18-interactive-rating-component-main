import "./App.css";

import { useAtom } from "jotai";

import { scoreAtom } from "./atoms";
import Card from "./components/Card";
import Final from "./components/Final";
import JotaiDevTools from "./utils/jotai-devtools";

function App() {
  const [score, _] = useAtom(scoreAtom);
  console.log("🚀 ~ App.tsx:11 ~ App ~ score:", score);
  return (
    <>
      <JotaiDevTools />
      <main className="flex-1 grid place-items-center bg-black">
        {score === null && <Card />}
        {score && <Final />}
      </main>
    </>
  );
}

export default App;
