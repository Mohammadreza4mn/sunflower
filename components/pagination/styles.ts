const styles = () => ({
  button: {
    previous:
      "font-medium cursor-pointer text-sm font-psp-semi-bold w-20 h-8 flex justify-center items-center text-gray-500 bg-white border border-gray-300 rounded-l hover:bg-gray-100 hover:text-gray-700",
    next: "font-medium cursor-pointer text-sm font-psp-semi-bold w-14 h-8 flex justify-center items-center text-gray-500 bg-white border border-gray-300 rounded-r hover:bg-gray-100 hover:text-gray-700",
  },
  count: {
    default:
      "min-w-[2rem] px-[0.75rem] h-8 flex justify-center items-center cursor-pointer font-medium text-sm font-psp-semi-bold bg-white border text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700",
    active:
      "min-w-[2rem] px-[0.75rem] h-8 flex justify-center items-center cursor-default font-medium text-sm font-psp-semi-bold text-primary-600 border border-gray-300 bg-primary-100 hover:bg-primary-200 hover:text-primary-700",
  },
  buttonIcon: {
    previous:
      "w-11 h-8 cursor-pointer flex justify-center items-center bg-white fill-gray-500 border border-gray-300 rounded-l hover:bg-gray-100 hover:fill-gray-700",
    next: "w-11 h-8 cursor-pointer flex justify-center items-center bg-white fill-gray-500 border border-gray-300 rounded-r hover:bg-gray-100 hover:fill-gray-700",
  },
});

export default styles;
