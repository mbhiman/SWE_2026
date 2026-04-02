export default function Header() {
    return (
        <header className="bg-linear-to-br from-[#0d0d0d] to-[#1a1008] border-b border-[#2a2218] p-8 pb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] height-[300px] bg-radial-gradient from-[#E8A42E18] to-transparent pointer-events-none" />
            <div className="max-w-[680px] mx-auto relative">
                <div className="text-[11px] tracking-[4px] text-brand-gold uppercase mb-2.5 font-mono">
                    CSE 2025 Batch — Recovery Protocol
                </div>
                <h1 className="text-[clamp(24px,5vw,38px)] font-bold leading-[1.15] m-0 mb-3 text-[#f5f0e8]">
                    The 16-Week<br />
                    <span className="text-brand-gold">No Excuses Plan</span>
                </h1>
                <p className="text-sm text-[#8a8070] leading-relaxed max-w-[480px] m-0 italic">
                    You're not behind. You're just not started yet. This changes Monday.
                </p>
            </div>
        </header>
    );
}