const width = "w-[24.125rem]";
const height = "h-12";

const styles = () => ({
  main: "flex flex-col text-gray-600",
  input: `${width} ${height} rounded-lg border border-gray-400 focus:outline-none py-3 px-4 mt-2`,
  textarea: `${width} rounded-lg border border-gray-400 focus:outline-none py-3 px-4 mt-2 resize-none`,
  checkbox: {
    main: "w-full cursor-pointer",
    input: "accent-gray-400 scale-150 ml-3 cursor-pointer",
  },
  file: {
    main: `${width} ${height} flex cursor-pointer relative mt-2`,
    btn: `bg-gray-400 w-28 ${height} rounded-lg grid place-content-center text-gray-800 absolute left-0`,
    input: `text-gray-600 ${height} flex items-center rounded-lg border border-gray-400 w-full py-3 px-4`,
  },
});

export default styles;
