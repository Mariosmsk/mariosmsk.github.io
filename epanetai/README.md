# EPANET AI Assistant

> A free, browser-based AI chatbot for analyzing EPANET water distribution network models.
> Runs entirely as a static page — no server, no installation, no cost.

---

## Overview

EPANET AI Assistant lets water engineers and researchers upload an EPANET `.inp` file and ask natural-language questions about the network. It is powered by **Llama 3.3 70B** via the [Groq](https://groq.com) API and has built-in knowledge of:

- **EPANET 2.3** — all `.inp` sections, PDA, leakage modeling, PCV valve, new API (ENgetnodevalues, ENgetlinkvalues, ENtimetonextevent…)
- **EPyT** — EPANET Python Toolkit, 500+ API methods with code examples ([OpenWaterAnalytics/EPyT](https://github.com/OpenWaterAnalytics/EPyT))
- **WNTR** — Water Network Tool for Resilience, pressure-driven simulation, resilience metrics ([USEPA/WNTR](https://github.com/USEPA/WNTR))

---

## Features

- Upload EPANET `.inp` files directly in the browser (drag & drop supported)
- AI answers about hydraulics, water quality, network components, and Python code
- Network summary panel (junctions, pipes, reservoirs, tanks, pumps, valves, all detected sections)
- Conversation history within the session
- 10 suggested questions — click to send instantly
- API key stored only in your browser (`localStorage`) — never sent anywhere else
- Mobile-friendly responsive layout

---

## Live App

Deploy to GitHub Pages in a few clicks — see [Deploy](#deploy-to-github-pages) below.

---

## Quick Start

### 1. Get a Free Groq API Key

No credit card required.

1. Sign up at [console.groq.com](https://console.groq.com)
2. Go to **API Keys → Create API Key**
3. Copy the key (starts with `gsk_`)

> **Free tier:** 14,400 requests/day · 6,000 tokens/min · Llama 3.3 70B Versatile

### 2. Open the App

Open `index.html` in any modern browser, or deploy it to GitHub Pages.

### 3. Start Chatting

1. Paste your Groq API key → **Save**
2. Upload an EPANET `.inp` file
3. Ask questions or click a suggested question

---

## Deploy to GitHub Pages

1. **Fork or push** this repository to your GitHub account
2. Go to **Settings → Pages**
3. Under **Source**, select `Deploy from a branch` → branch `main` → folder `/ (root)`
4. Click **Save** — your app will be live at `https://<username>.github.io/<repo-name>/`

> Make sure `index.html` is at the root of the repository (or the Pages source folder).

---

## Example Questions

| Category | Question |
|----------|----------|
| Network overview | `Summarize this network` |
| Components | `What are the pipe diameters and lengths?` |
| Hydraulics | `Are there any potential pressure problems?` |
| Pumps | `What pump curves are defined?` |
| Quality | `Explain the water quality settings` |
| EPyT | `How do I run this network with EPyT in Python?` |
| WNTR | `How do I analyze resilience with WNTR?` |
| WNTR | `How do I simulate a pipe leak using WNTR?` |

---

## Example Network

The `examples/` folder includes **L-TOWN.inp** — the benchmark network from the [Battle of Water Networks (2020)](https://www.batlle-of-waternetworks.org/). Load it to test the assistant.

---

## Files

| File | Description |
|------|-------------|
| `index.html` | Complete app — HTML, CSS, and JavaScript in one file |
| `examples/L-TOWN.inp` | Benchmark water network for testing |

---

## Privacy

- Your Groq API key is stored only in your browser (`localStorage`) and sent only to `api.groq.com`
- Your `.inp` file is read locally and never uploaded to any server
- Conversation history exists only in memory and is cleared on page reload

---

## Built With

- [Groq API](https://groq.com) — ultra-fast LLM inference
- [Llama 3.3 70B Versatile](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) — Meta's open-weight language model
- [EPANET 2.3](https://github.com/OpenWaterAnalytics/EPANET) — hydraulic and water quality modeling
- [EPyT](https://github.com/OpenWaterAnalytics/EPyT) — EPANET Python Toolkit (KIOS Research Center, University of Cyprus)
- [WNTR](https://github.com/USEPA/WNTR) — Water Network Tool for Resilience (US EPA)

---

## Citation

If you use this tool in your research, please also cite EPyT and WNTR:

**EPyT:**
> Kyriakou et al. (2023). *EPyT: An EPANET-Python Toolkit for Smart Water Network Simulations.*
> Journal of Open Source Software, 8(92), 5947. https://doi.org/10.21105/joss.05947

**WNTR:**
> Klise et al. (2023). *Water Network Tool for Resilience (WNTR) User Manual Version 1.0.*
> U.S. Environmental Protection Agency.

---

## License

MIT — free to use, modify, and distribute.