import { Course } from '../courses';

export const track1: Course = {
  id: 'track-1-foundations',
  title: 'Foundations of Business & Consulting',
  tagline: 'Make sense of business, even if you\'re from science',
  description: 'Zero jargon. Real examples. By the end of this track, you\'ll understand how businesses work, what consultants actually do, and exactly what judges are looking for at BizForHer.',
  category: 'Track 1',
  level: 'Beginner',
  color: '#db8a6c',
  icon: '📘',
  units: [
    {
      id: 't1-m1',
      title: 'Module 1.1 – Introduction to Consulting & Case Competitions',
      description: 'Understand what a business case actually is and how consultants approach problems.',
      lessons: [
        {
          id: 't1-m1-l1',
          title: 'What is a Business Case?',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## What is a Business Case?

Let's start with the most important question: what exactly is a "business case," and why should you care?

### Case vs. Pitch — They're Not the Same

A lot of people confuse these two. Here's the difference:

| | **Business Case** | **Pitch** |
|---|---|---|
| **Focus** | Analysing an existing company's problem | Selling your own idea |
| **Goal** | Recommend the best path forward | Get funding or buy-in |
| **Evidence** | Based on company data & research | Based on your vision |
| **Who does it?** | Consultants, analysts, strategists | Entrepreneurs, founders |

At BizForHer, you'll be doing a **business case** — you're given a real company facing a real challenge, and your job is to analyse it and tell them what to do.

### What Does a Business Case Look Like in Real Life?

Here are examples of real questions companies pay consultants to answer:

- *"Should Tata Motors enter the two-wheeler EV market, or double down on four-wheelers?"*
- *"Zomato's delivery margins are shrinking — what should they do?"*
- *"A regional pharma company wants to expand to Southeast Asia — is now the right time?"*

These aren't hypothetical. Companies spend lakhs hiring consultants to answer exactly these questions.

### Why Do Companies Use Consultants?

Three main reasons:

**1. Objectivity** — An outsider sees problems that insiders can't. When you're too close to something, you miss the obvious.

**2. Expertise** — Consultants have seen hundreds of similar situations across industries. They bring pattern recognition.

**3. Bandwidth** — Senior leaders are busy running the business. They don't have time to do a 6-week deep-dive analysis.

### What Makes a Case Answer Good?

Three things, in order:
1. **Clear problem definition** — You understand what's actually being asked
2. **Logical structure** — Your thinking flows from problem → analysis → recommendation
3. **Evidence** — Numbers, examples, and data back up every claim

You don't need to have the "right" answer. Judges reward clear thinking, not lucky guesses.

---

**The key insight:** A business case is not a test of knowledge. It's a test of how you think.`,
          },
        },
        {
          id: 't1-m1-l2',
          title: 'Role of a Consultant',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Role of a Consultant

If you've ever wondered what consultants actually *do* — beyond wearing suits and making decks — this lesson is for you.

### The Core Job

A consultant's job is to **solve problems for clients** — and get paid for it.

But solving problems isn't the same as having all the answers. The best consultants are incredibly good at asking the right questions, structuring what they find, and communicating recommendations that the client can actually act on.

### The Problem-Solving Mindset

Consultants think differently. Here's how:

**They start with the end in mind.**
Before diving into data, they ask: *"What decision needs to be made? And what would change that decision?"* This prevents wasted effort.

**They separate fact from assumption.**
A fact: "Revenues dropped 15% last year."
An assumption: "It's because of increased competition."
Consultants are obsessed with knowing which is which — because a wrong assumption leads to a wrong recommendation.

**They structure everything.**
Consultants never give a random list of ideas. Every output follows a logical framework: issue → analysis → insight → recommendation. This makes complex problems feel manageable.

**They think in trees.**
A problem gets broken down into smaller sub-problems. Each sub-problem gets broken down further — until you reach things you can actually measure or research. This is called an "issue tree."

### The Client-First Approach

Good consultants are not there to show off how smart they are. They are there to help the client succeed.

This means:
- **Listen before speaking** — understand the client's constraints before recommending
- **Be honest, not flattering** — if the client's favourite idea is bad, say so (tactfully)
- **Communicate in the client's language** — if they don't understand jargon, drop it

### Applying This to BizForHer

At BizForHer, the "client" is the company in the case. Your judges are playing the role of the client's leadership team.

Ask yourself before every recommendation: *"If I were the CEO of this company, would I find this useful and actionable?"*

If the answer is no — rethink.

---

**Key takeaway:** Consultants don't just know more. They think more clearly, more systematically, and always in service of a decision.`,
          },
        },
        {
          id: 't1-m1-l3',
          title: 'Understanding Competition Expectations',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## Understanding Competition Expectations

You can have the best analysis in the room and still lose — if you don't understand what judges are actually looking for. Let's fix that.

### What Judges Are Scoring

Most case competitions (including BizForHer) evaluate teams on some version of these dimensions:

**1. Problem Understanding (15–20%)**
Did you accurately define what the company is dealing with? Many teams answer a slightly different question than the one asked. This is an instant red flag.

**2. Analysis Quality (25–30%)**
Is your analysis backed by data? Did you use frameworks correctly? Did you go beyond surface-level observations?

**3. Recommendation Strength (25–30%)**
Is your recommendation specific, actionable, and realistic? Vague recommendations like "improve marketing" score zero. "Increase digital ad spend by ₹2 crore focused on 18–25 urban females across Instagram Reels" scores high.

**4. Presentation & Communication (20–25%)**
Are your slides clean? Does your story flow? Can the audience follow your logic? Is your delivery confident?

**5. Q&A Handling (10–15%)**
How do you respond to tough questions? Do you crumble or engage?

### The Most Common Mistakes

These are the mistakes that eliminate teams in round 1:

- **Restating the problem for 5 minutes** — judges know the case, get to the insight fast
- **All analysis, no recommendation** — your job is to decide, not just describe
- **Generic solutions** — "use social media more" is not a strategy
- **Ignoring constraints** — if the budget is limited, your solution must respect that
- **Overcomplicating** — using 7 frameworks when 2 would do
- **Reading off slides** — you should know your material cold

### The Winning Mindset

Top teams at case competitions share a common belief: **clarity beats cleverness**.

A clear, well-reasoned recommendation delivered confidently beats a technically brilliant analysis that no one can follow.

Before your presentation, run this check:
- Can you state your recommendation in one sentence?
- Does every slide support that recommendation?
- If a judge asks "why?" three times in a row, can you answer each time?

If yes — you're ready.

---

**Reminder:** The best case presentation is not the most complex one. It's the most convincing one.`,
          },
        },
        {
          id: 't1-m1-quiz',
          title: 'Module 1.1 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'What is the key difference between a business case and a pitch?',
                options: [
                  'A pitch uses more data; a case uses more creativity',
                  'A case analyses an existing company\'s problem; a pitch sells your own new idea',
                  'A case is written; a pitch is spoken',
                  'There is no difference — they are the same thing',
                ],
                correctIndex: 1,
                explanation: 'A business case involves analysing a real company\'s challenge and recommending a path forward. A pitch is about selling your own idea, usually to get investment.',
              },
              {
                id: 'q2',
                question: 'A consultant\'s recommendation says "Company X should improve its customer service." Why is this a weak recommendation?',
                options: [
                  'It\'s too long',
                  'It\'s not backed by financial data',
                  'It\'s too vague — it doesn\'t say how, by how much, or by when',
                  'Customer service is not a real business problem',
                ],
                correctIndex: 2,
                explanation: 'Strong recommendations are specific and actionable. "Improve customer service" gives the company nothing concrete to act on. A better version: "Hire 20 additional support agents and deploy a chatbot to cut response time from 24h to 2h within Q2."',
              },
              {
                id: 'q3',
                question: 'During a case competition Q&A, a judge challenges your recommendation. What should you do?',
                options: [
                  'Immediately agree with the judge to avoid conflict',
                  'Ignore the question and return to your slide',
                  'Acknowledge the point, then defend your reasoning with evidence if it\'s sound',
                  'Tell the judge you\'ll think about it after the presentation',
                ],
                correctIndex: 2,
                explanation: 'Caving immediately looks weak; ignoring looks arrogant. The right move is to engage: acknowledge what\'s valid in the challenge, then stand by your reasoning if it holds.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 't1-m2',
      title: 'Module 1.2 – Business Basics for Beginners',
      description: 'Revenue, profit, cost, margins — understand the numbers that run every business.',
      lessons: [
        {
          id: 't1-m2-l1',
          title: 'How Companies Make Money',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## How Companies Make Money

Before you can analyse a business, you need to understand how it makes money. This lesson covers the four most important numbers in any business.

### The Chai Stall Analogy

Let's use the most relatable business in India: a chai stall.

Raj runs a chai stall near a college. Every day:
- He sells 100 cups at ₹15 each
- Each cup costs him ₹7 to make (milk, tea leaves, gas, sugar)
- His stall rent is ₹1,000/month, and he pays himself nothing yet

Let's break this down:

---

### Revenue

> **Revenue = Price × Quantity sold**

Raj's daily revenue = ₹15 × 100 = **₹1,500/day**

Revenue is the total money coming IN before any costs. It's also called "top line" or "turnover."

*Don't confuse revenue with success.* A company can have high revenue and still be losing money.

---

### Cost

Costs split into two types:

**Variable costs** — change with how much you produce
- Raj's: ₹7 per cup × 100 cups = ₹700/day

**Fixed costs** — stay the same regardless of sales
- Raj's rent: ₹1,000/month = ~₹33/day

Total daily cost = ₹700 + ₹33 = **₹733**

---

### Profit

> **Profit = Revenue − Total Costs**

Raj's daily profit = ₹1,500 − ₹733 = **₹767/day**

This is what actually goes into his pocket (before tax).

**Gross Profit** = Revenue − Variable Costs only = ₹1,500 − ₹700 = ₹800
**Net Profit** = Revenue − All Costs = ₹767

---

### Margin

> **Margin = (Profit ÷ Revenue) × 100**

Raj's gross margin = (₹800 ÷ ₹1,500) × 100 = **53%**
Raj's net margin = (₹767 ÷ ₹1,500) × 100 = **51%**

Margins tell you *efficiency* — how much of every rupee earned actually becomes profit.

A 51% net margin is excellent. Most large companies operate at 5–20%.

---

### Why This Matters for Cases

When a case says "the company's margins are declining," that means they're earning less profit per rupee of revenue. Your job is to figure out why — and what to do about it.

Is revenue falling? Are costs rising? Both? The answer changes everything.`,
          },
        },
        {
          id: 't1-m2-l2',
          title: 'Financial Statements Simplified',
          type: 'article',
          duration: '12 min',
          content: {
            article: `## Financial Statements Simplified

Financial statements sound intimidating. They're not. There are three, and each tells you a different story about the business.

### Statement 1: The Income Statement (P&L)

The Income Statement (also called Profit & Loss or P&L) shows **how much money a company made and spent over a period of time** — usually a year or quarter.

\`\`\`
Revenue (Sales)            ₹100 crore
− Cost of Goods Sold        ₹40 crore
= Gross Profit              ₹60 crore

− Operating Expenses        ₹30 crore
  (salaries, marketing, R&D)
= Operating Profit (EBIT)   ₹30 crore

− Interest & Taxes          ₹10 crore
= Net Profit                ₹20 crore
\`\`\`

**What to look for:** Is net profit positive? Is it growing year-on-year? Is gross margin healthy for this industry?

---

### Statement 2: The Balance Sheet

The Balance Sheet shows **what a company owns and owes at a single point in time**. It always balances:

> **Assets = Liabilities + Equity**

**Assets** — what the company *has*:
- Current assets: cash, inventory, receivables (convertible to cash within a year)
- Non-current assets: factories, equipment, patents

**Liabilities** — what the company *owes*:
- Short-term: loans due within a year, supplier payments owed
- Long-term: bonds, long-term bank loans

**Equity** — what belongs to shareholders (Assets − Liabilities)

**What to look for in a case:** Is debt very high relative to equity? Is cash running low? Are receivables piling up (customers not paying)?

---

### Statement 3: Cash Flow Statement

A company can be profitable and still run out of cash. The cash flow statement shows **actual cash moving in and out**.

Three sections:
- **Operating cash flow** — cash from the core business
- **Investing cash flow** — cash used to buy/sell assets (usually negative — it's an investment)
- **Financing cash flow** — cash from loans or investor funding

**The golden rule:** A healthy business generates positive cash flow from operations consistently.

---

### For Case Competitions

You'll rarely see all three statements in a case. But when you see financial data, know which statement it's from and what story it's telling.

Always ask:
1. Is the company profitable? (P&L)
2. Is it financially stable? (Balance Sheet)
3. Is it actually generating cash? (Cash Flow)`,
          },
        },
        {
          id: 't1-m2-l3',
          title: 'Key Business Ratios',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## Key Business Ratios

Raw numbers lie. ₹500 crore in profit sounds great — until you learn the company spent ₹10,000 crore to earn it. Ratios give context by comparing numbers to each other.

### The Three You Need to Know

---

### 1. Gross Margin

> **Gross Margin = (Gross Profit ÷ Revenue) × 100**

Measures how efficiently a company produces its goods or services.

| Industry | Typical Gross Margin |
|----------|---------------------|
| Software / SaaS | 70–85% |
| FMCG (Hindustan Unilever) | 45–55% |
| Automotive (Maruti) | 10–15% |
| Retail (DMart) | 6–9% |

**Why it matters:** Low gross margin means the company has little room to cover overhead costs. If margins drop further, they go into loss.

---

### 2. ROCE (Return on Capital Employed)

> **ROCE = EBIT ÷ Capital Employed × 100**

Measures how much profit a company earns from every rupee invested in the business.

*Capital Employed = Total Assets − Current Liabilities*

**Example:** If ROCE = 18%, the company earns ₹18 for every ₹100 invested in it.

A higher ROCE is better. Compare it to:
- The company's own ROCE from previous years (improving or declining?)
- Competitors' ROCE (is this company more or less efficient?)
- The cost of borrowing money (~7–9% for Indian corporates) — ROCE should be higher than this

---

### 3. Net Profit Margin

> **Net Margin = (Net Profit ÷ Revenue) × 100**

The bottom line — how much of every rupee earned actually becomes profit after all expenses.

**A company with 2% net margin and ₹1,000 crore revenue earns ₹20 crore.**
**A company with 20% net margin and ₹100 crore revenue also earns ₹20 crore.**

Same profit, very different businesses.

---

### Reading Ratios in Cases

When a case shows a table of financial data:
1. Calculate the ratios yourself if they're not given
2. Compare to the previous year — are things improving or worsening?
3. Compare to industry benchmarks — is this company outperforming or lagging?

The story in the ratios is often the core of the problem you need to solve.`,
          },
        },
        {
          id: 't1-m2-quiz',
          title: 'Module 1.2 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'A company has revenue of ₹200 crore and Cost of Goods Sold of ₹80 crore. What is the gross margin?',
                options: ['40%', '60%', '80%', '120 crore'],
                correctIndex: 1,
                explanation: 'Gross Profit = ₹200cr − ₹80cr = ₹120cr. Gross Margin = (₹120cr ÷ ₹200cr) × 100 = 60%.',
              },
              {
                id: 'q2',
                question: 'A company is profitable on paper (net profit is positive) but is struggling to pay its suppliers on time. Which financial statement would reveal this problem?',
                options: ['Income Statement', 'Balance Sheet', 'Cash Flow Statement', 'None — if profit is positive, there\'s no problem'],
                correctIndex: 2,
                explanation: 'A company can have accounting profit but negative operating cash flow — meaning cash is tied up in inventory or unpaid receivables. The Cash Flow Statement shows actual cash movement.',
              },
              {
                id: 'q3',
                question: 'Company A has ROCE of 8%. The average bank lending rate is 9%. What does this tell you?',
                options: [
                  'The company is doing well — 8% is a solid return',
                  'The company is earning less return on its capital than what it costs to borrow money — a red flag',
                  'ROCE of 8% is the industry average, so the company is fine',
                  'ROCE doesn\'t apply to this comparison',
                ],
                correctIndex: 1,
                explanation: 'If ROCE is lower than the cost of capital (borrowing rate), the company destroys value — it\'s better off returning money to shareholders than reinvesting it. This is a serious strategic problem.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 't1-m3',
      title: 'Module 1.3 – Industry & Market Basics',
      description: 'Learn how industries are structured, how to understand customers, and why competitors matter.',
      lessons: [
        {
          id: 't1-m3-l1',
          title: 'What is an Industry?',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## What is an Industry?

An industry is a group of companies that do the same (or very similar) thing. Understanding which industry a company operates in is step one of any analysis.

### Why It Matters

Industries have very different rules:
- **Profit margins** vary wildly (pharma averages 20%+; retail averages 3–5%)
- **Growth rates** differ (EV sector growing 40% a year; traditional print media shrinking)
- **Risk profiles** are different (banking is heavily regulated; tech can move fast)

If you compare a pharma company's margins to a retail company's margins, the comparison is meaningless. You must always compare within the same industry.

### Major Industries You'll Encounter in Cases

**Consumer & Retail**
FMCG (fast-moving consumer goods), e-commerce, fashion, food & beverages
*Examples: HUL, DMart, Tata Consumer, Zara India*

**Technology**
Software, internet platforms, semiconductors, IT services
*Examples: Infosys, Zomato, BYJU'S, Juspay*

**Financial Services**
Banking, insurance, asset management, fintech
*Examples: HDFC Bank, LIC, Zerodha, PhonePe*

**Automotive**
Passenger vehicles, commercial vehicles, two-wheelers, EVs
*Examples: Tata Motors, Maruti Suzuki, Ola Electric, Bajaj Auto*

**Healthcare & Pharma**
Hospitals, drugs/generics, diagnostics, medical devices
*Examples: Sun Pharma, Apollo Hospitals, Dr Lal PathLabs*

**Infrastructure & Energy**
Construction, power, oil & gas, renewables
*Examples: L&T, Reliance Industries, Adani Green*

### Industry Life Cycle

Industries go through stages, like living things:

1. **Emerging** — New technology, rapid growth, few players (e.g., green hydrogen in India today)
2. **Growth** — Expanding market, many new entrants (e.g., EV two-wheelers)
3. **Maturity** — Stable, competitive, slower growth (e.g., FMCG in India)
4. **Decline** — Shrinking demand (e.g., physical newspapers, feature phones)

**Why it matters for cases:** A company in a declining industry needs a fundamentally different strategy than one in a growing industry.

---

**Quick exercise:** For the next company you see in the news, ask: *What industry is this? Where is that industry in its life cycle?*`,
          },
        },
        {
          id: 't1-m3-l2',
          title: 'Understanding Customers & Markets',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## Understanding Customers & Markets

Every business exists to serve customers. But "customers" is never one homogeneous group — and understanding the differences between them is critical to good analysis.

### B2B vs. B2C

**B2C (Business-to-Consumer)**
The company sells directly to individual people.

*Examples: Nykaa selling lipstick, McDonald's selling burgers, OYO renting rooms*

Characteristics:
- Large number of customers with small individual purchases
- Decisions often emotional / impulse-driven
- Marketing through mass media (ads, influencers, social)
- Price sensitivity often high

**B2B (Business-to-Business)**
The company sells to other companies.

*Examples: Infosys selling IT services to banks, Tata Steel selling to car manufacturers, AWS selling cloud to startups*

Characteristics:
- Fewer customers but much larger contracts
- Decisions are rational, committee-based, slow
- Relationships and trust matter enormously
- Price sensitivity varies — quality and reliability matter more

**B2B2C** — some companies do both: they sell to businesses who then sell to consumers (e.g., a payment gateway like Razorpay).

---

### Market Segmentation

Segmentation means dividing the total market into groups with similar characteristics — so the company can serve each group better.

**Ways to segment:**

- **Geographic** — Metro vs. Tier 2/3 vs. rural (huge in India)
- **Demographic** — Age, income, gender, occupation
- **Psychographic** — Lifestyle, values, interests
- **Behavioural** — How often they buy, brand loyalty, price sensitivity

**Example: Maruti's segmentation**
- Entry segment: Alto, S-Presso (first-time buyers, price-conscious)
- Mid segment: Swift, Baleno (young urban professionals)
- Premium segment: Brezza, Grand Vitara (aspirational buyers)

Each segment gets a different product, different price, different marketing.

---

### For Cases

When a case involves a company struggling with growth, segmentation analysis often reveals the answer: *Which customer segment is growing? Which is shrinking? Is the company serving the right segment?*`,
          },
        },
        {
          id: 't1-m3-l3',
          title: 'Competition & Market Share',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Competition & Market Share

No company operates in a vacuum. To understand a company, you must understand its competitive landscape — who else is fighting for the same customers.

### What is Market Share?

> **Market Share = (Company Revenue ÷ Total Industry Revenue) × 100**

If the Indian FMCG market is worth ₹5 lakh crore and HUL earns ₹60,000 crore of that, HUL's market share is 12%.

Market share tells you **relative strength** — who is winning the battle for customers.

A company can have growing revenue but falling market share (meaning competitors are growing faster). That's a warning sign.

### Types of Competition

**Direct competitors** — same product, same customer
*Zomato vs. Swiggy, HDFC Bank vs. ICICI Bank*

**Indirect competitors** — different product, same customer need
*Zomato vs. cooking at home, Netflix vs. YouTube*

**Potential entrants** — not yet competing, but could
*Amazon entering financial services, Reliance entering FMCG*

### Competitive Benchmarking

Benchmarking means comparing your company's performance to competitors' on key metrics.

| Metric | Company X | Competitor A | Competitor B |
|--------|-----------|--------------|--------------|
| Revenue growth | 8% | 22% | 15% |
| Gross margin | 32% | 41% | 38% |
| Market share | 18% | 29% | 21% |

This table immediately shows that Company X is losing ground — growing slower, less efficient, and losing market share. A case built around this company would ask: *why, and what should they do?*

### Why Competitors Matter for Your Recommendation

When you recommend a strategy, always pressure-test it against competitors:
- If you recommend cutting prices, how will competitors respond?
- If you recommend entering a new market, are competitors already there?
- If a product is successful, how long before competitors copy it?

The best strategies create **durable competitive advantages** — things competitors can't easily replicate (brand, technology, distribution network, data).

---

**Key insight:** Market share is a scoreboard. Your job in a case is often to figure out why the score is what it is — and how to improve it.`,
          },
        },
        {
          id: 't1-m3-quiz',
          title: 'Module 1.3 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'Infosys sells IT consulting services to HDFC Bank. What type of transaction is this?',
                options: ['B2C', 'B2B', 'B2B2C', 'D2C'],
                correctIndex: 1,
                explanation: 'Infosys (a business) is selling to HDFC Bank (another business). That\'s B2B — Business-to-Business.',
              },
              {
                id: 'q2',
                question: 'The Indian EV car market is worth ₹20,000 crore. Tata Motors has revenue from EV cars of ₹6,000 crore. What is Tata\'s EV market share?',
                options: ['3%', '20%', '30%', '33%'],
                correctIndex: 2,
                explanation: 'Market share = (₹6,000 crore ÷ ₹20,000 crore) × 100 = 30%.',
              },
              {
                id: 'q3',
                question: 'A fast food chain\'s revenue grew 12% this year, which sounds good. But the overall fast food industry grew 30%. What does this mean?',
                options: [
                  'The company is performing well — 12% growth is above average',
                  'The company is losing market share even as it grows in absolute terms',
                  'The industry data must be wrong',
                  'This is not a concern as long as absolute revenue is growing',
                ],
                correctIndex: 1,
                explanation: 'Relative performance matters. If the market grew 30% but you only grew 12%, your competitors captured more new customers than you did. Your market share fell.',
              },
            ],
          },
        },
      ],
    },
  ],
};
