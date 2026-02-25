import { NODES } from '../data/nodes';
import { EDGES } from '../data/edges';
import { POSITIONS } from '../data/positions';
import Node from './Node';
import Edge from './Edge';
import BackgroundGlow from './BackgroundGlow';

export default function WebScene({
  activeNode,
  setActiveNode,
  setActiveEdge,
  hiddenElems
}) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const positions = {};
  NODES.forEach(n => {
    const p = POSITIONS[n.id] || [0.5, 0.5];
    positions[n.id] = {
      x: p[0] * width,
      y: p[1] * height
    };
  });

  function connected(id) {
    if (!activeNode) return true;
    return (
      id === activeNode ||
      EDGES.some(e =>
        (e.a === activeNode && e.b === id) ||
        (e.b === activeNode && e.a === id)
      )
    );
  }

  return (
    <div id="scene">
      <BackgroundGlow width={width} height={height} />

      <svg id="web">
        {EDGES.map((e, i) => (
          <Edge
            key={i}
            edge={e}
            posA={positions[e.a]}
            posB={positions[e.b]}
            activeNode={activeNode}
            hiddenElems={hiddenElems}
            isConnected={
              activeNode &&
              (e.a === activeNode || e.b === activeNode)
            }
            onClick={() =>
            setActiveEdge({
                ...e,
                aName: NODES.find(n => n.id === e.a)?.name,
                bName: NODES.find(n => n.id === e.b)?.name
            })
            }
          />
        ))}

        {NODES.map(n => (
          <Node
            key={n.id}
            node={n}
            position={positions[n.id]}
            activeNode={activeNode}
            hiddenElems={hiddenElems}
            isConnected={connected(n.id)}
              onClick={() => {
                setActiveEdge(null);
                setActiveNode(n.id);
            }}

          />
        ))}
      </svg>
    </div>
  );
}