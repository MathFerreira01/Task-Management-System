interface PropsType {
  children: string;
}

export function Button(props: PropsType) {
  return (
    <button
      type="submit"
      className="w-full px-3 py-4 text-white bg-cyan-500 rounded-md focus:bg-cyan-600 focus:outline-none"
    >
      {props.children}
    </button>
  );
}
