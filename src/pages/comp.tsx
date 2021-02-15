import * as React from "react";
import { Link } from "gatsby";
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
  .question {
    margin-bottom: calc(4 * var(--spacing));
    & p {
      margin: calc(2 * var(--spacing));
      font-size: 14pt;
    }
    & li {
      font-size: 12pt;
      margin: var(--spacing) 0;
    }
  }
`;

export default function CompPage(): JSX.Element {
  return (
    <>
      <BreakingNewsBar />
      <Columns>
        <div css={root}>
          <h1>Comp FAQs</h1>
          <div className="question">
            <p>
              <b>1. How do I comp?</b>
            </p>
            <p>
              <i>Satire V</i> holds a semesterly editorial, graphics, and tech
              comp. Check our Facebook page for info about our intro meeting,
              timeline, and comp requirements. We'll also try to update this tab
              every semester.
            </p>
          </div>
          <div className="question">
            <p>
              <b>2. What happens during the comp?</b>
            </p>
            <p>
              The <u>editorial</u> comp has three rounds:
            </p>
            <ol>
              <li>
                The straight news round: For this round, compers write two ~200
                word pieces in the style of a straight news article from our
                website. Examples of straight news articles include:{" "}
                <a
                  href="/Harvard/harvard-math-department-proves-they-definitely-arent-sexist-by-counterexample"
                  target="_blank"
                >
                  <u>1</u>
                </a>
                ,{" "}
                <a href="/US/bush-runs-for-office-trips" target="_blank">
                  <u>2</u>
                </a>
                ,{" "}
                <a
                  href="/Harvard/freshman-shuts-down-nonprofit-he-founded-to-get-into-harvard-in-record-time"
                  target="_blank"
                >
                  <u>3</u>
                </a>
                ,{" "}
                <a
                  href="/Everything-Else/quirky-white-man-interested-in-japanese-culture"
                  target="_blank"
                >
                  <u>4</u>
                </a>
                ,{" "}
                <a
                  href="/World/british-cabinet-on-verge-of-collapse"
                  target="_blank"
                >
                  <u>5</u>
                </a>
                ,{" "}
                <a
                  href="/Region/new-cambridge-parking-regulation-just-fuck-off"
                  target="_blank"
                >
                  <u>6</u>
                </a>
                .
              </li>
              <li>
                The area man/op-ed round: In round two, compers choose to write
                either an area man or op-ed piece. Examples of an area man piece
                for this round include:{" "}
                <a
                  href="/Everything-Else/area-bagel-feels-life-isnt-whole"
                  target="_blank"
                >
                  <u>1</u>
                </a>
                ,{" "}
                <a
                  href="/Region/area-boy-reassures-parents-browsing-history-result-of-russian-hack"
                  target="_blank"
                >
                  <u>2</u>
                </a>
                ,{" "}
                <a
                  href="/Region/area-man-finally-thinks-really-thinks-about-dinosaurs"
                  target="_blank"
                >
                  <u>3</u>
                </a>
                ,{" "}
                <a
                  href="/Everything-Else/area-girl-uses-~squigglies~-so-her-crush-will-think-shes-~totally-laidback~"
                  target="_blank"
                >
                  <u>4</u>
                </a>
                ,{" "}
                <a
                  href="/Region/area-husband-organizes-sex-week-programming"
                  target="_blank"
                >
                  <u>5</u>
                </a>
                . Examples of an op-ed piece for this round include:{" "}
                <a
                  href="/Harvard/the-crimson-arts-reviews-seesaws-in-the-yard"
                  target="_blank"
                >
                  <u>1</u>
                </a>
                ,{" "}
                <a
                  href="/Opinion/im-not-like-other-girls-i-am-a-lamp"
                  target="_blank"
                >
                  <u>2</u>
                </a>
                ,{" "}
                <a
                  href="/US/sorry-for-not-protecting-your-information-you-dumb-fucks"
                  target="_blank"
                >
                  <u>3</u>
                </a>
                ,{" "}
                <a
                  href="/Opinion/why-call-me-when-you-could-just-post-a-picture-of-us-on-a-social-media-platform-i-dont-use"
                  target="_blank"
                >
                  <u>4</u>
                </a>
                ,{" "}
                <a href="/Harvard/you-are-not-a-real-artist" target="_blank">
                  <u>5</u>
                </a>
                ,{" "}
                <a
                  href="/Harvard/need-one-more-girl-for-im-volleyball-tonight-or-we-kill-the-first-hostage"
                  target="_blank"
                >
                  <u>6</u>
                </a>
                .
              </li>
              <li>
                Lightning round: For the final round, you can write a piece in
                any previously discussed format, or a Clickhole-style article (
                <a
                  href="/Everything-Else/uh-oh-shape-of-water-fans-neil-degrasse-tyson-just-reminded-everyone-that-water-actually-takes-the-shape-of-its-container"
                  target="_blank"
                >
                  <u>1</u>
                </a>
                ,{" "}
                <a
                  href="/Everything-Else/inspirational-this-thin-tall-gorgeous-white-woman-is-sharing-how-she-found-body-confidence"
                  target="_blank"
                >
                  <u>2</u>
                </a>
                ), a listicle (
                <a
                  href="/Harvard/17-important-issues-no-uc-candidate-is-talking-about"
                  target="_blank"
                >
                  <u>1</u>
                </a>
                ,{" "}
                <a
                  href="/Harvard/5-classrooms-to-scream-in-that-are-all-sever-204"
                  target="_blank"
                >
                  <u>2</u>
                </a>
                ) a quiz (
                <a
                  href="/Harvard/quiz-is-he-smart-or-just-systematically-advantaged-because-of-his-socioeconomic-status"
                  target="_blank"
                >
                  <u>1</u>
                </a>
                ,{" "}
                <a
                  href="/Everything-Else/quiz-are-these-from-the-mission-of-harvard-college-or-bodak-yellow-by-cardi-b"
                  target="_blank"
                >
                  <u>2</u>
                </a>
                ), etc (
                <a
                  href="/US/satire-v38-triple-doubles-are-cool-and-russell-westbrook-is-the-best"
                  target="_blank"
                >
                  <u>1</u>
                </a>
                ). This is the only round in which compers do not get office
                hours or edits from staff writers, although before the lightning
                round compers will get brief feedback about trends in their
                writing to help them improve.
              </li>
            </ol>
            <p>
              Information regarding style, subject matter, and expectations for
              each format are discussed at the weekly comp meetings. For the
              first and second rounds, there will be office hours with current
              staff writers where compers can pitch headlines, workshop jokes,
              and crystallize their pieces. Use these office hours: all of the
              staff writers are invested in your success, and try desperately to
              be as helpful as possible. Once you submit your articles, you’ll
              receive feedback from a staff writer. You’ll then be given 24
              hours to make modifications and send back a final draft. We factor
              in receptivity to feedback when we evaluate pieces in order to
              minimize differences in prior comedy experience and give compers
              the chance to improve.
            </p>
            <p>
              Don’t be intimidated! We promise that the process is simple and
              straightforward. If you’re nervous, just come to our comp interest
              meeting (separate from our first comp meeting) and check us out.
            </p>
            <p>
              As for the <u>graphics</u> and <u>tech</u> comps, they'll also
              have three rounds and regular office hours. Graphics compers will
              learn how to use Photoshop and other digital resources to make
              visuals for humorous articles, memes, and publicity content.
              They'll turn in five graphics by the end of the comp season and
              get a close look at the editorial process of a widely-read
              publication. Tech compers will work on scraping websites, building
              Chrome extensions, and other digital tasks to see if they could
              help us execute content and pranks. Since this is a new comp,
              we're looking for experienced coders. Email satirev.tech@gmail.com
              for more info.
            </p>
          </div>
          <div className="question">
            <p>
              <b>3. What if I don't have any comedy experience? </b>
            </p>
            <p>
              Not a problem! The vast majority of our staff writers comped with
              no previous comedy writing experience. The whole point of the comp
              is to help compers learn the tools of the trade to improve and
              grow their writing.
            </p>
            <p>
              We want to emphasize that comedy writing is about practice. The
              more pieces you read and write, the better you’ll get! There is an
              abundance of comedy material to check out on <i>The Onion</i>,{" "}
              <i>Clickhole</i>, <i>Reductress</i>, <i>McSweeneys</i>,{" "}
              <i>The New Yorker</i>, and more.
            </p>
          </div>
          <div className="question">
            <p>
              <b>4. What are your expectations for comp pieces?</b>
            </p>
            <p>
              We’re looking for funny premises — the main ideas that guide your
              piece — and excellent executions of those premises.
            </p>
            <p>
              Funny premises rely on a well-written headline and a good number
              of supporting jokes in the body of the article (we call this “joke
              density”). Headlines should be attention-grabbing and to the
              point. After reading the headline, we should immediately
              understand what your premise is all about. While reading through
              your article, we will take note of all your supporting jokes, so
              make sure they’re embedded into your article clearly and often!
            </p>
            <p>
              Good execution depends on easy readability, checking your piece
              for grammar and spelling errors, and using paragraphs to organize
              flow. Excellent execution also incorporates the format and syntax
              of a newspaper article. This means that you should structure your
              piece like a newspaper article or op-ed.
            </p>
            <p>
              If you have any questions, all of these things will be extensively
              discussed at meetings throughout our comp. Additionally, you’re
              always welcome to email satirev.comp@gmail.com or bring your
              questions to our comp office hours.
            </p>
          </div>
          <div className="question">
            <p>
              <b>5. What if I get cut? </b>
            </p>
            <p>
              If you don’t make it the first time, you are more than welcome to
              comp again. No judgment — we have plenty of staff writers who got
              in their second or third time. We try to make sure that everyone
              has the tools they need to succeed at the comp, but sometimes it
              takes a little longer for people to get the hang of the style.
              That’s totally okay!
            </p>
            <p>
              You can also get involved in our fall sketch comedy show or our
              spring musical, both of which are open to all. Like our Facebook
              page for updates! We’d also suggest checking out On Harvard Time
              or the Harvard College Stand-Up Comics Society. We’ve partnered
              with these organizations before for shows and pranks. They're
              noncompetitive, and they’re great ways to hone your comedic style.
            </p>
          </div>
        </div>
        <>
          <ArticleListBox title="Top Stories" articles={topArticlesLinks()} />
          <TwitterTimeline />
        </>
      </Columns>
    </>
  );
}
