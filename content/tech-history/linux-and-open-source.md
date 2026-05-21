---
title: "How Linux and open source happened"
subtopic: "Tech History · Open source"
hook: "A Finnish student's hobby kernel in 1991 ended up running 96% of the world's web servers."
order: 7
---

# How Linux and open source happened

## What Linux and open source are and why they matter

**Linux** is a free, open source operating system kernel that started as the side project of a 21-year-old computer science student in Helsinki in 1991. **Open source** is the broader movement and licensing model that says software source code should be available, modifiable, and redistributable. Together they did something nobody at the time thought was possible: they out-engineered the most powerful commercial software companies on the planet by being free, distributed, and modular. Today Linux runs roughly 96% of the top 1 million web servers, every one of the top 500 supercomputers, every Android phone, the Steam Deck, most cloud infrastructure, and a huge slice of embedded and IoT devices. The reason most of the modern internet exists at all is that this stack was free.

## How it started

- **August 25, 1991.** **Linus Torvalds**, then a 21-year-old CS student at the University of Helsinki, posted on the **comp.os.minix** newsgroup: "I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu)." He'd been inspired by **Minix** (a teaching OS built by **Andrew Tanenbaum**) but rebuilt the kernel from scratch.
- He licensed it under the GNU GPL in 1992. That single decision made the rest of the story possible.
- The kernel needed a userspace. The **GNU Project**, started by **Richard Stallman** at MIT in 1983, had been building one for years (compilers, shell, utilities, libraries) but had no working kernel. Linux + GNU became the complete OS often called GNU/Linux.

## The philosophy underneath

- **Richard Stallman's "free software" (1983 onward).** Free as in freedom, not free as in price. Four freedoms: run, study, modify, redistribute. The **GNU General Public License (GPL)** in 1989 made this enforceable. Its "copyleft" clause requires that any modifications stay open. This is the single most important legal hack in software history.
- **Eric Raymond's "The Cathedral and the Bazaar" (1997).** A famous essay arguing that the chaotic-looking "bazaar" model of Linux (many contributors, fast releases, public bug reports) actually beat the careful "cathedral" model of traditional software development. Made the economics legible to executives.
- **Why it worked.** Distributed contributors meant the work scaled without a hiring budget. Modular design meant pieces could improve independently. No single owner meant no single point of failure. And the license meant your contribution couldn't be quietly captured by a competitor.

## The pieces of the early web ran on this

- **Apache HTTP Server (1995).** A patched version of an earlier server (the name was reportedly a pun on "a patchy server"). By 1996 it was serving more websites than Microsoft's IIS.
- **MySQL (1995).** The open source relational database. Powered most early dynamic websites.
- **PHP (1995).** A scripting language for building dynamic web pages, created by **Rasmus Lerdorf**.
- **The LAMP stack.** Linux + Apache + MySQL + PHP. The free-software bundle that ran most of the early commercial web, from blogs to e-commerce to Wikipedia.

## The shift from outsider to default

- **2000: IBM bets $1 billion on Linux.** Famous full-page ads, internal commitment, contributions back upstream. The signal that enterprise had crossed over.
- **Google's infrastructure.** Built from day one on Linux. Their entire search-and-ads empire ran on commodity hardware running open source.
- **Android.** Started as a 2003 startup, acquired by **Google** in 2005 for around $50 million (often called one of the best acquisitions in tech history), launched in 2008. The Linux kernel sits under every Android phone. Android now runs about 70% of the world's smartphones.
- **Cloud.** AWS, Azure, GCP all run mostly on Linux. The cloud era is a Linux era.

## What Microsoft did (the part nobody saw coming)

- For years Microsoft's CEO **Steve Ballmer** called Linux "a cancer" (2001). The company treated open source as a strategic threat.
- Then **Satya Nadella** took over in 2014. The pivot was total.
- Microsoft now ships **Azure Linux**, its own distribution. It built **WSL** (Windows Subsystem for Linux) into Windows. It acquired **GitHub** in 2018 for $7.5 billion. It became one of the largest open source contributors in the world.
- The historical adversary became one of the model's biggest patrons. The shift signaled that open source had simply won the enterprise default position.

## Where Linux runs now

- **Web servers.** ~96% of the top 1 million sites.
- **Supercomputers.** 100% of the top 500.
- **Smartphones.** Every Android device. Around 70% of global smartphone share.
- **Embedded systems.** Routers, smart TVs, cars, industrial controllers, satellites.
- **Cloud.** Most workloads on AWS, Azure, GCP.
- **Gaming.** Steam Deck runs SteamOS, a Linux distribution. Linux gaming via Proton finally became viable.

## What people get wrong

- "Open source means free as in no cost." It means free as in freedom. Most commercial Linux is sold under support contracts (Red Hat, SUSE). IBM bought Red Hat in 2019 for $34 billion.
- "There's no business model in open source." There are several: support contracts (Red Hat), hosted versions (MongoDB, Elastic), dual licensing (MySQL historically), open-core (GitLab). The category produces multi-billion-dollar businesses.
- "It's a security risk because the code is public." In practice, more eyes on the code tends to catch more bugs. Most production-grade open source has been audited more times than equivalent closed code.
- "Linus runs Linux." He's the final arbiter on the kernel, but contributions come from thousands of paid engineers across companies (Intel, Red Hat, Google, Microsoft, Meta, IBM).

## What to carry away

- A student's hobby project, made free and unkillable by a licensing choice, ended up running almost everything.
- The deeper move wasn't the code. It was the license. Copyleft made it impossible to enclose, which made it safe for thousands of competing companies to contribute to the same codebase.
- The historical adversary (Microsoft) is now one of its biggest patrons. The fight is over.
- In one sentence: Linux and the open source norms it normalized are the reason the modern internet was buildable at all.
