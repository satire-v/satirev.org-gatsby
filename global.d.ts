interface WithChildren {
  children?: JSX.Element[] | JSX.Element;
}

interface WithNativeComponent {
  component: keyof JSX.IntrinsicElements;
}
// & React.HTMLAttributes<HTMLOrSVGElement>;

interface WithClassName {
  className?: string;
}

interface StyledWrapper extends WithClassName, WithChildren {}
