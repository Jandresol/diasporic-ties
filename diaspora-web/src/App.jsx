import { useState } from 'react';
import Intro from './components/Intro';
import WebScene from './components/WebScene';
import ConnectionFlash from './components/ConnectionFlash';
import SidePanel from './components/SidePanel';
import Legend from './components/Legend';
import Header from './components/Header';
import Bibliography from './components/Bibliography';

import "./styles.css"

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeNode, setActiveNode] = useState(null);
  const [activeEdge, setActiveEdge] = useState(null);
  const [hiddenElems, setHiddenElems] = useState(new Set());
  const [bibOpen, setBibOpen] = useState(false);

  return (
    <div style={{ height: '100vh' }}>
      {showIntro && <Intro onEnter={() => setShowIntro(false)} />}

      {!showIntro && (
        <>
          <Header
            bibOpen={bibOpen}
            onBibClick={() => setBibOpen(b => !b)}
          />
          <WebScene
            activeNode={activeNode}
            setActiveNode={setActiveNode}
            setActiveEdge={setActiveEdge}
            hiddenElems={hiddenElems}
          />
          <SidePanel
            activeNode={activeNode}
            setActiveNode={setActiveNode}
            setActiveEdge={setActiveEdge}
          />
          <ConnectionFlash
            activeEdge={activeEdge}
            setActiveEdge={setActiveEdge}
          />
          <Legend hiddenElems={hiddenElems} setHiddenElems={setHiddenElems} />
          <Bibliography
            isOpen={bibOpen}
            onClose={() => setBibOpen(false)}
            activeNode={activeNode}
          />
        </>
      )}
    </div>
  );
}