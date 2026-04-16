import { Course } from '../courses';

export const track4: Course = {
  id: 'track-4-diagnosis',
  title: 'Problem Identification & Diagnosis',
  tagline: 'Turn data into the real problem — not a symptom',
  description: 'Data is only useful when it leads to a diagnosis. Learn to spot warning signs, prioritise issues, write sharp problem statements, and find root causes using proven consulting methods.',
  category: 'Track 4',
  level: 'Intermediate',
  color: '#f59e0b',
  icon: '📕',
  units: [
    {
      id: 't4-m1',
      title: 'Module 4.1 – Identifying Key Issues',
      description: 'Learn to spot warning signs in data, prioritise what matters, and write precise problem statements.',
      lessons: [
        {
          id: 't4-m1-l1',
          title: 'Recognising Warning Signs',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## Recognising Warning Signs

Before you can solve a problem, you have to see it clearly. Many teams in case competitions miss the real issue because they focus on a symptom rather than the underlying problem.

### Financial Warning Signs

**Falling Gross Margins**
If revenue is growing but gross margins are shrinking, the company is paying more to produce each unit of output. Possible causes:
- Input cost increases (raw materials, energy)
- Pricing pressure from competitors (can't raise prices)
- Product mix shift toward lower-margin products

**Declining Revenue Growth**
A company growing at 25% that suddenly drops to 8% — even if still profitable — is a warning sign. The question is whether this is cyclical (temporary) or structural (permanent).

**Cash Flow Negative Despite Profit**
If net profit is positive but operating cash flow is negative, the company may be:
- Collecting payments slowly (receivables building up)
- Holding too much inventory
- Expanding working capital requirements faster than the business can support

**Rising Debt-to-Equity**
A company taking on more debt each year, especially if not accompanied by proportional revenue growth, is building a fragile balance sheet.

---

### Operational Warning Signs

**Market Share Declining**
Even with growing revenue, if market share is falling, competitors are outgrowing you. This is the most important early warning sign of structural competitive weakness.

**Customer Retention Falling**
In subscription businesses or repeat-purchase categories, if the percentage of customers returning drops, the product or experience has a problem.

**Employee Turnover Rising**
High attrition (especially in key roles) is often an early indicator of cultural, leadership, or business viability problems.

---

### Reading the MD&A for Hidden Signals

Management is legally required to report material risks and challenges. In the MD&A section, look for:
- Language that hedges: "facing challenges," "navigating headwinds," "continuing to invest for long-term growth"
- Risks called out explicitly: if management names a risk, it's real
- Year-on-year language changes: if last year they called it a "growth opportunity" and this year it's "navigating a complex environment," something changed

---

**Rule of thumb:** In any financial dataset, look at 3 years of data and ask: *"Is this getting better or worse, and how fast?"* That question alone will surface most warning signs.`,
          },
        },
        {
          id: 't4-m1-l2',
          title: 'Prioritising Problems',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Prioritising Problems

Most struggling companies have not one problem but five. Your job is to identify which one is causing all the others — and focus there.

### The Problem with Listing Everything

A common mistake in case presentations is the "kitchen sink" approach: list every problem the company has, spend equal time on all of them, and then run out of time before recommending anything.

Judges don't want a comprehensive list. They want you to make a judgment call: *"Of everything wrong with this company, what matters most right now?"*

### The Prioritisation Framework

Rank problems by two dimensions:

**1. Impact** — If this problem were solved, how much would it change the company's situation?

**2. Urgency** — Does this need to be addressed now, or can it wait?

| | High Urgency | Low Urgency |
|---|---|---|
| **High Impact** | **Critical** — Address immediately | **Strategic** — Plan for it |
| **Low Impact** | **Operational** — Delegate/fix quickly | **Background** — Monitor only |

For a case, you typically have 1 Critical problem and 1–2 Strategic problems. Spend 80% of your analysis on the Critical one.

### The Symptom vs. Root Cause Trap

The most expensive mistake: solving a symptom instead of a cause.

**Example:**
A retail chain is losing customers. The "symptom" is declining footfall.

**Wrong diagnosis (symptom):** "We need more advertising to bring people back."

**Better diagnosis (getting closer):** "Why are they not coming? Because competitors offer better prices and faster checkout."

**Root cause:** "We haven't invested in pricing analytics or checkout technology in 3 years, while competitors have."

The advertisement solution solves nothing at the root — it brings people in, and they still leave disappointed.

### The "So What? Why? How?" Loop

For each problem you identify, run this loop:

1. **So what?** Why is this a problem for the business? (Financial impact)
2. **Why?** What's causing this specific issue?
3. **How much?** Can you quantify the impact?

A problem that survives all three questions is worth solving. A problem that fails "so what?" is probably not the real problem.`,
          },
        },
        {
          id: 't4-m1-l3',
          title: 'Writing Problem Statements',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## Writing Problem Statements

A clear problem statement is one of the most underrated skills in a case competition. It forces precision, creates alignment in your team, and tells judges immediately that you understand the case.

### What a Good Problem Statement Does

1. **Names the problem precisely** — not "they have challenges" but "gross margins have declined 6 points in 3 years"
2. **Quantifies where possible** — numbers make it concrete and verifiable
3. **States the consequence** — what happens if this isn't solved?
4. **Sets up the analysis** — a good problem statement implicitly points toward what you need to analyse

### The Problem Statement Formula

> **[Company] is facing [specific problem] which has resulted in [measurable consequence], driven by [initial hypothesis of root cause]. Without intervention, [projected negative outcome].**

### Examples

**Weak:** "Tata Motors has some problems with profitability and competition."

**Strong:** "Tata Motors' JLR segment — which contributes 58% of group revenue — has seen margins decline from 8% to 2% EBITDA over 3 years, primarily driven by supply chain disruptions and rising EV investment costs. Without a clear margin recovery plan, JLR risks negative EBITDA in FY26, threatening the group's ability to fund India EV expansion."

---

**Weak:** "Zomato is spending a lot on discounts and losing money."

**Strong:** "Zomato's contribution margin per order has declined from ₹22 to ₹8 over 12 months as customer acquisition discounts outpace delivery efficiency gains. If this trajectory continues, cash runway shrinks to 18 months — forcing either a strategic pivot or dilutive fundraise."

---

### The Team Alignment Test

Before your analysis begins, your full team should be able to answer in 30 seconds: *"What is the problem we are solving?"*

If different team members give different answers — your problem statement is not sharp enough. Refine it until everyone says the same thing, in the same words.`,
          },
        },
        {
          id: 't4-m1-quiz',
          title: 'Module 4.1 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'A company\'s revenue grew 20% last year, but its gross margin fell from 38% to 31%. What is the warning sign here?',
                options: [
                  'Revenue growth of 20% is too slow for this industry',
                  'Profitability is deteriorating even as revenue grows — costs are rising faster than prices',
                  'The company is investing too much in marketing',
                  'A 31% gross margin is below the industry floor',
                ],
                correctIndex: 1,
                explanation: 'Revenue growing while margins shrink is a classic warning sign — it means the company is becoming less efficient or facing pricing pressure. Growing revenue that destroys margin is not sustainable.',
              },
              {
                id: 'q2',
                question: 'A restaurant chain has falling customer scores, rising food costs, high staff turnover, and slow delivery times. Using the prioritisation framework, which problem is likely "Critical"?',
                options: [
                  'All four are equally critical and must be solved simultaneously',
                  'Slow delivery times — it\'s most visible to customers',
                  'Rising food costs — it directly affects profitability and is likely driving all other problems',
                  'Staff turnover — it\'s the most human problem',
                ],
                correctIndex: 2,
                explanation: 'Rising food costs pressure unit economics, which may cause management to cut staffing (causing turnover and slow delivery), which causes customer dissatisfaction. It\'s likely the high-impact, high-urgency root that\'s driving the others.',
              },
              {
                id: 'q3',
                question: 'Which of the following is the strongest problem statement?',
                options: [
                  '"Company X has many problems it needs to address urgently"',
                  '"Company X is losing customers due to poor service"',
                  '"Company X\'s Net Promoter Score has fallen from +42 to +11 in 18 months, correlated with a 23% increase in average delivery time, risking ₹200 crore in annual revenue from high-LTV customers"',
                  '"Company X should improve its customer service and delivery times"',
                ],
                correctIndex: 2,
                explanation: 'A strong problem statement is specific (NPS fell from +42 to +11), causal (correlated with delivery time), quantified (₹200 crore risk), and names the consequence. The others are vague, prescriptive, or both.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 't4-m2',
      title: 'Module 4.2 – Root Cause Analysis',
      description: 'Dig beneath symptoms to find what\'s actually causing the problem using structured analytical tools.',
      lessons: [
        {
          id: 't4-m2-l1',
          title: '5 Whys Method',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## The 5 Whys Method

The 5 Whys is the simplest, most powerful root cause tool. It was developed by Sakichi Toyoda (founder of Toyota) and remains a cornerstone of problem-solving in consulting, engineering, and operations.

### How It Works

Start with the problem statement and ask "Why?" repeatedly — typically 5 times — until you reach an actionable root cause.

### Example: Declining Sales at a Kirana Store

**Problem:** A neighbourhood kirana store's sales have dropped 30% in 6 months.

**Why 1:** Why have sales dropped?
→ Fewer customers are coming to the store.

**Why 2:** Why are fewer customers coming?
→ They are going to the new supermarket that opened nearby.

**Why 3:** Why are customers choosing the supermarket over this store?
→ The supermarket has better prices, cleaner displays, and accepts digital payments.

**Why 4:** Why doesn't the kirana accept digital payments?
→ The owner doesn't know how to set up UPI or card machines.

**Why 5:** Why hasn't the owner learned?
→ There is no support system — no one has shown them and they don't have time to figure it out alone.

**Root cause:** Lack of access to digital tools training and support for small retailers.

**Notice:** The recommendation is not "get more customers" (symptom). It's "set up digital payment infrastructure and train the owner" (root cause).

---

### Rules for 5 Whys

1. **Don't stop at 2 or 3** — early whys are usually symptoms
2. **Be specific in each answer** — vague answers produce vague root causes
3. **Don't jump to solutions** — keep asking why until you genuinely can't go further
4. **Multiple branches** — one why can sometimes produce two different answers; explore both

### When to Use 5 Whys

Best for operational and process problems where a clear chain of causality exists.

Less suited for complex strategic problems (use the fishbone diagram instead).`,
          },
        },
        {
          id: 't4-m2-l2',
          title: 'Fishbone Diagram',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Fishbone Diagram (Ishikawa / Cause-and-Effect)

For complex problems with multiple contributing causes, the Fishbone diagram organises potential causes visually so you can explore all dimensions before diagnosing the primary driver.

### What It Looks Like

The diagram looks like a fish skeleton:
- **Head** = the problem (effect)
- **Backbone** = connecting the causes to the problem
- **Bones** = major categories of causes
- **Sub-bones** = specific causes within each category

### The 6M Framework (for manufacturing/operations)

The most common version uses 6 categories:

1. **Man (People)** — skills, training, behaviour, error
2. **Machine** — equipment failure, outdated technology
3. **Material** — input quality, supplier issues, raw material costs
4. **Method** — process design, inefficient procedures
5. **Measurement** — wrong metrics, incorrect data
6. **Environment** — external factors, workplace conditions

### Adapting for Business Cases

For strategy cases, adapt the categories to:

1. **Strategy** — wrong positioning, bad market choices
2. **Operations** — execution failures, process inefficiency
3. **People** — capability gaps, leadership decisions
4. **Market** — customer shifts, competitor moves
5. **Financial** — funding constraints, cost structure
6. **Technology** — outdated systems, failure to innovate

### Example: Why Is an E-Commerce Startup Losing Customers?

**Problem (head):** Customer retention rate fell from 60% to 38% in 1 year.

**Bones:**
- **Strategy:** Repositioned upmarket without communicating the change → existing price-sensitive customers left
- **Operations:** Delivery times increased from 2 days to 4 days after warehouse consolidation
- **People:** Customer support team was cut by 30% → response time tripled
- **Market:** Competitor introduced free returns policy; this company still charges ₹50
- **Technology:** App had 3 major bugs introduced in the last update; 1-star reviews spiked

**Finding:** Multiple causes, but Operations + Technology are fastest to fix; Strategy is the deepest root.

---

### Using Fishbone in a Presentation

You don't have to show the full diagram. Summarise:
*"Our root cause analysis identified 5 contributing factors. The 2 most impactful — and actionable — are delivery time and app stability, which together account for 70% of negative feedback."*`,
          },
        },
        {
          id: 't4-m2-l3',
          title: 'Linking Data to Causes',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Linking Data to Causes

Root cause analysis is most credible when it's backed by data. The best case teams don't just theorise about why something is happening — they show the data that supports the diagnosis.

### The Correlation-Causation Distinction

Data can show correlation (two things happening at the same time) or causation (one thing causing another). Correlation is easier to prove; causation requires additional evidence.

**Example:**
A retailer's sales dropped at the same time a competitor opened nearby (correlation).
A survey shows 68% of former customers now shop at the competitor and cite lower prices as the reason (moving toward causation).
Price comparison data shows the competitor is 12% cheaper on average (additional causation evidence).

The combination of all three is how you build a convincing causal argument from data.

### The Diagnostic Narrative Structure

When linking data to causes in a presentation:

**Step 1: Show the problem in data**
"Revenue declined 18% YoY."

**Step 2: Narrow to the affected segment**
"The decline was entirely in the 18–30 age group. Revenue from 30+ customers actually grew 5%."

**Step 3: Identify the cause using corroborating evidence**
"Survey data shows Gen Z customers left because of the lack of digital payment options. Our primary research of 45 respondents confirmed this."

**Step 4: Validate with a second data source**
"This is consistent with industry data — 78% of Gen Z consumers in India prefer UPI/digital wallets as their primary payment method (RBI Annual Report 2023)."

**Step 5: State the root cause**
"Root cause: The company has not implemented digital payment infrastructure, making it inaccessible to its fastest-growing demographic."

### Common Mistakes in Data-to-Cause Linking

- **Cherry-picking**: Only showing data that supports your hypothesis; ignoring contradictions
- **Correlation confusion**: Claiming causation from a single correlation without additional evidence
- **Insufficient sample**: Using 3 data points to claim a trend
- **Outdated data**: Citing 2019 data for a 2024 analysis without noting the gap

---

**The test:** Could a judge read your data analysis and independently arrive at the same root cause diagnosis? If yes — your data-to-cause linking is solid.`,
          },
        },
        {
          id: 't4-m2-quiz',
          title: 'Module 4.2 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'Using the 5 Whys on the problem "employee productivity is low": Why 1 → "employees complete fewer tasks." Why 2 → "they spend too much time in meetings." Why 3 → "meetings have no agenda." Why 4 → "there is no meeting policy." Why 5 → "management never prioritised this." What is the actionable root cause?',
                options: [
                  'Hire more employees to compensate for productivity loss',
                  'Create and enforce a meeting policy with mandatory agendas',
                  'Cut the number of meetings by 50%',
                  'Productivity tools are the root cause',
                ],
                correctIndex: 1,
                explanation: 'The 5 Whys led to: no meeting policy → management hasn\'t prioritised it. The actionable fix is creating and enforcing a meeting policy — addressing the root rather than the symptom (cutting meetings without structure).',
              },
              {
                id: 'q2',
                question: 'A company\'s customer satisfaction fell at the same time they switched their delivery partner. This is:',
                options: [
                  'Definitive proof that the delivery partner caused the satisfaction drop',
                  'A correlation that suggests a hypothesis worth investigating with additional evidence',
                  'Irrelevant — satisfaction can fall for many reasons',
                  'Sufficient evidence to recommend switching back immediately',
                ],
                correctIndex: 1,
                explanation: 'Correlation provides a hypothesis, not proof. You need additional evidence (customer feedback, delivery time data, complaints analysis) to establish causation before making a recommendation.',
              },
              {
                id: 'q3',
                question: 'For a complex problem with multiple potential causes (strategy, people, technology, market), which tool is more useful than the 5 Whys?',
                options: [
                  'SWOT analysis',
                  'The Fishbone (Ishikawa) Diagram',
                  'Porter\'s Five Forces',
                  'A financial ratio analysis',
                ],
                correctIndex: 1,
                explanation: 'The Fishbone Diagram is designed for multi-dimensional root cause analysis. It maps causes across multiple categories simultaneously, making it better suited for complex problems than the linear 5 Whys.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 't4-m3',
      title: 'Module 4.3 – Management & Stakeholder View',
      description: 'Understand what management is saying, what investors are worried about, and how employees and customers experience the problem.',
      lessons: [
        {
          id: 't4-m3-l1',
          title: 'Reading Management Commentary',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Reading Management Commentary

Management's words are data. Executives speak carefully and deliberately — every word in an earnings call or annual report is reviewed by legal teams. Learning to read between the lines is one of the most powerful skills in case analysis.

### The MD&A: Your Primary Source

The Management Discussion & Analysis (MD&A) section of an annual report is where management explains their own performance. It covers:
- Performance vs. prior year
- Key drivers of growth or decline
- Strategic priorities for the next year
- Principal risks the company faces

**How to read it analytically:**

Look for what they *emphasise* vs. what they *minimise*.

If management spends 3 paragraphs on a subsidiary's growth but only 1 sentence on the main business declining — the main business is the problem they don't want to dwell on.

### Language Signals

| Management Says | It Often Means |
|----------------|----------------|
| "Navigating a challenging macro environment" | Revenue growth is disappointing |
| "Investing for long-term growth" | Current profits are being sacrificed |
| "Rationalising our cost structure" | Layoffs or cuts are happening |
| "Exploring strategic options" | Possible sale, merger, or restructuring |
| "Transformational year" | Painful year that needed a positive spin |
| "Exceeded our own expectations" | They honestly expected bad results |

### Earnings Calls: Unscripted Insights

Quarterly earnings calls involve analysts asking CEOs direct, uncomfortable questions. The transcript is public. This is where you hear:
- How confident (or not) the CEO actually is
- What questions investors are worried about
- How management handles pressure

Search: "[Company name] earnings call transcript Q[quarter] FY[year]" on ET Markets, Seeking Alpha, or the company's IR page.

**What to look for:** Do management's answers directly address the question, or do they pivot? Pivoting is a signal.

### Comparing Across Years

Compare management commentary year-over-year:

- FY22 MD&A: "Our EV pipeline will transform the company over the next 3 years"
- FY24 MD&A: "Our EV segment faces intensifying competition and margin pressure"

This shift tells you exactly how the situation has evolved and where the strategic pressure now sits.`,
          },
        },
        {
          id: 't4-m3-l2',
          title: 'Investor Communication',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Investor Communication

Investors are among the most rigorous analysts of any company. Understanding what they think — and why — adds a critical external perspective to your diagnosis.

### Who Are "Investors"?

- **Institutional investors** — mutual funds, FIIs (Foreign Institutional Investors), insurance companies holding large stakes
- **Retail investors** — individual shareholders
- **Analysts** — from brokerages like Kotak, ICICI Securities, Motilal Oswal — they publish research reports with buy/sell/hold ratings and detailed analysis

### Where to Find Investor Perspectives

**1. Analyst Reports**
Search "[Company] analyst report 2024" on Google. Many brokerage reports are freely available on Scribd, financial portals, or the brokerage's website.

These reports contain:
- Revenue and profit forecasts
- Key risks the analyst sees
- What would make them change their view
- Comparison with competitors

**2. Shareholding Pattern**
Available on NSE/BSE quarterly. Shows:
- What % is held by promoters (founders/family)
- What % by institutional investors (mutual funds, FIIs)
- If institutional holding is declining — a red flag

**3. Stock Performance vs. Peers**
If a company's stock has underperformed its sector index by 30% over 2 years, the market is saying something. Find out what.

### Signals from Investor Behaviour

- **Increasing FII holding** → Foreign investors see value; positive signal
- **Promoter pledging shares** → Founders may be cash-strapped; caution
- **Large institutional exit** → A major fund sold out; investigate why

### Using Investor Perspective in a Case

You can frame your analysis using the investor lens:

*"Analysts have flagged debt reduction as the #1 priority for management in FY25. Our recommendation aligns with this — our proposed strategy generates ₹500 crore in incremental free cash flow that can be deployed toward debt repayment, addressing the market's primary concern."*

This shows sophistication: you understand not just what the company should do, but what the external stakeholders are watching.`,
          },
        },
        {
          id: 't4-m3-l3',
          title: 'Employee & Customer Impact',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## Employee & Customer Impact

Financial statements tell you what happened. Employees and customers tell you why — and what it actually feels like from the inside.

### Why Stakeholder Impact Matters

A strategy that makes financial sense but ignores human realities will fail in execution. The best recommendations account for:
- How employees will respond
- Whether customers will change behaviour
- What implementation friction looks like on the ground

### Reading Employee Signals

**Sources of employee perspective:**
- **Glassdoor reviews** — employees rate companies and leave comments (anonymous); look for patterns, not individual gripes
- **LinkedIn** — check if senior talent is leaving (search former employees, see where they went)
- **Annual Report HR section** — attrition rates, employee count changes
- **MD&A** — management mentions of workforce changes

**What high attrition signals:**
- Cultural or leadership problems
- Business unit struggling (people jump ship before it gets worse)
- Burnout from rapid scaling
- Below-market compensation

### Reading Customer Signals

**Sources of customer perspective:**
- **App store reviews** (Google Play, App Store) — read 1-star reviews for specific complaints
- **Social media** — search the brand name on Twitter/X; complaints and praise are both visible
- **Customer service data** — if provided in the case, look for complaint categories
- **NPS (Net Promoter Score)** — if mentioned, a score below 0 is alarming; above +50 is strong
- **Your own surveys / interviews** (primary research from Track 2)

### Connecting Stakeholder Impact to Recommendations

The best case teams test their recommendation against both employees and customers:

**Employee test:** "Is this strategy something employees can rally behind? Does it require skills they have? Will it ask them to do too much too fast?"

**Customer test:** "Will customers notice this change positively? Are we solving for what they actually want, or what we assume they want?"

A recommendation that solves the financial problem but alienates employees or confuses customers is incomplete. Address the human dimension.`,
          },
        },
        {
          id: 't4-m3-quiz',
          title: 'Module 4.3 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'A CEO\'s earnings call transcript says: "We are actively exploring strategic alternatives for our retail division." What does this most likely mean?',
                options: [
                  'They are expanding the retail division aggressively',
                  'They are considering selling, spinning off, or shutting down the retail division',
                  'They are opening new retail stores',
                  'The retail division is the strongest part of the business',
                ],
                correctIndex: 1,
                explanation: '"Exploring strategic alternatives" is standard corporate language for considering a sale, spin-off, joint venture, or exit. It signals the division is either underperforming or non-core.',
              },
              {
                id: 'q2',
                question: 'You notice that a company\'s FII (foreign institutional investor) holding dropped from 28% to 14% over the past year. What should you investigate?',
                options: [
                  'Nothing — institutional holding changes are normal',
                  'Why large, sophisticated investors chose to exit — read recent analyst reports and news for red flags',
                  'The company\'s marketing strategy',
                  'Whether the company should list on a foreign exchange',
                ],
                correctIndex: 1,
                explanation: 'A large drop in institutional holding is a signal — sophisticated investors exited. Investigating their reasoning (analyst reports, news, earnings calls) often reveals the core concern about the company.',
              },
              {
                id: 'q3',
                question: 'A company\'s Glassdoor score dropped from 4.1 to 2.9 over 18 months. The most common review themes are "leadership doesn\'t communicate" and "product is falling behind competitors." How is this relevant to your case analysis?',
                options: [
                  'It\'s not relevant — Glassdoor is unreliable',
                  'It corroborates operational and strategic warning signs — internal morale and product feedback from employees often predict financial performance',
                  'Only relevant if the company\'s HR budget is part of the case',
                  'Relevant only if the case specifically mentions employee satisfaction',
                ],
                correctIndex: 1,
                explanation: 'Employee sentiment is a leading indicator. Poor communication from leadership → slower decisions → slower product development → competitive lag → eventually financial impact. Glassdoor data that patterns consistently is meaningful context.',
              },
            ],
          },
        },
      ],
    },
  ],
};
