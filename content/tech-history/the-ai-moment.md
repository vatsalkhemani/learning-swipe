---
title: "The AI moment: from deep learning to LLMs and what just happened"
subtopic: "Tech History · AI"
hook: "ChatGPT did not come out of nowhere. The lineage runs back through one stubborn researcher, two AI winters, and a 2017 paper called Attention Is All You Need."
order: 5
---

# The AI moment: from deep learning to LLMs and what just happened

## What the AI moment is and why it matters

The AI moment is the roughly two-year stretch starting in late 2022 when generative AI went from a research curiosity into a consumer product used by hundreds of millions of people. The technology underneath had been brewing for over a decade. What changed was that the models got large enough, the training methods got good enough, and someone finally wrapped it in a chat interface that a non-engineer could use. The moment matters because it is the first credible candidate for a new computing platform since mobile, and because the answer to whether it actually is a platform, or whether it is a very impressive feature that will be absorbed into the existing platforms, is the most important question in technology right now.

## The AI winters

- The field of artificial intelligence got its name at a 1956 workshop at Dartmouth. The early researchers believed human-level intelligence was a decade away. Then a decade more.
- The **first AI winter** ran from the mid-1970s into the early 1980s. Funding from DARPA and others dried up after early systems failed to deliver on their promises and a 1973 British report by James Lighthill panned the whole field.
- The **second AI winter** followed the collapse of the expert-systems boom in the late 1980s. Companies had spent fortunes building systems that encoded rules from human experts. They were brittle and expensive to maintain. By the early 1990s most AI labs had been shut down or renamed.
- For nearly two decades after that, "AI" was a dirty word in funding pitches. Researchers used softer labels like machine learning, statistical methods, pattern recognition.

## The deep learning revival

- A small group of researchers kept working on **neural networks** through the lean years. The most stubborn was **Geoffrey Hinton**, a British-Canadian researcher at the University of Toronto.
- Neural networks date back to the 1950s but had been unfashionable for decades because they did not scale and the training methods were not good enough. Hinton, Yann LeCun in France, and Yoshua Bengio in Montreal kept publishing.
- The unlock came in **2012** at the **ImageNet** competition, an annual contest in computer vision. **Alex Krizhevsky** and **Ilya Sutskever**, working with Hinton, submitted a deep convolutional neural network later called **AlexNet**.
- AlexNet won by a huge margin, cutting the error rate roughly in half. It did so by running on consumer **GPUs**, graphics cards designed for video games, which turned out to be perfectly suited to the math that neural networks need.
- AlexNet is the start of the modern AI era. Within a few years deep learning had taken over computer vision, speech recognition, and machine translation. Google bought Hinton's startup. Facebook hired LeCun. The field was suddenly hot again.

## The transformer

- The next big architectural unlock came in **June 2017**, when eight researchers at Google published a paper called **"Attention Is All You Need."** The authors were Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan Gomez, Lukasz Kaiser, and Illia Polosukhin.
- The paper introduced the **transformer**, a new neural network architecture designed for language. The clever part was the **attention mechanism**, which let the model decide which earlier words in a sentence mattered most for predicting the next word, instead of crunching everything in sequence.
- Transformers scaled better than older architectures. You could throw more data and more compute at them and they kept getting smarter, with no obvious ceiling.
- Almost every important AI model since then has been a transformer. GPT, Claude, Gemini, Llama, all of them.

## The GPT lineage

- **OpenAI** was founded in **December 2015** as a nonprofit research lab, funded by Elon Musk, Sam Altman, Reid Hoffman, and others, with a mission to build safe artificial general intelligence.
- **GPT-1** came out in **June 2018**. A 117-million parameter transformer trained on books. Modest results. Interesting direction.
- **GPT-2** came out in **February 2019**. Fifteen times larger. Coherent paragraphs of generated text. OpenAI initially refused to release the largest version, saying it was "too dangerous." This was partly a real safety concern and partly very effective marketing.
- **GPT-3** came out in **June 2020**. Another hundred times larger, with 175 billion parameters. This was a real moment inside the AI research community. The model could write essays, code, poetry, business emails, often convincingly. Released as a paid API. Most regular people had never heard of it.
- **ChatGPT** launched on **November 30, 2022**. It was GPT-3.5 wrapped in a chat interface. Free to use. Available to anyone with an internet connection.
- ChatGPT reached **100 million users in two months**, the fastest consumer product adoption in history. It is the moment AI stopped being a research story and became a public story.

## The new players and the open source response

- **Anthropic** was founded in **2021** by Dario Amodei, his sister Daniela Amodei, and a handful of other former OpenAI researchers who left over disagreements about safety and direction. Anthropic makes the **Claude** family of models and positions itself as the safety-focused frontier lab.
- **Google DeepMind**, formed by merging Google Brain and DeepMind in 2023, ships the **Gemini** models. Google had transformer technology in 2017 and watched OpenAI commercialize it first. The scramble continues.
- **Meta** took the unusual route of releasing model weights publicly. **Llama** in February 2023, then Llama 2, Llama 3, Llama 4. Open weights changed the game for academics, startups, and any country that did not want to depend on American hosted APIs.
- **xAI**, founded by Elon Musk in 2023, ships the Grok models. **Mistral** in France ships open-weight models. **DeepSeek** in China shocked the industry in January 2025 with a model that matched American frontier labs at a fraction of the training cost.

## What actually changed in 2022 to 2024

- **Scale**. Models got large enough that capabilities emerged that the researchers had not specifically designed for. The phrase of art is **emergent abilities**.
- **RLHF**, reinforcement learning from human feedback. OpenAI and Anthropic figured out how to fine-tune raw language models using human ratings, which made the outputs much more useful, much more polite, and much harder to trick into saying terrible things.
- **The chat interface**. This is the underrated piece. ChatGPT is the same underlying technology that researchers had been playing with for two years. The chat wrapper made it usable by anyone who could type.
- **Compute**. Nvidia's GPUs, especially the H100 and now Blackwell generations, became the most important hardware on Earth. The company's market cap went from $300 billion to over $3 trillion in two years.

## The current debate

- **Scaling laws**. The question whether making models bigger keeps making them smarter, or whether returns are flattening. The honest answer in mid-2026 is mixed. Pure scaling has slowed. New techniques like reasoning models and test-time compute are picking up the slack.
- **AGI timelines**. Predictions range from "within a few years" from frontier-lab CEOs to "not in our lifetimes" from skeptical researchers. The honest position is that nobody knows.
- **Alignment**. Can we build models that reliably do what humans want, especially as they get more capable. This is the central technical concern of Anthropic, parts of OpenAI, and a growing field.
- **Jobs**. Software engineering, customer support, legal research, design, copywriting, and parts of medicine are already changing. The question is whether AI augments workers, replaces them, or creates new categories of work.
- **Regulation**. The EU passed the **AI Act** in 2024, the first major comprehensive AI law. The US is patchwork. China is building a parallel ecosystem with state involvement. The geopolitics of AI compute and chips is now a central foreign-policy issue.

## Where AI fits in the longer arc

- The honest version of where we are is that AI is the **next candidate for a platform shift**, after the PC, the web, and mobile.
- It might be a real platform, in which case the next decade looks like a redistribution of power among the cloud and AI companies, and a wave of new applications.
- It might be a feature. A very important feature, baked into search and email and code editors, but ultimately a layer that the existing platforms absorb.
- Nobody knows which yet. The companies betting it is a new platform are spending hundreds of billions of dollars on training compute. If they are wrong, that money goes up in smoke. If they are right, the winners reshape the industry the way Apple and Google reshaped mobile.
- What is certain is that the years from 2022 to 2025 will be remembered the way the years 1993 to 1996 are remembered for the web. The technology was older than people realized. The moment looked sudden but was not. And the second-order effects took another decade to fully arrive.
