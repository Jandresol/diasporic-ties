import { BIBLIOGRAPHY } from '../data/bibliography';

function formatCitation(entry) {
  const parts = [];

  if (entry.author) parts.push(entry.author);
  parts.push(entry.title);
  if (entry.journal) parts.push(<em key="j">{entry.journal}</em>);
  if (entry.volume) parts.push(entry.volume);
  if (entry.publisher) parts.push(entry.publisher);
  if (entry.year) parts.push(entry.year);
  if (entry.originalYear) parts.push(`(orig. ${entry.originalYear})`);
  if (entry.pages) parts.push(entry.pages);
  if (entry.isbn) parts.push(`ISBN ${entry.isbn}`);

  // Interleave with separators
  const result = [];
  parts.forEach((part, i) => {
    result.push(<span key={i}>{part}</span>);
    if (i < parts.length - 1) result.push(', ');
  });

  return result;
}

export default function Bibliography({ isOpen, onClose, activeNode }) {
  const entries = activeNode
    ? BIBLIOGRAPHY.filter(e => e.nodes.includes(activeNode))
    : BIBLIOGRAPHY;

  return (
    <div id="bibliography" className={isOpen ? 'open' : ''}>
      <div className="bib-header">
        <div>
          <div className="bib-label">Bibliography</div>
          {activeNode && (
            <button className="bib-all-btn" onClick={() => {}}>
              show all
            </button>
          )}
        </div>
        <button className="panel-close" onClick={onClose}>Close ×</button>
      </div>

      <div className="bib-list">
        {entries.length === 0 && (
          <p className="bib-empty">No citations for this node.</p>
        )}
        {entries.map(entry => (
          <div key={entry.id} className="bib-entry">
            <p className="bib-text">{formatCitation(entry)}</p>
            {(entry.url || entry.doi) && (
              <a
                className="bib-link"
                href={entry.url || entry.doi}
                target="_blank"
                rel="noreferrer"
              >
                {entry.url || entry.doi}
              </a>
            )}
            {entry.accessed && (
              <span className="bib-accessed">Accessed {entry.accessed}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}