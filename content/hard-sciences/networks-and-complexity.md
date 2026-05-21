---
title: "Networks and complexity: power laws, six degrees, and why everything looks similar"
subtopic: "Sciences · Complex Systems"
hook: "The hidden math that makes Twitter, your brain, and the Black Plague behave the same way."
order: 5
---

# Networks and complexity: power laws, six degrees, and why everything looks similar

## What this is and why it matters

A network is anything that can be drawn as dots and lines: cities connected by roads, neurons by synapses, people by Twitter follows, websites by hyperlinks, banks by loans, proteins by interactions, airports by flights. Complexity science is the field that noticed these wildly different networks behave in eerily similar ways. The same math that explains how a rumor spreads explains how a virus spreads, how a bank run cascades, and why Google's PageRank algorithm works. It matters because once you see the patterns, you stop being surprised by them. Power laws stop looking like anomalies and start looking like the default.

## Power laws: the math of "a few get most"

- A **power law** is a relationship where doubling the rank divides the size by a constant ratio. Plotted on log scales it's a straight line. Plotted on normal scales it looks like a sharp cliff: a few giant values on the left, a long tail of tiny ones stretching right.
- **Vilfredo Pareto** noticed in 1896 that **20% of Italian landowners owned 80% of the land**. He found the same ratio in income distributions across other countries. The "Pareto principle" or 80-20 rule is the rough shape of countless real-world distributions.
- **George Kingsley Zipf**, a Harvard linguist, found in 1935 that word frequencies in English follow a power law. The most common word ("the") is roughly twice as common as the second ("of"), three times as common as the third ("and"), and so on. **Zipf's law** also describes city sizes, company sizes, and earthquake magnitudes.
- **Where power laws show up.**
  - **Wealth.** The top 1% holds roughly 30-40% of US wealth, the top 0.1% holds about 15%, the top 0.01% holds about 5%. The distribution doesn't really have a "typical" rich person, it just keeps going.
  - **City sizes.** New York is roughly twice the size of Los Angeles, which is roughly twice the size of Chicago. The pattern holds remarkably well across countries and centuries.
  - **Earthquake magnitudes.** The Gutenberg-Richter law says there are 10x more magnitude-5 earthquakes than magnitude-6, and 10x more 6s than 7s.
  - **Internet traffic, book sales, YouTube views, startup outcomes.** All look like power laws. A handful of giant winners, a long tail of small ones, almost nothing in the middle.
- **Why this matters in practice.** If you assume things are normally distributed (the classic bell curve) when they're actually power-law distributed, you get blindsided. The "average" is meaningless. The standard deviation barely exists. The extreme events dominate the total. **Nassim Taleb's** *The Black Swan* is essentially a 400-page argument about people making this mistake.

## Six degrees of separation

- In 1967, **Stanley Milgram** (the same Yale psychologist behind the famous obedience experiments) ran the "small world" experiment. He gave 296 people in Nebraska and Boston a packet and asked them to get it to a specific stockbroker in Massachusetts by passing it only through people they knew on a first-name basis.
- The packets that made it through (about 64 of them) took an average of **5.5 hops**. Hence "six degrees of separation."
- The original study was small and methodologically shaky, but the result has held up across multiple replications. **Microsoft researchers** in 2007 analyzed 30 billion instant-message conversations and found an average path length of **6.6**. **Facebook** in 2016 reported the average degree of separation between any two users was about **3.5**, dropping over time as the network grew.
- The intuition is counterintuitive. If you know 150 people and each of them knows 150 people, two degrees out you're connected to 22,500 people, three degrees out to 3.4 million, and four degrees out you've already passed the whole population. The math works because networks branch fast.

## Small-world networks

- **Duncan Watts** and **Steven Strogatz** published a landmark 1998 *Nature* paper titled "Collective dynamics of small-world networks." They formalized why so many real networks have short path lengths despite local clustering.
- Their model: take a regular ring of nodes where each node only connects to its neighbors (high clustering, long paths). Then rewire a small fraction of edges randomly. Even a tiny amount of rewiring collapses average path length dramatically while clustering stays high.
- This is the structure of most real social networks. You have tight clusters of friends who all know each other, plus a few "weak ties" reaching across the world. **Mark Granovetter's** 1973 paper "The Strength of Weak Ties" had already argued sociologically that the loose connections (acquaintances, ex-colleagues) are the ones that bring you new information and job leads. Watts-Strogatz gave the math.
- The same structure appears in the brain (clusters of highly-connected neurons linked by long-range axons), the power grid, the C. elegans nervous system, and Hollywood collaborations (the "Bacon number" game).

## Scale-free networks and preferential attachment

- **Albert-László Barabási** and **Réka Albert** published their 1999 *Science* paper showing that many real-world networks are **scale-free**: the distribution of how many connections each node has follows a power law. A few hubs have huge numbers of connections, most nodes have few.
- The mechanism they proposed is **preferential attachment**: when new nodes join a network, they preferentially connect to nodes that already have many connections. The rich get richer. This generates power-law degree distributions automatically.
- **Where you see it.**
  - The web. A few sites (Google, Wikipedia, YouTube) are linked to by millions of pages. Most pages are linked to by almost no one.
  - Twitter/X. A few accounts have tens of millions of followers. Most have a few hundred.
  - Citations in scientific papers. A few classic papers get cited thousands of times. Most papers get cited zero times.
- **Why it matters.** Scale-free networks are robust against random failure (knock out a random node and you probably hit a low-degree one) but fragile against targeted attack on hubs (knock out the top 10 hubs and the network shatters). This is true for the internet, ecosystems, and financial systems alike. The 2008 financial crisis was partly a story about Lehman Brothers being a hub whose failure cascaded.

## Emergence: simple rules, complex behavior

- **Emergence** is the idea that complex behavior at a system level can arise from simple rules followed by individual components. The whole is doing something none of the parts understand.
- **Boids**, a 1986 model by **Craig Reynolds**, showed that lifelike flocking behavior comes from three simple rules each bird follows: stay close to neighbors, match their direction, don't crash into them. No leader, no global plan. The flock as an object doesn't exist anywhere in the rules.
- **Ant colonies** solve sophisticated optimization problems (shortest path to food, allocation of workers across tasks) with no central command. Each ant follows simple chemical signals. The "intelligence" lives in the system, not the ants.
- **Markets** are a canonical emergent system. No one sets the price of wheat. Millions of decentralized decisions produce a price that aggregates information no single participant has. **Friedrich Hayek's** 1945 paper "The Use of Knowledge in Society" is the classic statement.
- **Conway's Game of Life** (1970, John Conway) is a cellular automaton with rules so simple they fit in two sentences, yet it can simulate any computation a Turing machine can. Complexity has nothing to do with complicated rules. It has to do with iteration.

## Why this matters in practice

- **Epidemiology.** Disease spread depends on network structure. Power-law contact networks mean a few super-spreaders drive most transmission. COVID contact tracing was effectively network science applied to a virus.
- **Financial regulation.** After 2008, regulators started using network analysis to identify systemically important banks. The question wasn't just "how big is each bank" but "how connected, and to whom."
- **Cybersecurity.** Networks of interconnected systems mean an attack at one node can propagate. Critical infrastructure protection is largely about identifying the hubs.
- **Virality.** A post going viral isn't about the post being twice as good as average. It's about hitting a hub at the right moment and then propagating exponentially. Most content goes nowhere. The distribution of outcomes is a power law.
- **Startups.** Venture returns follow extreme power laws. About 6% of VC investments deliver more than 10x returns, and a tiny fraction (a handful per fund) drive the vast majority of returns. This is why VCs need to swing for the fences. The math forces it.
- **Why some products go vertical.** Network effects (each new user makes the product more valuable to existing users) create preferential attachment dynamics. Facebook, Uber, and Visa all rode this. Once a network hub forms, it's very hard to dislodge.

## What people get wrong

- **Treating everything as normally distributed.** Most interesting human phenomena aren't. The average customer, the average post, the average employee impact, the average startup outcome, all of these are misleading framings.
- **Believing in heroic individual causes for emergent phenomena.** "Twitter looks the way it does because Elon" is true at the margin but underrates that Twitter looked roughly the same shape before any individual ran it. Network dynamics drive structure.
- **Underestimating cascades.** Networks that look stable can flip suddenly. **Tipping points**, **phase transitions**, and **cascading failures** are all standard network phenomena. The 2008 crisis, the Arab Spring, and bank runs all have this character.

## What to carry away

- A few things get most of everything. The 80-20 rule isn't a rule of thumb, it's a deep property of how connected systems organize themselves.
- The world is smaller than it feels. About six handshakes between any two humans on Earth.
- Rich get richer is not just sociology, it's the mechanism by which hubs form in any growing network.
- Simple rules at the local level produce complex behavior at the system level. The system isn't smart, the iteration is.
- Once you see network structure, you stop being surprised by viral spread, market crashes, and outlier success. You start asking who the hubs are and what the cascades look like.
