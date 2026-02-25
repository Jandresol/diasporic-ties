import { NODES } from '../data/nodes';
import { ELEM_COLOR } from '../data/elements';

export default function Edge({
  edge,
  posA,
  posB,
  activeNode,
  isConnected,
  onClick,
  hiddenElems
}) {
  if (!posA || !posB) return null;

  const dx = posB.x - posA.x;
  const dy = posB.y - posA.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;

  const ox = (-dy / len) * 14;
  const oy = (dx / len) * 14;

  const mx = (posA.x + posB.x) / 2 + ox;
  const my = (posA.y + posB.y) / 2 + oy;

  const nodeA = NODES.find(n => n.id === edge.a);
  const nodeB = NODES.find(n => n.id === edge.b);

  const color = nodeA ? ELEM_COLOR[nodeA.elem] : '#d4922a';

  const isHidden =
    hiddenElems?.has(nodeA?.elem) ||
    hiddenElems?.has(nodeB?.elem);

  // EXACT original opacity logic
  let opacity = 0.18;

  if (isHidden) {
    opacity = 0.02;
  } else if (activeNode) {
    opacity = isConnected ? 0.75 : 0.03;
  }

  return (
    <path
      className={`edge ${isConnected ? 'lit' : ''}`}
      d={`M ${posA.x} ${posA.y} Q ${mx} ${my} ${posB.x} ${posB.y}`}
      stroke={color}
      strokeWidth="1"
      fill="none"
      strokeDasharray={
        activeNode
          ? isConnected
            ? 'none'
            : '4 8'
          : '4 8'
      }
      opacity={opacity}
      style={{
        transition: 'opacity 0.35s ease, stroke-width 0.35s ease'
      }}
      onClick={onClick}
    />
  );
}