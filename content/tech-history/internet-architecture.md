---
title: "Internet architecture in plain English: TCP/IP, DNS, and what the web actually is"
subtopic: "Tech History · Networks"
hook: "The internet and the web are not the same thing. One is the pipes. The other is one application running on top."
order: 3
---

# Internet architecture in plain English: TCP/IP, DNS, and what the web actually is

## What the internet actually is and why it matters

The internet is a set of agreements that lets billions of computers, owned by different people in different countries, exchange data without anyone running the show. There is no central computer. There is no master switch. There is a small stack of protocols that everyone agrees to speak, and on top of those protocols runs everything you think of as "online." Email, web pages, video calls, messaging, banking, the entire app on your phone. Understanding the architecture matters because most current fights about technology, net neutrality, sovereign internets, censorship, antitrust against the cloud providers, are fights over which layer of this stack you control.

## Internet versus web

- The **internet** is the network. The pipes. The wires under the ocean, the cell towers, the routers in your house, and the agreements that let them talk.
- The **web** is one application running on top of the internet. Web pages, browsers, links.
- Email is a different application on the same internet. So is BitTorrent, so is your video call, so is Spotify streaming you a song.
- People say "the internet is down" when usually they mean their connection is down, or one website is down. The actual internet, as a global network, almost never goes down.

## TCP/IP, the agreement underneath everything

- In the late 1960s the US Defense Department's research arm **ARPA** funded a research network called **ARPANET** to connect university computers.
- The first ARPANET message was sent in **October 1969** from UCLA to Stanford. They tried to type "LOGIN." The system crashed after "LO."
- Throughout the 1970s **Vint Cerf** and **Bob Kahn** designed a way for different networks to talk to each other, not just a single network. This was the key conceptual move. An *inter*-network.
- They published the protocol in 1974. It split into two pieces. **TCP**, the Transmission Control Protocol, breaks your data into small packets, numbers them, and reassembles them at the other end. **IP**, the Internet Protocol, gives every machine an address and routes the packets between them.
- On **January 1, 1983**, ARPANET switched over to TCP/IP. This is the day the modern internet really begins.

## Packet switching, which is why the internet is robust

- The old telephone network used **circuit switching**. To make a call you opened a dedicated line from your phone to the other phone. The line stayed open the whole call, doing nothing if no one was speaking.
- The internet uses **packet switching**. Your data is broken into small numbered packets. Each packet finds its own way across the network, often by different routes. They get reassembled at the destination.
- This was originally a Cold War concern. Paul Baran at RAND in the early 1960s wrote a famous study on how to design a communications network that would survive a nuclear strike. Packet switching was the answer. No single line to cut, no central exchange to bomb.
- A side effect: the internet routes around damage. If a cable gets cut in one country, traffic finds another path within seconds.

## DNS, the address book

- Every computer on the internet has a numeric address like **142.250.80.46**. These are **IP addresses**.
- Humans cannot remember those. So in **1983** the **Domain Name System** was introduced by **Paul Mockapetris**. DNS translates a name you can remember, like google.com, into the IP address the network actually needs.
- When you type a URL, your computer asks a DNS server for the IP, the DNS server answers, and only then does the actual connection happen. This lookup is invisible to you and finishes in milliseconds.
- DNS is hierarchical. At the top sit thirteen logical **root servers** that know which servers handle .com, .org, .uk, and so on. Below them sit the servers for each domain. The system is run by a nonprofit called **ICANN**, headquartered in California.
- The **www** prefix was a convention from early web servers and was always optional. Most sites now drop it. You can still see it on older domains.

## HTTP, HTML, and the web

- In **1989** at **CERN**, the European particle physics lab in Geneva, a British engineer named **Tim Berners-Lee** wrote a proposal for sharing documents across the institution. His boss famously scribbled "vague but exciting" on the cover and approved it.
- Berners-Lee built three things over the next two years. **HTML**, a markup language for documents with links in them. **HTTP**, a protocol for fetching those documents. And the first **web browser**, which he also called the editor.
- He released it all publicly in **August 1991**. CERN agreed to put the technology in the public domain in **1993**, which is why no one owns the web.
- The first browser most people used was **Mosaic** in 1993, built at the University of Illinois by Marc Andreessen and team. Andreessen then went west, co-founded **Netscape** in 1994, and the commercial web era began.
- **HTTPS**, the encrypted version, was developed at Netscape in the mid-1990s. It only became the default for most of the web around 2018, after Google started ranking unencrypted sites lower and browsers started flagging them as insecure.

## Why this matters today

- **Net neutrality** is a fight about whether your internet provider can speed up or slow down certain types of traffic. The original principle, baked into the design by Cerf and Kahn, was that the network does not look inside packets. It just delivers them. Providers want to look, throttle, and charge differently.
- **IPv4 versus IPv6**. The original IP version, IPv4, allows about 4.3 billion addresses. The world has more devices than that. IPv6 was designed in the 1990s to give effectively unlimited addresses. Adoption has been slow and ugly, and most of the internet still runs on IPv4 plus a workaround called network address translation.
- **The cloud sits on this stack**. AWS, Azure, and Google Cloud are essentially renting you the boxes at the edge of the internet. They did not invent the protocols. They built large reliable buildings full of computers and made it easy to put your software on them.
- **The internet is American by default**. The root DNS servers, ICANN, the original protocols, and the dominant cloud companies are all American. This is a Cold War legacy, since ARPA funded the early work, and it has political consequences now.
- **Sovereign internets**. **China** runs a partly separated network through the Great Firewall, blocking external services and substituting domestic ones. **Russia** has tested disconnecting from the global internet entirely. **Iran** does similar. The technical possibility of a fragmented internet, the so-called **splinternet**, is real and slowly growing.

## What to carry away

- The internet is layered. Pipes at the bottom, then TCP/IP that breaks data into packets, then DNS that names addresses, then applications like the web sitting on top.
- Each layer can be changed without rewriting the others. This is why the internet has survived from a 1969 research project to the global nervous system.
- The web is not the internet. It is one of the most successful applications on it.
- The architecture was designed by a small number of researchers in the 1970s and 1980s, mostly with public money, mostly in the open. That choice, more than any other, is why the modern internet is open at all.
