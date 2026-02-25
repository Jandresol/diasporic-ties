import { NODES } from '../data/nodes';
import { EDGES } from '../data/edges';
import { ELEM_COLOR, ELEM_LABEL } from '../data/elements';

export default function SidePanel({ activeNode, setActiveNode, setActiveEdge }) {
  const node = NODES.find(n => n.id === activeNode);

  const nodeConns = activeNode
    ? EDGES.filter(e => e.a === activeNode || e.b === activeNode)
    : [];

  return (
    <div id="panel" className={activeNode ? 'open' : ''}>
      <button
        className="panel-close"
        onClick={() => setActiveNode(null)}
      >
        Close ×
      </button>

      {node && (
        <>
        {node.video ? (
    node.video.includes('youtube') ? (
        <div className="panel-video">
        <iframe
            src={node.video}
            title={node.name}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
        />
        </div>
    ) : (
        <video
        className="panel-video"
        src={node.video}
        controls
        />
    )
            ) : node.img ? (
            <img
                className="panel-img"
                src={node.img}
                alt={node.name}
            />
            ) : (
            <div className="panel-img-placeholder">
                {node.type}
            </div>
            )}
          <div className="panel-type">{node.type}</div>

          <div
            className="panel-elem"
            style={{ color: ELEM_COLOR[node.elem] }}
          >
            {ELEM_LABEL[node.elem]}
          </div>

          <div className="panel-name">{node.name}</div>
          <div className="panel-date">{node.date}</div>
          <div className="panel-desc">{node.desc}</div>
          <div className="panel-geo">{node.geo}</div>

          <div className="panel-divider"></div>

          <div className="panel-ties-label">
            Invisible Ties
          </div>

          {nodeConns.map((e, i) => {
            const otherId = e.a === activeNode ? e.b : e.a;
            const other = NODES.find(n => n.id === otherId);
            if (!other) return null;

            return (
                <div
                key={i}
                className="conn-item"
                onClick={() =>
                    setActiveEdge({
                    ...e,
                    aName: NODES.find(n => n.id === e.a)?.name,
                    bName: NODES.find(n => n.id === e.b)?.name
                    })
                }
                >
                <div
                    className="conn-target"
                    style={{ color: ELEM_COLOR[other.elem] }}
                >
                    {other.name}
                </div>

                <div className="conn-title">
                    {e.title}
                </div>

                <div className="conn-snippet">
                    {e.body.substring(0, 110)}...
                </div>
                </div>
            );
            })}
        </>
      )}
    </div>
  );
}