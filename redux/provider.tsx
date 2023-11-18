import { Provider } from "react-redux";
import { reduxStore } from "@/redux/store";

const ReduxProvider = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};

export default ReduxProvider;
