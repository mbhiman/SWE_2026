export const phases = [
    {
        id: 1,
        label: "Phase 1",
        duration: "Weeks 1–4",
        title: "Foundation Reset",
        color: "#E84A2E",
        accent: "#ff6b4a",
        goal: "Fix habits, stop bleeding confidence, understand your own code.",
        weeks: [
            { week: "Week 1", focus: "Habit Installation", tasks: ["Start the daily schedule — no modifications", "Rebuild your auth pages from memory (no AI)", "LeetCode Easy: Arrays & Strings (6 problems)", "Set up GitHub. Commit every single day"] },
            { week: "Week 2", focus: "JavaScript Deep Dive", tasks: ["Master: closures, promises, async/await, event loop", "Build a small app using only vanilla JS (to-do list, no frameworks)", "LeetCode Easy: HashMaps & Two Pointers (6 problems)", "Read: 'You Don't Know JS' (free online) — Chapters 1–4"] },
            { week: "Week 3", focus: "React Without Crutches", tasks: ["Rebuild a component you've made before — from scratch, no AI", "Deep dive: useEffect, useContext, custom hooks", "LeetCode Easy: Sliding Window & Stack (6 problems)", "Understand React rendering lifecycle by drawing it on paper"] },
            { week: "Week 4", focus: "Solidify + Assess", tasks: ["Review everything from Weeks 1–3", "Start project: Rebuild auth from scratch (Next.js + JWT)", "LeetCode Easy: Linked Lists (6 problems)", "Update your GitHub with clean READMEs on existing repos"] },
        ]
    },
    {
        id: 2,
        label: "Phase 2",
        duration: "Weeks 5–10",
        title: "Build & Ship",
        color: "#1A7A4A",
        accent: "#2ecc71",
        goal: "Build 2 real projects from scratch. No AI for logic. Portfolio starts here.",
        weeks: [
            { week: "Weeks 5–6", focus: "Full-Stack Foundations", tasks: ["Learn Node.js + Express basics: REST API, middleware, routing", "Connect MongoDB via Mongoose — CRUD operations", "LeetCode Easy→Medium: Binary Search, Recursion (6/week)", "Start Project 2: Task Manager backend API"] },
            { week: "Weeks 7–8", focus: "Build & Deploy Project 2", tasks: ["Complete Task Manager: frontend in Next.js, backend in Node", "Deploy: Vercel (frontend) + Railway or Render (backend)", "Write a detailed README explaining every decision you made", "LeetCode Medium: Trees & BFS/DFS (6/week)"] },
            { week: "Weeks 9–10", focus: "Clone + Improve", tasks: ["Clone one core feature of a real product (Trello board, Notion page)", "Add one unique feature that didn't exist in the original", "Start applying to jobs: 3–5 applications per week", "LeetCode Medium: Dynamic Programming intro (6/week)"] },
        ]
    },
    {
        id: 3,
        label: "Phase 3",
        duration: "Weeks 11–16",
        title: "Job Hunt Mode",
        color: "#1A3A7A",
        accent: "#4a90e2",
        goal: "Apply aggressively. DSA at interview level. Land ₹25K–40K+ role.",
        weeks: [
            { week: "Weeks 11–12", focus: "Portfolio + Job Prep", tasks: ["Build and deploy portfolio website", "Polish all project READMEs with screenshots + live links", "Apply to 10+ jobs/week: LinkedIn, Naukri, Instahyre, AngelList", "Prep: tell me about yourself, project walkthroughs"] },
            { week: "Weeks 13–14", focus: "Interview Readiness", tasks: ["LeetCode Medium: Mix of top interview patterns (6/week)", "Practice system design basics: what happens when you type a URL", "Mock interviews: use Pramp or ask a friend", "Follow up on all applications, track in a spreadsheet"] },
            { week: "Weeks 15–16", focus: "Close the Deal", tasks: ["Continue applying, never stop until offer letter is signed", "DSA: revise your 30 strongest problems", "Negotiate: target ₹25K–40K minimum. Know your worth", "Keep shipping — GitHub activity matters in interviews"] },
        ]
    },
];