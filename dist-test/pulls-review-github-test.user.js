// ==UserScript==
// @name         pulls.review for GitHub Pull Requests (fix test)
// @namespace    https://github.com/returnsvoidjanet/pulls.review/fix-test
// @version      0.3.4-pierre16test.1
// @description  Adds a pulls.review-powered review drawer to GitHub pull request pages
// @author       antfu
// @match        https://github.com/*
// @icon         https://github.com/favicon.ico
// @require      https://raw.githubusercontent.com/returnsvoidjanet/pulls.review/19667a83acc7667d525e55f63c164d422a5b61b4/dist-test/diffs-embed.js
// @grant        none
// @inject-into  content
// @run-at       document-idle
// @supportURL   https://github.com/antfu/pulls.review/issues
// @homepageURL  https://pulls.review
// ==/UserScript==

;(() => {
  // Mount the pulls.review embed panel from pulls.review. Not as its custom element:
  // that never renders when Firefox runs this in a content-script sandbox.
  if (!document.querySelector('#pulls-review-embed'))
    PullsReviewEmbed.mountEmbedPanel()
})()
