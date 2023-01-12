interface LabelProps {
    children: string;
}

export function Label(props: LabelProps) {
  return (
    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
      {props.children}
    </label>
  );
}
