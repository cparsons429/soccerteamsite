import { isImmutable } from "immutable";


type Props = {
  [key: string]: any;
};

const propsToJS = <T>(props: T): T => {
  const initialProps: Props = {};

  const propsJS = Object.entries(props).reduce(
    (newProps, [key, value]) => {
      const canConvertToJS =
          isImmutable(value) &&
          typeof value.toJS === "function";

      newProps[key] = canConvertToJS ? value.toJS() : value;

      return newProps;
    },
    initialProps
  );

  return propsJS as T;
}

export default propsToJS;
