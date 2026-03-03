import { ELEM_COLOR, ELEM_LABEL } from '../data/elements';
import ".././styles.css"

export default function Node({
  node,
  position,
  onClick,
  hiddenElems,
  activeNode,
  isConnected
}) {
  const vScale = typeof window !== 'undefined'
  ? Math.max(1, Math.min(window.innerWidth / 1440, 2.2))
  : 1;

  const baseFontSize  = 9.5 * vScale;
  const labelFontSize = 8   * vScale;
  const nodeR         = Math.round(9  * vScale);
  const outerR        = Math.round(20 * vScale);
  const glowR         = Math.round(22 * vScale);
  const lh            = Math.round(12 * vScale);

  const color = ELEM_COLOR[node.elem];

  const isHidden = hiddenElems?.has(node.elem);

  const dim =
    activeNode &&
    !isConnected &&
    !isHidden;

  const opacity = isHidden
    ? 0.10
    : dim
    ? 0.20
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
      <circle r={glowR}  fill={color} opacity="0.06" className="node-glow" />
      <circle r={outerR} fill="none" stroke={color} strokeWidth="1" opacity="0.4" className="node-outer" />
      <circle r={nodeR}  fill={color} opacity="0.9"  className="node-core" />

      {/* rect height/width also use lh */}
      <rect
        x={-(lw / 2)}
        y={ly}
        width={lw}
        height={lhTotal}
        fill="var(--bg)"
        rx="3"
      />

      {lines.map((line, i) => (
        <text
          key={i}
          x="0"
          y={ly + baseFontSize + i * lh}
          textAnchor="middle"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize={baseFontSize}
          fontWeight="600"
          fill="var(--text)"
        >
          {line}
        </text>
      ))}

      <text
        x="0"
        y={ly + lhTotal + labelFontSize + 2}
        textAnchor="middle"
        fontFamily="Space Mono, monospace"
        fontSize={labelFontSize}
        letterSpacing="1.2"
        fill={color}
        opacity="0.85"
      >
        {ELEM_LABEL[node.elem].toUpperCase()}
      </text>
    </g>
  );
}