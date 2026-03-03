export default function Intro({ onEnter }) {
  return (
    <div id="intro">
      <div class="i-eyebrow">A Diaspora Archive</div>
      <h1 class="i-title">Invisible Ties</h1>
      <div class="i-title-sub">Building the Black Diaspora Through Music and Dance</div>
      <p class="i-thesis">
        The Black diaspora is built through <em>culutral transmission</em>.
        It is the elements within them that form our invisible ties.
      </p>
      <button class="i-btn" id="i-btn" onClick={onEnter}>Enter the Web</button>
    </div>

  );
}