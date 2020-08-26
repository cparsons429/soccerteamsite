import { isImmutable } from "immutable";


type Props = {
  [key in string | number]: any;
};

const toJS = <T>(props: T): T => {
  if (isImmutable(props)) {
    return props.toJS() as T;
  } else if (typeof props === "object" && props !== null) {
    const isArray = Array.isArray(props);
    const initialProps: Props = isArray ? [ ] : { };

    const propsJS = Object.entries(props).reduce(
      (newProps, [ key, value ]) => {
        const index = isArray ? parseInt(key, 10) : key;
        newProps[ index ] = toJS(value);

        return newProps;
      },
      initialProps
    );

    return propsJS as T;
  } else {
    return props;
  }
}

export default toJS;
