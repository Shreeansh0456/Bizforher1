import { Course } from '../courses';

export const track5: Course = {
  id: 'track-5-strategy',
  title: 'Solution Design & Strategy',
  tagline: 'Build solutions that are powerful, realistic, and win-worthy',
  description: 'Analysis without a solution is just a complaint. This track teaches you how to design short-term fixes, long-term strategies, and implementation plans that judges believe in.',
  category: 'Track 5',
  level: 'Intermediate–Advanced',
  color: '#8b5cf6',
  icon: '📒',
  units: [
    {
      id: 't5-m1',
      title: 'Module 5.1 – Short-Term Strategy',
      description: 'Design immediate, actionable fixes for crisis situations, cost problems, and revenue challenges.',
      lessons: [
        {
          id: 't5-m1-l1',
          title: 'Crisis Management',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## Crisis Management

When a company is in crisis, the rules of strategy change. Speed matters more than perfection, cash matters more than growth, and survival matters more than transformation.

### What Counts as a Crisis?

A business crisis exists when one or more of the following is true:
- Cash runway is less than 12 months
- A major product recall or safety failure is hurting brand trust
- A key revenue stream collapsed suddenly (e.g., pandemic, regulatory ban)
- Debt covenants are about to be breached

**The fundamental principle:** In a crisis, you must stabilise first before you can grow.

### The 3-Phase Crisis Response

**Phase 1: Stop the Bleeding (0–90 days)**
- Identify the immediate cash burn rate and runway
- Cut all non-essential spending (marketing, travel, non-critical headcount)
- Preserve core capabilities — the people and systems that generate revenue
- Communicate honestly with key stakeholders (lenders, key customers, board)

**Phase 2: Stabilise (3–12 months)**
- Renegotiate supplier and landlord terms where possible
- Focus all commercial energy on the most profitable customers
- Raise emergency funding if needed (rights issue, asset sale, loan)
- Rebuild confidence internally and externally

**Phase 3: Rebuild (12 months+)**
- Once stable, begin strategic investments
- Address root causes of the crisis
- Relaunch growth initiatives with stronger foundations

### The Prioritisation Principle in Crisis

Not all costs are equal. When cutting costs in a crisis, protect:
- Revenue-generating salespeople
- Core product/service delivery
- Customer-facing quality

Cut first:
- Corporate overhead
- Speculative new initiatives
- Marketing for non-core products

### Applying to Cases

If a case company is in crisis, judges expect your short-term recommendation to explicitly address the cash and stability situation before any growth strategy. A team that jumps to "launch into 3 new markets" when the company has 6 months of cash will lose credibility instantly.`,
          },
        },
        {
          id: 't5-m1-l2',
          title: 'Cost Optimisation',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## Cost Optimisation

Cost reduction is not the same as cost-cutting. Done right, optimisation improves efficiency without sacrificing capability. Done wrong, it destroys value by cutting the things that generate revenue.

### Types of Costs

**Fixed Costs** — exist regardless of output (rent, executive salaries, depreciation)
**Variable Costs** — scale with output (raw materials, delivery costs, transaction fees)
**Semi-variable** — partly fixed, partly variable (utilities, some labour)

**Operating Leverage:** A company with mostly fixed costs benefits greatly from revenue growth (profits scale fast) but suffers in downturns (costs don't fall with revenue).

### The Cost Optimisation Toolkit

**1. Zero-Based Budgeting (ZBB)**
Every budget line must be justified from zero each year — not just incremented from last year. Removes zombie spending (costs no one questions because they've always been there).

**2. Procurement Optimisation**
- Consolidate suppliers to gain volume discounts
- Renegotiate contracts, especially multi-year deals
- Explore substitute materials (e.g., Indian-sourced vs. imported components)

**3. Process Efficiency**
- Identify where the most time/money is wasted in operations
- Automate repetitive tasks (e.g., invoicing, inventory tracking)
- Reduce handoff points in supply chains

**4. Footprint Rationalisation**
- Consolidate underutilised offices or warehouses
- Exit unprofitable geographic markets or product lines

### The "Sacred Cows" Trap

Every company has costs that are politically untouchable despite being economically unjustifiable — the CEO's pet project, the legacy office in an expensive city, the sponsorship deal with a cricket team.

In a case, if you identify one of these as a significant cost, you can mention it — but frame the recommendation respectfully: *"We recommend a strategic review of the ₹50 crore annual [X] expenditure to assess its commercial return."*

### What Not to Cut

- R&D for the next-generation product (if the company's future depends on it)
- Customer service capacity (cutting this destroys retention)
- Brand equity investments (short-term gain, long-term pain)
- Key technical talent (almost impossible to replace quickly)`,
          },
        },
        {
          id: 't5-m1-l3',
          title: 'Marketing & Pricing Fixes',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Marketing & Pricing Fixes

When revenue is under pressure, the temptation is to cut prices or increase discounts. This is almost always the wrong first move. Here's how to think about short-term marketing and pricing tactics properly.

### The Pricing Trap

Discounting is addictive. It produces immediate, visible results (sales spike) and creates customer dependency (they only buy when there's a deal).

**The discount death spiral:**
1. Revenue slips → cut prices to stimulate demand
2. Customers start expecting discounts and wait for them
3. Full-price sales decline further
4. Discount deeper to compensate
5. Margins collapse → the business is unprofitable

Companies like Café Coffee Day and several Indian e-commerce players have suffered this spiral.

**The alternative: Value Communication**
Before cutting prices, ask: *"Do customers understand what they're paying for?"*
Often, the problem isn't price — it's perceived value. Customers would pay the current price if they understood the product better. Improving communication (packaging, education, proof points) can restore sales without margin destruction.

### Short-Term Marketing Fixes (That Actually Work)

**1. Reactivate lapsed customers**
Customers who bought before but stopped are 5× cheaper to win back than new customers. A targeted campaign ("We miss you — here's ₹100 off your next order") is highly efficient.

**2. Increase frequency among existing customers**
Getting current customers to buy once more per month is easier than finding new customers. Loyalty programmes, bundles, and subscription options all help.

**3. Focus on highest-margin products**
Shift marketing budget toward products with the best contribution margin. Don't spend equally on all products.

**4. Channel optimisation**
Some sales channels are more profitable than others. Direct (own app/website) is typically higher margin than marketplace (Amazon, Flipkart, Swiggy). Shift mix toward direct channels.

### Pricing Strategies for Case Recommendations

| Strategy | When to Use | Example |
|----------|-------------|---------|
| **Price increase** | Strong brand, low price sensitivity | Luxury, B2B services |
| **Value-based pricing** | When customers significantly underestimate the product's value | SaaS, insurance |
| **Bundle pricing** | When individual product price is resisted but bundle feels valuable | Telecom plans |
| **Freemium** | When trial converts to paid; low cost to serve free tier | Apps, SaaS |`,
          },
        },
        {
          id: 't5-m1-quiz',
          title: 'Module 5.1 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'A company has 7 months of cash remaining and is losing money. Your case requires a short-term recommendation. What should come first?',
                options: [
                  'Launch a new product to generate revenue',
                  'Acquire a competitor to gain market share',
                  'Stabilise cash: cut non-essential costs, protect revenue-generating capacity, and explore emergency financing',
                  'Increase marketing spend to boost sales',
                ],
                correctIndex: 2,
                explanation: 'With 7 months of cash, survival takes priority over growth. Stabilising cash runway is the prerequisite for any other strategy. Launching products or acquisitions without cash to execute them is not viable.',
              },
              {
                id: 'q2',
                question: 'A food delivery app is losing users. The CMO wants to offer a 40% discount to win them back. Why might this be dangerous?',
                options: [
                  'Discounts are illegal in India',
                  'Customers won\'t respond to discounts in the food delivery space',
                  'Frequent discounting trains customers to only buy at discounted prices, destroying long-term margin',
                  'A 40% discount is not large enough to matter',
                ],
                correctIndex: 2,
                explanation: 'Discount dependency is a real risk. Customers start expecting discounts and won\'t buy at full price. Several Indian e-commerce companies collapsed because they created this dynamic at scale. The fix should address why users left, not just bribe them back.',
              },
              {
                id: 'q3',
                question: 'A company has ₹800 crore annual marketing budget split equally between Product A (5% gross margin) and Product B (42% gross margin). What should they consider?',
                options: [
                  'Cut total marketing spend by 50%',
                  'Shift budget allocation significantly toward Product B, which delivers much more margin per rupee spent',
                  'Increase Product A\'s price until its margin matches Product B',
                  'Discontinue Product A immediately',
                ],
                correctIndex: 1,
                explanation: 'Spending equally on products with very different margins is inefficient. Rebalancing toward the high-margin product generates better returns without increasing total spend. This is classic portfolio prioritisation.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 't5-m2',
      title: 'Module 5.2 – Long-Term Strategy',
      description: 'Design sustainable competitive strategies through innovation, expansion, and transformation.',
      lessons: [
        {
          id: 't5-m2-l1',
          title: 'Innovation & R&D Strategy',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## Innovation & R&D Strategy

Innovation is how companies stay relevant. But not all innovation is equal — and in a case competition, recommending "innovate more" without specifics is meaningless.

### Types of Innovation

**Incremental Innovation** — improving what already exists
- Better battery range for an existing EV
- Faster delivery times for an existing logistics business
- Lower pricing through process efficiency

Lower risk, lower reward. Keeps you competitive but rarely creates new markets.

**Adjacent Innovation** — expanding into new but related areas
- A food delivery app expanding to grocery delivery
- A bank launching an insurance product
- A hardware company launching a software subscription

Moderate risk. Leverages existing capabilities and customer relationships.

**Disruptive/Radical Innovation** — creating entirely new categories
- Jio disrupting Indian telecom with free data
- Zerodha disrupting brokerage with zero-commission trading
- OYO disrupting budget hospitality with a tech-first approach

High risk, high reward. Usually requires significant capital and a long time horizon.

### The Innovation Portfolio

Smart companies don't bet everything on disruptive innovation. They balance:

- **70%** on improving the core business (incremental)
- **20%** on adjacent opportunities
- **10%** on transformational bets

For a case, if the company is struggling financially, a 10% bet on disruption might be the right long-term move — but you'd still recommend 70% on fixing the core first.

### R&D Investment as a Competitive Signal

R&D spending as a % of revenue is publicly available. Compare the company to competitors and industry benchmarks.

If a pharma company spends 3% of revenue on R&D while competitors spend 8–12%, their pipeline of future drugs is weak — a structural long-term risk.

If a tech company suddenly cuts R&D, it may boost short-term profits but signals a shrinking competitive moat.

### Making Innovation Concrete in a Case

Don't just say "invest in R&D." Be specific:
*"We recommend allocating ₹300 crore over 3 years to develop a mid-range EV priced at ₹12–15 lakh, targeting the segment where Tata currently has no product and where BYD is about to enter."*

Specific product, specific budget, specific competitive rationale.`,
          },
        },
        {
          id: 't5-m2-l2',
          title: 'Expansion Strategy',
          type: 'article',
          duration: '10 min',
          content: {
            article: `## Expansion Strategy

Growth through expansion is one of the most common long-term strategies in case competitions. But not all expansion is smart — and judges will probe whether yours actually makes sense.

### Forms of Expansion

**Geographic Expansion**
Enter new markets — Tier 2/3 cities in India, new international markets.

*When to recommend:* Core market is saturating, brand translates well to new geography, infrastructure can support it.

*When NOT to recommend:* Core business is struggling (fix home first), the new market is very different culturally or operationally, cash is limited.

**Product/Service Expansion**
Add new offerings to the existing customer base.

*Classic framework: Ansoff Matrix*

| | **Existing Products** | **New Products** |
|---|---|---|
| **Existing Markets** | Market Penetration (lowest risk) | Product Development |
| **New Markets** | Market Development | Diversification (highest risk) |

**Distribution Expansion**
Reach new customers through new channels without changing your product.

*Example: A D2C brand listing on Amazon to access new customers, while keeping its own website for loyal repeat buyers.*

### The India-Specific Expansion Opportunity

For Indian cases, Tier 2 and Tier 3 market expansion is almost always worth analysing:

- India's top 8 cities account for ~35% of consumption. The other 65% is in smaller cities and rural areas.
- Rising incomes, smartphone penetration, and improving logistics are making Tier 2/3 viable for categories that previously couldn't reach them.
- Many Indian companies still have low penetration in these markets.

**Standard analysis questions:**
1. What is the market size in Tier 2/3?
2. What does it cost to distribute there? (logistics, last-mile)
3. Do customers there have different price sensitivity or product needs?
4. What is the competitive intensity (is it lower than metros)?

### Expansion Pitfalls in Cases

- **Over-estimating speed** — expansion takes 2–3× longer and costs 2–3× more than planned
- **Ignoring local competition** — regional players often have structural advantages in their markets
- **Expanding from weakness** — a company with broken unit economics at home will not fix them by going to new markets`,
          },
        },
        {
          id: 't5-m2-l3',
          title: 'Digital Transformation',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Digital Transformation

Every case seems to end with "and they should digitally transform." That's because it's often right — but it means something specific, not just "use more technology."

### What Digital Transformation Actually Means

Digital transformation is not about buying software. It's about fundamentally changing how a company operates and delivers value using digital technology.

**Three layers:**

**1. Customer Experience (CX) Transformation**
- Moving from physical to digital customer touchpoints
- Building apps, digital service channels, personalisation
- *Example: HDFC Bank moving loan applications from branch visits to app approvals in 10 minutes*

**2. Operational Transformation**
- Using technology to improve internal processes
- Supply chain automation, demand forecasting, predictive maintenance
- *Example: BigBasket using AI for demand prediction to reduce food waste by 30%*

**3. Business Model Transformation**
- Using technology to create entirely new revenue streams
- *Example: Jio platforms monetising data; Maruti selling connected car subscriptions*

### The Digital Transformation Framework for Cases

When recommending digital transformation:

**Step 1: Identify the pain point**
Don't start with the technology — start with the customer or operational problem.

**Step 2: Select the technology solution**
What specific technology solves that problem? (AI, automation, mobile app, cloud migration, analytics)

**Step 3: Quantify the impact**
Revenue uplift? Cost reduction? Time saving? Be specific.

**Step 4: Address the challenges**
Technology alone doesn't transform. You need: change management, talent, data infrastructure, and executive commitment.

### Common Mistakes in Cases

❌ "The company should use AI." (Not specific)

✅ "Deploying machine learning for demand forecasting in the supply chain can reduce inventory holding costs by 15–20%, based on comparable implementations at D-Mart and Reliance Retail."

Always name the specific technology, specific application, and cite a comparable example.`,
          },
        },
        {
          id: 't5-m2-quiz',
          title: 'Module 5.2 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'A traditional textile company wants to sell its existing fabric products to consumers in Southeast Asia for the first time. According to the Ansoff Matrix, what strategy is this?',
                options: [
                  'Market Penetration',
                  'Product Development',
                  'Market Development',
                  'Diversification',
                ],
                correctIndex: 2,
                explanation: 'Existing product + new market = Market Development. The company isn\'t changing what it sells, but it\'s selling to a new geographic market.',
              },
              {
                id: 'q2',
                question: 'A pharmaceutical company spends 4% of revenue on R&D. Competitors average 11%. What does this suggest for a long-term strategy recommendation?',
                options: [
                  'The company is efficient — lower R&D spend means better margins',
                  'The company\'s future product pipeline is likely thin; increasing R&D investment is a strategic priority to avoid long-term revenue decline',
                  'R&D spending doesn\'t correlate with future performance in pharma',
                  'The company should acquire competitors instead of doing its own R&D',
                ],
                correctIndex: 1,
                explanation: 'In pharma, today\'s R&D is tomorrow\'s revenue. A company spending 4% vs. an industry average of 11% has a structurally weaker pipeline and faces long-term revenue risk when current drugs go off-patent.',
              },
              {
                id: 'q3',
                question: 'What is the key difference between recommending "digital transformation" weakly vs. strongly in a case?',
                options: [
                  'Strong recommendations use more technical jargon',
                  'Weak: "use AI." Strong: specific technology + specific application + quantified impact + implementation challenges acknowledged',
                  'Strong recommendations always include a higher budget',
                  'There is no meaningful difference — all digital transformation recommendations are similar',
                ],
                correctIndex: 1,
                explanation: 'Judges dismiss "use more technology" because it\'s not actionable. A strong digital transformation recommendation names what technology, applied where, with what expected outcome, and acknowledges what makes it hard to implement.',
              },
            ],
          },
        },
      ],
    },
    {
      id: 't5-m3',
      title: 'Module 5.3 – Implementation Planning',
      description: 'Turn your recommendation into an actionable plan with timelines, budgets, and risk mitigation.',
      lessons: [
        {
          id: 't5-m3-l1',
          title: 'Roadmaps',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Roadmaps: Making Your Strategy Real

A recommendation without an implementation plan is just an opinion. Judges want to see that your strategy can actually be executed.

### What a Roadmap Does

A roadmap converts a strategic recommendation into a sequence of actions across time, showing:
- **What** needs to happen (initiatives and milestones)
- **When** it happens (timeline)
- **Who** is responsible (ownership)
- **What success looks like** (KPIs for each phase)

### The 3-Phase Structure

Most case roadmaps follow a short/medium/long-term structure:

**Phase 1: Quick Wins (0–6 months)**
Actions that can be done fast, low cost, and deliver visible results.

*Examples:* Launch a customer reactivation campaign, reduce overhead through policy changes, fix the most-complained-about product bug, renegotiate one major supplier contract.

**Phase 2: Core Execution (6–18 months)**
The main strategic initiatives that require investment and sustained effort.

*Examples:* Build a new distribution channel, develop a new product variant, enter 3 new Tier 2 cities, implement a CRM system.

**Phase 3: Scale & Sustain (18 months+)**
Building on early success, expanding, and embedding the new capabilities.

*Examples:* National rollout, international expansion, franchise model, platform monetisation.

### Making Milestones Measurable

Each phase should have KPIs (Key Performance Indicators) — specific, measurable targets that tell you whether you're on track.

❌ "Improve customer satisfaction"
✅ "Increase NPS from +15 to +35 by Q3 FY26"

❌ "Grow revenue"
✅ "Achieve ₹120 crore revenue in the new Tier 2 segment by FY26 (current: ₹0)"

### The 30-Second Roadmap for a Presentation

If you only have one roadmap slide, make it a visual timeline:
- Horizontal axis = time (Q1 FY25 → Q4 FY26)
- Three swim lanes = Phase 1, 2, 3
- Key milestones as markers
- KPIs annotated on the milestones

Judges should understand the full plan in 10 seconds of looking at this slide.`,
          },
        },
        {
          id: 't5-m3-l2',
          title: 'Budgeting Your Strategy',
          type: 'article',
          duration: '9 min',
          content: {
            article: `## Budgeting Your Strategy

A strategy without a budget is fantasy. Every recommendation must be grounded in financial reality — how much will it cost, where does the money come from, and what return does it generate?

### The Three Budget Questions

**1. How much does this cost?**
Break down the investment required:
- Capital expenditure (buying equipment, building facilities)
- Operational expenditure (marketing spend, additional headcount, technology licences)
- One-time implementation costs (consulting, transition costs)

**2. Where does the money come from?**
Funding sources:
- **Internal cash generation** — from existing profitable operations
- **Debt** — bank loans, bonds (increases financial risk)
- **Equity** — raising from investors or promoters (dilutes ownership)
- **Asset sales** — selling non-core assets to fund strategic ones

**3. What return does it generate?**
This is where many teams fall short. You must project:
- Revenue uplift expected (with assumptions stated clearly)
- Cost savings expected
- Payback period — how long to recover the investment?
- NPV/ROI if you can calculate it

### The Feasibility Check

Before recommending a ₹500 crore investment:
1. Does the company have ₹500 crore in free cash flow or available credit?
2. If not, how would they raise it?
3. Is the projected return worth the cost and risk?

A recommendation that ignores financial feasibility is disqualifying in a competition. Always check: *"Can this company actually afford to do what I'm recommending?"*

### Ballpark Estimation for Cases

You often won't have exact cost data. Use industry benchmarks and make explicit assumptions:

*"Based on industry norms for tier-2 retail expansion (₹2–3 crore per store for fit-out and working capital), entering 50 Tier 2 stores requires approximately ₹100–150 crore investment, recoverable in 24 months assuming revenue per store matches the company's current city-average."*

Judges don't expect perfect numbers. They expect sound reasoning.`,
          },
        },
        {
          id: 't5-m3-l3',
          title: 'Risk Management',
          type: 'article',
          duration: '8 min',
          content: {
            article: `## Risk Management

Every strategy carries risks. Teams that acknowledge risks and present mitigation plans are far more credible than teams that present a risk-free utopia.

### Why Risk Matters in Cases

Judges will often ask: *"What if your key assumption is wrong?"* or *"What's the biggest risk to this plan?"*

If you haven't thought about it, you'll be caught off guard. If you have, you'll answer confidently and impress.

### The Risk Register

For every major recommendation, identify:

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| EV demand grows slower than projected | Medium | High | Phase investment — commit to Phase 2 only after Phase 1 KPIs are met |
| Competitor undercuts our price | High | Medium | Build switching costs through loyalty programme; focus on service quality differentiation |
| Execution fails in Tier 2 due to logistics gaps | Medium | Medium | Pilot in 3 cities before scaling |
| Key talent leaves during transition | Low | High | Retention packages for critical roles during first 12 months |

**Probability:** Low / Medium / High
**Impact:** Low / Medium / High
**Mitigation:** What specifically reduces the risk?

### Types of Risk to Consider

**Market Risk:** Demand doesn't grow as projected, competition responds aggressively
**Execution Risk:** Internal capability gaps, project overruns, culture resistance
**Financial Risk:** Funding not available, costs higher than estimated
**Regulatory Risk:** Policy changes that affect the strategy
**Reputational Risk:** Strategy causes brand damage if it fails publicly

### The Contingency Plan

For your top 1–2 risks, have a contingency:

*"If our Tier 2 expansion does not hit ₹50 crore revenue by end of Year 1 (trigger), we will pause new city openings and double down on optimising the pilot 3 cities before proceeding (response)."*

A trigger-based contingency shows judges that you've thought through execution, not just planning.`,
          },
        },
        {
          id: 't5-m3-quiz',
          title: 'Module 5.3 Quiz',
          type: 'quiz',
          duration: '5 min',
          content: {
            questions: [
              {
                id: 'q1',
                question: 'In a 3-phase implementation roadmap, what should Phase 1 (0–6 months) typically contain?',
                options: [
                  'The largest, most expensive strategic initiatives',
                  'Quick wins — low-cost, fast actions that show early results and build momentum',
                  'International expansion and M&A activities',
                  'Only monitoring and measurement, no actions',
                ],
                correctIndex: 1,
                explanation: 'Phase 1 should establish momentum with quick wins — visible results that demonstrate the strategy is working and build organisational confidence for the harder Phase 2 investments.',
              },
              {
                id: 'q2',
                question: 'You recommend a ₹400 crore investment but the company\'s total free cash flow last year was ₹150 crore and they have high debt. What must you address in your recommendation?',
                options: [
                  'Nothing — ₹400 crore is reasonable for any large company',
                  'How the company will fund this gap — through debt, equity raise, asset sale, or phasing the investment over multiple years',
                  'Simply revise the recommendation down to ₹150 crore',
                  'Only acknowledge the gap in the risks section',
                ],
                correctIndex: 1,
                explanation: 'Financial feasibility is mandatory. If the investment exceeds available cash flow, you must propose how it gets funded — otherwise the recommendation is not actionable and judges will flag it.',
              },
              {
                id: 'q3',
                question: 'A risk "regulatory change banning single-use plastics" has High Impact on a packaging company\'s core product but Low Probability in the next 3 years. What is the appropriate response?',
                options: [
                  'Ignore it — low probability means it\'s not worth addressing',
                  'Shut down the core product line immediately',
                  'Classify as a Strategic risk and begin R&D into alternative packaging now, while monitoring regulatory developments',
                  'File a petition against the regulation',
                ],
                correctIndex: 2,
                explanation: 'High Impact + Low Probability = Strategic risk. The right response is not to panic, but to start preparing. Investing in alternative materials now is cheap insurance against a high-impact event.',
              },
            ],
          },
        },
      ],
    },
  ],
};
