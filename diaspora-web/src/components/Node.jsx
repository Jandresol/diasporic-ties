import { ELEM_COLOR, ELEM_LABEL } from '../data/elements';

export default function Node({
  node,
  position,
  onClick,
  hiddenElems,
  activeNode,
  isConnected
}) {
  const color = ELEM_COLOR[node.elem];

  const isHidden = hiddenElems?.has(node.elem);

  const dim =
    activeNode &&
    !isConnected &&
    !isHidden;

  // EXACT original opacity logic
  const opacity = isHidden
    ? 0.05
    : dim
    ? 0.12
    : 1;

  const filter = isHidden
    ? 'saturate(0)'
    : dim
    ? 'saturate(0.1)'
    : '';

  // EXACT word wrapping logic
  const words = node.name.split(' ');
  let lines = [];
  let cur = '';

  words.forEach(w => {
    const test = cur ? cur + ' ' + w : w;
    if (test.length > 16 && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = test;
    }
  });

  if (cur) lines.push(cur);
  if (lines.length > 3) lines = lines.slice(0, 3);

  const lh = 12;
  const lw =
    Math.max(...lines.map(l => l.length * 5.8)) + 12;
  const lhTotal = lines.length * lh + 6;
  const ly = 20;

  return (
    <g
      className="node"
      transform={`translate(${position.x},${position.y})`}
      onClick={onClick}
      style={{
        opacity,
        filter,
        transition: 'opacity 0.4s ease, filter 0.3s ease'
      }}
    >
      <circle
        r="22"
        fill={color}
        opacity="0.06"
        className="node-glow"
      />

      <circle
        r="15"
        fill="none"
        stroke={color}
        strokeWidth="1"
        opacity="0.4"
        className="node-outer"
      />

      <circle
        r="7"
        fill={color}
        opacity="0.9"
        className="node-core"
      />

      <rect
        x={-(lw / 2)}
        y={ly}
        width={lw}
        height={lhTotal}
        fill="rgba(17,11,5,0.85)"
        rx="3"
      />

      {lines.map((line, i) => (
        <text
          key={i}
          x="0"
          y={ly + 10 + i * lh}
          textAnchor="middle"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize="9.5"
          fontWeight="600"
          fill="#f0e4cf"
        >
          {line}
        </text>
      ))}

      <text
        x="0"
        y={ly + lhTotal + 10}
        textAnchor="middle"
        fontFamily="Space Mono, monospace"
        fontSize="6.5"
        letterSpacing="1.2"
        fill={color}
        opacity="0.85"
      >
        {ELEM_LABEL[node.elem].toUpperCase()}
      </text>
    </g>
  );
}