import { ArrowUpRight, Braces, Brain, ChartCandlestick, Database, LayoutTemplate, Server, Wrench } from "lucide-react";
import type { ComponentType } from "react";

const ICONS: Record<string, ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  "AI & LLM Engineering": Brain,
  "Quant & Trading Systems": ChartCandlestick,
  Languages: Braces,
  Backend: Server,
  Frontend: LayoutTemplate,
  "Data & Infra": Database,
  Practices: Wrench,
};
import { skillGroups } from "@/data/site";

export default function Skills() {
  const focus = skillGroups.filter((g) => g.focus);
  const rest = skillGroups.filter((g) => !g.focus);

  return (
    <section className="section container" id="skills">
      <div className="section-head reveal">
        <span className="eyebrow">Toolkit</span>
        <h2>What I work with.</h2>
        <p>
          Deepest in two areas right now — LLM agents and systematic trading systems — on top of a
          full-stack foundation.
        </p>
      </div>

      <div className="skills-focus">
        {focus.map((group, i) => (
          <article className="card skill-focus reveal" key={group.title}>
            <div className="skill-focus-top">
              <span className="skill-focus-icon">
                {(() => { const I = ICONS[group.title]; return I ? <I size={20} strokeWidth={1.8} /> : null; })()}
              </span>
              <div>
                <span className="skill-focus-index">0{i + 1}</span>
                <h3>{group.title}</h3>
              </div>
            </div>
            <p>{group.focus!.blurb}</p>
            <div className="chips">
              {group.skills.map((skill) => (
                <span className="chip chip-sm" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
            <a className="skill-focus-link" href={group.focus!.href}>
              {group.focus!.cta} <ArrowUpRight size={14} />
            </a>
          </article>
        ))}
      </div>

      <div className="card skill-rows reveal">
        {rest.map((group) => (
          <div className="skill-row" key={group.title}>
            <h3>
              {(() => { const I = ICONS[group.title]; return I ? <I size={14} strokeWidth={2} /> : null; })()}
              {group.title}
            </h3>
            <div className="chips">
              {group.skills.map((skill) => (
                <span className="chip chip-sm" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
