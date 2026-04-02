export default function Header({ theme, toggleTheme }) {
    return (
        <header className="bg-linear-to-br from-header-from to-header-to border-b border-border-subtle p-8 pb-6 relative overflow-hidden transition-colors">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-radial-gradient from-[#E8A42E12] to-transparent pointer-events-none" />

            <button
                onClick={toggleTheme}
                className="absolute top-6 right-6 z-20 px-3 py-1.5 rounded-full border border-border-subtle bg-bg-card text-text-main hover:border-brand-gold text-[11px] font-mono transition-all cursor-pointer shadow-sm"
            >
                {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>

            <div className="max-w-[680px] mx-auto relative">
                <div className="text-[11px] tracking-[4px] text-brand-gold uppercase mb-2.5 font-mono">
                    CSE 2025 Batch — Recovery Protocol
                </div>
                <h1 className="text-[clamp(24px,5vw,38px)] font-bold leading-[1.15] m-0 mb-3 text-text-main">
                    The 16-Week<br />
                    <span className="text-brand-gold">No Excuses Plan</span>
                </h1>
                <p className="text-sm text-text-muted leading-relaxed max-w-[480px] m-0 italic">
                    You're not behind. You're just not started yet. This changes Monday.
                </p>
            </div>
        </header>
    );
}