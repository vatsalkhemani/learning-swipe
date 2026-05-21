---
title: "Game theory: the math of when other people's choices matter"
subtopic: "Sciences · Mathematics"
hook: "The branch of math that came out of poker, predicted the Cold War, and still runs your pricing page."
order: 2
---

# Game theory: the math of when other people's choices matter

## What is game theory and why it matters

Game theory is the study of decisions where your best move depends on what someone else does. If you're alone in a room choosing what to eat, that's just decision theory. If two of you are pricing a product against each other, or two countries are deciding whether to launch missiles, the answers depend on what the other party expects you to do, and what they expect you to expect of them. Game theory gives you a vocabulary and a math for that situation. It matters because almost every interesting human decision (negotiation, hiring, pricing, deterrence, dating, kids splitting candy) has this structure, and once you see it you stop confusing it with normal choice.

## How it started

- **John von Neumann** wrote the founding paper in 1928, proving the minimax theorem for two-player zero-sum games. He was 24. He was already changing several other fields at the same time.
- Von Neumann and the economist **Oskar Morgenstern** then wrote *Theory of Games and Economic Behavior* in 1944, a 600-page book that defined the field. They were colleagues at Princeton's Institute for Advanced Study. Morgenstern was the one who pushed for the economic application.
- The RAND Corporation in Santa Monica became the engine of postwar game theory. RAND consultants in the 1950s used it to model nuclear strategy. The Cold War concept of mutually assured destruction is game theory translated into policy.
- **John Nash**, a Princeton graduate student, generalized von Neumann's result to non-zero-sum games with multiple players in a 28-page 1950 PhD thesis. He won the Nobel for it in 1994. Russell Crowe later played him in *A Beautiful Mind* (2001), which dramatized his schizophrenia better than his actual math.
- The next wave came from **Thomas Schelling**, **Reinhard Selten**, **John Harsanyi**, **Robert Aumann**, and others through the 1960s-70s. Schelling's *The Strategy of Conflict* (1960) is the most readable game theory book ever written. He won the Nobel in 2005.

## The Prisoner's Dilemma

- Two suspects are arrested. Police separate them. Each is offered the same deal: if you confess and your partner stays silent, you walk and they get 10 years. If you both confess, you both get 5 years. If you both stay silent, you both get 1 year on a minor charge.
- The "logical" move for each prisoner, looking only at their own payoff, is to confess. No matter what the other does, confessing is better for me individually. Both reason this way. Both confess. Both get 5 years.
- If they could have somehow committed to staying silent, both would have gotten 1 year. They were collectively better off cooperating, but individual rationality drove them to the worse outcome.
- The dilemma was formalized by **Merrill Flood** and **Melvin Dresher** at RAND in 1950. The story is the work of **Albert Tucker**, who named it.
- This is the most important toy model in game theory because the same structure shows up everywhere. Arms races. Tragedy of the commons. Climate negotiations. Two businesses both cutting prices. Two countries both subsidizing exports. Each player acting rationally for themselves produces an outcome that's worse for both.

## Nash equilibrium

- **Nash equilibrium** is the point where no player wants to change their strategy given what everyone else is doing. Everyone is playing their best response to everyone else's best response.
- It is not necessarily the best outcome. The Prisoner's Dilemma's mutual-confess outcome is a Nash equilibrium and is bad for both. The equilibrium just means it is stable.
- Nash proved that every finite game has at least one equilibrium (possibly in mixed strategies, meaning randomized choices). This existence theorem is the foundation of modern microeconomics.
- The concept is useful and limited. Useful because it tells you where strategic situations will settle. Limited because real games can have many equilibria, players might not be perfectly rational, and people often don't know the full game they're in.

## Zero-sum, positive-sum, and what kind of game you're actually in

- **Zero-sum.** One person's gain is another's loss. Poker between two players is zero-sum after the rake. Chess is zero-sum. Most political fights feel zero-sum even when they aren't.
- **Positive-sum.** Both can win. Trade is the classic example: I have apples, you have oranges, we swap, both eat better. Most successful business is positive-sum because the alternative is the customer not buying.
- **Negative-sum.** Both lose. Lawsuits often are. Wars usually are. The Prisoner's Dilemma equilibrium is negative-sum compared to mutual cooperation.
- The deepest mistake in strategy is treating a positive-sum game like it's zero-sum, or the reverse. Most political polarization is people who could cooperate behaving as if they couldn't.

## Repeated games and tit-for-tat

- One-shot Prisoner's Dilemma says defect. Repeated Prisoner's Dilemma changes the math, because your partner can punish you next round.
- **Robert Axelrod** ran a famous tournament in 1980. He invited game theorists to submit computer strategies to play repeated Prisoner's Dilemma against each other.
- The winning strategy, submitted by **Anatol Rapoport**, was the shortest one entered: **tit-for-tat**. Cooperate on move one. After that, do whatever your opponent did last round.
- Tit-for-tat is nice (it never defects first), retaliatory (it punishes defection immediately), forgiving (one move of cooperation from the opponent and it goes back to cooperating), and clear (the opponent can figure out what it's doing). Axelrod's *The Evolution of Cooperation* (1984) is the book on this.
- The result reframes a lot of human institutions. Repeated interactions, public reputations, and clear consequences are what make cooperation possible. Cultures that work tend to embed those features.

## Signaling games

- **Michael Spence's** 1973 PhD work (he won the Nobel for it in 2001) modeled job markets as a signaling game. Workers know their own ability. Employers don't. Education works partly as a costly signal: only the able workers find it worth the time and money to get a degree, so degrees correlate with ability even if they don't teach anything useful.
- Signaling logic shows up everywhere: peacocks' tails, brand advertising, conspicuous consumption, university admissions, MBA rankings, expensive watches. The signal is credible because it would be too costly for a low-quality sender to fake.

## Where game theory shows up in the real world

- **Nuclear deterrence.** Schelling, RAND, and the Pentagon used game theory to design Cold War strategy. The doctrine of mutually assured destruction (MAD) is a deliberately engineered stable equilibrium.
- **Antitrust and pricing.** Two airlines deciding whether to cut fares are in a Prisoner's Dilemma. Cartels are attempts to coordinate the cooperative outcome. Antitrust law often prevents them from doing so.
- **Auction design.** **Paul Milgrom** and **Robert Wilson** won the 2020 Nobel for designing auctions, including the FCC spectrum auctions that allocated wireless frequencies. Game theory pays your phone bill.
- **Climate negotiations.** Every country would benefit if everyone cut emissions. Each individually benefits from not cutting while everyone else does. Prisoner's Dilemma at planetary scale.
- **Evolutionary biology.** **John Maynard Smith** brought game theory into biology in the 1970s with the concept of evolutionarily stable strategies. Why hawks and doves both persist in a population.

## What game theory gets wrong

- It assumes players are rational. Real people use heuristics, get emotional, get confused.
- It assumes players know the payoffs. Often the hardest part of a real decision is figuring out what the payoffs actually are.
- It assumes the game itself is well-defined. In life, half the strategic question is what game you're actually playing.

## What to carry away

- Game theory is the math of decisions where the other person's choice changes yours.
- The Prisoner's Dilemma is the most important toy model. Mutual defection is rational and bad. Repetition, reputation, and punishment are how humans escape it.
- Nash equilibrium tells you where things settle, not where they should settle.
- The two biggest practical moves: figure out whether your game is zero-sum or positive-sum, and figure out whether you're in a one-shot or repeated interaction. The wrong answer to either changes everything.
