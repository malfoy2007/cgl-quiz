# SSC CGL Daily Challenge

## Files
- `index.html` — complete quiz UI, timer, scoring and answer review.
- `questions.js` — daily question bank.

## Scoring
+1 for a correct answer, -0.25 for a wrong answer, 0 for unanswered.

## Daily workflow
1. Send me the day's PDF.
2. I will extract/create about 50–60 SSC CGL-style questions from that PDF.
3. Replace the contents of `questions.js` with the new question bank.
4. Push to GitHub.
5. Vercel automatically redeploys if the GitHub repo is connected.

## Google Translate
The quiz already contains English + Hindi versions for each question, so language switching works without an API key. A Google Translate widget can also be added later, but it is not necessary for this quiz and external translation services can be less predictable on static deployments.
