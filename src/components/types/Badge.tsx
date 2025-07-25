interface BadgeProps {
  text: string;
  color?: string; // optional Tailwind color class suffix, default is "indigo"
}

// A simple badge component for tags, categories, or highlights
export default function Badge({ text, color = "indigo" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold text-${color}-800 bg-${color}-100 rounded-full`}
    >
      {text}
    </span>
  );
}
