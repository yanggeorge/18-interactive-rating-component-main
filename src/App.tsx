import "./App.css";

import { useAtom } from "jotai";
import { DevTools } from "jotai-devtools";

import { scoreAtom } from "./atoms";
import Card from "./components/Card";
import Final from "./components/Final";

function App() {
  const [score, _] = useAtom(scoreAtom);
  console.log("🚀 ~ App.tsx:11 ~ App ~ score:", score);
  return (
    <>
      <DevTools />
      <main className="flex-1 grid place-items-center w-full bg-black">
        {score === null && <Card />}
        {score && <Final />}
      </main>
    </>
  );
}

export default App;
