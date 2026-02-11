export interface CardProps {
    title: string;
    description: string;
    className?: string;
}
export default function Card({ title, description, className }: CardProps) {
    return (
        <div className={`flex flex-1 flex-col gap-2 bg-slate-400/10 bg-opacity-10 backdrop-blur-xs border border-slate-600/20 rounded-2xl p-4 ${className}`}>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-sm text-slate-400">{description}</p>
        </div>
    )
}