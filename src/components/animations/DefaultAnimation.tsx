import "./DefaultAnimation.css";

const GLYPHS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ◊◈∆∇⌬⌖⍟≡≋⟁⟒⧫λΞΨΩ∑∂√∞";

function randomLine(): string {
  const indent = " ".repeat(Math.floor(Math.random() * 8));
  const length = 6 + Math.floor(Math.random() * 18);
  let line = "";
  for (let i = 0; i < length; i++) {
    line += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    if (Math.random() < 0.15) line += " ";
  }
  return indent + line;
}

// Generated once at module load — same "cipher" for the whole session
const cipherLines = Array.from({ length: 14 }, randomLine);

function DefaultAnimation() {
  return (
    <div className="default-animation" aria-hidden="true">
      <div className="code-scroll">
        {[...cipherLines, ...cipherLines].map((line, i) => (
          <pre key={i} className={i % 5 === 2 ? "line-bright" : ""}>
            {line}
          </pre>
        ))}
      </div>
    </div>
  );
}

export default DefaultAnimation;