import { tagColors } from "../../data/schedule";

export default function ScheduleItem({ item }) {
    const tag = tagColors[item.tag];

    return (
        <div className="grid grid-cols-[72px_1fr] gap-0 relative">
            <div className="py-4 pr-3 text-right">
                <span className="text-[11px] text-text-muted opacity-60 font-mono leading-none">
                    {item.time}
                </span>
            </div>

            <div className="absolute left-[72px] top-0 bottom-0 w-5 flex flex-col items-center">
                <div className="w-[1px] bg-border-subtle flex-1" />
                <div
                    className={`w-2 h-2 rounded-full shrink-0 z-1 border ${item.highlight ? tag.dot : 'bg-bg-card'}`}
                    style={{ borderColor: item.highlight ? tag.dot.replace('bg-[', '').replace(']', '') : 'var(--border-subtle)' }}
                />
                <div className="w-[1px] bg-border-subtle flex-1" />
            </div>

            <div className="pl-7 py-2.5">
                {/* Swapped hardcoded #111 for bg-card and #1a1a1a for border-subtle */}
                <div className={`p-3.5 rounded-md border transition-colors ${item.highlight ? `${tag.bg}cc` : 'bg-bg-card border-border-subtle'}`}
                    style={item.highlight ? { borderColor: tag.border.replace('border-[', '').replace(']', '') } : {}}>
                    <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-base">{item.icon}</span>
                        <span className="text-[13px] font-semibold text-text-main tracking-tight">
                            {item.label}
                        </span>
                        {item.highlight && (
                            <span className={`text-[9px] px-1.5 py-0.5 rounded-[3px] text-black font-mono tracking-widest font-bold uppercase ${tag.dot}`}>
                                CORE
                            </span>
                        )}
                    </div>
                    <p className="text-[13px] text-text-muted leading-relaxed m-0">
                        {item.detail}
                    </p>
                </div>
            </div>
        </div>
    );
}