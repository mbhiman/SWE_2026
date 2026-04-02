export default function Tabs({ activeTab, setActiveTab }) {
    const tabs = [
        { id: "schedule", label: "Daily Schedule" },
        { id: "phases", label: "16-Week Phases" },
        { id: "projects", label: "Projects" },
        { id: "rules", label: "Mental Rules" },
        { id: "checkin", label: "Weekly Check-in" },
    ];

    return (
        <nav className="border-b border-[#1e1e1e] bg-[#111] sticky top-0 z-10">
            <div className="max-w-[680px] mx-auto flex gap-0 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`bg-none border-none px-3 pt-3.5 pb-3 text-[12px] font-mono tracking-wider uppercase cursor-pointer whitespace-nowrap transition-all duration-200 border-b-2 ${activeTab === tab.id ? "text-brand-gold border-brand-gold" : "text-[#555] border-transparent"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}