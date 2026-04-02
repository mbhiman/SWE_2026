export default function ProgressBar({ current, total }) {
    const percentage = (current / total) * 100;
    let color = "bg-[#E8442E]";
    if (percentage >= 80) color = "bg-[#2ecc71]";
    else if (percentage >= 50) color = "bg-[#E8A42E]";

    return (
        <div className="h-1.5 bg-[#1e1e1e] rounded-full overflow-hidden mt-2.5">
            <div
                className={`h-full transition-all duration-300 ${color}`}
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}