import * as React from "react";
import { css } from "@emotion/core";

import topArticlesLinks from "#queries/TopArticlesLinks";
import Columns from "#layouts/Columns.react";
import BreakingNewsBar from "#components/BreakingNewsBar.react";
import ArticleListBox from "#components/article/ArticleListBox.react";
import TwitterTimeline from "#common/TwitterTimeline.react";

const root = css`
  margin-bottom: calc(6 * var(--spacing));
  h1 {
    margin-bottom: calc(3 * var(--spacing));
  }
  p {
    margin: calc(2 * var(--spacing)) 0;
    font-weight: 400;
    font-size: 14pt;
  }
`;

export default function AboutPage(): JSX.Element {
  return (
    <>
      <BreakingNewsBar />
      <Columns>
        <div css={root}>
          <h1>About</h1>
          <h3>Our staff:</h3>
          <p>
            <b>President</b> - Hanna Mularczyk
          </p>
          <p>
            <b>Editor-in-Chief</b> - Claire Fridkin
          </p>
          <p>
            <b>Managing Editor</b> - Emily Shen
          </p>
          <p>
            <b>Associate Editors</b> - James Caven, Lily Davis, Saul Glist,
            Teagan Stedman, Sophie Webster
          </p>
          <p>
            <b>Multimedia Director</b> - Ellie Grueskin
          </p>
          <p>
            <b>Business Director</b> - Christine Cai
          </p>
          <p>
            <b>Pranks and Publicity Chair</b> - Wilf Zibell
          </p>
          <p>
            <b>Technology Chair</b> - Mark Pekala
          </p>
          <p>
            <b>Social Chair</b> - Aaron Chen, George Whitford
          </p>
          <p>
            <b>Historian</b> - Emma Forbes, Ariana Laufer
          </p>
          <p>
            <b>Comp Directors</b> - Emma Forbes, Rehan Zaib
          </p>
          <p>
            <b>Staff Writers</b> - Juan Arenas Shera Avi-Yonah Phoebe Barr Molly
            Baxter Suhaas Bhat Haydn Bradstreet Felix Bulwa Christine Cai James
            Caven Aaron Chen Andrew Cho Connor Chung Becca Cleveland Stout
            Cameron Cohen Amelia Cossentino Justin Curtis Lily Davis Nick Durham
            Sophie Edouard Noah Epstein Nick Fahy Jackie Feffer Emma Forbes
            Rachel Freed Claire Fridkin Adam Friedman Ilai Gavish Saul Glist
            Ellie Grueskin Jenny Gu James Gui Michael Gul Alec Kahn Stephanie
            Kaiser Ty Kannegieter Michael Kielstra Ian Kimbell Elizabeth
            Kupervaser-Gould Teddy Landis Michelle Lara Arianna Laufer Ethan Lee
            Reddy Lee Isabel Levin Matthew Li Roo Martin-Robb Jessica Morandi
            Lydnsey Mugford Hanna Mularczyk Sam O'Connell Mary O'Connor Eliza
            Oehmler Alex Paladino Matthew Pereira Gavin Rees James Roney James
            Rose Dylan Roy Lyle Seeligson Teddy Sevilla Freddie Shanel Emily
            Shen Carl Sibley Max Snyder Jarele Soyinka Teagan Stedman Michelle
            Stegawski Sarah Stevens Posy Stoller Kody Stremick Kyle Sutton Ari
            Troper Catherine Tu Michael Wornow Sophie Webster Max Weiss George
            Whitford Josie Wolf Oliver York Rehan Zaib Daran Zhao Cecilia Zhou
            Wilf Zibell
          </p>
          <p>
            <b>Graphics Board</b> - Christine Cai Reese Caldwell Simone Chu CC
            D'Arms Claire Fridkin Jasmine Huang Ellie Grueskin Jenny Gu Hanna
            Mularcyzk David Kennedy-Yoon Aaron Olkin Michael Perusse Ben Roberts
            Arpan Sarkar Teddy Sevilla Alex Stewart Julius Wade Claire Yoo
          </p>
          <p>
            <b>Tech Board</b> - Sophie Edouard Cameron Cohen Diego Gutierrez
            Vassilios Kaxiras Mark Pekala Catherine Tu Justin Wise Daran Zhao
          </p>
          <p>
            <b>Business Board</b> - Suhaas Bhat Christine Cai Joanne Lee Jarele
            Soyinka
          </p>
          <p>
            <b>Presidents Emeriti</b> - Kozhy Koh Leah Schulson Gus Mayopoulos
            Alicia Mergenthaler William Keith Toni Chan Brenda Chiang Haydn
            Bradstreet Teddy Sevilla
          </p>
          <p>
            <b>Editors-in-Chief Emeriti</b> - Ari Weisbard Sagar Mehta Josh
            Rosenthal Keri Mabry Arash Gharib Amy Rosenthal Bryan Haut Kozhy Koh
            Jeremy Patashnik Scott Reed Myles McDonough Leah Schulson Gus
            Mayopoulos Alicia Mergenthaler Jackson Gzehoviak Dashiell
            Young-Saver Matthew Disler Daniel Kenny Emily Zauzmer Cat Zhang
            Hanna Mularcyzk Josie Wolf
          </p>
        </div>
        <>
          <ArticleListBox title="Top Stories" articles={topArticlesLinks()} />
          <TwitterTimeline />
        </>
      </Columns>
    </>
  );
}
