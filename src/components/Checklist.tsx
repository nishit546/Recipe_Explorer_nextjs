"use client";

import { useState } from "react";

export default function Checklist({ items }: { items: string[] }) {
  const [done, setDone] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setDone((p) => {
      const n = new Set(p);
      if (n.has(i)) {
        n.delete(i);
      } else {
        n.add(i);
      }
      return n;
    });
  };

  const pct = items.length > 0 ? Math.round((done.size / items.length) * 100) : 0;

  return (
    <div>
      <ul className="checks">
        {items.map((t, i) => (
          <li key={i}>
            <label className={done.has(i) ? "done" : ""}>
              <input
                type="checkbox"
                checked={done.has(i)}
                onChange={() => toggle(i)}
                aria-label={`Mark ${t} as prepared`}
              />
              <span>{t}</span>
            </label>
          </li>
        ))}
      </ul>

      <div className="checks-progress">
        <span>{done.size} of {items.length} ingredients ready</span>
        <span>{pct}%</span>
      </div>
      <div className="checks-bar-bg">
        <div className="checks-bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
