import { ELEM_COLOR, ELEM_LABEL } from '../data/elements';

export default function Legend({ hiddenElems, setHiddenElems }) {

  function toggle(elem) {
    const newSet = new Set(hiddenElems);
    if (newSet.has(elem)) {
      newSet.delete(elem);
    } else {
      newSet.add(elem);
    }
    setHiddenElems(newSet);
  }

  return (
    <div id="legend">
      {Object.keys(ELEM_COLOR).map(elem => (
        <div
          key={elem}
          className={`leg ${hiddenElems.has(elem) ? '' : 'active'}`}
          onClick={() => toggle(elem)}
        >
          <div
            className="leg-pip"
            style={{ background: ELEM_COLOR[elem] }}
          />
          {ELEM_LABEL[elem]}
        </div>
      ))}
    </div>
  );
}