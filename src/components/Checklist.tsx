"use client";
import { useState } from "react";

export default function Checklist({ items }: { items: string[] }) {
  const [done, setDone] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setDone((p) => {
      const n = new Set(p);
      if (n.has(i)) {
        n.delete(i);
      } else {
        n.add(i);
      }
      return n;
    });
  return (
    <ul className="checks">
      {items.map((t, i) => (
        <li key={i}>
          <label className={done.has(i) ? "done" : ""}>
            <input type="checkbox" checked={done.has(i)} onChange={() => toggle(i)} /> {t}
          </label>
        </li>
      ))}
      <li className="hint">{done.size} of {items.length} ready</li>
    </ul>
  );
}
