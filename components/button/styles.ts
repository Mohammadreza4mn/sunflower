import { StyleProps } from "@/components/button/type";

const colors = {
  green: "bg-green-600",
  gray: "bg-gray-400",
  transparent: "bg-transparent",
};

const widths = {
  medium: "w-28",
  large: "w-[11.25rem]",
  full: "w-full",
};

const styles = (
  color: StyleProps<typeof colors>,
  width: StyleProps<typeof widths>
) => ({
  main: `focus:outline-none h-12 rounded-lg ${colors[color]} ${widths[width]}`,
});

export default styles;
