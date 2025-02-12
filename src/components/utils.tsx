interface StackListProps {
  arr: string[];
  color: string;
}

export const StackList = ({ arr, color }: StackListProps) => {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {arr.map((skill, index) => (
        <span key={index} className={`${color} text-white text-sm px-3 py-1 rounded-full`}>
          {skill}
        </span>
      ))}
    </div>
  );
};