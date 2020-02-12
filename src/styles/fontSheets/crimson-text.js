import { css } from "@emotion/core";

export default css`
  /* crimson-text-400normal - latin */
  @font-face {
    font-family: "Crimson Text";
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local("Crimson Text Regular "), local("Crimson Text-Regular"),
      url("/fonts/crimson-text/crimson-text-latin-400.woff2") format("woff2"),
      /* Super Modern Browsers */
        url("/fonts/crimson-text/crimson-text-latin-400.woff") format("woff"); /* Modern Browsers */
  }

  /* crimson-text-400italic - latin */
  @font-face {
    font-family: "Crimson Text";
    font-style: italic;
    font-display: swap;
    font-weight: 400;
    src: local("Crimson Text Regular italic"),
      local("Crimson Text-Regularitalic"),
      url("/fonts/crimson-text/crimson-text-latin-400italic.woff2")
        format("woff2"),
      /* Super Modern Browsers */
        url("/fonts/crimson-text/crimson-text-latin-400italic.woff")
        format("woff"); /* Modern Browsers */
  }

  /* crimson-text-600normal - latin */
  @font-face {
    font-family: "Crimson Text";
    font-style: normal;
    font-display: swap;
    font-weight: 600;
    src: local("Crimson Text SemiBold "), local("Crimson Text-SemiBold"),
      url("/fonts/crimson-text/crimson-text-latin-600.woff2") format("woff2"),
      /* Super Modern Browsers */
        url("/fonts/crimson-text/crimson-text-latin-600.woff") format("woff"); /* Modern Browsers */
  }

  /* crimson-text-600italic - latin */
  @font-face {
    font-family: "Crimson Text";
    font-style: italic;
    font-display: swap;
    font-weight: 600;
    src: local("Crimson Text SemiBold italic"),
      local("Crimson Text-SemiBolditalic"),
      url("/fonts/crimson-text/crimson-text-latin-600italic.woff2")
        format("woff2"),
      /* Super Modern Browsers */
        url("/fonts/crimson-text/crimson-text-latin-600italic.woff")
        format("woff"); /* Modern Browsers */
  }

  /* crimson-text-700normal - latin */
  @font-face {
    font-family: "Crimson Text";
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: local("Crimson Text Bold "), local("Crimson Text-Bold"),
      url("/fonts/crimson-text/crimson-text-latin-700.woff2") format("woff2"),
      /* Super Modern Browsers */
        url("/fonts/crimson-text/crimson-text-latin-700.woff") format("woff"); /* Modern Browsers */
  }

  /* crimson-text-700italic - latin */
  @font-face {
    font-family: "Crimson Text";
    font-style: italic;
    font-display: swap;
    font-weight: 700;
    src: local("Crimson Text Bold italic"), local("Crimson Text-Bolditalic"),
      url("/fonts/crimson-text/crimson-text-latin-700italic.woff2")
        format("woff2"),
      /* Super Modern Browsers */
        url("/fonts/crimson-text/crimson-text-latin-700italic.woff")
        format("woff"); /* Modern Browsers */
  }
`;
