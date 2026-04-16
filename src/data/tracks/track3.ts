import { Course } from '../courses';

export const track3: Course = {
  id: 'track-3-analysis',
  title: 'Company & Industry Analysis',
  tagline: 'Read a company the way analysts do',
  description: 'Go beyond surface numbers. Learn how to analyse the macro environment, decode a company\'s business model, compare it against competitors, and find the insights that matter. We use Tata Motors as a running case study.',
  category: 'Track 3',
  level: 'Intermediate',
  color: '#3b82f6',
  icon: '📙',
  units: [
    {
      id: 't3-m1',
      title: 'Module 3.1 – Macro Analysis',
      description: 'Understand the big forces shaping industries — politics, economy, technology, and more.',
      lessons: [
        {
          id: 't3-m1-l1',
          title: 'PESTLE Analysis',
          type: 'article',
          duration: '11 min',
          content: {
            article: `## PESTLE Analysis

Before analysing a company, you need to understand the world it operates in. PESTLE is the framework for this.

**PESTLE** = Political, Economic, Social, Technological, Legal, Environmental

Each factor represents external forces that the company cannot control but must respond to.

---

### P — Political

Government policy, elections, trade relations.

*Example for an auto company like Tata Motors:*
- Government's EV incentives (FAME II scheme, PLI for EV manufacturing) — positive
- Import tariffs on lithium — increases battery costs — negative
- Geopolitical tension affecting JLR's UK-EU supply chain — risk

**Ask:** What political decisions in the next 3–5 years could help or hurt this company?

---

### E — Economic

GDP growth, inflation, interest rates, consumer income levels.

*Example:*
- Rising inflation increases input costs for manufacturing
- High interest rates make car loans expensive → reduces demand for vehicles
- India's growing middle class (economic growth) → more first-time car buyers

**Ask:** Is the macroeconomic environment tailwind or headwind for this business?

---

### S — Social

Demographics, lifestyle changes, cultural shifts.

*Example:*
- Gen Z prioritises sustainability → increases demand for EVs
- Rising urbanisation → more need for personal mobility in Tier 2 cities
- Work-from-home normalisation → less daily commuting, slower auto demand

---

### T — Technological

Innovation, digitisation, R&D breakthroughs.

*Example:*
- Rapid improvement in battery technology → range anxiety declining
- AI in manufacturing → cost reduction potential
- Connected car technology → new revenue stream via software subscriptions

---

### L — Legal

Laws, regulations, compliance requirements.

*Example:*
- BS6 emission norms → expensive to comply, but filters out weak players
- UK post-Brexit regulations → affect JLR's European operations
- Data privacy laws → affect connected car features

---

### E — Environmental

Climate, sustainability, ESG expectations.

*Example:*
- Corporate pressure to reduce Scope 3 emissions
- Physical climate risk (floods, heat) affecting factories
- Investor ESG mandates pushing companies toward greener products

---

### How to Use PESTLE in a Case

Don't just list factors. Identify the **2–3 that matter most** for the specific case, explain the mechanism (how they affect the company), and connect them to your recommendation.

A PESTLE with 20 bullet points and no prioritisation adds noise, not insight.`,
          },
        },
        {
          id: 't3-m1-l2',
          title: 'Industry Life Cycle',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Industry Life Cycle

Industries are not static. They are born, grow, mature, and sometimes decline. Where an industry sits in its life cycle completely changes the right strategy.

### The Four Stages

**Stage 1: Emerging**
- New technology or market is being created
- Few established players, high uncertainty
- Rapid innovation, business models still being tested
- Losses common (companies investing for future growth)

*Indian examples right now:* Green hydrogen, AI infrastructure, drone logistics

**Stage 2: Growth**
- Market size expanding rapidly
- New entrants flooding in, some consolidation beginning
- Pricing competitive as companies grab market share
- Profitability improving but still volatile

*Indian examples:* EV two-wheelers, quick commerce (10-minute delivery), healthtech

**Stage 3: Maturity**
- Growth slows to GDP-level rates
- Market dominated by a few large players
- Competition shifts from "grab share" to "hold share efficiently"
- Margins stable, focus on cost efficiency and brand loyalty

*Indian examples:* Traditional FMCG, banking, telecom

**Stage 4: Decline**
- Demand shrinking due to substitution or demographic shifts
- Players exiting or consolidating
- Winners are those who manage cost ruthlessly or find adjacent growth

*Indian examples:* Print newspapers, feature phones, video rental

---

### Why This Matters for Your Analysis

A growth-stage company shouldn't be evaluated by the same metrics as a mature one.

- A growth company *should* have high P/E ratios, high spending, possibly negative profits — that's expected. Penalising it for low margins misses the point.
- A mature company *should* have stable margins and high ROCE. If it doesn't, something is wrong.

When you receive a case, always establish: **Where is this industry in its life cycle?** Your entire strategy recommendation flows from this.

---

### The Disruption Wildcard

Industries can also be disrupted — a new technology jumps them backward to "emerging" again.

Traditional banking was mature → fintech (Razorpay, PhonePe, Zerodha) disrupted it → now competing in a growth-stage battle again.

Traditional auto was mature → EVs disrupted it → incumbents are fighting like growth-stage companies to stay relevant.`,
          },
        },
        {
          id: 't3-m1-l3',
          title: 'Regulatory & Policy Impact',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## Regulatory & Policy Impact

Regulations can make or break a company overnight. In Indian business, government policy is often the single most important external factor.

### Why Regulation Matters So Much in India

India has a uniquely active regulatory environment:
- FDI caps in certain sectors (defence, insurance)
- Sector-specific regulators (SEBI for markets, RBI for banking, TRAI for telecom, IRDAI for insurance)
- Government procurement policies (prefer Indian companies)
- PLI (Production Linked Incentive) schemes — game-changers for manufacturing

Understanding what's happening in regulation can explain why a company is growing or struggling as much as any financial analysis.

### Types of Regulatory Impact

**Enabling regulations** — create opportunities
- GST simplification opened up e-commerce logistics
- FAME II EV subsidies massively boosted EV demand
- UPI infrastructure enabled fintech businesses that previously couldn't exist

**Constraining regulations** — create costs or limits
- SEBI tightening F&O derivative rules → impacts trading platforms
- RBI caps on NBFC lending → constrains microlenders
- Stricter emission norms → expensive retooling for auto companies

**Disrupting regulations** — change competitive dynamics
- Jio entered telecom after spectrum policy changes
- Online gaming companies hit by 28% GST (2023) — several shut down
- Pharma price controls cap profitability of essential medicines

### How to Analyse Regulatory Impact in a Case

Ask three questions:

1. **What regulations currently affect this company?**
2. **Are any policy changes coming that could change the picture?** (check government budget announcements, sector-specific ministry news)
3. **Does the regulation advantage incumbents (existing players) or new entrants?**

Often, regulation is either a moat (protection for the existing player) or a headache they must manage. Your strategy recommendation should account for both.

---

**Example:** When analysing an Indian fintech case, check RBI's latest master circular for digital lending. Regulations change frequently and can invalidate entire business models.`,
          },
        },
        {
          id: 't3-m1-quiz',
          title: 'Module 3.1 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'Rising interest rates in India are making home loans more expensive. For a real estate company, this is best classified as which PESTLE factor?',
                options: ['Political', 'Economic', 'Social', 'Legal'],
                correctIndex: 1,
                explanation: 'Interest rates are set by the RBI as part of monetary policy — this is an Economic factor, affecting consumer borrowing costs and therefore housing demand.',
              },
              {
                id: 'q2',
                question: 'India\'s quick commerce (10-minute delivery) industry is growing 80% per year with new entrants entering every quarter and business models still evolving. Which life cycle stage is this?',
                options: ['Mature', 'Declining', 'Growth', 'Emerging'],
                correctIndex: 2,
                explanation: 'Rapid growth, multiple new entrants, evolving business models, and some profitability — this describes the Growth stage. Emerging would have fewer players and more uncertainty about whether the concept works.',
              },
              {
                id: 'q3',
                question: 'The government introduces a PLI (Production Linked Incentive) scheme for semiconductor manufacturing in India, offering ₹76,000 crore over 6 years to companies that produce chips domestically. For an Indian electronics manufacturer, this is:',
                options: [
                  'A constraining regulation — it increases compliance burden',
                  'An enabling regulation — it creates a major cost and growth advantage',
                  'A disrupting regulation — it eliminates smaller players',
                  'Irrelevant — subsidies don\'t affect business strategy',
                ],
                correctIndex: 1,
                explanation: 'PLI schemes directly incentivise production and reduce costs for participants. This is enabling — it creates an opportunity that can significantly change competitiveness and growth trajectories.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 't3-m2',
      title: 'Module 3.2 – Company-Level Analysis',
      description: 'Understand how a company\'s business model works, how it\'s structured, and what trends reveal.',
      lessons: [
        {
          id: 't3-m2-l1',
          title: 'Business Model Analysis',
          type: 'article',
          duration: '11 min',
          content: {
            article: `## Business Model Analysis

A business model explains how a company creates, delivers, and captures value. Two companies in the same industry can have completely different business models — and that changes everything about how you analyse them.

### The Tata Group as a Case Study

Tata is not one company — it's a conglomerate of over 100 companies spanning:
- Cars and commercial vehicles (Tata Motors)
- Steel (Tata Steel)
- IT services (TCS)
- Retail and consumer (Tata Cliq, Tanishq, Tata Consumer Products)
- Hospitality (Indian Hotels / Taj)
- Telecom (was Tata Communications, Tata Play)
- Defence, chemicals, power...

**Why does this matter?** Each business operates on a completely different model:

| Tata Company | Business Model | Revenue Driver | Key Cost |
|--------------|---------------|----------------|----------|
| TCS | B2B IT services | Long-term contracts | Talent (salaries) |
| Tata Motors | Manufacturing | Vehicle sales | Steel, components |
| Indian Hotels | Hospitality | Room occupancy | Property, staff |
| Tata Consumer | FMCG | Volume × price | Distribution, marketing |

### Analysing Any Business Model — Key Questions

**1. How does the company charge customers?**
- One-time sale (auto, real estate)
- Subscription / recurring (SaaS, streaming)
- Transaction fee (payments, e-commerce marketplace)
- Asset utilisation (hotels, airlines)

**2. Where is value created?**
- Is it in manufacturing? (cost and quality of production matter most)
- In distribution? (reach and relationships with retailers)
- In brand? (consumer trust and loyalty)
- In technology? (proprietary platform or algorithm)

**3. What are the unit economics?**
Per car sold / per hotel room / per transaction — is each unit profitable?

**4. What is the cost structure?**
Is it predominantly fixed costs (high operating leverage — bad in downturns) or variable (more resilient)?

### Reading the Business Model from the Annual Report

The MD&A section usually explains the business model clearly in the first few pages. Look for:
- How the company describes its "value proposition"
- How revenue is structured
- What management calls out as the key drivers of performance

---

**Practice:** Read the MD&A from TCS's latest annual report and the one from Tata Motors. Notice how completely different the language and priorities are — even within the same group.`,
          },
        },
        {
          id: 't3-m2-l2',
          title: 'Segment-wise Analysis',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## Segment-wise Analysis

A company's total revenue number often hides more than it reveals. The real insight is always in the segments.

### Why Segments Matter

Imagine a company with ₹80,000 crore in total revenue growing at 6%.

That sounds fine — until you look at segments:
- Segment A (domestic auto): ₹20,000 crore, growing 18% ← the future
- Segment B (commercial vehicles): ₹15,000 crore, flat
- Segment C (JLR luxury cars, UK): ₹45,000 crore, declining 5% ← the problem

The total looks mediocre because one large segment is dragging down strong performance elsewhere. Your entire analysis and recommendation changes once you see this.

### Tata Motors: Segment Breakdown

Tata Motors' key segments:

**1. Jaguar Land Rover (JLR) — UK-based luxury vehicles**
- The biggest revenue contributor (~55–60% of total revenue)
- Sells globally (UK, US, China, Europe)
- Cyclical — sensitive to global luxury demand and chip shortages
- Premium margins when performing well, major losses when not

**2. India Commercial Vehicles (CV)**
- Trucks, buses, construction vehicles
- Tied to infrastructure spending and economic activity
- Strong #1 market share in India

**3. India Passenger Vehicles (PV)**
- Cars sold in India (Nexon, Harrier, Punch, Safari)
- Led Tata's EV revolution in India with Nexon EV
- Growing rapidly, recovering from years of struggles

**4. Electric Vehicles**
- Increasingly a standalone focus
- Tata Motors holds ~70% of India's EV passenger car market (as of 2024)

### How to Do Segment Analysis

For each segment, ask:
1. **Size** — what % of total revenue does it represent?
2. **Growth** — is it growing faster or slower than the whole?
3. **Margin** — is this segment profitable? What's the margin vs. total company?
4. **Strategic importance** — is management investing here for the future?

Then compare across years: is the mix shifting? Is the high-margin segment growing?

---

**Key insight:** In cases, the problem is almost always in one specific segment. Don't spend equal time on all segments — find the one that matters and go deep.`,
          },
        },
        {
          id: 't3-m2-l3',
          title: 'Trend Analysis',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Trend Analysis: Reading 5-Year Patterns

A single year of data is a snapshot. Five years of data tells a story. And stories are what win case competitions.

### Why 5 Years?

One year can be an anomaly — a good harvest, a lucky contract, a COVID dip. Five years reveals the structural trajectory.

With 5 years of data you can see:
- Whether growth is accelerating, steady, or decelerating
- Whether margins are structurally improving or declining
- Whether the recent year is a recovery or an aberration

### The Three Patterns to Look For

**Pattern 1: Consistent Growth**
Revenue and margins growing steadily year-on-year. This is a healthy, well-managed business.

*Signal for cases: If this pattern suddenly breaks, something external or strategic changed. That's the case.*

**Pattern 2: Cyclicality**
Financials spike and dip in a regular pattern. Common in commodities, auto, real estate, and export businesses.

*Signal for cases: Where are we in the cycle? Is the company positioned for the downturn, or is it caught exposed?*

**Pattern 3: Structural Decline**
Revenue growing slowly, margins continuously shrinking, market share eroding year after year.

*Signal for cases: This is the most serious scenario. A one-off fix won't work — the business model itself needs rethinking.*

### Building a Trend Table

| Metric | FY20 | FY21 | FY22 | FY23 | FY24 | Trend |
|--------|------|------|------|------|------|-------|
| Revenue (₹cr) | 2,61,000 | 2,49,000 | 2,78,000 | 3,46,000 | 4,39,000 | ↑ Recovering & accelerating |
| Net Margin % | −5% | −8% | −3% | 1.2% | 3.8% | ↑ Turning profitable |
| Debt (₹cr) | 45,000 | 48,000 | 44,000 | 38,000 | 31,000 | ↓ Deleveraging |

Just this table tells a compelling story: a company that was in deep trouble 3 years ago is now recovering strongly — revenues up, margins positive, debt falling.

### Presenting Trend Analysis

Don't show a table of numbers. Show a chart — a line chart for continuous trends, a bar chart for year-by-year comparison.

Then write the title as the insight:
*"Revenue recovering strongly, margins turning positive — but debt remains elevated"*

That one sentence does more work than 3 slides of tables.`,
          },
        },
        {
          id: 't3-m2-quiz',
          title: 'Module 3.2 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'Tata Motors\' JLR segment contributes 58% of total revenue but is declining 8% YoY. The India EV segment contributes 12% of revenue but is growing 45% YoY. What should your analysis prioritise?',
                options: [
                  'JLR exclusively, since it\'s the majority of revenue',
                  'India EV exclusively, since it has the best growth',
                  'Both — diagnosing why JLR is declining AND understanding whether EV can offset that decline',
                  'Neither — look only at the total company figures',
                ],
                correctIndex: 2,
                explanation: 'A complete segment analysis requires understanding both the problem (JLR decline) and the opportunity (EV growth), and whether the opportunity is large enough to compensate. Both matter for a complete recommendation.',
              },
              {
                id: 'q2',
                question: 'A company\'s net margin has declined from 18% to 11% over 5 consecutive years, despite growing revenue. This is best described as:',
                options: [
                  'A cyclical pattern — margins will recover',
                  'A structural decline in profitability — the business model needs examination',
                  'Normal variation — margins fluctuate naturally',
                  'A positive sign — revenue growth is more important than margins',
                ],
                correctIndex: 1,
                explanation: 'Five consecutive years of margin decline despite revenue growth is a structural signal — costs are rising faster than revenue. This requires a strategic response, not just a cyclical wait.',
              },
              {
                id: 'q3',
                question: 'For a manufacturing company like Tata Steel, which cost structure is most likely — primarily fixed or primarily variable?',
                options: [
                  'Primarily variable — steel prices fluctuate with demand',
                  'Primarily fixed — large capital-intensive plants with high depreciation and maintenance costs',
                  'Equal fixed and variable',
                  'Cost structure doesn\'t apply to manufacturing',
                ],
                correctIndex: 1,
                explanation: 'Heavy manufacturing requires massive capital investment in plants and equipment. These fixed costs (depreciation, maintenance, minimum staffing) remain even if output falls — making manufacturing a high-operating-leverage business.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 't3-m3',
      title: 'Module 3.3 – Competitive Benchmarking',
      description: 'Compare your company against competitors to find where it leads, lags, and what it should do about it.',
      lessons: [
        {
          id: 't3-m3-l1',
          title: 'Comparing Competitors',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Comparing Competitors

You cannot understand a company in isolation. Performance is always relative — a 15% margin is excellent in some industries and terrible in others.

### Building a Competitor Comparison Table

The most efficient competitive analysis is a simple table comparing 3–5 companies on 6–8 metrics.

**Step 1: Select the right competitors**
- Same core customer (direct competitors)
- Same product category
- Occasionally include an international benchmark for context

**Step 2: Pick the right metrics**
Choose metrics that matter for *this specific industry*. For e-commerce: gross merchandise value, order frequency, return rates. For banking: Net Interest Margin, NPA ratio, CASA ratio. For FMCG: revenue growth, gross margin, distribution reach.

**Step 3: Collect and compare**
Use Screener.in, annual reports, and industry reports.

**Example: Indian Passenger Vehicle OEMs**

| Metric | Tata Motors (India PV) | Maruti Suzuki | Hyundai India |
|--------|------------------------|----------------|--------------|
| Revenue growth (3yr CAGR) | 28% | 15% | 18% |
| EV market share | ~70% | ~2% | ~5% |
| Gross Margin | 9% | 13% | 14% |
| ROCE | 12% | 24% | 22% |
| Brand perception (premium) | Improving | Mid-market | Mid-premium |

**Reading this table:** Tata is winning on EV and growth, but Maruti and Hyundai are more capital-efficient (higher ROCE) and have better margins. Tata's growth is coming at a cost — this is the tension your case analysis might need to explore.

### What to Do with the Comparison

Don't just show the table. Derive insight:
- Where is your company best-in-class? (That's the strength to build on)
- Where is it significantly behind? (That's either the problem or the opportunity)
- Is the gap widening or narrowing? (Trend matters as much as current position)`,
          },
        },
        {
          id: 't3-m3-l2',
          title: 'SWOT Analysis',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## SWOT Analysis

SWOT is one of the most used — and most misused — frameworks in business. Done right, it's a powerful synthesis tool. Done wrong, it's a list of obvious statements that adds nothing.

### The Framework

| | **Positive** | **Negative** |
|---|---|---|
| **Internal** | Strengths | Weaknesses |
| **External** | Opportunities | Threats |

**Strengths & Weaknesses** — factors the company controls (its capabilities, resources, brand, technology, team)

**Opportunities & Threats** — external factors the company cannot control but must respond to (market trends, competitor moves, regulation)

### What Makes a Good SWOT

❌ **Bad SWOT (vague):**
- Strength: "Strong brand"
- Weakness: "High costs"
- Opportunity: "Growing market"
- Threat: "Competition"

✅ **Good SWOT (specific, evidenced):**
- Strength: "70% EV market share in India with first-mover advantage in 3 consecutive product launches"
- Weakness: "JLR segment debt of ₹31,000 crore limits flexibility for India EV investment"
- Opportunity: "GoI FAME III scheme expected to provide ₹25,000 crore in EV subsidies by 2025"
- Threat: "BYD and MG entering India's EV space with products priced 15% below Nexon EV"

Notice: every point is specific, measurable where possible, and tied to a real fact.

### SWOT → Strategy

The real value of SWOT is in the **SO, ST, WO, WT strategies** it generates:

- **SO** (Strength + Opportunity): How to use your strengths to capture opportunities
- **ST** (Strength + Threat): How to use your strengths to defend against threats
- **WO** (Weakness + Opportunity): How to fix weaknesses to capture opportunities
- **WT** (Weakness + Threat): How to minimise weaknesses to reduce threat exposure

For a case recommendation, you're usually recommending an SO or WO strategy.`,
          },
        },
        {
          id: 't3-m3-l3',
          title: 'Gap Analysis',
          type: 'article',
          duration: '8 min',
          content: { article: `## Gap Analysis: What Others Do Better

Gap analysis identifies the distance between where a company is today and where it needs to be — and what's preventing it from getting there.

### The Gap Analysis Framework

**Step 1: Define the target state**
What would "winning" look like? This could be:
- Achieving a specific market share (e.g., 25%)
- Reaching a specific margin (e.g., 15% EBITDA)
- Matching the industry benchmark on a key metric
- Achieving a capability (e.g., own a direct-to-consumer channel)

**Step 2: Assess the current state**
Where are you today on that same metric or capability?

**Step 3: Identify the gap**
The gap = Target − Current. Be specific: "We need 8 percentage points of margin improvement" is more useful than "we need better margins."

**Step 4: Diagnose the root causes**
Why does the gap exist? This is where benchmarking against competitors becomes crucial.

*Example:* Competitor A has 15% gross margin vs. your 9%. Why?
- They manufacture in-house (you outsource) → cost difference
- Their product mix is higher-end (better pricing power)
- They have better supplier relationships (lower input costs)

Each of these root causes suggests a different strategy to close the gap.

### Gap Analysis in Cases

Cases often implicitly describe a gap: "Company X used to be the market leader but has lost 12 percentage points of market share over 5 years."

Your job:
1. Quantify the gap precisely
2. Benchmark against who took that share
3. Identify what those competitors do differently
4. Recommend how to close the gap (or pivot away from the competition entirely)

---

**Key principle:** A gap is only a problem if you want to close it. Sometimes the right recommendation is to *acknowledge* a gap and deliberately not chase it — instead, double down on where you're already winning.`,
          },
        },
        {
          id: 't3-m3-quiz',
          title: 'Module 3.3 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'In a SWOT analysis, "rising demand for sustainable packaging driven by Gen Z consumer preferences" belongs where?',
                options: ['Strength', 'Weakness', 'Opportunity', 'Threat'],
                correctIndex: 2,
                explanation: 'This is external (the company doesn\'t control consumer preferences) and positive (the company can benefit from it). External + positive = Opportunity.',
              },
              {
                id: 'q2',
                question: 'A competitor has 20% gross margins versus your company\'s 11%. Your benchmarking shows they outsource 30% less of their production. What does this suggest for gap analysis?',
                options: [
                  'The competitor has a better product',
                  'In-house production may offer a cost advantage worth exploring as a way to close the margin gap',
                  'The company should immediately cut prices to compete',
                  'Gross margin differences are normal and not worth analysing',
                ],
                correctIndex: 1,
                explanation: 'If benchmarking reveals a structural difference (like production strategy) that explains a margin gap, that\'s a concrete lead for a recommendation — investigate whether vertical integration (bringing production in-house) could close the gap.',
              },
              {
                id: 'q3',
                question: 'In a SWOT-derived strategy, "using our strong distribution network (strength) to capture rural markets that competitors haven\'t entered yet (opportunity)" is an example of which strategy type?',
                options: ['ST strategy', 'WO strategy', 'SO strategy', 'WT strategy'],
                correctIndex: 2,
                explanation: 'Using a Strength to capture an Opportunity is an SO (Strength-Opportunity) strategy — the most proactive and growth-oriented type.',
              },
            ],
          },
        },
      ],
    },
  ],
};
