import { NODES } from '../data/nodes';
import { ELEM_COLOR } from '../data/elements';

export default function ConnectionFlash({ activeEdge, setActiveEdge }) {
  if (!activeEdge) {
    return (
      <div id="conn-flash">
        <button
          className="cf-close"
          onClick={() => setActiveEdge(null)}
        >
          Dismiss ×
        </button>
      </div>
    );
  }

  const nodeA = NODES.find(n => n.id === activeEdge.a);
  const nodeB = NODES.find(n => n.id === activeEdge.b);

  const pairColor = nodeA
    ? ELEM_COLOR[nodeA.elem]
    : '#d4922a';

  return (
    <div id="conn-flash" className="open">
      <button
        className="cf-close"
        onClick={() => setActiveEdge(null)}
      >
        Dismiss ×
      </button>

      <div
        className="cf-pair"
        style={{ color: pairColor }}
      >
        {nodeA?.name}  ×  {nodeB?.name}
      </div>

      <div className="cf-title">
        {activeEdge.title}
      </div>

      <div className="cf-body">
        {activeEdge.body}
      </div>

      {activeEdge.quote && (
        <div className="cf-quote"
        style ={{borderLeft: `2px solid ${pairColor}` }}>
          {activeEdge.quote}
        </div>
      )}
    </div>
  );
}