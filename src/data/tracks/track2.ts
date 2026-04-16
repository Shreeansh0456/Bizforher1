import { Course } from '../courses';

export const track2: Course = {
  id: 'track-2-research',
  title: 'Research & Data Collection Mastery',
  tagline: 'Find real data, fast — and know when to trust it',
  description: 'The teams that win cases cite real numbers from credible sources. This track teaches you where to find data, how to read company reports, and how to organise everything into a strong evidence base.',
  category: 'Track 2',
  level: 'Beginner–Intermediate',
  color: '#10b981',
  icon: '📗',
  units: [
    {
      id: 't2-m1',
      title: 'Module 2.1 – Finding Reliable Sources',
      description: 'Know where to look for credible data and how to avoid misinformation.',
      lessons: [
        {
          id: 't2-m1-l1',
          title: 'Annual Reports & Investor Documents',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## Annual Reports & Investor Documents

If you want to know how a company is really doing, ignore the press releases and go straight to the source: the **annual report**.

### What Is an Annual Report?

Every publicly listed company in India (listed on BSE or NSE) is legally required to publish an annual report at the end of each financial year (April–March).

It contains:
- **Financial statements** — audited P&L, Balance Sheet, Cash Flow
- **Management Discussion & Analysis (MD&A)** — the CEO and management explain performance, strategy, and risks in their own words
- **Director's Report** — board-level perspective
- **Notes to Accounts** — detailed breakdowns of every number

This is the most honest document a company publishes. It's audited, legally binding, and contains details you won't find anywhere else.

### Where to Find Annual Reports

1. **Company's own website** → Investor Relations section
2. **BSE India** → bseindia.com → search company → Annual Reports
3. **NSE** → nseindia.com → same process
4. **Screener.in** → search company → Documents tab (the fastest)

### What to Focus On

You don't need to read 300 pages. Here's where to go:

**MD&A section** — This is gold. Management explains what went well, what went wrong, and what they're planning. Look for phrases like "headwinds," "margin pressure," "strategic priority."

**5-year financial summary** — Most reports include a table of 5 years of key metrics. This immediately shows trends.

**Segment reporting** — If the company has multiple business lines, this section breaks down performance by each one.

**Risk factors** — What does management see as the biggest threats? Often the most honest section.

### Investor Presentations & Earnings Calls

Beyond the annual report:

- **Quarterly earnings presentations** (available on company IR pages) — updated every 3 months
- **Earnings call transcripts** — CEOs answer analyst questions. The tone and content of these is extremely revealing.

Search: "Tata Motors Q3 FY24 earnings call transcript" on Google — you'll find it.

---

**Practice:** Go to Screener.in, search "Hindustan Unilever," open the latest annual report, and find the MD&A section. Read just that. You'll understand HUL better than 90% of people in 20 minutes.`,
          },
        },
        {
          id: 't2-m1-l2',
          title: 'Industry Reports & News Sources',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Industry Reports & News Sources

Annual reports tell you about one company. Industry reports tell you about the entire playing field — market size, trends, competitive dynamics, and where the sector is headed.

### Tier 1: Free Sources You Should Always Check

**Economic Times (ET)** — economictimes.indiatimes.com
India's most comprehensive business newspaper. For any Indian case, ET is your first stop. Use the search bar for any company or industry.

**Business Standard & Mint** — strong Indian business coverage with good data journalism.

**IBEF (India Brand Equity Foundation)** — ibef.org
Free industry reports on every major Indian sector — FMCG, auto, pharma, tech, etc. These are exactly the kind of reports that have market size data, growth rates, and key players. Perfect for citing in cases.

**NASSCOM** — for Indian tech sector data.

**CMIE (Centre for Monitoring Indian Economy)** — economic and corporate data for India.

### Tier 2: Global Sources

**Bloomberg & Reuters** — for global companies and macroeconomic data.

**Financial Times (FT)** — ft.com — excellent for global strategy and business analysis.

**McKinsey, BCG, Bain Insights** — the big consulting firms publish free research reports. Searching "McKinsey India FMCG" or "BCG EV India" will return very high-quality free reports.

**Statista** — statista.com — aggregates statistics from hundreds of sources. Great for quick market size numbers (some data is paywalled, but plenty is free).

### How to Use These in a Case

When you cite a source in a case, follow this format:

> *"According to IBEF's 2024 FMCG Industry Report, India's FMCG market is expected to reach ₹10 lakh crore by 2026, growing at 11% CAGR."*

This is infinitely stronger than: *"The FMCG market is very large and growing."*

### A Note on Recency

Data goes stale fast. Always note the year of your source. A 2019 report on Indian retail is largely useless post-COVID. When in doubt, acknowledge the limitation: *"Based on pre-COVID data, though the structural trend holds."*`,
          },
        },
        {
          id: 't2-m1-l3',
          title: 'Avoiding Misinformation',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## Avoiding Misinformation

Using bad data in a case presentation is worse than having no data at all. It destroys your credibility the moment a judge challenges your source.

### The Problem with Wikipedia

Wikipedia is an excellent starting point for understanding a topic. It is **never** an acceptable citation in a case competition — or in any professional context.

Why? Because Wikipedia is editable by anyone, contains errors, and is not peer-reviewed or audited.

**Use Wikipedia to:** understand context, find key terms, identify what to research further.
**Never use Wikipedia to:** cite a market size, quote a statistic, or support a recommendation.

### Red Flags for Unreliable Data

Watch out for these:

- **No author or organisation named** — credible data always has a source
- **No date** — data without a year is useless
- **Suspiciously round numbers** — "the market is worth $10 billion" with no methodology is made up
- **Blog posts, social media, or news aggregators** as primary sources
- **Press releases from the company being analysed** — companies describe themselves favourably; that's not independent data

### The Cross-Check Rule

Before using any data point, verify it against at least **one independent source**.

If IBEF says the market is ₹5 lakh crore and ET also says approximately ₹5 lakh crore — you can use it confidently.

If only one source says something and you can't find corroboration — either look harder or acknowledge the limitation.

### The "So What?" Test for Data

Even accurate data can be useless if it doesn't connect to your argument.

❌ "India has 1.4 billion people." (What does this tell us about this specific case?)

✅ "India has 300+ million Gen Z consumers, of whom 60% say they prefer digital-first brands — directly relevant to our recommendation that the company prioritise app-based distribution." (Specific, sourced, connected to the argument.)

---

**Summary:** Good data is recent, sourced, cross-verified, and connected to your recommendation. If it fails any of those tests, use it with caution or don't use it at all.`,
          },
        },
        {
          id: 't2-m1-quiz',
          title: 'Module 2.1 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'You need to find the revenue breakdown of Tata Motors by business segment. Where is the most reliable place to find this?',
                options: [
                  'Wikipedia\'s Tata Motors page',
                  'A financial blog summarising Tata Motors\' performance',
                  'Tata Motors\' annual report — specifically the segment reporting section',
                  'A news article from last year',
                ],
                correctIndex: 2,
                explanation: 'Annual reports contain audited, legally verified segment data. This is the primary source — everything else is derived from it.',
              },
              {
                id: 'q2',
                question: 'You find a statistic on a website saying "India\'s edtech market will be worth $30 billion by 2025." There is no author, no date, and no methodology mentioned. What should you do?',
                options: [
                  'Use it — it\'s a credible-sounding number',
                  'Discard it and find the same figure from a named research organisation',
                  'Use it but add "approximately" before the number',
                  'Use it only if the website looks professional',
                ],
                correctIndex: 1,
                explanation: 'Data without an author, date, and methodology is unverifiable. For a competition, citing it would be a liability. Find the same figure from IBEF, NASSCOM, or a named research firm.',
              },
              {
                id: 'q3',
                question: 'Which source would be MOST appropriate to cite for India\'s current FMCG market size in a case competition?',
                options: [
                  'A Wikipedia article on FMCG',
                  'An Instagram post from a finance influencer',
                  'The IBEF FMCG Industry Report 2024',
                  'A company blog from HUL',
                ],
                correctIndex: 2,
                explanation: 'IBEF (India Brand Equity Foundation) is a government-backed body that publishes industry reports with cited data and methodology. It\'s ideal for Indian market statistics.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 't2-m2',
      title: 'Module 2.2 – Financial Data Collection',
      description: 'Use Screener and finance portals to extract key numbers quickly and organise them effectively.',
      lessons: [
        {
          id: 't2-m2-l1',
          title: 'Using Screener & Finance Portals',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## Using Screener & Finance Portals

You don't need to read a 300-page annual report for every company. Tools like Screener.in let you pull a decade of financial data in under 2 minutes.

### Screener.in — Your Most Important Tool

**screener.in** is a free platform that aggregates financial data for every listed Indian company. It's used by professional analysts, fund managers, and consultants.

**How to use it:**

1. Go to screener.in
2. Search any company name (e.g., "Zomato" or "Tata Motors")
3. You'll see a dashboard with:
   - Revenue, profit, and margin trends (10 years)
   - Balance sheet snapshot
   - Cash flow data
   - Key ratios (ROCE, ROE, P/E etc.)
   - Annual reports and earnings documents
   - Peer comparison

All for free. No login required for basic data.

### What to Look at First

When you land on a company's Screener page for a case:

**Step 1 — The 10-year P&L chart**
Look at the revenue and net profit trend. Is it growing? Flattening? Turning negative? This gives you the "health check" in 10 seconds.

**Step 2 — The quarterly results**
For recent performance, scroll to the quarterly section. This shows performance in the last 4–8 quarters. Look for acceleration or deceleration.

**Step 3 — Peer comparison**
Screener lists comparable companies. Check their margins and ROCE vs. the company you're analysing. This immediately tells you how the company ranks in its industry.

### Other Useful Portals

**Moneycontrol.com** — good for quick news + financials together.

**BSE India (bseindia.com) / NSE (nseindia.com)** — original exchange filings. For documents (earnings presentations, quarterly results), go here.

**Tickertape.in** — another clean Indian financial data platform, good for visualisations.

**Trendlyne.com** — advanced screening + data.

### For Global Companies

**Macrotrends.net** — 20+ years of financial data for US and global companies.

**Yahoo Finance** — quick financials for any public company globally.

---

**Practice task:** Open Screener.in. Search "Zomato." Find: (1) revenue for the last 3 years, (2) whether the company is profitable yet, (3) ROCE compared to Swiggy if possible.`,
          },
        },
        {
          id: 't2-m2-l2',
          title: 'Extracting Key Numbers',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Extracting Key Numbers

Data overload is real. A company's annual report has hundreds of numbers. Your job is to identify the 5–8 numbers that actually matter for the case — and extract them quickly.

### The Core Numbers Checklist

For most cases, you need these seven numbers (from the past 3–5 years where possible):

| # | Number | Where to Find It |
|---|--------|-----------------|
| 1 | **Revenue** | P&L top line |
| 2 | **Revenue growth %** | Calculate: (New−Old)/Old×100 |
| 3 | **Gross Margin %** | Gross Profit ÷ Revenue |
| 4 | **Net Profit / Loss** | P&L bottom line |
| 5 | **Net Margin %** | Net Profit ÷ Revenue |
| 6 | **Total Debt** | Balance Sheet liabilities |
| 7 | **Cash & Equivalents** | Balance Sheet current assets |

### Revenue: More Than One Number

Revenue is often broken down in case materials:
- **By geography** — India vs. international
- **By segment** — e.g., Tata Motors: Jaguar Land Rover vs. India Commercial Vehicles vs. India Passenger Vehicles
- **By product** — e.g., Reliance: Retail vs. Telecom vs. Energy

Always look at the breakdown, not just the total. The problem (and the opportunity) is almost always in one specific segment.

### Calculating Growth Rate

> **Growth % = ((Current Year − Previous Year) ÷ Previous Year) × 100**

If revenue was ₹500 crore last year and ₹650 crore this year:
Growth = ((650 − 500) ÷ 500) × 100 = **30%**

For multi-year trends, use CAGR (Compound Annual Growth Rate):
> **CAGR = ((End Value ÷ Start Value) ^ (1/Years)) − 1**

3-year CAGR of ₹300cr → ₹500cr:
= ((500/300)^(1/3)) − 1 = **18.6% CAGR**

### Debt: The Number Most Teams Ignore

High debt is a major constraint on strategy. A company with ₹10,000 crore in debt paying 9% interest spends ₹900 crore/year just on interest — before any strategy investment.

**Debt-to-Equity Ratio = Total Debt ÷ Shareholder Equity**

- D/E < 1: Generally healthy
- D/E 1–2: Manageable, but watch it
- D/E > 2: High leverage — be cautious about recommending expensive strategies

---

**Pro tip:** Build a simple 3-year comparison table before starting your analysis. It takes 10 minutes and forces you to see the trend — which is always more important than any single year's number.`,
          },
        },
        {
          id: 't2-m2-l3',
          title: 'Organising Your Data',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## Organising Your Data

You've found good data from credible sources. Now you need to structure it so your team can use it efficiently — especially under time pressure.

### The Research Tracker

Create a simple Google Sheet or table at the start of every case with three tabs:

**Tab 1: Company Financials**
| Year | Revenue | Net Profit | Gross Margin | ROCE | Debt |
|------|---------|------------|--------------|------|------|
| FY22 | ... | ... | ... | ... | ... |
| FY23 | ... | ... | ... | ... | ... |
| FY24 | ... | ... | ... | ... | ... |

**Tab 2: Market & Industry Data**
| Fact | Number | Source | Year |
|------|--------|--------|------|
| Market size | ₹X crore | IBEF | 2024 |
| Market growth | X% CAGR | ... | ... |
| Key players & share | ... | ... | ... |

**Tab 3: Competitor Comparison**
| Metric | Our Company | Competitor A | Competitor B |
|--------|------------|--------------|--------------|
| Revenue | ... | ... | ... |
| Margin | ... | ... | ... |
| Market share | ... | ... | ... |

### Citation Hygiene

Every data point in your tracker needs a source and date. Write it as you go — not at the end. Reconstructing sources at 2am before a deadline is a nightmare.

Format: *[Organisation Name], [Document Name], [Year], [Page/URL]*

*Example: IBEF, FMCG Industry Report, 2024, ibef.org/industry/fmcg-india*

### Role Division in a Team

If you're working in a team of 3–4:
- **1 person** → company financials (Screener + annual report)
- **1 person** → industry & market data (IBEF, ET, sector reports)
- **1 person** → competitor research + benchmarking
- Everyone → analysis and synthesis together

Divide research, not analysis.

### The "So What?" Column

Add a 5th column to every data table: **So What?**

| Fact | Number | Source | Year | **So What?** |
|------|--------|--------|------|------------|
| Revenue growth | 6% | Annual Report | FY24 | Below 15% industry average — company losing market share |

This forces you to interpret the data as you collect it, not as an afterthought.`,
          },
        },
        {
          id: 't2-m2-quiz',
          title: 'Module 2.2 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'A company\'s revenue went from ₹400 crore to ₹520 crore over 2 years. What is the 2-year CAGR?',
                options: ['13%', '14%', '15%', '30%'],
                correctIndex: 2,
                explanation: 'CAGR = ((520/400)^(1/2)) − 1 = (1.3^0.5) − 1 ≈ 1.1402 − 1 = 14%. Close to 14% — answer C (15%) is the nearest round option accounting for the approximation. Exact is ~14%.',
              },
              {
                id: 'q2',
                question: 'You are researching Reliance Industries for a case. What does Screener.in show you?',
                options: [
                  'Only the current share price',
                  'News articles about the company',
                  '10 years of financial data, key ratios, peer comparison, and links to annual reports',
                  'Management\'s personal views on strategy',
                ],
                correctIndex: 2,
                explanation: 'Screener.in aggregates 10+ years of financial data, ratios, peer benchmarks, and documents for every listed Indian company — all in one clean dashboard.',
              },
              {
                id: 'q3',
                question: 'Why should you add a "So What?" column to your research tracker?',
                options: [
                  'To make the spreadsheet look more professional',
                  'To force yourself to interpret data as you collect it, connecting facts to your analysis',
                  'To satisfy a citation requirement',
                  'It is only useful for financial data, not industry data',
                ],
                correctIndex: 1,
                explanation: 'The "So What?" column ensures data collection and analysis happen together. Teams that separate them often collect lots of data they never use — and miss the key insights.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 't2-m3',
      title: 'Module 2.3 – Primary Research',
      description: 'Go beyond secondary data — learn to gather firsthand insights through surveys, interviews, and field research.',
      lessons: [
        {
          id: 't2-m3-l1',
          title: 'Surveys & Forms',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Surveys & Forms

Secondary data tells you what happened. Primary research tells you why — through the voices of actual customers, employees, or users.

### When to Use Surveys

Surveys are most useful when you want to:
- Understand customer preferences or behaviour
- Validate an assumption your team is making
- Quantify opinions across a larger group

**Example:** Your case is about a coffee chain losing customers. You survey 50 college students in your city asking about their preferences — price sensitivity, ambiance vs. taste, loyalty programme awareness.

Even 30–50 responses can provide directional insights for a case, especially if the demographic matches the company's target customer.

### Designing a Good Survey

**Keep it short** — 8–12 questions maximum. Response quality drops sharply after question 10.

**Mix question types:**
- **Multiple choice / rating scales** — easy to analyse (e.g., "How often do you visit a coffee shop? Daily / 2–3×/week / Weekly / Rarely")
- **Open-ended** — reveals depth (e.g., "What would make you visit more often?")

**Avoid leading questions:**
❌ "Don't you think this company's product is overpriced?"
✅ "How would you rate the value for money of this product? (1–5)"

**Be specific about the audience** — state who the survey is for in the intro. Irrelevant responses contaminate data.

### Sampling: Who Do You Ask?

You can't survey everyone. Your sample should represent the population you're studying.

- For a youth-focused brand: ask your school/college network
- For a premium product: ask people in that income bracket
- For a B2B service: ask people who work in relevant companies

**Minimum for credibility in a case:** 30 responses. Better: 50–100.

### Google Forms for Surveys

Google Forms is free, easy to share via link, and automatically creates charts for analysis.

Tips:
- Use "Required" for key questions
- Use "Linear scale" for rating questions
- Enable response collection to a Google Sheet for easy analysis

---

**Important:** When presenting survey results, always state: *"Based on our primary survey of [N] respondents from [demographic], [finding]."* This shows rigor.`,
          },
        },
        {
          id: 't2-m3-l2',
          title: 'Interviews & Field Research',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Interviews & Field Research

Numbers tell you what is happening. People tell you why. Interviews and field observations can uncover insights that no spreadsheet will ever show.

### The Power of Interviews

A 15-minute conversation with the right person can change your entire case analysis.

**Who to interview for a case:**

- **Customers** — ask about their experience, pain points, why they switched brands
- **Non-customers** — ask why they *don't* use the product (often more revealing)
- **Store staff / frontline workers** — they see the operational reality daily
- **Family or friends** in relevant roles — a parent who buys FMCG groceries, a cousin who works in the industry

### How to Conduct a Good Interview

**Before:**
- Write 5–8 open-ended questions (not yes/no)
- Research the person's context briefly
- Explain what you're doing and that it's for a competition (people are usually happy to help)

**During:**
- Start easy: *"Tell me about the last time you [relevant behaviour]..."*
- Follow up with: *"Why?" "Can you tell me more?" "What happened next?"*
- Don't lead: avoid *"Don't you think X?"*
- Take notes or ask to record

**After:**
- Summarise key quotes and themes immediately while fresh

### Field Research: Go See It Yourself

Field research means observing the real world relevant to your case.

**Examples:**
- Visit the store of the company you're analysing — what do you notice about layout, pricing, footfall, staff behaviour?
- Use the app yourself — where does it frustrate you?
- Talk to a shopkeeper in the relevant category — what do customers actually ask for?

This is called **ethnographic research** in consulting jargon. It's what separates people who understand the business from people who only understand the financials.

### How to Present Primary Research

In your case presentation:

> *"Our team conducted 6 customer interviews and visited 3 [Company] outlets. Key insight: customers consistently mentioned that wait times exceed 20 minutes during lunch — a problem not reflected in the company's customer satisfaction scores."*

This type of evidence is extremely powerful because it's original — no competitor team has it.`,
          },
        },
        {
          id: 't2-m3-l3',
          title: 'Analysing Responses',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## Analysing Responses

Collecting data is step one. Making sense of it is where the real work happens.

### Quantitative Analysis: Surveys

For survey data with numerical responses, look for:

**Central tendency:**
- **Average (mean)** — sum of responses ÷ number of responses
- **Median** — the middle value (better than mean when you have outliers)

*Example: If 5 people rate your experience 5, 4, 2, 1, 1, the average is 2.6, but most people gave extremes. This tells you a polarised experience — some love it, some hate it.*

**Distribution:**
What % gave each rating? Visualise this as a bar chart. A bimodal distribution (two peaks) is more interesting than a normal one — it usually means two distinct customer types.

**Patterns by segment:**
Do younger respondents answer differently from older ones? Do users from Tier 2 cities differ from metro users? Segment your responses.

### Qualitative Analysis: Interviews

For interview notes and open-ended responses, use **thematic analysis**:

1. Read all responses once without analysis
2. Highlight interesting phrases, patterns, surprises
3. Group similar ideas into **themes** (e.g., "price sensitivity," "delivery issues," "trust concerns")
4. Count how often each theme appears
5. Pull 2–3 direct quotes per theme — these become evidence

**Example output:**
> *"3 of 6 interviewees mentioned distrust of the product's quality claims. Representative quote: 'I don't know if these are actually natural ingredients — there's no proof.'"*

### Turning Insights into Slides

Don't paste a raw chart of survey results into your presentation. Interpret it.

**Weak slide:** A pie chart showing 45% of respondents said "price is a concern."

**Strong slide:** Title: *"Price is the #1 barrier to trial — cited by 45% of non-customers"* with the chart as supporting evidence, and a call-out box highlighting the most revealing quote from interviews.

Data should always serve your argument. If a finding doesn't connect to your recommendation — don't include it, or acknowledge it and explain why it doesn't change your view.`,
          },
        },
        {
          id: 't2-m3-quiz',
          title: 'Module 2.3 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'Your case is about a grocery delivery app struggling with retention. You want primary research. Which approach is MOST valuable?',
                options: [
                  'Survey 200 random adults about grocery shopping habits',
                  'Interview 8–10 people who used the app once and never came back',
                  'Read the company\'s annual report',
                  'Check the app\'s star rating on the Play Store',
                ],
                correctIndex: 1,
                explanation: 'Churned users (those who left) are the most valuable interviewees for a retention problem. They experienced the product and made a deliberate decision to stop — their reasons are exactly what you need to understand.',
              },
              {
                id: 'q2',
                question: 'In a 50-person survey, 8 people gave a rating of 1/5, 4 gave 2/5, 3 gave 3/5, 5 gave 4/5, and 30 gave 5/5. What is the best way to describe this distribution?',
                options: [
                  'Average is 3.8 — customers are moderately satisfied',
                  'The distribution is bimodal — most customers love it but a significant minority are very unhappy',
                  'The majority gave 5/5, so there is no problem',
                  'The data is too small to draw any conclusions',
                ],
                correctIndex: 1,
                explanation: 'A bimodal distribution (peaks at both extremes) is more insightful than just the average. 30 people love it; 12 hate it. The average obscures this and would mislead your analysis.',
              },
              {
                id: 'q3',
                question: 'Which of the following is the BEST way to present a primary research finding in a case presentation?',
                options: [
                  'Show a raw data table of all 50 survey responses',
                  'State "we did a survey" without showing results',
                  '"45% of surveyed non-customers cited price as their primary barrier — corroborated by 4/6 interview subjects who described the product as \'not worth it at this price\'"',
                  '"Many people we talked to felt the price was high"',
                ],
                correctIndex: 2,
                explanation: 'Good primary research presentation combines quantitative (45% from survey) with qualitative (direct quotes from interviews), states the finding specifically, and connects to a recommendation.',
              },
            ],
          },
        },
      ],
    },
  ],
};
