export default function Header({ bibOpen, onBibClick }) {
  return (
    <header>
      <div>
        <div className="h-title">Invisible Ties</div>
        <div className="h-sub">Building the Black Diaspora Through Music and Dance</div>
      </div>
      <div className="h-right">
        <div className="h-hint">
            Click any node to explore its ties<br />
            Click any thread to reveal the connection
        </div>
                <button
            className={`bib-btn ${bibOpen ? 'active' : ''}`}
            onClick={onBibClick}
        >
            Bibliography
        </button>

      </div>
    </header>
  );
}