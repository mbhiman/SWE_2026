import { useState } from "react";
import Header from "./components/layout/Header";
import Tabs from "./components/layout/Tabs";
import ScheduleItem from "./components/schedule/ScheduleItem";
import { schedule, tagColors } from "./data/schedule";
import { phases } from "./data/phases";
import { projects } from "./data/projects";
import { rules } from "./data/rules";
import { weeklyCheckIn, monthlyMilestones } from "./data/checkin";
import ProgressBar from "./components/ui/ProgressBar";

export default function App() {
  const [activeTab, setActiveTab] = useState("schedule");
  const [activePhase, setActivePhase] = useState(1);
  const [checked, setChecked] = useState({});

  const toggleCheck = (i) => setChecked((p) => ({ ...p, [i]: !p[i] }));
  const score = Object.values(checked).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-bg-main text-text-main font-serif">
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-[680px] mx-auto px-4 pt-6 pb-16">

        {/* SCHEDULE TAB */}
        {activeTab === "schedule" && (
          <section className="animate-in fade-in duration-300">
            <div className="mb-5">
              <p className="text-[13px] text-[#6a6058] italic mb-4">
                Monday – Saturday. Non-negotiable. Sunday is rest + planning only.
              </p>
              <div className="flex gap-3 flex-wrap">
                {Object.entries(tagColors).map(([key, val]) => (
                  <div key={key} className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${val.dot}`} />
                    <span className="text-[11px] text-[#666] font-mono">{val.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-0.5">
              {schedule.map((item, i) => (
                <ScheduleItem key={i} item={item} />
              ))}
            </div>

            <div className="mt-7 p-4.5 bg-[#1a0f05] border border-[#3a2510] rounded-lg">
              <div className="text-[11px] text-brand-gold tracking-[3px] uppercase font-mono mb-2.5">
                Sunday Only
              </div>
              <p className="text-[13px] text-text-muted leading-relaxed m-0">
                Rest. One hour of light reading (tech articles, not tutorials). Plan your week. Cook a proper meal. No coding guilt. A rested mind builds better software.
              </p>
            </div>
          </section>
        )}

        {/* PHASES TAB */}
        {activeTab === "phases" && (
          <section className="animate-in fade-in duration-300">
            <div className="flex gap-2 mb-6">
              {phases.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePhase(p.id)}
                  className={`flex-1 p-2 rounded-md font-mono text-[11px] uppercase tracking-wider transition-all border ${activePhase === p.id
                    ? `border-[${p.color}] bg-[${p.color}22] text-[${p.accent}]`
                    : "border-[#222] bg-[#111] text-[#555]"
                    }`}
                  style={activePhase === p.id ? { borderColor: p.color, backgroundColor: `${p.color}22`, color: p.accent } : {}}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {phases.filter(p => p.id === activePhase).map((phase) => (
              <div key={phase.id}>
                <div className="p-5 rounded-lg mb-5 border"
                  style={{ backgroundColor: `${phase.color}15`, borderColor: `${phase.color}44` }}>
                  <div className="text-[11px] font-mono tracking-[2px] mb-1.5" style={{ color: phase.accent }}>
                    {phase.duration}
                  </div>
                  <h2 className="text-[22px] m-0 mb-2.5 text-[#f0e8e0]">{phase.title}</h2>
                  <p className="text-[13px] text-[#8a8070] m-0 italic">{phase.goal}</p>
                </div>

                <div className="flex flex-col gap-3">
                  {phase.weeks.map((w, i) => (
                    <div key={i} className="bg-[#111] border border-border-subtle rounded-md p-4">
                      <div className="flex justify-between mb-2.5">
                        <span className="text-[13px] font-semibold text-[#e0d8ce]">{w.week}</span>
                        <span className="text-[11px] font-mono" style={{ color: phase.accent }}>{w.focus}</span>
                      </div>
                      <ul className="m-0 pl-4 list-disc">
                        {w.tasks.map((t, j) => (
                          <li key={j} className="text-[13px] text-text-muted mb-1 leading-relaxed">{t}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* PROJECTS TAB */}
        {activeTab === "projects" && (
          <section className="animate-in fade-in duration-300">
            <p className="text-[13px] text-[#6a6058] italic mb-5">
              Four projects. All deployed. All explained in your own words. This is your proof of work.
            </p>
            <div className="flex flex-col gap-4">
              {projects.map((p, i) => {
                const phase = phases.find((ph) => ph.id === p.phase);
                return (
                  <div key={i} className="bg-[#111] border border-[#222] rounded-md p-4.5"
                    style={{ borderLeftWidth: '3px', borderLeftColor: phase.color }}>
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-1.5">
                      <h3 className="text-[15px] m-0 text-text-main font-semibold">{p.title}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-[3px] font-mono tracking-wider"
                        style={{ backgroundColor: `${phase.color}22`, color: phase.accent }}>
                        {p.weeks}
                      </span>
                    </div>
                    <p className="text-[13px] text-text-muted leading-relaxed mb-2.5">{p.desc}</p>
                    <div className="text-[11px] text-[#4a90e2] font-mono bg-[#0a0a14] px-2.5 py-1 rounded-sm inline-block">
                      {p.stack}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 p-4 bg-[#0a140a] border border-[#1a2e1a] rounded-lg">
              <div className="text-[11px] text-[#2ecc71] tracking-[3px] uppercase font-mono mb-2">
                The Rule for Every Project
              </div>
              <p className="text-[13px] text-text-muted leading-relaxed m-0">
                Every project must be: (1) deployed and publicly accessible, (2) have a GitHub repo with a real README, (3) be something you can explain end-to-end in an interview without looking at any notes.
              </p>
            </div>
          </section>
        )}

        {/* RULES TAB */}
        {activeTab === "rules" && (
          <section className="flex flex-col gap-3.5 animate-in fade-in duration-300">
            <p className="text-[13px] text-[#6a6058] italic mb-1.5">
              These are not motivational quotes. They are operating instructions.
            </p>
            {rules.map((rule, i) => (
              <div key={i} className="bg-[#111] border border-border-subtle rounded-lg p-4.5">
                <div className="flex gap-3 items-start">
                  <span className="text-[22px] shrink-0 mt-0.5">{rule.icon}</span>
                  <div>
                    <h3 className="text-sm m-0 mb-2 text-text-main tracking-tight">{rule.title}</h3>
                    <p className="text-[13px] text-text-muted leading-relaxed m-0">{rule.body}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-6 p-5 bg-[#14100a] border border-[#3a2810] rounded-lg text-center">
              <div className="text-[28px] mb-2.5">📌</div>
              <p className="text-sm text-[#c8b890] leading-relaxed italic m-0">
                "You are not behind your peers. You are at the start of a different path — one where you actually understand what you're building. That is worth more than 6 months of copy-pasted code."
              </p>
            </div>
          </section>
        )}

        {/* CHECK-IN TAB */}
        {activeTab === "checkin" && (
          <section className="animate-in fade-in duration-300">
            <p className="text-[13px] text-[#6a6058] italic mb-2">Every Saturday evening. Be brutally honest.</p>
            <p className="text-[12px] text-[#4a4038] font-mono mb-5">5 or more ✓ = good week. Below 4 = identify what broke down and fix it Sunday.</p>

            <div className="flex flex-col gap-2.5">
              {weeklyCheckIn.map((q, i) => (
                <div key={i} onClick={() => toggleCheck(i)}
                  className={`flex items-center gap-3.5 border rounded-md px-4 py-3.5 cursor-pointer transition-all duration-200 ${checked[i] ? "bg-[#0a1a0a] border-[#2ecc71]" : "bg-[#111] border-border-subtle"
                    }`}>
                  <div className={`w-5 h-5 rounded border-1.5 shrink-0 flex items-center justify-center transition-all ${checked[i] ? "bg-[#2ecc71] border-[#2ecc71]" : "bg-transparent border-[#333]"
                    }`}>
                    {checked[i] && <span className="text-black text-[12px] font-black">✓</span>}
                  </div>
                  <span className={`text-[13px] leading-snug ${checked[i] ? "text-[#7aaa7a]" : "text-text-muted"}`}>{q}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 bg-[#111] border border-border-subtle rounded-lg">
              <div className="text-[11px] text-brand-gold tracking-[3px] uppercase font-mono mb-2.5">
                Score: {score} / {weeklyCheckIn.length}
              </div>
              <ProgressBar current={score} total={weeklyCheckIn.length} />
              <p className="text-[12px] text-[#4a4038] font-mono m-0 mt-2.5">
                {score >= 5 ? "Strong week. Keep the momentum." : score >= 3 ? "Average week. What specifically broke? Fix it Sunday." : "Rough week. No judgment — diagnose honestly and restart Monday."}
              </p>
            </div>

            <div className="mt-4 p-4 bg-[#0a0a14] border border-[#1a1a2e] rounded-lg">
              <div className="text-[11px] text-[#4a90e2] tracking-[3px] uppercase font-mono mb-2.5">
                Monthly Milestone Targets
              </div>
              {monthlyMilestones.map((item, i) => (
                <div key={i} className="flex gap-3 mb-2.5 last:mb-0">
                  <span className="text-[11px] text-[#4a90e2] font-mono w-16 shrink-0 pt-0.5">{item.m}</span>
                  <span className="text-[12px] text-[#6a6870] leading-relaxed">{item.t}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}