import { tagColors } from "../../data/schedule";

export default function ScheduleItem({ item }) {
    const tag = tagColors[item.tag];

    return (
        <div className="grid grid-cols-[72px_1fr] gap-0 relative">
            <div className="py-4 pr-3 text-right">
                <span className="text-[11px] text-[#4a4038] font-mono leading-none">
                    {item.time}
                </span>
            </div>

            <div className="absolute left-[72px] top-0 bottom-0 w-5 flex flex-col items-center">
                <div className="w-[1px] bg-[#1e1e1e] flex-1" />
                <div
                    className={`w-2 h-2 rounded-full shrink-0 z-1 border ${item.highlight ? tag.dot : 'bg-[#2a2218]'} border-[${tag.dot.replace('bg-', '')}]`}
                    style={{ borderColor: tag.dot.replace('bg-[', '').replace(']', '') }}
                />
                <div className="w-[1px] bg-[#1e1e1e] flex-1" />
            </div>

            <div className="pl-7 py-2.5">
                <div className={`p-3.5 rounded-md border ${item.highlight ? `${tag.bg}cc border-[${tag.border.replace('border-', '')}]` : 'bg-[#111] border-[#1a1a1a]'}`}
                    style={item.highlight ? { borderColor: tag.border.replace('border-[', '').replace(']', '') } : {}}>
                    <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-base">{item.icon}</span>
                        <span className="text-[13px] font-semibold text-[#e0d8ce] tracking-tight">
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