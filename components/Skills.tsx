import { skillGroups } from "@/data/site";

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-head reveal">
        <span className="eyebrow">Toolkit</span>
        <h2>What I work with.</h2>
        <p>Comfortable across the stack — happiest where the backend meets the product.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="card skill-group reveal" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chips">
              {group.skills.map((skill) => (
                <span className="chip" key={skill}>
                  {skill}
