/* eslint-disable @typescript-eslint/camelcase */
import analyze from "rgbaster";
import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";

import { Maybe, GatsbyImageSharpFluid_withWebpFragment } from "#graphql";

const genWhites = ((): string[] => {
  const whites = [];
  for (let i = 250; i < 256; i += 1) {
    for (let j = 250; j < 256; j += 1) {
      for (let k = 250; k < 256; k += 1) {
        whites.push(`rgb(${i},${j},${k})`);
      }
    }
  }
  return whites;
})();

interface Props extends WithClassName {
  // eslint-disable-next-line camelcase
  fluid: Maybe<GatsbyImageSharpFluid_withWebpFragment>;
  [x: string]: any;
}

function ImageFluid({ fluid, className, ...rest }: Props): JSX.Element {
  const [background, setBackground] = React.useState("");

  React.useEffect(() => {
    async function getBackgroundColor(): Promise<void> {
      const result = await analyze(fluid?.base64 ?? "", {
        ignore: genWhites,
        scale: 0.2,
      });
      setBackground(result[0].color);
    }
    getBackgroundColor();
  }, []);

  return (
    <Img
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      css={css`
        background: ${background};
      `}
      className={className}
      fluid={fluid}
    />
  );
}

export default ImageFluid;
