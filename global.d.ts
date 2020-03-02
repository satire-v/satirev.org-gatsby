interface WithChildren {
  children?: (JSX.Element | null)[] | (JSX.Element | string | null);
}

interface WithNativeComponent {
  component?: keyof JSX.IntrinsicElements;
}
// & React.HTMLAttributes<HTMLOrSVGElement>;

interface WithClassName {
  className?: string;
}

interface StyledWrapper extends WithClassName, WithChildren {}

type Mutable<T> = {
  -readonly [K in keyof T]: Mutable<T[K]>;
};
