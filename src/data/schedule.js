export const tagColors = {
    skill: { bg: "bg-[#1a1a2e]", border: "border-[#4a90e2]", dot: "bg-[#4a90e2]", label: "Skill" },
    mental: { bg: "bg-[#1a2a1a]", border: "border-[#2ecc71]", dot: "bg-[#2ecc71]", label: "Mental" },
    physical: { bg: "bg-[#2a1a1a]", border: "border-[#E8A42E]", dot: "bg-[#E8A42E]", label: "Physical" },
};

export const schedule = [
    { time: "5:30 AM", icon: "☀", label: "Wake Up", detail: "No phone for first 15 mins. Drink water. Wash face.", tag: "mental" },
    { time: "5:45 AM", icon: "🧘", label: "Mind Reset", detail: "10 min journaling: what you're building today + one thing you're grateful for. This kills the confusion spiral.", tag: "mental" },
    { time: "6:00 AM", icon: "💻", label: "Deep Coding Block", detail: "90 min of pure focused coding — NO AI tools. Pick one concept/problem. Struggle with it. Google docs/MDN only. This is the most important hour of your day.", tag: "skill", highlight: true },
    { time: "7:30 AM", icon: "🏋", label: "Workout", detail: "Keep your 1-hr exercise. Add 10 min walk after. Reduce belly fat: cut sugar + refined carbs at breakfast. Eat eggs + fruit instead.", tag: "physical" },
    { time: "8:45 AM", icon: "🍳", label: "Breakfast + Prep", detail: "High protein breakfast. Review what you coded at 6 AM. Write 2–3 lines in your learning log: what you learned, what confused you.", tag: "mental" },
    { time: "9:30 AM", icon: "🚀", label: "Commute / Transit", detail: "Listen to one dev podcast or watch a concept video (not tutorials — concepts: JS event loop, React rendering, HTTP, etc.)", tag: "skill" },
    { time: "10:00 AM", icon: "🏢", label: "Work Begins", detail: "At work: attempt tasks yourself for at least 20 min before using AI. When you use AI, study the output — rewrite it yourself and understand every line.", tag: "skill" },
    { time: "1:00 PM", icon: "🥗", label: "Lunch", detail: "Eat clean. No heavy carbs mid-day. 10 min walk after eating. Quick review of one JS/React concept on your phone (freeCodeCamp, MDN).", tag: "physical" },
    { time: "7:00 PM", icon: "🏁", label: "Work Ends", detail: "Write a 2-line log: what you shipped today, what blocked you. This builds awareness of your progress.", tag: "mental" },
    { time: "7:30 PM", icon: "🎯", label: "DSA Practice", detail: "45 min. LeetCode Easy (Weeks 1–4), then Medium (Weeks 5+). Language: JavaScript. No AI. 15 min struggle, then look at hints only — not solutions.", tag: "skill", highlight: true },
    { time: "8:30 PM", icon: "🔨", label: "Project Work", detail: "60 min on your personal project. Write the logic yourself. If stuck >20 min, write what you tried in a notebook, then search. Build features, not just copy UI.", tag: "skill", highlight: true },
    { time: "9:30 PM", icon: "📖", label: "Learning Block", detail: "30 min: one topic per week. Week 1–2: Async JS deeply. Week 3–4: React hooks deeply. Week 5–6: Next.js fundamentals. Week 7–8: REST APIs + Node basics.", tag: "skill" },
    { time: "10:00 PM", icon: "🌙", label: "Wind Down", detail: "No screens after 10:15. Light reading or stretching. Review tomorrow's one coding goal. Sleep by 10:30.", tag: "mental" },
];