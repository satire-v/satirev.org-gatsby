import analyze from "rgbaster";
import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";

// import { ArticleCardFragment_featured_image_localFile_childImageSharp_fluid  } from "#queryTypes/ArticleCardFragment"; // eslint-disable-line camelcase

const genWhites = (() => {
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

type Props = {
  // eslint-disable-next-line camelcase
  fluid: any; // ?ArticleCardFragment_featured_image_localFile_childImageSharp_fluid,
};

function ImageFluid(props: Props): JSX.Element {
  const [background, setBackground] = React.useState("");
  const { fluid, ...rest } = props;

  React.useEffect(() => {
    async function getBackgroundColor() {
      const result = await analyze(fluid?.base64, {
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
      fluid={fluid}
    />
  );
}

export default ImageFluid;
