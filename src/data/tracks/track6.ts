import { Course } from '../courses';

export const track6: Course = {
  id: 'track-6-presentation',
  title: 'Presentation & Communication Excellence',
  tagline: 'Turn your analysis into a presentation that wins',
  description: 'The best analysis means nothing if it can\'t be communicated clearly. Learn how consultants design slides, tell stories, and deliver professionally — from the first slide to the final submission.',
  category: 'Track 6',
  level: 'All Levels',
  color: '#ec4899',
  icon: '📓',
  units: [
    {
      id: 't6-m1',
      title: 'Module 6.1 – Slide Design',
      description: 'Design slides that communicate instantly — like a McKinsey deck, not a school project.',
      lessons: [
        {
          id: 't6-m1-l1',
          title: 'Consulting Slide Format',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## The Consulting Slide Format

McKinsey, BCG, and Bain slides all share a common DNA. Once you understand it, you'll see it everywhere — and your own slides will immediately look more professional.

### The Anatomy of a Consulting Slide

Every consulting slide has three layers:

**1. The Title — the "so what"**
This is the most important line on the slide. It should state the *insight or recommendation*, not just the topic.

❌ "Revenue Analysis"
✅ "Revenue declining 3 years in a row — driven entirely by the legacy retail segment"

The title tells the story. Even if the audience doesn't look at anything else, they should understand your point from the title alone.

**2. The Visual — the evidence**
One central visual per slide: a chart, diagram, table, or image that supports the title.

The visual should make the insight *obvious* — not require interpretation. If someone has to stare at your chart for 30 seconds to understand it, simplify the chart.

**3. Supporting detail (optional)**
Small annotations, callout boxes, or footnotes that provide additional context. Never full paragraphs.

### The One-Idea-Per-Slide Rule

Each slide communicates one and only one idea. If you're trying to make two points, make two slides.

Teams that pack 6 bullet points and 2 charts on one slide end up explaining the slide instead of delivering the presentation. Judges get confused. Marks go down.

### Slide Flow: The "Spine"

Your slides should flow as a logical sequence — each slide sets up the next.

Standard case presentation spine:
1. Executive Summary (recommendation + key evidence in 1 slide)
2. Problem Definition
3. Analysis — industry context
4. Analysis — company diagnosis
5. Options considered
6. Recommendation (your choice + rationale)
7. Implementation / Roadmap
8. Financial Impact
9. Risks & Mitigations
10. Conclusion / Ask

Each slide should be necessary. If you remove a slide and the story still makes sense — remove it.

### The "Glance Test"

Show any slide to someone for 5 seconds, then hide it. Ask them: *"What was the point?"*

If they can't answer — the slide fails. Redesign until they can.`,
          },
        },
        {
          id: 't6-m1-l2',
          title: 'Data Visualisation',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## Data Visualisation

The right chart makes data instantly understandable. The wrong chart makes people feel confused and stupid. This lesson ensures you always pick the right one.

### Choosing the Right Chart

| What You Want to Show | Best Chart |
|-----------------------|------------|
| Change over time | Line chart |
| Comparison across categories | Bar / Column chart |
| Proportion / composition | Pie or Donut chart |
| Relationship between two variables | Scatter plot |
| Ranking | Horizontal bar chart |
| Progress toward a target | Bullet chart / gauge |
| Composition that changes over time | Stacked area chart |

**When in doubt:** Bar charts and line charts solve 80% of use cases.

### Common Visualisation Mistakes

**1. Pie charts with too many slices**
A pie with 8 slices is unreadable. Combine small slices into "Other" and keep 4–5 maximum.

**2. 3D charts**
3D effects make it harder to read values accurately. Never use 3D. It exists in chart software to trap people.

**3. Missing axis labels or units**
What are the numbers? Millions? Percentage? Always label axes and specify units.

**4. Colour overload**
Use 2–3 colours maximum per chart. Highlight the key data point in your brand colour; make everything else grey.

**5. Chartjunk**
Gridlines, borders, legends where they're not needed — remove anything that doesn't add information. Clean > decorated.

### The Annotation Technique

Add a callout annotation on the most important data point:

*On a line chart showing revenue declining: draw a circle around the sharpest decline and annotate "H1 FY24: ₹800 crore revenue loss — largest single-half decline in company history"*

This ensures judges know exactly what to look at and what it means.

### Design Principles for Charts

- Start your y-axis at 0 (unless you have a very specific reason not to — manipulating scale is misleading)
- Sort bar charts from largest to smallest (unless time-based)
- Use consistent colour coding throughout your deck (same colour always = same company, segment, or theme)
- If you highlight something, highlight one thing — not three`,
          },
        },
        {
          id: 't6-m1-l3',
          title: 'Clean Design Principles',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## Clean Design Principles

You don't need to be a designer. You need to apply a few non-negotiable principles consistently, and your slides will look professional.

### 1. Whitespace is Your Friend

Whitespace (empty space on a slide) is not wasted space. It makes content breathe and feel premium.

Crowded slides feel anxious and amateur. Spacious slides feel confident and professional.

**Rule:** If a slide feels too full, remove one element. Repeat until it feels right.

### 2. Font Hierarchy

Use a maximum of 2 fonts across your entire deck (one for headings, one for body). Suggested pairing: a bold sans-serif for headings (Inter Bold, Helvetica Bold), a lighter weight for body.

**Font sizes:**
- Slide titles: 20–24pt
- Body text / data labels: 12–14pt
- Source footnotes: 8–10pt

**Never use font smaller than 10pt** — if you need smaller text to fit everything, the slide has too much on it.

### 3. Consistent Colour Palette

Choose 2–3 primary colours and use them consistently throughout:
- Primary colour: headlines, highlighted data, key callouts
- Secondary colour: supporting elements
- Neutral (dark grey or navy): body text

For BizForHer: consider using the BizForHer coral (#db8a6c) as your primary and dark navy (#1c2939) as secondary — it signals you're on-brand.

### 4. Alignment is Everything

Every element on your slide should be aligned to a grid. Use the "Align" function in PowerPoint or Google Slides — never eyeball it.

Misaligned text boxes and charts look careless and distract from your content.

### 5. Slide Master / Templates

Create one slide template at the start — logo placement, font styles, colour palette — and apply it consistently. Don't redesign each slide from scratch. Inconsistency signals rushing.

### The 10-Slide Ceiling

For a 10-minute presentation, plan for 8–12 slides maximum. Any more and you're rushing through content without letting anything land.

Less slides, more impact. Judges remember 3 strong insights better than 20 mediocre ones.`,
          },
        },
        {
          id: 't6-m1-quiz',
          title: 'Module 6.1 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'Your slide title reads "Financial Analysis." Why is this weak?',
                options: [
                  'It\'s too short',
                  'It describes the topic but not the insight — a judge learns nothing from this title alone',
                  'Financial analysis should be in the appendix, not the main deck',
                  'It should use a number',
                ],
                correctIndex: 1,
                explanation: 'Consulting slide titles should state the conclusion/insight, not the topic. "Revenue declining for 3 consecutive years, driven by margin compression" tells a story. "Financial Analysis" tells nothing.',
              },
              {
                id: 'q2',
                question: 'You want to show how Company X\'s market share changed from 2020 to 2024 compared to 3 competitors. What chart type is most appropriate?',
                options: [
                  'Pie chart',
                  'Scatter plot',
                  'Line chart with 4 lines (one per company) on the same axis',
                  'A table with numbers only',
                ],
                correctIndex: 2,
                explanation: 'A line chart is ideal for showing change over time across multiple categories. Four lines allows direct comparison across all years and companies simultaneously.',
              },
              {
                id: 'q3',
                question: 'Your slide has a bar chart, a table, 6 bullet points, a company logo, and two callout boxes. What should you do?',
                options: [
                  'Keep it — more information shows more research',
                  'Remove the logo to save space',
                  'Apply the one-idea-per-slide rule: decide what the single most important point is and remove everything else',
                  'Make the font smaller to fit everything',
                ],
                correctIndex: 2,
                explanation: 'A slide with this much content violates the one-idea-per-slide rule. Judges can\'t process it all — and trying to explain it eats your time. Strip to the most important visual + title + one callout.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 't6-m2',
      title: 'Module 6.2 – Storytelling',
      description: 'Structure your presentation as a compelling narrative — not a data dump.',
      lessons: [
        {
          id: 't6-m2-l1',
          title: 'Problem → Solution → Impact',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## The Problem → Solution → Impact Structure

The most effective case presentations follow the same narrative structure that great storytellers, journalists, and scientists use: show the problem, show your solution, show what changes.

### Why Structure Matters

Judges are listening to 10 teams in a day. The ones that stick are the ones with a clear narrative — a story they can retell in 3 sentences.

If your presentation doesn't have a clear structure, information will feel like it's just being listed. Even correct information presented without a through-line fails to persuade.

### The Core Structure

**Part 1: PROBLEM** (25–30% of time)
- Open with a hook — a shocking statistic, a vivid anecdote, a provocative question
- Define the problem precisely, with data
- Show why it matters (consequences if unaddressed)
- Establish the core diagnostic insight (root cause)

*Goal: Make the audience feel the urgency of the problem*

**Part 2: SOLUTION** (45–50% of time)
- Show that you considered multiple options and chose deliberately
- Present your recommendation with full rationale
- Show the implementation plan
- Address the financial case (cost, return, timeline)

*Goal: Make the audience believe your solution is the right one*

**Part 3: IMPACT** (20–25% of time)
- Show the projected outcome — in numbers
- Risk acknowledgement and mitigation
- Clear call to action: *"We recommend management approve ₹X investment in Y by [date]"*

*Goal: Make the audience want to act*

### The Hook — Your Opening 30 Seconds

Judges decide within the first minute whether this team is worth paying attention to.

**Strong hooks:**
- *"Tata Motors makes ₹4.4 lakh crore a year. 58% of that is at risk."* (Shocking scale)
- *"In the last 3 years, Tata lost 12% market share in its home market — while competitors doubled."* (Specific, alarming trend)
- *"Imagine building the fastest EV in India while your core business burns. That's Tata Motors today."* (Vivid framing)

**Weak hook:** *"Good afternoon. Today we'll be presenting our analysis of Tata Motors."* (Every team starts this way. None of them are memorable.)

### The Red Thread

The "red thread" is the narrative logic that connects every slide. From your hook to your final recommendation, every slide should answer: *"Why are we showing this, and how does it connect to our recommendation?"*

If you can't answer that question for a slide — remove or restructure it.`,
          },
        },
        {
          id: 't6-m2-l2',
          title: 'Executive Summary',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## The Executive Summary

An executive summary is the single most important slide in your deck. It's the first thing judges see — and it tells them whether you're a team worth listening to.

### What Is an Executive Summary?

The executive summary (also called the "pyramid slide" or "summary slide") presents your entire case on one slide:
- The problem
- Your recommendation
- The key evidence (2–3 data points)
- The financial impact
- The key risk

**Everything else in your deck is evidence for what's on this slide.**

### The Pyramid Principle

McKinsey consultant Barbara Minto developed the **Pyramid Principle**: start with the answer, then support it with evidence. Don't build up to your recommendation — lead with it.

Most students do the opposite: 20 minutes of analysis, then the recommendation in the final 2 minutes. This is structurally backwards for a business audience.

Executives are busy. They want to know your recommendation first. Then they'll decide whether to pay attention to the evidence.

### Executive Summary Template

> **[Company] faces [problem] which has [quantified consequence].**
>
> **We recommend [specific recommendation].**
>
> **This will deliver [quantified outcome] within [timeframe].**
>
> **Key evidence:**
> - Finding 1 + supporting data
> - Finding 2 + supporting data
> - Finding 3 + supporting data
>
> **Primary risk:** [risk] | **Mitigation:** [plan]

### Example

> **Tata Motors' JLR segment — 58% of revenue — has seen margin decline from 7.8% to 2.1% EBITDA over 3 years, at risk of turning negative by FY26.**
>
> **We recommend a 3-year margin recovery programme focused on production efficiency and model mix shift toward high-margin Defender and Range Rover variants.**
>
> **This targets ₹4,200 crore in incremental EBITDA by FY27, restoring JLR margins to 6%+.**
>
> **Key evidence:**
> - Chip shortage cost overruns add ₹1,800 crore/year to production costs vs. pre-pandemic norms
> - Defender and Range Rover maintain 18% gross margin vs. 6% for Discovery Sport
> - BMW and Mercedes resolved similar disruptions through supplier diversification in 12–18 months
>
> **Primary risk:** Macro slowdown in China | **Mitigation:** Accelerate North America market penetration

This slide tells judges everything they need to know in 90 seconds.`,
          },
        },
        {
          id: 't6-m2-l3',
          title: 'Logical Flow',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## Logical Flow

A presentation with great content but poor structure feels incoherent. The audience leaves knowing a lot of facts but unable to explain what you recommended or why.

Logical flow is what makes your analysis feel like a coherent argument.

### The SCQA Framework

Consultants use SCQA to structure any communication:

**S — Situation**
What is the stable context we all agree on?

*"Tata Motors is India's #1 commercial vehicle maker and holds 70% of the EV passenger car market."*

**C — Complication**
What changed or is going wrong? Why is the situation no longer fine?

*"Despite strong domestic EV growth, JLR — which generates 58% of revenue — has seen margins collapse from 8% to 2% over 3 years."*

**Q — Question**
What is the key question this creates?

*"How should Tata Motors restore JLR's profitability while continuing to invest in India EV growth?"*

**A — Answer**
Your recommendation.

*"Through a focused margin recovery programme for JLR and capital-light EV expansion in India."*

This SCQA is your presentation's spine. Every slide fills in the evidence for one part of this structure.

### Transitions: The Invisible Glue

Transitions are the sentences you say between slides that connect them logically.

❌ Weak: *"And now we'll talk about the competitive landscape."*

✅ Strong: *"So we've established that JLR's margins are declining — the next question is whether this is an industry-wide problem or specific to Tata. Here's the competitive picture."*

Strong transitions tell judges *why* you're showing them the next slide. This is what makes the presentation feel like a flowing argument, not a list of slides.

### The "Backward Check"

After building your deck, read only the slide titles in sequence. Do they tell the complete story on their own?

If yes — your logical flow is solid.
If no — the sequence or titles need work.`,
          },
        },
        {
          id: 't6-m2-quiz',
          title: 'Module 6.2 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'Which opening is stronger for a case presentation about a struggling retail company?',
                options: [
                  '"Good morning. Today we present our analysis of Company X\'s retail strategy."',
                  '"India\'s retail sector is a ₹60 lakh crore market. Company X is losing ₹3 crore every single day in it."',
                  '"We would like to begin with an overview of the retail industry in India."',
                  '"Our team spent 20 hours analysing this case."',
                ],
                correctIndex: 1,
                explanation: 'The second option creates urgency immediately with a specific, alarming number (₹3 crore/day). It makes judges want to know more. The others are generic and forgettable.',
              },
              {
                id: 'q2',
                question: 'According to the Pyramid Principle, when should you state your recommendation in a presentation?',
                options: [
                  'At the end, after all the evidence',
                  'In the middle, after the problem and before the evidence',
                  'At the beginning, on the executive summary slide, before the detailed analysis',
                  'Only in the Q&A, not in the slides',
                ],
                correctIndex: 2,
                explanation: 'The Pyramid Principle says: lead with the answer. State your recommendation on the executive summary (slide 1–2), then use the rest of the deck to support it. Business audiences don\'t want to wait 20 minutes for your conclusion.',
              },
              {
                id: 'q3',
                question: 'In SCQA, the "Complication" represents:',
                options: [
                  'A technical complexity in your analysis',
                  'The reason the stable situation is no longer acceptable — what changed or went wrong',
                  'The complexity of your recommendation',
                  'A risk to your implementation plan',
                ],
                correctIndex: 1,
                explanation: 'The Complication is the disruption to the Situation — it\'s the "but" that creates the problem requiring a solution. Without a clear Complication, there\'s no urgency to act.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 't6-m3',
      title: 'Module 6.3 – Submission & Professionalism',
      description: 'The final details that separate winners from teams that get disqualified or marked down.',
      lessons: [
        {
          id: 't6-m3-l1',
          title: 'File Formats & Submission Rules',
          type: 'article',
          duration: '7 min',
          content: {
            article: `## File Formats & Submission Rules

Cases are won and lost before the presentation begins. Teams that submit late, in the wrong format, or missing required sections are disqualified or penalised — and it's entirely avoidable.

### The Golden Rule: Read the Rules First

Before you do any analysis, read the competition guidelines completely. Note:
- **File format** required (PDF vs. PPT vs. Google Slides link)
- **Page/slide limit** (most competitions cap at 10–15 slides + appendix)
- **Submission deadline** — time and timezone
- **Naming convention** ("TeamName_CaseName_Round2.pdf" — follow exactly)
- **Required sections** — some competitions require a specific structure

Ignoring any of these is a disqualifier or point deduction.

### PDF vs. PowerPoint

**Submit as PDF unless told otherwise.**
Why: PDFs render identically on every device. A PPT file can display differently depending on fonts, screen resolution, and software versions. The last thing you want is your carefully designed slide looking broken when judges open it.

**How to convert:** File → Save As → PDF in PowerPoint; File → Download → PDF in Google Slides.

### File Size Matters

Large files (>10 MB) can fail to upload on submission portals. Keep your file under 5 MB.

**How to reduce file size:**
- Compress images before inserting (tinypng.com for quick compression)
- Don't embed unnecessary fonts
- Remove hidden slides from your final submission

### The Appendix

An appendix is slides beyond your core deck that contain:
- Detailed financial models
- Full methodology for research
- Additional data tables
- Analyses you ran but didn't include in the main deck

Judges may or may not look at it. Your main deck must stand alone without the appendix — the appendix only adds depth, never substitutes for the core argument.

### Checklist Before Submitting

- [ ] Slide count within limit (including and excluding appendix)
- [ ] Correct file format (PDF unless specified)
- [ ] File name follows required convention
- [ ] All sources cited on relevant slides
- [ ] No team names on slides if anonymous judging is required
- [ ] File opens correctly on a different computer / different account`,
          },
        },
        {
          id: 't6-m3-l2',
          title: 'Citations & Source Acknowledgement',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## Citations & Source Acknowledgement

Every data point in your presentation came from somewhere. Acknowledging sources is both professional and protective — it shows credibility and protects you if a judge challenges your numbers.

### Why Citations Matter in Case Competitions

1. **Credibility** — a cited statistic is far more convincing than an uncited one
2. **Defensibility** — if a judge challenges your number, you can point to your source
3. **Professionalism** — it's standard practice in consulting; missing citations signals amateur work
4. **Integrity** — passing off others' research as original analysis is academic dishonesty

### How to Cite on Slides

Citations go in small text (8–10pt) at the bottom of the relevant slide.

**Format:** *Source Name, Document Name, Year.*

*Examples:*
- *IBEF, FMCG Industry Report, 2024.*
- *Tata Motors Annual Report, FY2024, p. 42.*
- *Economic Times, "JLR Margin Recovery," 12 October 2024.*
- *McKinsey, India Consumer Sentiment Survey, 2023.*

You don't need to include the full URL in the slide (it looks messy), but keep a reference list with URLs in your working document.

### What Needs to Be Cited

- Market size and growth figures
- Company-specific financial data (beyond what's in the case)
- Industry benchmarks and rankings
- Survey or research findings
- Quotes from management or experts

### What Doesn't Need to Be Cited

- Frameworks (SWOT, Porter's Five Forces) — these are standard tools, not proprietary
- General business knowledge ("higher margins improve profitability")
- Your own analysis and conclusions based on the data

### Primary Research Citation

For your own surveys and interviews:

*"BizForHer Team Primary Survey, N=52 respondents, April 2025."*

Be clear it's your original research — judges will respect it more, not less.

### Plagiarism Warning

Copying text or analysis directly from a research report without attribution is plagiarism. Always synthesise and paraphrase — present the insight in your own words, with the data cited.`,
          },
        },
        {
          id: 't6-m3-l3',
          title: 'Common Disqualifiers',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## Common Disqualifiers & How to Avoid Them

Every year, talented teams get eliminated for reasons that have nothing to do with the quality of their analysis. Know these pitfalls before you spend 48 hours on a case.

### Technical Disqualifiers

**1. Late Submission**
The most avoidable disqualifier. Submit 2 hours before the deadline — not 2 minutes. Systems crash, uploads fail, and life happens.

**2. Wrong Format / File Type**
Re-read the submission guidelines the day you submit. Competition portals sometimes only accept .pdf or only accept .pptx.

**3. Exceeding Page/Slide Limit**
If the limit is 12 slides + 5 appendix pages, 13 slides + 5 appendix pages gets you penalised. Count every slide including title and dividers.

**4. Missing Required Sections**
Some competitions require a financial model, an executive summary, or a specific section header. Check the rubric.

### Ethical Disqualifiers

**5. Using Confidential Information**
If someone on your team has access to non-public company information (through a family connection, internship, etc.), using it is grounds for disqualification.

**6. Plagiarism**
Copying analysis, text, or charts from published reports without attribution. Judges and organiser teams often check. It's not worth the risk.

**7. External Coaching Beyond Rules**
Most competitions allow mentors to advise on process but not to do the analysis. Read the rules on what "coaching" is and isn't permitted.

### Presentation Disqualifiers

**8. Exceeding Time Limit**
If you're supposed to present for 10 minutes and you go to 13, judges mark you down or cut you off. Practise out loud, with a timer, the day before.

**9. Reading Off Slides**
Not a formal disqualifier but effectively lowers your communication score so severely that you cannot win. Know your material well enough to talk about it, not recite it.

### The Final Check Ritual

The night before submission:
1. Re-read submission rules top to bottom
2. Open the file on a different device and confirm it looks correct
3. Count slides
4. Check all citations are present
5. Confirm file name follows convention
6. Submit at least 1 hour before deadline

Winning a case competition is hard. Getting disqualified before you even present is unnecessary. Protect your work with a 20-minute final check.`,
          },
        },
        {
          id: 't6-m3-quiz',
          title: 'Module 6.3 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'The competition guidelines say slides must be submitted as .pdf, maximum 12 slides + 5 appendix. Your final deck is 11 slides + 6 appendix pages, saved as .pptx. What should you do?',
                options: [
                  'Submit as-is — 1 extra appendix page won\'t matter',
                  'Convert to PDF and remove 1 appendix page to comply with limits exactly',
                  'Submit the .pptx since it\'s a better format',
                  'Email the organiser and ask for an exception',
                ],
                correctIndex: 1,
                explanation: 'Both violations must be fixed: convert to PDF (required format) and reduce appendix to 5 pages (required limit). Partial compliance is not compliance.',
              },
              {
                id: 'q2',
                question: 'Your slide states: "India\'s edtech market will be worth ₹7,000 crore by 2026." What needs to be added?',
                options: [
                  'The exact URL of every source you used',
                  'A citation at the bottom of the slide naming the source and year',
                  'This is a well-known fact — no citation needed',
                  'A disclaimer that the figure is approximate',
                ],
                correctIndex: 1,
                explanation: 'Market size figures must be cited — source name and year at the bottom of the slide. Without it, the number is unverifiable and judges may question its credibility.',
              },
              {
                id: 'q3',
                question: 'Your presentation is scheduled for 10 minutes. In your practice run, you clocked 11:45. What should you do?',
                options: [
                  'Nothing — 1:45 over is not significant',
                  'Present faster on the day',
                  'Cut content to get under 9:30 in practice, leaving buffer for questions and nerves on the actual day',
                  'Ask the judges for 2 extra minutes at the start',
                ],
                correctIndex: 2,
                explanation: 'If you\'re running 11:45 in practice, you\'ll likely run over in the actual presentation (nerves, Q&A setup). Cut to 9:30 max in practice. Presentations never get shorter on the day — they always get longer.',
              },
            ],
          },
        },
      ],
    },
  ],
};
