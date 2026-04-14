import { useState, useRef, useEffect } from "react";

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@400;500&family=Sora:wght@300;400;500;600&display=swap";

const C = {
  turquoise: "#40E0D0",
  green: "#228B22",
  dirt: "#A0522D",
  sand: "#F5F0E1",
  sky: "#87CEEB",
  ocean: "#0077B6",
  gold: "#DAA520",
  jungle: "#0F4C3A",
  bg: "#090E0C",
  bgCard: "#111A16",
  bgMid: "#162019",
  border: "#1E2E26",
  text: "#E8F0EB",
  muted: "#9AADA4",
  faint: "#2A3D33",
};

const SYS = `You are the Cape York 2040 strategic advisor — embedded within the Paniri Agricultural Co. business plan artifact. You have complete knowledge of this project.

CAPE YORK 2040: World's first Ecological Protein Export Zone at Weipa, QLD. Joint initiative of Paniri Agricultural Co. and Corporate Carbon.

THE PROBLEM: Cape York cattle can't compete with southern Australian cattle on size/weight. Industry wants large-frame animals. Small-frame fertile cattle are what Cape York produces. Transport to Townsville eats all margin. Structurally broken model.

THE SOLUTION: Stop fighting the south. Breed small-frame fertile cattle for Cape York conditions (350-400kg target). Build abattoir at Weipa. Eliminate transport. Create closed system. Ship direct to Asia.

SEASONAL MODEL: April-November operational (dry season). October-November peak cattle processing (end of dry). December-March wet season shutdown. Off-season: ecological credit packaging, data verification, contract admin. Modelled on Alaskan salmon canneries and Canadian remote mining.

CATTLE GENETICS (FULL REWRITE — AFRICAN THESIS):
The current Cape York herd was bred for the southern market — large frame, high grain conversion, fast finish. This logic is wrong for Cape York country. The right genetics already exist: developed over thousands of years on structurally identical country — the African pastoral belt.

TARGET: 50%+ African blood (Boran/Angoni/Mashona blend). Mature weight ceiling 400kg on native pasture only — no supplementation. This is a design constraint, not a compromise.

THREE FOUNDATION BREEDS:
1. BORAN (Kenya, Ethiopia, Somalia): The most important input. Heat-tolerant, tick-resistant, highly fertile, calm temperament. Proven in northern Australian trials. Efficient conversion on poor native pasture. 350-420kg mature weight. 30-40% lower methane/kg than European breeds.
2. ANGONI/NGONI (Malawi, Zambia, Mozambique): Smallest frame — sets the size floor (280-360kg). Developed under conditions almost identical to Cape York. Exceptional fertility — calves every 12 months on minimal nutrition. Disease tolerance including tick fever and trypanosomiasis. At 280–360kg, the Angoni is close to the bottom of the Indonesian feeder weight range — useful for establishing the small-frame floor of the composite.
3. MASHONA (Zimbabwe): Sanga genetics (Bos indicus x African Bos taurus) producing superior meat quality vs pure zebu. Proven on poor laterite veld without supplementation. Strong bone structure despite small frame. 320-400kg mature weight.

CROSSING PROGRAMME:
- Gen 0, 2025-2027: Cull current herd for frame, fertility, tick score. Boran and Mashona semen already in Australia — crossing commences immediately. Begin DAFF application for Angoni semen as future phase.
- Gen 1, 2027-2030: First African semen over selected Cape York cows. F1 = ~25% African blood.
- Gen 2, 2030-2034: F1 females back-crossed to African bulls. F2 = ~50% African blood. Critical generation — proves the ecological thesis on Cape York country.
- Gen 3, 2034-2038: Stabilise composite. Select animals hitting 380-400kg at maturity, >90% calving rate, Class 1-2 tick score, zero supplementation.
- Target 2038-2040: Cape York Ecological Composite — 50%+ African, remainder Cape-adapted Bos indicus. Sovereign genetic repository at Weipa Cryo Lab.

GENETIC MATERIAL STATUS: Boran semen — already in Australia, crossing can commence immediately. Mashona semen — already in Australia, crossing can commence immediately. Angoni — NOT yet in Australia, future import project requiring DAFF biosecurity clearance (3-5 years). Do not describe Angoni as immediately available.

400KG CEILING RATIONALE: An animal reaching 400kg on native pasture without supplementation is proving ecological alignment. One requiring supplementation to reach 500kg is a liability — it competes with the ecological system. The 400kg ceiling is the proof of ecological fitness. Indonesian feedlots import Australian cattle at an average of around 320kg liveweight — 2 to 3 year old Bos indicus feeders that finish out in Indonesian feedlots at 500–600kg. A Cape York animal reaching 400kg mature weight on native pasture produces steers that hit the 300–350kg feeder window at the right age. The ecology and the market converge — but for the right reason.

HERD PATHWAY: 50,000 (2025) → 55,000 (2027, culled) → 75,000 (2030, F1 entering) → 110,000 (2034, F2 50% African) → 135,000 (2038, composite stabilised) → 150,000 (2040, full ecological adaptation).

EXPORT STREAMS (targets by 2035):
- Live cattle: 90,000 head/yr, sea bulk, PFES tags + trace ID
- Boxed ecological beef: 30,000 MT/yr, reefer container, cold chain + PFES QR
- Genetic material: 5,000 units/yr, air + sea cryo, cryo registry + PFES
- Ecological credits: 350,000-400,000 tCO2e/yr, digital export, land ledger + PFES

WEIPA TERMINAL: Bonded livestock zone 500-800 head/day. Cold chain hub 5,000 pallet capacity dual-temp. Cryo certification lab. Digital trade deck (carbon + biodiversity credit ledger). Solar + battery microgrid, black-start capable. Modular truck corridors to Holroyd and Watson.

CAPITAL ($1B AUD): Weipa terminal $400M, road + logistics $200M, cold chain + energy $150M, regulatory + systems $100M, working capital + buffer $150M. Sources: NAIF infrastructure debt, sovereign wealth funds (Singapore, UAE, Korea), strategic co-investment from major protein buyers, ESG-aligned private equity.

MARKETS: Indonesia (food security mandate, breeding contracts), Vietnam (boxed beef + genetic material), Philippines (beef + labour exchange), South Korea (ESG buyers, premium chilled beef).

PFES: Paniri Fertility + Ecology Standard — proprietary verification system covering all four export streams.

REGULATORY: QLD Agricultural Export Precinct designation, Australian Border Force bonded zone certification, DAFF biosecurity clearance, PFES ISO registration, UN/OECD Climate-Aligned Export Pilot Zone, DFAT embedding in Indonesia-Australia CEPA and Vietnam FTA.

CAPE PASSAGE (PHASE ZERO, 2027-2031): Cape Passage is a coastal livestock shipping operation using the Port of Weipa (Evans Landing / Humbug Wharf, managed by NQBP) to move cattle by sea to southern Australian markets. It is the proof-of-concept that makes Cape York 2040 fundable. Corporate Carbon's Cape York portfolio: Watson River, Holroyd River, Crystalvale, Yarraden, Merluna — 600,000+ ha, 6,000-8,000 head carrying capacity. Current road transport cost: $150-300/head over 900-2,500km, representing up to 40% of market price. Sea cost: $50-140/head. Annual saving: $150-350K. Transport emissions reduction: 70-80% (130-180kg CO2/head road vs 35-40kg/head sea). Cape Passage phases: 2027 seasonal charter ($300-500K infrastructure), 2028 regional aggregation + southern backgrounding block near Townsville ($3-8M), 2029 dedicated vessel ($2-5M), 2030 10,000-15,000 head/season platform. The entity that controls Weipa coastal logistics becomes the indispensable infrastructure provider for every remaining Cape York cattle operation — a platform, not a service. Cape Passage ships south to domestic markets. Cape York 2040 flips the direction: process at Weipa, ship north to Asia. Cape Passage builds the Weipa port relationship, the operational credibility, the cattle base, and the carbon-logistics integrity narrative that makes the international EPEZ pitch credible to government and Rio Tinto.

PHASE PLAN (REVISED WITH CAPE PASSAGE):
- Phase 0 (Cape Passage) 2027-2031: Coastal shipping proof-of-concept, domestic market, $6-14M self-funded
- Phase I 2025-2030: Formal EPEZ designation, terminal feasibility + permitting, bilateral engagement, Rio Tinto SPV discussions
- Phase II 2030-2035: Terminal construction, surge international export tested, first sovereign trade contracts
- Phase III 2035-2040: Global pilot recognition, Paniri model licensing, full ROI cycle

RISKS: Seasonal access (pre-positioned storage, wet-season staging), labour variability (visa-structured labour loops), regulatory delay (parallel private standards + gov channels), capital volatility (staggered phases, high-certainty offtake).

GOVERNANCE + CAPITAL STRUCTURE (REVISED): The $1B total cannot be raised through a conventional project raise. It requires government co-investment as the foundation. The structure is a Special Purpose Vehicle (SPV) with three founding parties:

1. FEDERAL GOVERNMENT — equity stake via Commonwealth co-investment (NAIF concessional debt + NRF equity). Framing: sovereign food security infrastructure, northern Australia strategic corridor, defence-adjacent supply chain. Precedents: Ord River scheme, Darwin port expansion, Snowy Hydro 2.0. Requires federal appropriation, not just NAIF lending. The Indonesia-Australia food corridor + geopolitical framing is the lever.

2. RIO TINTO — infrastructure contribution valued as equity or concessional lease. Rio Tinto owns and operates the Weipa port and all supporting infrastructure (power, accommodation villages, roads). You cannot build at Weipa without them. They get: diversification narrative for Weipa tenure, shared infrastructure utilisation, stronger social licence with Wik and Wik-Mungkan traditional owners, positioning as enabler of northern Australia's next economy rather than purely extractive operator.

3. PANIRI AGRICULTURAL CO. — operating partner and IP holder. Contributes PFES standard, cattle genetics programme, market relationships, operational design. Holds the ecological IP and the export standard.

SEQUENCING: Federal + Rio Tinto alignment must come first. Sovereign wealth co-investors (Singapore GIC, Korea NPS, UAE sovereign funds) follow sovereign signal — they don't lead it. Once Canberra and Rio Tinto are committed, the co-investor tier is straightforward. The founding triangle de-risks the entire raise.

TRADITIONAL OWNER ALIGNMENT: Wik and Wik-Mungkan peoples hold native title over significant Cape York country. Their free, prior and informed consent is not optional — it is a precondition. The land use framework must be co-designed, not consulted. This is both a legal and a commercial imperative.

BLACK MAT HOLDINGS: Cape York 2040 is one of three businesses under Black Mat Holdings Co. The others are TerraForm Earth (land restoration arbitrage) and SheepDog (autonomous drone cattle management). SheepDog's drone infrastructure supports Cape York's cattle monitoring. TerraForm's ecological manufacturing builds the cattle base. Cape York exports the output.

Be direct, precise, and strategic. No fluff. Speak like you're briefing a sovereign wealth fund.`;

const styles = `
  @import url('${FONT_URL}');
  .cy-root * { box-sizing: border-box; margin: 0; padding: 0; }
  .cy-root { background: ${C.bg}; color: ${C.text}; font-family: 'Sora', sans-serif; min-height: 100vh; }
  .cy-serif { font-family: 'DM Serif Display', serif; }
  .cy-mono { font-family: 'IBM Plex Mono', monospace; }
  .cy-nav { background: rgba(9,14,12,0.96); border-bottom: 1px solid ${C.border}; position: sticky; top: 0; z-index: 100; backdrop-filter: blur(12px); }
  .cy-nav-inner { display: flex; align-items: center; padding: 0 20px; overflow-x: auto; scrollbar-width: none; }
  .cy-nav-inner::-webkit-scrollbar { display: none; }
  .cy-wordmark { color: ${C.turquoise}; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.15em; padding: 14px 24px 14px 4px; white-space: nowrap; flex-shrink: 0; }
  .cy-tab { padding: 14px 16px; background: none; border: none; border-bottom: 2px solid transparent; color: ${C.muted}; font-size: 12px; letter-spacing: 0.03em; cursor: pointer; white-space: nowrap; font-family: 'Sora', sans-serif; font-weight: 500; transition: all 0.15s; flex-shrink: 0; }
  .cy-tab:hover { color: ${C.text}; }
  .cy-tab.active { border-bottom-color: ${C.turquoise}; color: ${C.turquoise}; }
  .cy-page { max-width: 860px; margin: 0 auto; padding: 52px 28px 100px; }
  .cy-eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: ${C.turquoise}; margin-bottom: 12px; }
  .cy-h1 { font-family: 'DM Serif Display', serif; font-size: 42px; line-height: 1.1; color: ${C.sand}; margin-bottom: 14px; }
  .cy-h2 { font-family: 'DM Serif Display', serif; font-size: 26px; color: ${C.sand}; margin-bottom: 16px; }
  .cy-body { font-size: 15px; color: ${C.muted}; line-height: 1.85; margin-bottom: 22px; }
  .cy-card { background: ${C.bgCard}; border: 1px solid ${C.border}; border-radius: 12px; padding: 24px; }
  .cy-card-turq { border-color: ${C.turquoise}33; }
  .cy-card-dirt { border-color: ${C.dirt}33; }
  .cy-card-gold { border-color: ${C.gold}33; }
  .cy-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .cy-grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
  .cy-grid4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .cy-stat-val { font-family: 'DM Serif Display', serif; font-size: 26px; margin-bottom: 2px; }
  .cy-stat-lbl { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: ${C.muted}; }
  .cy-divider { border: none; border-top: 1px solid ${C.border}; margin: 36px 0; }
  .cy-pill { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 10px; font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.06em; font-weight: 500; }
  .cy-tag { font-size: 11px; color: ${C.muted}; padding: 4px 10px; border: 1px solid ${C.border}; border-radius: 4px; display: inline-block; margin: 3px 3px 3px 0; font-family: 'IBM Plex Mono', monospace; }
  .cy-section-num { font-family: 'DM Serif Display', serif; font-size: 72px; color: ${C.border}; line-height: 1; margin-bottom: -10px; }
  .cy-chat-bubble-user { background: ${C.turquoise}; color: #060f0a; border-radius: 14px 14px 2px 14px; }
  .cy-chat-bubble-ai { background: ${C.bgMid}; color: ${C.text}; border-radius: 14px 14px 14px 2px; border: 1px solid ${C.border}; }
  .cy-input { background: ${C.bgMid}; border: 1px solid ${C.border}; border-radius: 10px; color: ${C.text}; font-size: 13px; padding: 10px 14px; flex: 1; outline: none; font-family: 'Sora', sans-serif; }
  .cy-input:focus { border-color: ${C.turquoise}66; }
  .cy-btn { padding: 10px 20px; background: ${C.turquoise}; border: none; border-radius: 10px; color: #060f0a; font-weight: 600; font-size: 13px; cursor: pointer; font-family: 'Sora', sans-serif; transition: opacity 0.15s; }
  .cy-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .cy-accordion { border: 1px solid ${C.border}; border-radius: 10px; overflow: hidden; margin-bottom: 6px; }
  .cy-accordion-head { display: flex; align-items: center; gap: 12px; padding: 12px 16px; cursor: pointer; background: ${C.bgCard}; transition: background 0.15s; }
  .cy-accordion-head:hover { background: ${C.bgMid}; }
  .cy-accordion-body { padding: 18px 20px 20px; background: ${C.bg}; border-top: 1px solid ${C.border}; font-size: 14px; color: ${C.muted}; line-height: 1.85; }
  @media (max-width: 640px) { .cy-grid2, .cy-grid3, .cy-grid4 { grid-template-columns: 1fr; } .cy-h1 { font-size: 30px; } }
`;

function InjectStyles() {
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = styles;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);
  return null;
}

const TABS = [
  ["diagnosis", "First Principles"],
  ["passage", "Cape Passage"],
  ["overview", "Overview"],
  ["strategy", "Strategic Case"],
  ["problem", "Problem / Solution"],
  ["seasonal", "Seasonal Model"],
  ["genetics", "Cattle Genetics"],
  ["exports", "Export Streams"],
  ["terminal", "Weipa Terminal"],
  ["markets", "Markets"],
  ["capital", "Capital"],
  ["governance", "Governance"],
  ["regulatory", "Regulatory"],
  ["phases", "Phase Plan"],
  ["risks", "Risks"],
  ["advisor", "AI Advisor"],
];

function Nav({ view, setView }) {
  return (
    <nav className="cy-nav">
      <div className="cy-nav-inner">
        <div className="cy-wordmark">CAPE YORK 2040</div>
        {TABS.map(([id, label]) => (
          <button key={id} className={`cy-tab${view === id ? " active" : ""}`} onClick={() => setView(id)}>{label}</button>
        ))}
      </div>
    </nav>
  );
}


function CapePassageView({ setView }) {

  const economics = [
    { route: "Cape to Townsville", road: "$100–150", sea: "$50–80", saving: "$40–80" },
    { route: "Cape to Mackay", road: "$150–200", sea: "$70–100", saving: "$70–110" },
    { route: "Cape to Rockhampton", road: "$180–250", sea: "$90–120", saving: "$80–140" },
    { route: "Cape to SE Queensland", road: "$220–300", sea: "$100–140", saving: "$100–170" },
  ];

  const phases = [
    { yr: "2027", label: "Prove the Route", col: "#40E0D0", capex: "$300–500K",
      points: ["Charter 800–1,200 head vessel for the May–Nov muster season", "3–5 voyages Weipa to Townsville — Paniri cattle only", "Construct loading yards and ramp at Evans Landing, Weipa", "Rigorous data collection: per-head cost, welfare outcomes, emissions vs road", "Establish NQBP port access agreements"] },
    { yr: "2028", label: "Partner Stations Join", col: "#DAA520", capex: "$3–8M",
      points: ["Formalise equity partnership structure — stations buy in, not just book freight", "3–5 neighbouring Cape York stations as founding vessel partners", "Target 4,000–6,000 head/season; vessel economics strengthen with every partner", "Acquire southern backgrounding block within 100km of Townsville", "Begin carbon registration on backgrounding block"] },
    { yr: "2029", label: "Own the Infrastructure", col: "#228B22", capex: "$2–5M",
      points: ["Acquire or bareboat charter dedicated vessel 1,000–2,000 head ($2–5M secondhand)", "Corporate Carbon holds majority; partner stations hold equity proportional to committed head", "6,000–10,000 head/season; backhaul revenue (station supplies northbound)", "The vessel schedule becomes the Cape York muster calendar"] },
    { yr: "2030–31", label: "The Platform Is Built", col: "#A0522D", capex: "Cash positive",
      points: ["10,000–15,000 head/season; per-head cost below $40 to Townsville", "Evaluate Karumba as second loading point for Gulf-side stations", "Corporate Carbon is the indispensable logistics backbone for every station on the Peninsula", "Proof-of-concept established for the Cape York 2040 international export pitch"] },
  ];

  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Phase Zero — The Crown Jewel</div>
      <div className="cy-section-num" style={{ color: "#1E2E26" }}>00</div>
      <h1 className="cy-h1">The Sea Was Always<br /><em>the Answer.</em></h1>

      <p className="cy-body" style={{ maxWidth: 640, fontSize: 16 }}>
        The cattle are at the top of the Peninsula. The sea is right there. The distance to market by water is a fraction of the road. This should have been obvious decades ago. The reason it isn't the default is not a logistics problem — it is a coordination problem. And coordination problems have a precise solution.
      </p>

      <div style={{ background: "linear-gradient(135deg, #162019, #111A16)", border: "1px solid #40E0D044", borderRadius: 16, padding: 28, marginBottom: 36 }}>
        <div className="cy-eyebrow" style={{ marginBottom: 12 }}>Why It's Been Tried Before — And Why It Failed</div>
        <p className="cy-body" style={{ marginBottom: 18 }}>
          Coastal livestock shipping out of Cape York has been attempted. The economics were sound. The route worked. The vessel was ready. But stations that had committed head counts didn't deliver when the time came. The vessel sailed under-loaded. The economics collapsed. The operator couldn't sustain it.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ borderLeft: "3px solid #9B2F1F", paddingLeft: 18 }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#E07060", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>The Failure Mode</div>
            <p className="cy-body" style={{ margin: 0, fontSize: 13 }}>When stations are customers of a shipping service, they can walk away. A bad season, a late muster, a better offer from a road train — any of these can reduce a committed consignment to nothing. The vessel operator carries all the risk. The commitment is asymmetric and therefore fragile.</p>
          </div>
          <div style={{ borderLeft: "3px solid #40E0D0", paddingLeft: 18 }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#40E0D0", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>The Structural Fix</div>
            <p className="cy-body" style={{ margin: 0, fontSize: 13 }}>When stations are equity partners in the vessel, the incentive structure is entirely different. You don't walk away from infrastructure you own. The commitment is now symmetric — if the vessel sails under-loaded, the partner stations share the cost of that inefficiency. They fill it.</p>
          </div>
        </div>
      </div>

      <div className="cy-eyebrow" style={{ marginBottom: 12 }}>The Ownership Model — The Solution to the Coordination Problem</div>
      <p className="cy-body" style={{ maxWidth: 640 }}>
        Corporate Carbon owns the vessel outright or holds majority in a vessel-owning entity. Neighbouring Cape York stations are brought in as equity partners — not customers booking freight space, but co-owners of the infrastructure. Equity is proportional to committed head count. The vessel schedule becomes the muster calendar. The shipping operation becomes the backbone every station on the Peninsula depends on.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 36 }}>
        {[
          { label: "Corporate Carbon", role: "Majority owner + operator", detail: "Holds controlling equity. Manages the vessel, the schedule, the port relationships, and the southern backgrounding block. Operating revenue from freight charges to partner stations.", col: "#40E0D0" },
          { label: "Partner Stations", role: "Equity partners + committed supply", detail: "Cape York stations buy equity proportional to their committed annual head count. Equity gives them access to the vessel at cost. Walking away means forfeiting infrastructure they paid for.", col: "#DAA520" },
          { label: "The Vessel", role: "Shared infrastructure — not a service", detail: "The ship is owned by the partnership, not chartered from an outsider. The schedule is set by the partnership. The economics improve with every additional partner station that joins.", col: "#228B22" },
        ].map(p => (
          <div key={p.label} className="cy-card" style={{ borderTop: `3px solid ${p.col}` }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: p.col, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{p.role}</div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: "#F5F0E1", marginBottom: 10 }}>{p.label}</div>
            <p className="cy-body" style={{ margin: 0, fontSize: 13 }}>{p.detail}</p>
          </div>
        ))}
      </div>

      <div className="cy-eyebrow" style={{ marginBottom: 12 }}>Why Shipping Is the Elegant Solution</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
        {[
          { head: "The distance by sea is a fraction of the road", body: "Weipa to Townsville by sea is approximately 800km. The same journey by road train is 900km to the nearest processor — and up to 2,500km to southeast Queensland markets. The sea route doesn't just save money. It is simply the shorter path between two points that happen to be separated by water.", col: "#40E0D0" },
          { head: "Marine freight is ten times more fuel efficient than road", body: "A triple road train burning 1–1.5 litres per kilometre over 2,000km consumes roughly 6,000–8,000 litres of diesel per load. A coastal vessel moving 1,000 head over the same sea distance burns a fraction of that per head. The emissions reduction is 70–80% per animal. This is not marginal — it is transformational for the carbon integrity of the whole portfolio.", col: "#228B22" },
          { head: "Cattle arrive in better condition", body: "A 2–3 day sea voyage on a properly equipped livestock vessel is fundamentally different from 24–36 hours on a road train. Animals are stationary, sheltered, with continuous access to feed and water. Condition losses of 5–8% on long-haul road journeys are well documented. Cattle arriving by sea are in better shape, command better prices, and cost less to recover at the backgrounding block.", col: "#DAA520" },
          { head: "Scheduling control returns to the producer", body: "Road train availability during the compressed muster window is a constant constraint — every station on the Peninsula is competing for the same limited fleet simultaneously. A vessel operating on a fixed schedule owned by the partnership means cattle move when they are ready, not when a truck becomes available.", col: "#87CEEB" },
          { head: "The infrastructure moat is durable", body: "The capital and regulatory barriers to establishing a second coastal livestock operation out of Weipa are high enough to constitute a permanent competitive moat. The entity that builds this first controls the logistics backbone for every cattle station on Cape York. That position, once established, is extremely difficult to replicate.", col: "#A0522D" },
        ].map((p, i) => (
          <div key={i} className="cy-card" style={{ borderLeft: `4px solid ${p.col}`, borderRadius: "0 12px 12px 0" }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#F5F0E1", fontFamily: "'Sora', sans-serif", marginBottom: 8 }}>{p.head}</div>
            <p className="cy-body" style={{ margin: 0 }}>{p.body}</p>
          </div>
        ))}
      </div>

      <div className="cy-eyebrow" style={{ marginBottom: 12 }}>Per-Head Economics: Road vs Sea</div>
      <div style={{ overflowX: "auto", marginBottom: 36 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Sora', sans-serif" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #1E2E26" }}>
              {["Route", "Road Cost/Head", "Sea Cost/Head", "Saving/Head"].map(h => (
                <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#9AADA4", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {economics.map((r, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #2A3D33" }}>
                <td style={{ padding: "12px 14px", fontSize: 14, color: "#E8F0EB" }}>{r.route}</td>
                <td style={{ padding: "12px 14px", fontSize: 13, color: "#9AADA4", fontFamily: "'IBM Plex Mono', monospace" }}>{r.road}</td>
                <td style={{ padding: "12px 14px", fontSize: 13, color: "#40E0D0", fontFamily: "'IBM Plex Mono', monospace" }}>{r.sea}</td>
                <td style={{ padding: "12px 14px", fontSize: 16, color: "#DAA520", fontFamily: "'DM Serif Display', serif" }}>{r.saving}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cy-eyebrow" style={{ marginBottom: 12 }}>Build Sequence</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 36 }}>
        {phases.map((p) => (
          <div key={p.yr} className="cy-card" style={{ borderLeft: `4px solid ${p.col}`, borderRadius: "0 12px 12px 0" }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: p.col, lineHeight: 1 }}>{p.yr}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#9AADA4", marginTop: 4 }}>{p.capex}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#F5F0E1", fontFamily: "'Sora', sans-serif", marginBottom: 10 }}>{p.label}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  {p.points.map(pt => (
                    <div key={pt} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: p.col, marginTop: 8, flexShrink: 0 }}></div>
                      <div style={{ fontSize: 13, color: "#9AADA4", lineHeight: 1.7, fontFamily: "'Sora', sans-serif" }}>{pt}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cy-card" style={{ borderColor: "#DAA52044" }}>
        <div className="cy-eyebrow" style={{ color: "#DAA520" }}>The Southern Backgrounding Block — Closing the Last Mile</div>
        <p className="cy-body" style={{ marginBottom: 16 }}>
          Sea freight introduces additional load and unload events compared to a direct road train. The solution is not to optimise the port-to-paddock truck leg — it is to own it. A Corporate Carbon backgrounding property within 100km of Townsville turns the double-handling problem from a cost to absorb into an asset to control.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          {[
            { l: "Spelling facility", d: "Recovery paddocks for sea-freighted cattle before onward sale or feedlot entry" },
            { l: "Backgrounding block", d: "Weaners shipped south for growing out on improved pasture before feedlot finishing" },
            { l: "Carbon project", d: "Soil carbon methodology on the land itself — revenue from the property, not just the cattle" },
          ].map(it => (
            <div key={it.l}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#DAA520", marginBottom: 6, fontFamily: "'Sora', sans-serif" }}>{it.l}</div>
              <p className="cy-body" style={{ margin: 0, fontSize: 13 }}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OverviewView({ setView }) {
  const metrics = [
    { v: "$1B", l: "Total Capital AUD", c: C.turquoise },
    { v: "150K", l: "Head by 2040", c: C.green },
    { v: "4", l: "Export Streams", c: C.gold },
    { v: "2040", l: "Full Operations", c: C.dirt },
  ];
  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Paniri Agricultural Co. × Corporate Carbon</div>
      <div className="cy-section-num">00</div>
      <h1 className="cy-h1">The World's First<br /><em>Ecological Protein</em><br />Export Zone</h1>
      <p className="cy-body" style={{ maxWidth: 580, fontSize: 15 }}>
        Cape York's remoteness, its small-frame cattle, and its seasonal constraints are not problems. They are structural advantages — if you design the system around them instead of fighting the southern model.
      </p>

      <div className="cy-grid4" style={{ marginBottom: 24 }}>
        {metrics.map(m => (
          <div key={m.l} className="cy-card" style={{ borderColor: m.c + "33" }}>
            <div className="cy-stat-val" style={{ color: m.c }}>{m.v}</div>
            <div className="cy-stat-lbl">{m.l}</div>
          </div>
        ))}
      </div>

      <div style={{ border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", marginBottom: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ padding: 20, borderRight: `1px solid ${C.border}`, background: C.bgCard, cursor: "pointer" }}
            onClick={() => setView("passage")}
            onMouseEnter={e => e.currentTarget.style.background = C.bgMid}
            onMouseLeave={e => e.currentTarget.style.background = C.bgCard}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C.sky, letterSpacing: "0.12em" }}>ACT I · NOW</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C.muted }}>2027–2031 →</div>
            </div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: C.sand, marginBottom: 6 }}>Cape Passage</div>
            <div className="cy-body" style={{ margin: 0, fontSize: 12 }}>The sea was always the answer. Tried before — failed due to a coordination problem, not a logistics one. The fix is ownership: Corporate Carbon owns the vessel, partner stations hold equity. You don't walk away from infrastructure you own.</div>
          </div>
          <div style={{ padding: 20, background: C.bgCard, cursor: "pointer" }}
            onClick={() => setView("strategy")}
            onMouseEnter={e => e.currentTarget.style.background = C.bgMid}
            onMouseLeave={e => e.currentTarget.style.background = C.bgCard}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C.turquoise, letterSpacing: "0.12em" }}>ACT II · BUILT ON IT</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C.muted }}>2030–2040 →</div>
            </div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: C.sand, marginBottom: 6 }}>Cape York 2040</div>
            <div className="cy-body" style={{ margin: 0, fontSize: 12 }}>Flip the direction. Process at Weipa. Ship north to Asia. International Ecological Protein Export Zone. $1B SPV.</div>
          </div>
        </div>
        <div style={{ padding: "10px 20px", background: C.bg, borderTop: `1px solid ${C.border}` }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: C.muted, textAlign: "center" }}>
            The drovers moved the animal to the ship. The road train inherited the same logic. Cape Passage reverses it. Cape York 2040 eliminates the question.
          </div>
        </div>
      </div>

      <div className="cy-card cy-card-turq" style={{ marginBottom: 16 }}>
        <div className="cy-eyebrow" style={{ marginBottom: 8 }}>The Alaska Analogy</div>
        <p className="cy-body" style={{ margin: 0 }}>
          Alaska's salmon canneries don't compete with mainland fisheries. They exploit seasonal abundance through surge processing — rotational workforce, purpose-built export infrastructure, direct international shipping. Cape York runs the same play with beef. At the end of the green, the cattle are ready. Process them at Weipa. Ship direct to Jakarta, Ho Chi Minh City, Seoul.
        </p>
      </div>

      <div className="cy-grid3">
        {[
          { id: "passage", label: "Cape Passage — Phase Zero", col: C.sky, desc: "The coastal logistics proof-of-concept that makes the EPEZ fundable. First voyage May 2027." },
          { id: "exports", label: "Four Export Streams", col: C.turquoise, desc: "Live cattle, boxed beef, genetic material, and ecological credits. Verified under PFES." },
          { id: "governance", label: "SPV Architecture", col: C.gold, desc: "Federal Government + Rio Tinto + Paniri as the founding triangle. Sovereign wealth follows." },
        ].map(c => (
          <div key={c.id} className="cy-card" style={{ borderColor: c.col + "44", cursor: "pointer", transition: "border-color 0.15s" }}
            onClick={() => setView(c.id)}
            onMouseEnter={e => e.currentTarget.style.borderColor = c.col}
            onMouseLeave={e => e.currentTarget.style.borderColor = c.col + "44"}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.col, marginBottom: 12 }}></div>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.sand, marginBottom: 6, fontFamily: "'Sora', sans-serif" }}>{c.label}</div>
            <div className="cy-body" style={{ margin: 0, fontSize: 12 }}>{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StrategyView({ setView }) {
  const points = [
    { head: "Asia adds 1.3B middle-class consumers by 2040", body: "Food security is being redefined as strategic national infrastructure. Sovereign buyers are shifting from open-market sourcing to verified bilateral corridors with traceable origin.", col: C.turquoise },
    { head: "Darwin is congested. Brisbane lacks northern supply.", body: "Weipa is deepwater, underutilised, and ideally positioned. It sits inside a climate window that the rest of Australia can't replicate — wet-dry seasonality that forces production discipline.", col: C.sky },
    { head: "Market access will be won by carbon index, not just price.", body: "ESG-driven capital is seeking biological infrastructure with embedded carbon controls. Ecological verification is becoming the price of entry, not a premium. Cape York is already this asset — it just isn't capitalised.", col: C.gold },
    { head: "The seasonal model is a feature, not a constraint.", body: "Alaskan salmon canneries, Canadian remote mining, and Central Asian grain corridors all prove that seasonal surge processing generates superior unit economics over continuous-run competitors. The shutdown period becomes the preparation and verification season.", col: C.green },
  ];
  const sequence = [
    { step: "01", label: "Cape Passage", sub: "2027–2031", desc: "Prove coastal logistics. Own the Weipa port relationship. Generate the carbon-logistics data. $6–14M.", col: C.sky, view: "passage" },
    { step: "02", label: "SPV Formation", sub: "2028–2030", desc: "Federal Government + Rio Tinto + Paniri founding triangle aligned. Sovereign wealth co-investors follow.", col: C.gold, view: "governance" },
    { step: "03", label: "EPEZ Terminal", sub: "2030–2035", desc: "Weipa terminal built on proven infrastructure. First sovereign trade contracts. Flip from south to north.", col: C.turquoise, view: "terminal" },
    { step: "04", label: "Full Export", sub: "2035–2040", desc: "Four export streams at target volume. PFES licensed globally. Cape York recognised as world model.", col: C.dirt, view: "phases" },
  ];
  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Strategic Context</div>
      <div className="cy-section-num">01</div>
      <h1 className="cy-h1">Why Weipa.<br />Why Now.</h1>
      <p className="cy-body" style={{ maxWidth: 560 }}>Four structural forces are converging. One sequenced plan to capture all of them.</p>

      <div className="cy-eyebrow" style={{ marginBottom: 10 }}>The Sequencing Logic</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 28 }}>
        {sequence.map((s, i) => (
          <div key={s.step} style={{ position: "relative", cursor: "pointer" }}
            onClick={() => setView(s.view)}>
            {i < sequence.length - 1 && (
              <div style={{ position: "absolute", top: 18, right: -4, width: 8, height: 2, background: C.border, zIndex: 1 }}></div>
            )}
            <div className="cy-card" style={{ borderColor: s.col + "44", height: "100%", transition: "border-color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = s.col}
              onMouseLeave={e => e.currentTarget.style.borderColor = s.col + "44"}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: s.col, letterSpacing: "0.1em", marginBottom: 6 }}>{s.step} · {s.sub}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.sand, fontFamily: "'Sora', sans-serif", marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.5, fontFamily: "'Sora', sans-serif" }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="cy-eyebrow" style={{ marginBottom: 10 }}>Four Structural Forces</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
        {points.map((p, i) => (
          <div key={i} className="cy-card" style={{ display: "flex", gap: 18, borderLeft: `3px solid ${p.col}`, borderRadius: "0 12px 12px 0" }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: p.col, paddingTop: 2, flexShrink: 0, width: 20 }}>0{i + 1}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.sand, marginBottom: 5, fontFamily: "'Sora', sans-serif" }}>{p.head}</div>
              <div className="cy-body" style={{ margin: 0 }}>{p.body}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: `linear-gradient(135deg, ${C.jungle}88, ${C.bgCard})`, border: `1px solid ${C.turquoise}33`, borderRadius: 12, padding: 22 }}>
        <div className="cy-eyebrow">The Mission</div>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: C.sand, lineHeight: 1.4 }}>
          Deploy a scalable, seasonal, high-verification logistics system out of Weipa that exports fertility-indexed, carbon-tracked ecological goods across four categories — beginning with coastal domestic shipping in 2027 and culminating in international export at scale by 2040.
        </div>
      </div>
    </div>
  );
}

function ProblemView() {
  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Problem / Solution</div>
      <div className="cy-section-num">02</div>
      <h1 className="cy-h1">Stop Fighting<br />the South.</h1>

      <div className="cy-grid2" style={{ marginBottom: 24 }}>
        <div className="cy-card" style={{ borderColor: C.dirt + "55", borderLeft: `3px solid ${C.dirt}`, borderRadius: "0 12px 12px 0" }}>
          <div className="cy-eyebrow" style={{ color: C.dirt }}>The Problem</div>
          <h2 className="cy-h2" style={{ fontSize: 18, marginBottom: 10 }}>Structurally broken by the southern model</h2>
          <div className="cy-body" style={{ margin: 0 }}>
            The industry buys kilograms. It wants large-frame, heavy-set animals from temperate country. Cape York produces small-frame, fertile cattle at 350–400kg — adapted for heat, ticks, and wet-dry conditions. They're exactly wrong for the existing market.
            <br /><br />
            Transport to Townsville — the nearest processing hub — costs $100–$150/head and consumes any margin before the animal reaches the floor. The model doesn't break even. It never will at current structure.
          </div>
        </div>
        <div className="cy-card" style={{ borderColor: C.turquoise + "55", borderLeft: `3px solid ${C.turquoise}`, borderRadius: "0 12px 12px 0" }}>
          <div className="cy-eyebrow" style={{ color: C.turquoise }}>The Solution</div>
          <h2 className="cy-h2" style={{ fontSize: 18, marginBottom: 10 }}>Rebuild the system around the cattle</h2>
          <div className="cy-body" style={{ margin: 0 }}>
            Don't try to make Cape York cattle into southern cattle. Breed deliberately for Cape conditions — fertile, heat-tolerant, tick-resistant, 350–400kg frame. Then build the export infrastructure at Weipa.
            <br /><br />
            Eliminate transport entirely. At the end of the dry, bring the cattle in from Holroyd and Watson. Process at Weipa. Container onto vessels bound for Jakarta, Ho Chi Minh City, Manila. Zero Townsville, zero southern abattoir.
          </div>
        </div>
      </div>

      <div className="cy-card" style={{ marginBottom: 18 }}>
        <div className="cy-eyebrow">Why Small-Frame Is the Asset</div>
        <div className="cy-grid3" style={{ gap: 16 }}>
          {[
            { label: "Heat tolerance", desc: "Smaller frames reduce metabolic heat load. Better performance in 38°C + humidity conditions." },
            { label: "Tick resistance", desc: "Bos indicus-dominant genetics tolerate tick burden that devastates southern breeds." },
            { label: "Fertility at low inputs", desc: "Cape-adapted cows calve on minimal supplementation through the wet. No drylot feeding." },
            { label: "Indonesian feeder market fit", desc: "Indonesian feedlots import Australian cattle at around 280–350kg liveweight — Bos indicus feeder steers at 2–3 years of age. A 400kg mature cow produces exactly these steers at the right age and weight." },
            { label: "Genetic premium", desc: "Fertile, adapted genetic material commands $200–500/unit in SE Asian breeding programs." },
            { label: "Carbon per kg", desc: "Lower-input rearing yields better kg of CO2e per kg beef — a verifiable export premium." },
          ].map(it => (
            <div key={it.label}>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.turquoise, marginBottom: 4, fontFamily: "'Sora', sans-serif" }}>{it.label}</div>
              <div className="cy-body" style={{ margin: 0, fontSize: 12 }}>{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SeasonalView() {
  const months = [
    { m: "Jan", type: "wet" }, { m: "Feb", type: "wet" }, { m: "Mar", type: "wet" },
    { m: "Apr", type: "ops" }, { m: "May", type: "ops" }, { m: "Jun", type: "ops" },
    { m: "Jul", type: "ops" }, { m: "Aug", type: "ops" }, { m: "Sep", type: "ops" },
    { m: "Oct", type: "peak" }, { m: "Nov", type: "peak" },
    { m: "Dec", type: "wet" },
  ];
  const typeInfo = {
    ops:  { col: C.turquoise, label: "Operational — dry season" },
    peak: { col: C.gold, label: "Peak processing — end of dry" },
    wet:  { col: C.faint, label: "Wet season shutdown", textCol: C.muted },
  };
  const offseason = [
    "Ecological credit packaging + verification",
    "PFES data audit and reporting cycles",
    "Contract administration for next surge",
    "Workforce training and credentialing",
    "Infrastructure maintenance and upgrade",
    "Breeding programme monitoring",
  ];
  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Operating Model</div>
      <div className="cy-section-num">03</div>
      <h1 className="cy-h1">The Surge<br />System.</h1>
      <p className="cy-body" style={{ maxWidth: 560 }}>
        Seasonal precision is the model. The climate dictates the calendar. The surge is the value event.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 5, marginBottom: 8 }}>
        {months.map((mo, i) => {
          const t = typeInfo[mo.type];
          return (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ background: t.col + "22", border: `1px solid ${t.col}55`, borderRadius: 6, padding: "8px 2px" }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: t.textCol || t.col, letterSpacing: "0.05em" }}>{mo.m}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 28 }}>
        {Object.entries(typeInfo).map(([k, v]) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: C.muted, fontFamily: "'IBM Plex Mono', monospace" }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: v.col, flexShrink: 0 }}></div>
            {v.label}
          </div>
        ))}
      </div>

      <div className="cy-grid2" style={{ marginBottom: 20 }}>
        <div className="cy-card cy-card-turq">
          <div className="cy-eyebrow">Operational Season — Apr to Nov</div>
          <div className="cy-body">Cattle movement from Holroyd and Watson. Processing surge October–November. Live export loading. Container freight booking. PFES verification in parallel.</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {["500–800 head/day peak throughput", "Reefer containers loaded weekly", "Live export vessels monthly block", "Cryo lab active for genetic export"].map(s => (
              <div key={s} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.turquoise, marginTop: 6, flexShrink: 0 }}></div>
                <div style={{ fontSize: 12, color: C.muted, fontFamily: "'Sora', sans-serif" }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="cy-card" style={{ borderColor: C.faint }}>
          <div className="cy-eyebrow">Off-season — Dec to Mar</div>
          <div className="cy-body">Infrastructure doesn't sit idle. The wet season becomes the preparation and verification season.</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {offseason.map(s => (
              <div key={s} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: C.gold, marginTop: 6, flexShrink: 0 }}></div>
                <div style={{ fontSize: 12, color: C.muted, fontFamily: "'Sora', sans-serif" }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cy-card cy-card-gold">
        <div className="cy-eyebrow">Paniri Ecological Export Corps (PEEC)</div>
        <div className="cy-body" style={{ margin: 0 }}>Rotational visa workforce from SE Asia, supported by formal labour-exchange partnerships with Indonesia and Philippines. Surge contracting with annual shipping block contracts. Dual-use infrastructure eliminates idle capital through the wet season.
        </div>
      </div>
    </div>
  );
}

function GeneticsView() {
  const africanBreeds = [
    {
      name: "Boran",
      origin: "East Africa — Kenya, Ethiopia, Somalia",
      col: C.dirt,
      weight: "350–420kg",
      why: "The workhorse of East African pastoralism. Heat-tolerant, tick-resistant, highly fertile, calm temperament. Proven in northern Australian trials. Converts poor native pasture efficiently. Minimal supplementation required. The single most important genetic input for Cape York.",
      traits: ["Deep tick resistance (Bos indicus + Sanga hybrid)", "Calves unaided in harsh conditions", "Strong maternal instinct, low calf losses", "Efficient conversion on dry native grasses", "30–40% lower methane per kg than European breeds"],
    },
    {
      name: "Angoni (Ngoni)",
      origin: "Malawi, Zambia, Mozambique",
      col: C.gold,
      weight: "280–360kg",
      why: "The most heat-efficient small-frame cattle in Africa. Developed in the Rift Valley under conditions almost identical to Cape York — seasonal rainfall, laterite soils, poor dry-season pasture, high tick burden. Exceptional fertility. The Angoni proves that a small-frame animal can be productive, vigorous, and commercially valuable on poor seasonal country. At 280–360kg mature weight it sits at the lower end of the Indonesian feeder import window. Angoni semen is not yet available in Australia — this is a future import project requiring DAFF biosecurity clearance.",
      traits: ["Smallest frame of the three — sets the size floor", "Disease tolerance including trypanosomiasis and tick fever", "Calves every 12 months on minimal nutrition", "Exceptional longevity — productive to 12+ years", "Future project — DAFF import application required"],
    },
    {
      name: "Mashona",
      origin: "Zimbabwe — Zimbabwean highveld",
      col: C.green,
      weight: "320–400kg",
      why: "Zimbabwe's indigenous Sanga breed. Tick-resistant, heat-tolerant, excellent on poor veld country. The Mashona has been selectively bred for centuries by communities managing cattle on seasonally variable country with no supplementation. Carries Sanga genetics (Bos indicus × African Bos taurus) that produce superior meat quality relative to pure zebu crosses.",
      traits: ["Sanga genetics — meat quality above pure zebu", "Proven on poor laterite country without supplementation", "Strong bone structure despite small frame", "High natural resistance to East Coast Fever and tick-borne disease", "Compatible with Boran and Angoni crossing programme"],
    },
  ];

  const crossProg = [
    { gen: "Gen 0", yr: "2025–2027", desc: "Current herd assessment. Baseline PFES tagging. Cull for frame, fertility, tick score. Retain smallest, most fertile females. Boran and Mashona semen already in Australia — crossing can commence. Begin DAFF biosecurity application for Angoni semen (Malawi/Zambia) as a future phase.", col: C.muted, pct: 0 },
    { gen: "Gen 1", yr: "2027–2030", desc: "First African semen used over selected Cape York cows. F1 progeny: ~25% African blood. Measure frame weight, calving rate, tick score, pasture conversion at weaning. Begin selecting F1 females for second cross.", col: C.dirt, pct: 25 },
    { gen: "Gen 2", yr: "2030–2034", desc: "F1 females back-crossed to African bulls. F2 progeny: ~50% African blood. This is the critical generation — the animal that must prove the ecological thesis on Cape York country. Full PFES performance tracking begins.", col: C.gold, pct: 50 },
    { gen: "Gen 3", yr: "2034–2038", desc: "Stabilise the composite. Select F2 animals that hit the target phenotype — 380–400kg at maturity, >90% calving rate, Class 1–2 tick score, no supplementation required. Begin closed herd breeding for genetic integrity.", col: C.turquoise, pct: 62 },
    { gen: "Target", yr: "2038–2040", desc: "Cape York Ecological Composite — 50%+ African (Boran/Angoni/Mashona blend), remainder Cape-adapted Bos indicus. Sovereign genetic repository held at Weipa Cryo Lab. Export genetic material to SE Asian breeding programmes.", col: C.green, pct: 75 },
  ];

  const herdPath = [
    { yr: "2025", head: "50K", note: "Current base — baseline audit" },
    { yr: "2027", head: "55K", note: "Cull for frame + fertility" },
    { yr: "2030", head: "75K", note: "F1 African crosses entering herd" },
    { yr: "2034", head: "110K", note: "F2 — 50% African blood" },
    { yr: "2038", head: "135K", note: "Composite stabilised" },
    { yr: "2040", head: "150K", note: "Full ecological adaptation" },
  ];

  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Cattle Genetics — Full Rewrite</div>
      <div className="cy-section-num">04</div>
      <h1 className="cy-h1">The African<br /><em>Thesis.</em></h1>
      <p className="cy-body" style={{ maxWidth: 620, fontSize: 15 }}>
        The current Cape York herd was bred for the southern market — large frame, high grain conversion, fast finish. That logic is wrong for this country. The right genetics already exist. They were developed over thousands of years on country structurally identical to Cape York: the African pastoral belt.
      </p>

      <div style={{ background: `linear-gradient(135deg, ${C.bgMid}, ${C.bg})`, border: `1px solid ${C.dirt}44`, borderRadius: 14, padding: 22, marginBottom: 28 }}>
        <div className="cy-eyebrow" style={{ color: C.dirt, marginBottom: 10 }}>The Ecological Argument</div>
        <div className="cy-grid2" style={{ gap: 20 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.dirt, fontFamily: "'Sora', sans-serif", marginBottom: 8 }}>What Cape York country requires</div>
            {["Seasonal wet-dry cycle tolerance — no supplementation through the dry","Poor laterite soil pasture conversion at minimal inputs","High tick burden resistance — Class 1–2 without dipping","Heat stress performance at 35–40°C sustained","Calving unaided with minimal veterinary intervention","Mature weight ceiling of 400kg on native grasses only"].map(t => (
              <div key={t} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 4 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.dirt, marginTop: 7, flexShrink: 0 }}></div>
                <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.5, fontFamily: "'Sora', sans-serif" }}>{t}</div>
              </div>
            ))}
          </div>
          <div style={{ borderLeft: `1px solid ${C.border}`, paddingLeft: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.gold, fontFamily: "'Sora', sans-serif", marginBottom: 8 }}>What the African pastoral belt produced</div>
            {["Boran, Angoni, and Mashona — bred under identical conditions","Seasonally variable rainfall, laterite soils, high tick pressure","Zero supplementation selection — only the efficient survived","Small frame = low maintenance cost per head","Fertility as survival mechanism — calves every 12 months","1,000+ years of genetic pressure toward exactly this phenotype"].map(t => (
              <div key={t} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 4 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.gold, marginTop: 7, flexShrink: 0 }}></div>
                <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.5, fontFamily: "'Sora', sans-serif" }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cy-eyebrow" style={{ marginBottom: 12 }}>The Three Foundation Breeds</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
        {africanBreeds.map(b => (
          <div key={b.name} className="cy-card" style={{ borderLeft: `4px solid ${b.col}`, borderRadius: "0 12px 12px 0" }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: b.col, letterSpacing: "0.1em", marginBottom: 4, textTransform: "uppercase" }}>{b.origin}</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: C.sand, marginBottom: 4 }}>{b.name}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: b.col }}>Mature weight: {b.weight}</div>
              </div>
              <div style={{ flex: 2, minWidth: 260 }}>
                <div className="cy-body" style={{ margin: "0 0 10px", fontSize: 12 }}>{b.why}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {b.traits.map(t => (
                    <div key={t} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: b.col, marginTop: 6, flexShrink: 0 }}></div>
                      <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.5, fontFamily: "'Sora', sans-serif" }}>{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cy-eyebrow" style={{ marginBottom: 12 }}>Crossing Programme — Target: 50%+ African Blood</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
        {crossProg.map((g, i) => (
          <div key={g.gen} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ flexShrink: 0, width: 56, textAlign: "center", paddingTop: 2 }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 15, color: g.col === C.muted ? C.border : g.col }}>{g.gen}</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C.muted }}>{g.yr}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ height: 6, background: C.faint, borderRadius: 3, marginBottom: 8, overflow: "hidden" }}>
                <div style={{ width: `${g.pct}%`, height: "100%", background: g.col === C.muted ? C.faint : g.col, borderRadius: 3, transition: "width 0.5s" }}></div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                <div style={{ fontSize: 12, color: C.sand, fontFamily: "'Sora', sans-serif", fontWeight: 600 }}>
                  {g.pct > 0 ? `${g.pct}%+ African blood` : "Current herd — 0% African"}
                </div>
              </div>
              <div className="cy-body" style={{ margin: 0, fontSize: 12 }}>{g.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="cy-eyebrow" style={{ marginBottom: 14 }}>Herd Expansion Pathway</div>
      <div style={{ position: "relative", marginBottom: 28 }}>
        <div style={{ position: "absolute", top: 24, left: 20, right: 20, height: 2, background: `linear-gradient(to right, ${C.dirt}, ${C.turquoise})`, zIndex: 0 }}></div>
        <div style={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
          {herdPath.map((p, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: i === herdPath.length - 1 ? C.turquoise : C.dirt, border: `2px solid ${C.bg}`, marginTop: 18 }}></div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.turquoise, fontFamily: "'DM Serif Display', serif", whiteSpace: "nowrap" }}>{p.head}</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: C.muted, whiteSpace: "nowrap" }}>{p.yr}</div>
              <div style={{ fontSize: 10, color: C.muted, textAlign: "center", maxWidth: 72, lineHeight: 1.4 }}>{p.note}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="cy-grid2" style={{ gap: 12, marginBottom: 16 }}>
        <div className="cy-card cy-card-turq">
          <div className="cy-eyebrow">Target Phenotype: Cape York Ecological Composite</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
            {[
              { l: "Mature weight", v: "≤400kg on native pasture" },
              { l: "African blood", v: "≥50% Boran/Angoni/Mashona" },
              { l: "Calving rate", v: ">90% unassisted" },
              { l: "Tick score", v: "Class 1–2 without dipping" },
              { l: "Supplement requirement", v: "Zero — native pasture only" },
              { l: "Genetic units/yr by 2038", v: "5,000 cryo certified" },
            ].map(it => (
              <div key={it.l} style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 8 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: C.turquoise, fontFamily: "'DM Serif Display', serif" }}>{it.v}</div>
                <div className="cy-stat-lbl">{it.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="cy-card cy-card-dirt">
          <div className="cy-eyebrow" style={{ color: C.dirt }}>Genetic Material Availability</div>
          <div className="cy-body" style={{ marginBottom: 12 }}>Boran and Mashona semen are already in Australia — the crossing programme can begin immediately. Angoni remains a future import project requiring DAFF biosecurity clearance. The Weipa Cryo Lab is the sovereign genetic repository for the full programme.</div>
          {[
            { country: "In Australia", breed: "Boran", body: "Semen already available in Australia — crossing programme can commence immediately. No import approval required.", flag: "✓" },
            { country: "In Australia", breed: "Mashona", body: "Semen already available in Australia — crossing programme can commence immediately. No import approval required.", flag: "✓" },
            { country: "Future project", breed: "Angoni", body: "Not yet available in Australia. Requires DAFF biosecurity clearance (est. 3–5 years). Begin application process in Phase I.", flag: "⏳" },
          ].map(s => (
            <div key={s.breed} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
              <div style={{ fontSize: 14, flexShrink: 0, lineHeight: 1, paddingTop: 1 }}>{s.flag}</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: s.flag === "✓" ? C.turquoise : C.muted, fontFamily: "'Sora', sans-serif" }}>{s.country} — {s.breed}</div>
                <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.5, fontFamily: "'Sora', sans-serif" }}>{s.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cy-card" style={{ borderColor: C.gold + "44" }}>
        <div className="cy-eyebrow" style={{ color: C.gold }}>Why 400kg Is a Design Constraint, Not a Compromise</div>
        <div className="cy-body" style={{ margin: 0 }}>
          An animal reaching 400kg mature weight on Cape York native pasture without supplementation is proving that the selection is working — it is converting poor seasonal country into protein at a rate the country can sustain. That is the ecological proof. The market proof is separate but complementary: Indonesian feedlots import Australian feeder cattle at an average of around 320kg liveweight — Bos indicus steers at 2 to 3 years of age, finished in Indonesian feedlots to 500–600kg. A cow with 400kg mature weight produces exactly these animals. The ecology and the market produce the same answer, but they are two distinct arguments — not one.
        </div>
      </div>
    </div>
  );
}

function ExportsView() {
  const [sel, setSel] = useState(0);
  const streams = [
    {
      label: "Live Cattle", vol: "90,000 head/yr", col: C.dirt, icon: "🐂",
      mode: "Sea — bulk livestock vessel", verify: "PFES tags + trace ID",
      economics: [
        { l: "Price per head (Indonesia)", v: "AUD $650–900" },
        { l: "Gross revenue", v: "AUD $58–81M/yr" },
        { l: "Freight (Weipa → Jakarta)", v: "~$80–100/head" },
        { l: "Net margin (est.)", v: "AUD $400–600/head" },
      ],
      detail: "Indonesian food security mandates create captive demand for fertility-verified, traceable live cattle. Breeding contracts add a recurrence premium — buyers return for replenishment. PFES tagging provides the traceability layer required for bilateral regulatory pre-approval.",
    },
    {
      label: "Boxed Ecological Beef", vol: "30,000 MT/yr", col: C.turquoise, icon: "📦",
      mode: "Reefer container — chilled + frozen",
      verify: "Cold chain + PFES QR code",
      economics: [
        { l: "Chilled premium (S. Korea/Vietnam)", v: "AUD $8–12/kg" },
        { l: "Frozen standard", v: "AUD $5–7/kg" },
        { l: "Gross revenue", v: "AUD $150–360M/yr" },
        { l: "Cold chain opex (5,000 pallet hub)", v: "~12–15% of revenue" },
      ],
      detail: "South Korean ESG buyers pay 30–40% premiums for certified ecological beef with full carbon accounting. Vietnam and Philippines absorb frozen product at standard pricing. Dual cold-chain temp zones allow simultaneous chilled and frozen packing from the same throughput.",
    },
    {
      label: "Genetic Material", vol: "5,000 units/yr", col: C.green, icon: "🧬",
      mode: "Air + sea — cryo certified",
      verify: "Cryo registry + PFES certification",
      economics: [
        { l: "Semen straws", v: "AUD $200–350/unit" },
        { l: "Embryos", v: "AUD $800–1,500/unit" },
        { l: "Gross revenue (blended)", v: "AUD $1.5–7.5M/yr" },
        { l: "Cryo lab opex", v: "Low — fixed cost" },
      ],
      detail: "Cape-adapted composite genetics command premium pricing in SE Asian breeding programs. Indonesia's national breeding upgrade program is an active off-take candidate. The cryo certification lab at Weipa is the only sovereign-grade facility of this type north of Townsville.",
    },
    {
      label: "Ecological Credits", vol: "350–400K tCO2e/yr", col: C.sky, icon: "🌿",
      mode: "Digital export — instantaneous",
      verify: "Land ledger + PFES system",
      economics: [
        { l: "Carbon credit (ACCU equivalent)", v: "AUD $35–60/t" },
        { l: "Biodiversity + methane stacking", v: "+15–20% premium" },
        { l: "Gross revenue", v: "AUD $12–24M/yr" },
        { l: "Verification cost", v: "~AUD $3–5/t" },
      ],
      detail: "Carbon from extensive low-input Cape York pastoral country is verifiable under ERF Soil Carbon + vegetation methods. Biodiversity and methane credits can be stacked under the PFES bundle. Digital export requires no physical logistics. ESG-driven sovereign buyers in South Korea and Singapore are primary targets for long-term offtake.",
    },
  ];
  const s = streams[sel];
  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Export Streams</div>
      <div className="cy-section-num">05</div>
      <h1 className="cy-h1">Four Streams.<br />One Standard.</h1>
      <p className="cy-body" style={{ maxWidth: 560 }}>All verified under the Paniri Fertility + Ecology Standard (PFES). Targets by 2035.</p>

      <div className="cy-grid4" style={{ marginBottom: 20 }}>
        {streams.map((st, i) => (
          <div key={i} className="cy-card" style={{ borderColor: sel === i ? st.col : C.border, cursor: "pointer", transition: "border-color 0.15s" }}
            onClick={() => setSel(i)}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>{st.icon}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: sel === i ? st.col : C.text, fontFamily: "'Sora', sans-serif", marginBottom: 4 }}>{st.label}</div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 16, color: st.col }}>{st.vol}</div>
          </div>
        ))}
      </div>

      <div className="cy-card" style={{ borderColor: s.col + "55", marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
          <span className="cy-pill" style={{ background: s.col + "22", color: s.col }}>MODE: {s.mode}</span>
          <span className="cy-pill" style={{ background: C.faint, color: C.muted }}>VERIFY: {s.verify}</span>
        </div>
        <div className="cy-body" style={{ marginBottom: 16 }}>{s.detail}</div>
        <div className="cy-eyebrow" style={{ marginBottom: 10 }}>Unit Economics</div>
        <div className="cy-grid2">
          {s.economics.map(e => (
            <div key={e.l} style={{ borderTop: `1px solid ${C.border}`, paddingTop: 8 }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 3 }}>{e.l}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: s.col, fontFamily: "'DM Serif Display', serif" }}>{e.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TerminalView() {
  const zones = [
    { label: "Bonded Livestock Zone", detail: "500–800 head/day throughput. Lairage, veterinary inspection, PFES tagging and trace activation. Loading into bulk livestock vessels via covered race system.", col: C.dirt },
    { label: "Cold Chain Hub", detail: "5,000 pallet capacity. Dual-temperature zones — chilled (0–4°C) and frozen (−18°C). Integrated PFES QR printing for reefer container tracking.", col: C.turquoise },
    { label: "Cryo Certification Lab", detail: "Semen and embryo processing, storage, and export certification. Only sovereign-grade cryo facility north of Townsville. PFES registered and ISO pathway active.", col: C.green },
    { label: "Digital Trade Deck", detail: "Carbon and biodiversity credit ledger. Integrates with PFES land ledger for real-time verification. Digital export clearance for ecological credit buyers.", col: C.sky },
  ];
  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Infrastructure</div>
      <div className="cy-section-num">06</div>
      <h1 className="cy-h1">Weipa Export<br />Terminal.</h1>
      <p className="cy-body" style={{ maxWidth: 560 }}>Deepwater. Bonded. Renewable-powered. The only purpose-built ecological protein export facility in the northern hemisphere trade corridor.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
        {zones.map((z, i) => (
          <div key={i} className="cy-card" style={{ display: "flex", gap: 16, borderLeft: `3px solid ${z.col}`, borderRadius: "0 12px 12px 0" }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: z.col, flexShrink: 0, paddingTop: 2 }}>0{i + 1}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.sand, marginBottom: 5, fontFamily: "'Sora', sans-serif" }}>{z.label}</div>
              <div className="cy-body" style={{ margin: 0, fontSize: 12 }}>{z.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="cy-grid2">
        <div className="cy-card">
          <div className="cy-eyebrow">Energy + Redundancy</div>
          <div className="cy-body">Solar + battery microgrid, terminal-scale. Black-start capable — full cold chain and processing resumption without grid connection. Backup water storage. Elevated floor levels with flood-resilient perimeter for wet-season events.</div>
        </div>
        <div className="cy-card">
          <div className="cy-eyebrow">Logistics Integration</div>
          <div className="cy-body">Modular truck corridors inland to Holroyd and Watson. Road resilience upgrades co-funded via NAIF and QLD Transport. Surge contracting with annual shipping block bookings. Port of Weipa deepwater berth access for bulk livestock and reefer vessels.</div>
        </div>
      </div>
    </div>
  );
}

function MarketsView() {
  const markets = [
    { country: "Indonesia", flag: "🇮🇩", col: C.dirt, streams: ["Live cattle — breeding contracts", "Genetic material — national program"], mandate: "Food security mandate. Government-backed breeding upgrade. Captive volume.", offtake: "Multi-year sovereign contract" },
    { country: "Vietnam", flag: "🇻🇳", col: C.turquoise, streams: ["Boxed ecological beef — chilled + frozen", "Genetic material"], mandate: "Rising middle class protein demand. Vietnamese beef market growing >12%/yr.", offtake: "Long-term commercial offtake" },
    { country: "Philippines", flag: "🇵🇭", col: C.sky, streams: ["Boxed beef — frozen", "Labour exchange return"], mandate: "Beef import dependent. Labour partnership creates reciprocal trade relationship.", offtake: "Bilateral trade corridor" },
    { country: "South Korea", flag: "🇰🇷", col: C.gold, streams: ["Premium chilled beef — ESG certified", "Ecological credits"], mandate: "ESG procurement mandates. Premium premia for certified ecological product.", offtake: "ESG-aligned sovereign fund anchor" },
  ];
  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Market Alignment</div>
      <div className="cy-section-num">07</div>
      <h1 className="cy-h1">Sovereign<br />Buyers.</h1>
      <p className="cy-body" style={{ maxWidth: 560 }}>Four target markets. Each with a structural mandate that aligns to Cape York's output mix. Not open-market exposure — bilateral corridors with regulatory pre-approval.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {markets.map(m => (
          <div key={m.country} className="cy-card" style={{ borderColor: m.col + "44" }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={{ fontSize: 28, flexShrink: 0 }}>{m.flag}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: m.col, fontFamily: "'Sora', sans-serif", marginBottom: 4 }}>{m.country}</div>
                <div className="cy-body" style={{ marginBottom: 8 }}>{m.mandate}</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 6 }}>
                  {m.streams.map(s => <span key={s} className="cy-tag">{s}</span>)}
                </div>
                <span className="cy-pill" style={{ background: m.col + "22", color: m.col }}>Offtake: {m.offtake}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cy-card cy-card-turq">
        <div className="cy-eyebrow">DFAT Trade Embedding</div>
        <div className="cy-body" style={{ marginBottom: 10 }}>Cape York protocol to be embedded into existing and pending bilateral trade frameworks:</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["Indonesia–Australia CEPA", "Vietnam FTA", "ASEAN regional food security protocols", "Philippine bilateral labour agreement"].map(t => (
            <span key={t} className="cy-tag" style={{ borderColor: C.turquoise + "44", color: C.turquoise }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CapitalView() {
  const stack = [
    { label: "Federal Government Equity", sub: "Commonwealth co-investment (NRF + NAIF)", amt: "$400M", pct: 40, col: C.turquoise, note: "Foundation layer. Cannot raise the remaining capital without sovereign anchor." },
    { label: "Rio Tinto Infrastructure Contribution", sub: "Port, power, roads — valued as equity or concessional lease", amt: "$250M", pct: 25, col: C.dirt, note: "Existing Weipa infrastructure contributed in-kind, not cash. Avoids greenfield port build." },
    { label: "Paniri Agricultural Co.", sub: "PFES IP, cattle programme, operations", amt: "$50M", pct: 5, col: C.green, note: "Operating partner equity. Holds the standard, the genetics programme, and the market relationships." },
    { label: "Sovereign Wealth Co-investors", sub: "Singapore GIC, Korea NPS, UAE funds", amt: "$200M", pct: 20, col: C.gold, note: "Follows sovereign signal. Committed once Canberra and Rio Tinto are aligned." },
    { label: "ESG-aligned Private Equity", sub: "Infrastructure fund tier", amt: "$100M", pct: 10, col: C.sky, note: "Last tranche. Fills working capital and buffer once co-investor anchor is in place." },
  ];

  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Capital Strategy</div>
      <div className="cy-section-num">08</div>
      <h1 className="cy-h1">$1 Billion AUD.<br />Government-anchored.</h1>
      <p className="cy-body" style={{ maxWidth: 580 }}>
        This capital cannot be raised through a conventional project round. The foundation is federal co-investment — framed as strategic food security infrastructure, not a commercial punt. Once the sovereign anchor is committed, every other layer follows.
      </p>

      <div style={{ background: `linear-gradient(135deg, ${C.jungle}99, ${C.bgCard})`, border: `1px solid ${C.turquoise}33`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
        <div className="cy-eyebrow" style={{ marginBottom: 8 }}>The Sequencing Rule</div>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 17, color: C.sand, lineHeight: 1.5 }}>
          Federal Government + Rio Tinto alignment first. Sovereign wealth co-investors follow sovereign signal — they don't lead it. Private equity fills last.
        </div>
      </div>

      <div className="cy-eyebrow" style={{ marginBottom: 14 }}>Capital Stack</div>
      <div style={{ marginBottom: 8 }}>
        {stack.map(r => (
          <div key={r.label} style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 5 }}>
              <div style={{ width: 200, flexShrink: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: r.col, fontFamily: "'Sora', sans-serif" }}>{r.label}</div>
                <div style={{ fontSize: 10, color: C.muted, fontFamily: "'Sora', sans-serif" }}>{r.sub}</div>
              </div>
              <div style={{ flex: 1, height: 6, background: C.faint, borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: `${r.pct}%`, height: "100%", background: r.col, borderRadius: 4 }}></div>
              </div>
              <div style={{ width: 60, fontSize: 15, fontWeight: 600, color: r.col, textAlign: "right", fontFamily: "'DM Serif Display', serif", flexShrink: 0 }}>{r.amt}</div>
            </div>
            <div style={{ paddingLeft: 212, fontSize: 11, color: C.muted, fontFamily: "'Sora', sans-serif", lineHeight: 1.5 }}>{r.note}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", borderTop: `1px solid ${C.border}`, paddingTop: 10, marginTop: 4 }}>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: C.sand }}>Total: $1.0B AUD</span>
      </div>

      <hr className="cy-divider" />

      <div className="cy-eyebrow" style={{ marginBottom: 12 }}>Federal Government Framing</div>
      <div className="cy-grid2">
        {[
          { label: "Strategic food security infrastructure", desc: "Australia's northern export corridor into the world's fastest-growing protein market. Analogous to Ord River, Darwin port expansion, Snowy Hydro 2.0 — infrastructure the Commonwealth has funded before when the geopolitical logic is clear." },
          { label: "Defence-adjacent supply chain", desc: "Sovereign protein supply corridor in the Indo-Pacific. Reduces regional food insecurity that drives instability. Positions Australia as a reliable supplier to key bilateral partners — Indonesia, Vietnam, Philippines — ahead of competing origin countries." },
          { label: "Northern Australia mandate", desc: "NAIF + NRF were created for exactly this. A $1B northern infrastructure project with verifiable export revenue, sovereign buyer offtake, and ecological co-benefits is the strongest possible use of both facilities." },
          { label: "Precedents", desc: "Ord River Irrigation Scheme. Darwin port infrastructure. Snowy Hydro 2.0. The Commonwealth has repeatedly co-invested in transformative northern and remote infrastructure when the long-term strategic case was clear." },
        ].map(it => (
          <div key={it.label} className="cy-card">
            <div style={{ fontSize: 12, fontWeight: 600, color: C.turquoise, marginBottom: 5, fontFamily: "'Sora', sans-serif" }}>{it.label}</div>
            <div className="cy-body" style={{ margin: 0, fontSize: 12 }}>{it.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GovernanceView() {
  const founders = [
    {
      party: "Federal Government",
      role: "Anchor equity + enabling legislation",
      col: C.turquoise,
      contribution: "$400M via NRF + NAIF",
      what: [
        "Special Economic Zone designation for Weipa",
        "NAIF concessional debt facility",
        "NRF equity stake via Commonwealth",
        "DFAT bilateral trade embedding",
        "Biosecurity and export pathway clearances",
      ],
      gets: [
        "Sovereign food security corridor into SE Asia",
        "Northern Australia development narrative",
        "Defence-adjacent supply chain",
        "NRF return via export royalties and equity appreciation",
      ],
    },
    {
      party: "Rio Tinto",
      role: "Infrastructure partner",
      col: C.dirt,
      contribution: "$250M valued infrastructure equity",
      what: [
        "Weipa deepwater port access",
        "Power grid and accommodation villages",
        "Road and logistics network to inland country",
        "Existing regulatory tenure and land agreements",
        "Operational expertise in remote surge logistics",
      ],
      gets: [
        "Diversification of Weipa tenure narrative",
        "Shared infrastructure utilisation — off-bauxite-season",
        "Strengthened social licence with Wik / Wik-Mungkan peoples",
        "Northern Australia enabler positioning vs. extractive-only story",
      ],
    },
    {
      party: "Paniri Agricultural Co.",
      role: "Operating partner + IP holder",
      col: C.green,
      contribution: "$50M equity — PFES IP + operations",
      what: [
        "Paniri Fertility + Ecology Standard (PFES) — the verification layer",
        "Cattle genetics programme and herd expansion design",
        "Market relationships in Indonesia, Vietnam, Korea",
        "Seasonal operating model design and execution",
        "Corporate Carbon ecological credit origination",
      ],
      gets: [
        "Full operating contract for the SPV",
        "PFES licensing revenue as standard scales",
        "Carried interest on land and herd revaluation",
        "Global pilot status for Paniri model replication",
      ],
    },
  ];

  return (
    <div className="cy-page">
      <div className="cy-eyebrow">SPV Architecture + Governance</div>
      <div className="cy-section-num">09</div>
      <h1 className="cy-h1">The Founding<br />Triangle.</h1>
      <p className="cy-body" style={{ maxWidth: 580 }}>
        Cape York 2040 is structured as a Special Purpose Vehicle. Three founding parties. Each contributes what the others can't replicate. The SPV holds the assets, the licences, and the export standard.
      </p>

      <div style={{ background: `linear-gradient(160deg, ${C.bgMid}, ${C.bg})`, border: `1px solid ${C.border}`, borderRadius: 14, padding: 28, marginBottom: 28, position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ display: "inline-block", padding: "10px 28px", background: C.faint, border: `1px solid ${C.turquoise}55`, borderRadius: 30 }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: C.turquoise, letterSpacing: "0.12em" }}>CAPE YORK 2040 SPV</div>
            <div style={{ fontSize: 11, color: C.muted, fontFamily: "'Sora', sans-serif", marginTop: 2 }}>Special Purpose Vehicle — Weipa, QLD</div>
          </div>
        </div>
        <div className="cy-grid3" style={{ gap: 10 }}>
          {founders.map(f => (
            <div key={f.party} style={{ background: C.bgCard, border: `1px solid ${f.col}44`, borderRadius: 10, padding: 16, textAlign: "center" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: f.col, margin: "0 auto 10px" }}></div>
              <div style={{ fontSize: 13, fontWeight: 600, color: f.col, fontFamily: "'Sora', sans-serif", marginBottom: 3 }}>{f.party}</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C.muted, letterSpacing: "0.08em", marginBottom: 6 }}>{f.role}</div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 14, color: C.sand }}>{f.contribution}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
          <div style={{ fontSize: 11, color: C.muted, fontFamily: "'IBM Plex Mono', monospace", textAlign: "center", maxWidth: 500, lineHeight: 1.6 }}>
            Sovereign wealth co-investors (Singapore GIC, Korea NPS, UAE) enter as minority equity after the founding triangle is committed. ESG-aligned private equity fills last.
          </div>
        </div>
      </div>

      {founders.map(f => (
        <div key={f.party} className="cy-card" style={{ borderLeft: `3px solid ${f.col}`, borderRadius: "0 12px 12px 0", marginBottom: 10 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginBottom: 12, flexWrap: "wrap" }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: f.col, fontFamily: "'Sora', sans-serif" }}>{f.party}</div>
            <span className="cy-pill" style={{ background: f.col + "18", color: f.col }}>{f.contribution}</span>
          </div>
          <div className="cy-grid2" style={{ gap: 16 }}>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: f.col, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Contributes</div>
              {f.what.map(w => (
                <div key={w} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 5 }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: f.col, marginTop: 7, flexShrink: 0 }}></div>
                  <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.5, fontFamily: "'Sora', sans-serif" }}>{w}</div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Receives</div>
              {f.gets.map(g => (
                <div key={g} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 5 }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.muted, marginTop: 7, flexShrink: 0 }}></div>
                  <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.5, fontFamily: "'Sora', sans-serif" }}>{g}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <hr className="cy-divider" />

      <div className="cy-card" style={{ borderColor: C.gold + "44" }}>
        <div className="cy-eyebrow" style={{ color: C.gold }}>Traditional Owner Alignment — Non-Negotiable</div>
        <div className="cy-body" style={{ marginBottom: 10 }}>
          Wik and Wik-Mungkan peoples hold native title over significant Cape York country. Free, prior and informed consent is a precondition — legally and commercially. The land use framework must be co-designed, not consulted. This is not a risk to be managed. It is a foundation to be built on.
        </div>
        <div className="cy-grid2" style={{ gap: 14 }}>
          {[
            { l: "Native title agreements", d: "Land use frameworks co-designed with Wik and Wik-Mungkan traditional owner groups before any capital is committed." },
            { l: "Employment and economic participation", d: "Traditional owner employment targets written into the SPV operating agreement. Workforce pipeline built through PEEC and regional training." },
            { l: "Ecological stewardship recognition", d: "PFES credits structured to recognise traditional ecological knowledge as a verifiable input. Royalty stream embedded from Year 1." },
            { l: "Governance representation", d: "Traditional owner seat on the SPV board. Not advisory — voting." },
          ].map(it => (
            <div key={it.l}>
              <div style={{ fontSize: 12, fontWeight: 600, color: C.gold, marginBottom: 4, fontFamily: "'Sora', sans-serif" }}>{it.l}</div>
              <div className="cy-body" style={{ margin: 0, fontSize: 12 }}>{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RegulatoryView() {
  const pathways = [
    {
      cat: "National Designations",
      col: C.turquoise,
      items: [
        { label: "QLD Agricultural Export Precinct", body: "Formal recognition by QLD Government enabling infrastructure co-funding, zoning flexibility, and regulatory fast-track for Weipa terminal." },
        { label: "ABF Bonded Zone Certification", body: "Australian Border Force bonded zone status enabling foreign goods processing, live export holding, and cryo export without standard import duties." },
        { label: "DAFF Biosecurity Clearance", body: "Department of Agriculture, Fisheries and Forestry biosecurity pathway for live export, genetic material export, and imported feed/vaccines." },
      ]
    },
    {
      cat: "International Recognition",
      col: C.gold,
      items: [
        { label: "PFES ISO Registration", body: "Paniri Fertility + Ecology Standard registered with ISO for international recognition as a sovereign-grade verification system. Enables bilateral pre-approval for Cape-origin product." },
        { label: "Carbon Trust Dual-Certification", body: "Dual certification pathway with Carbon Trust enables recognition of Cape York ecological credits in UK, EU, and Asian carbon markets." },
        { label: "UN/OECD Climate-Aligned Export Pilot Zone", body: "International registration as climate-aligned trade zone — creates template eligibility for Paniri model replication and international IP licensing." },
      ]
    },
    {
      cat: "Trade Alignment",
      col: C.sky,
      items: [
        { label: "Indonesia–Australia CEPA", body: "DFAT coordination to embed Cape York origin protocol — enabling tariff preference, biosecurity pre-clearance, and bilateral breeding contract framework." },
        { label: "Vietnam FTA", body: "Boxed ecological beef and genetic material export channels embedded into existing FTA framework with regulatory pre-approval pathway." },
        { label: "ASEAN Regional Food Security", body: "Cape York 2040 positioned as sovereign-aligned supply corridor within ASEAN regional food security protocol — creates multi-country access via single diplomatic track." },
      ]
    },
  ];
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Regulatory + Trade Designation</div>
      <div className="cy-section-num">10</div>
      <h1 className="cy-h1">Regulatory<br />Architecture.</h1>
      <p className="cy-body" style={{ maxWidth: 560 }}>Three designation tracks pursued in parallel. Private standards + government channels simultaneously to avoid single-point regulatory delay.</p>

      {pathways.map((cat, ci) => (
        <div key={cat.cat} style={{ marginBottom: 20 }}>
          <div className="cy-eyebrow" style={{ color: cat.col, marginBottom: 8 }}>{cat.cat}</div>
          {cat.items.map((item, ii) => {
            const key = `${ci}-${ii}`;
            const open = openIdx === key;
            return (
              <div key={item.label} className="cy-accordion">
                <div className="cy-accordion-head" onClick={() => setOpenIdx(open ? null : key)}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: cat.col, flexShrink: 0 }}></div>
                  <div style={{ flex: 1, fontSize: 13, fontWeight: 500, color: C.sand, fontFamily: "'Sora', sans-serif" }}>{item.label}</div>
                  <div style={{ fontSize: 10, color: C.muted }}>{open ? "▲" : "▼"}</div>
                </div>
                {open && <div className="cy-accordion-body">{item.body}</div>}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function PhasesView({ setView }) {
  const phases = [
    {
      n: "0", years: "2027–2031", col: C.sky,
      label: "Cape Passage — Coastal Logistics Proof-of-Concept",
      note: "Self-funded $6–14M. Prerequisite for everything that follows.",
      items: [
        "Seasonal charter vessel from Weipa; first voyage May 2027",
        "Validate port logistics, animal welfare outcomes, and per-head economics",
        "Acquire southern backgrounding block within 100km of Townsville",
        "Scale to regional aggregation — neighbouring Cape York stations fee-for-service",
        "Acquire dedicated vessel; 10,000–15,000 head/season by 2030",
        "Build NQBP port relationship — foundation for Rio Tinto SPV conversation",
        "Generate whole-of-chain carbon narrative for ACCU institutional buyers",
      ]
    },
    {
      n: "I", years: "2025–2030", col: C.turquoise,
      label: "EPEZ Designation + Feasibility",
      note: "Runs in parallel with Cape Passage. Regulatory groundwork.",
      items: [
        "Submit QLD Agricultural Export Precinct proposal",
        "Secure zoning and permitting path for Weipa Terminal",
        "Finalise PFES structure and ISO submission",
        "Begin offtake discussions with Indonesia and Vietnam",
        "Initiate Federal Government co-investment conversation (NRF + NAIF)",
        "Bilateral engagement with DFAT for trade embedding",
        "Establish PEEC labour framework with Indonesia and Philippines",
        "Begin SPV structuring discussions with Rio Tinto",
      ]
    },
    {
      n: "II", years: "2030–2035", col: C.gold,
      label: "Terminal Construction + First Contracts",
      note: "Cape Passage operational. SPV committed. Build begins.",
      items: [
        "Weipa Terminal construction begins (Phase 1 — livestock + cold chain)",
        "First surge export model tested and activated",
        "First sovereign trade contracts executed (Indonesia breeding + Korea beef)",
        "Herd reaches 95,000 head — first composite generation",
        "Genetic material export commences",
        "ABF bonded zone fully operational",
        "PFES ISO registered and active across all four streams",
      ]
    },
    {
      n: "III", years: "2035–2040", col: C.dirt,
      label: "Full Export + Model Licensing",
      note: "Full ROI cycle. PFES licensed globally. Cape York recognised as world model.",
      items: [
        "Cape York recognised as global pilot for climate-aligned protein trade",
        "Paniri Fertility + Ecology Standard licensed or replicated in other ecological trade regions",
        "Full ROI cycle begins via land revaluation, export premiums, and ecological IP monetisation",
        "150,000 head ecological herd at full productivity",
        "All four export streams at target volume",
        "Cape York 2040 model pitched for replication in Northern Territory and Western Arnhem Land",
      ]
    },
  ];
  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Phase Plan</div>
      <div className="cy-section-num">11</div>
      <h1 className="cy-h1">2027 to 2040.<br />Four Phases.</h1>
      <p className="cy-body" style={{ maxWidth: 560 }}>Cape Passage runs first. Everything else is built on what it proves. Capital deployed against milestones, not calendar.</p>
      <div style={{ marginBottom: 14 }}>
        <button onClick={() => setView("passage")} style={{ padding: "7px 16px", background: C.sky + "22", border: `1px solid ${C.sky}55`, borderRadius: 20, color: C.sky, fontSize: 11, cursor: "pointer", fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.06em" }}>
          ↗ Full Cape Passage detail
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {phases.map(p => (
          <div key={p.n} className="cy-card" style={{ borderLeft: `4px solid ${p.col}`, borderRadius: "0 12px 12px 0" }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 8 }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: p.col, lineHeight: 1, flexShrink: 0 }}>{p.n}</div>
              <div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: p.col, letterSpacing: "0.1em", marginBottom: 3 }}>{p.years}</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: C.sand }}>{p.label}</div>
                {p.note && <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: C.muted, marginTop: 4 }}>{p.note}</div>}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {p.items.map(item => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: p.col, marginTop: 7, flexShrink: 0 }}></div>
                  <div style={{ fontSize: 12, color: C.muted, fontFamily: "'Sora', sans-serif", lineHeight: 1.5 }}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RisksView() {
  const risks = [
    {
      risk: "Seasonal Access Constraints",
      likelihood: "High",
      impact: "High",
      col: C.dirt,
      mitigation: "Pre-positioned dry-season storage at Watson and Holroyd. Wet-season staging inventory. Road resilience upgrades co-funded via NAIF. Surge logistics contracts specify force-majeure wet season clauses.",
    },
    {
      risk: "Labour Variability",
      likelihood: "Medium",
      impact: "High",
      col: C.gold,
      mitigation: "PEEC visa-structured labour loops with formal bilateral agreements — Indonesia and Philippines. Surge contracting ensures labour is available in advance. Off-season training and credentialing maintains corps readiness.",
    },
    {
      risk: "Regulatory Delay",
      likelihood: "Medium",
      impact: "High",
      col: C.sky,
      mitigation: "Parallel pursuit of private standards (PFES ISO) alongside government channels. DFAT bilateral engagement de-risks single-agency bottlenecks. Phased capital deployment ensures no stranded assets if Phase I designation is delayed.",
    },
    {
      risk: "Capital Volatility",
      likelihood: "Medium",
      impact: "High",
      col: C.turquoise,
      mitigation: "Staggered phase structure. Offtake agreements executed before construction capital committed. NAIF concessional debt reduces private equity exposure. ESG mandate alignment creates counter-cyclical investor base.",
    },
    {
      risk: "Geopolitical Trade Disruption",
      likelihood: "Low",
      impact: "Very High",
      col: C.green,
      mitigation: "Four independent target markets. No single-country revenue dependency by design. Bilateral embedding via DFAT creates government-to-government support layer above commercial exposure.",
    },
    {
      risk: "Cattle Base Underperformance",
      likelihood: "Low",
      impact: "Medium",
      col: C.muted,
      mitigation: "Herd expansion pathway has 15-year runway with three checkpoint phases. Selective culling from Year 1. SheepDog drone monitoring enables early detection of herd health or fertility issues at scale.",
    },
  ];
  return (
    <div className="cy-page">
      <div className="cy-eyebrow">Risks + Contingencies</div>
      <div className="cy-section-num">12</div>
      <h1 className="cy-h1">Risks Are<br />Accounted For.</h1>
      <p className="cy-body" style={{ maxWidth: 560 }}>Every structural risk has a designed mitigation. The model has been built to be resilient — not optimistic.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {risks.map(r => (
          <div key={r.risk} className="cy-card" style={{ borderLeft: `3px solid ${r.col}`, borderRadius: "0 12px 12px 0" }}>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.sand, fontFamily: "'Sora', sans-serif", flex: 1 }}>{r.risk}</div>
              <div style={{ display: "flex", gap: 6 }}>
                <span className="cy-pill" style={{ background: C.faint, color: C.muted }}>Likelihood: {r.likelihood}</span>
                <span className="cy-pill" style={{ background: r.col + "22", color: r.col }}>Impact: {r.impact}</span>
              </div>
            </div>
            <div className="cy-body" style={{ margin: 0, fontSize: 12 }}><strong style={{ color: C.muted, fontWeight: 600 }}>Mitigation: </strong>{r.mitigation}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdvisorView() {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  async function send() {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input.trim() };
    const newMsgs = [...msgs, userMsg];
    setMsgs(newMsgs);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: SYS, messages: newMsgs }),
      });
      const data = await res.json();
      const text = data.content?.find(b => b.type === "text")?.text || "No response.";
      setMsgs(prev => [...prev, { role: "assistant", content: text }]);
    } catch {
      setMsgs(prev => [...prev, { role: "assistant", content: "Connection error. Try again." }]);
    }
    setLoading(false);
  }

  const starters = [
    "What makes Weipa the right location?",
    "Break down the live cattle unit economics",
    "How does PFES work across all four streams?",
    "What's the NAIF funding pathway?",
  ];

  return (
    <div className="cy-page" style={{ display: "flex", flexDirection: "column" }}>
      <div className="cy-eyebrow">Paniri Strategic Advisor</div>
      <div className="cy-section-num">13</div>
      <h1 className="cy-h1" style={{ marginBottom: 6 }}>AI Advisor.</h1>
      <p className="cy-body" style={{ marginBottom: 16 }}>Complete knowledge of Cape York 2040, PFES, capital structure, market alignment, and the Black Mat Holdings portfolio.</p>

      {msgs.length === 0 && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          {starters.map(s => (
            <button key={s} onClick={() => { setInput(s); }} style={{ padding: "6px 12px", background: C.faint, border: `1px solid ${C.border}`, borderRadius: 20, color: C.muted, fontSize: 11, cursor: "pointer", fontFamily: "'Sora', sans-serif", transition: "all 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.turquoise; e.currentTarget.style.color = C.turquoise; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted; }}>
              {s}
            </button>
          ))}
        </div>
      )}

      <div style={{ flex: 1, overflowY: "auto", border: `1px solid ${C.border}`, borderRadius: 12, padding: 16, marginBottom: 12, minHeight: 300, maxHeight: 480 }}>
        {msgs.length === 0 && (
          <div style={{ textAlign: "center", paddingTop: 60, color: C.muted, fontSize: 13, fontFamily: "'Sora', sans-serif" }}>
            Ask anything about Cape York 2040. Start with a question above or type your own.
          </div>
        )}
        {msgs.map((m, i) => (
          <div key={i} style={{ marginBottom: 12, display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
            <div className={m.role === "user" ? "cy-chat-bubble-user" : "cy-chat-bubble-ai"} style={{ maxWidth: "82%", padding: "10px 14px", fontSize: 13, lineHeight: 1.7, whiteSpace: "pre-wrap", fontFamily: "'Sora', sans-serif" }}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && <div style={{ fontSize: 12, color: C.muted, fontFamily: "'IBM Plex Mono', monospace", padding: "6px 0" }}>Thinking...</div>}
        <div ref={bottomRef}></div>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <input className="cy-input" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()} placeholder="Ask about the plan..." />
        <button className="cy-btn" onClick={send} disabled={loading || !input.trim()}>Send</button>
      </div>

      <div style={{ marginTop: 10, fontSize: 11, color: C.muted, fontFamily: "'IBM Plex Mono', monospace" }}>
        ⚠ Complex calculations may approach token limits. Move to a new chat for detailed modelling.
      </div>
    </div>
  );
}

function DiagnosisView({ setView }) {
  const [activeStep, setActiveStep] = useState(null);

  const collapse = [
    {
      step: "01",
      label: "The market sets the selection benchmark",
      period: "1960s–present",
      col: C.sand,
      logic: "Southern processors pay by carcase weight and reward large frames, heavy muscling, and high growth rates. This is rational — for the southern system. The benchmark is set by southern abattoirs, southern feedlots, and southern stud cattle shows. Cape York producers, selling into the same market, adopt the same selection criteria.",
      consequence: "Replacement heifers are selected for frame size and growth potential. Stud bulls are sourced from southern bloodlines optimised for feedlot performance. The entire genetic selection programme is calibrated for a different country, a different climate, and a different production system — then applied to Cape York.",
    },
    {
      step: "02",
      label: "Wrong genetics, wrong selection — poor fertility follows",
      period: "Continuous",
      col: C.gold,
      logic: "Large-frame cattle bred for southern conditions carry high total daily maintenance requirements. On Cape York country — sparse native pasture, low in protein and phosphorus, with a short growing season — a large animal must spend most of its available nutrition simply maintaining body condition. There is little left over.",
      consequence: "What's left over after maintenance is what drives production: growth, lactation, and growing a calf. On poor country, large-frame cows cannot do all three reliably. Pregnancy rates fall. Calving rates drop. Weaners are light. Cows that calve in poor condition fail to cycle again. Fertility collapses — not because of the country, but because the animal's maintenance cost is too high for what the country can supply.",
    },
    {
      step: "03",
      label: "The phosphorus and urea cycle obscures the real problem",
      period: "1980s–present",
      col: C.dirt,
      logic: "Producers respond to poor condition and low fertility with supplementation — primarily phosphorus and urea, the limiting nutrients on Cape York's soils and dry-season grasses. This is the correct response to a nutrient deficit. It lifts animal performance measurably and is a standard tool across northern Australia.",
      consequence: "Supplementation partially masks the underlying genetics problem. Cattle perform better on supplement than off it, confirming the perceived logic that poor performance is a nutrition issue rather than a selection issue. The genetic misalignment continues unchallenged. Input costs rise. The margin narrows. The framework is reinforced rather than questioned.",
    },
    {
      step: "04",
      label: "Transport consumes what's left",
      period: "1990s–present",
      col: C.dirt,
      logic: "Animals must travel to the nearest southern processor — Townsville at minimum, southeast Queensland for most markets. Road train costs over 900–2,500km reach $150–300 per head. This is simply the cost of being remote, and producers accept it as structural.",
      consequence: "At $250/head transport and meaningful supplementation costs, a Cape York beast must reach a price that very few achieve. The margin is gone before the animal reaches the floor. Producers respond by targeting heavier turnoff weights — which requires even larger frames, more supplementation, more cost. The spiral tightens.",
    },
    {
      step: "05",
      label: "Carbon projects reduce the available green pick",
      period: "2010s–present",
      col: C.gold,
      logic: "Savannah burning programmes under the ERF reduce the frequency and extent of controlled burning to generate ACCU credits. This is ecologically and commercially sound as a carbon mechanism. Reducing fire frequency allows vegetation to accumulate and increases standing biomass.",
      consequence: "Post-fire green pick is one of the most important nutritional events in the Cape York cattle calendar. When burning is reduced, the annual pulse of fresh green growth that cattle depend on after the wet-season break is diminished or delayed. Unadapted large-frame cattle — already marginal on native pasture — face even tougher nutritional conditions on carbon project country. The very properties generating carbon credits are becoming harder to run cattle on profitably.",
    },
    {
      step: "06",
      label: "Fine fuel accumulates — and burns the trees",
      period: "Emerging",
      col: "#9B2F1F",
      logic: "Reducing burn frequency is the mechanism of the carbon credit. But fine fuel — dry grass, leaf litter — accumulates when not burned. On carbon project country with inadequate cattle grazing pressure (because the cattle are underperforming), fine fuel is not being converted into animal production. It is sitting on the ground.",
      consequence: "When fire does occur — whether escaped, lightning-started, or from neighbouring country — accumulated fine fuel drives higher-intensity burns that kill the trees the carbon project depends on for permanence. The ecological credit is destroyed by the very conditions the credit was meant to manage. Properly adapted, high-performing cattle that can efficiently convert fine fuel into production are not just a pastoral asset — they are the carbon project's management tool.",
    },
    {
      step: "07",
      label: "150,000 head in the 1950s. 50,000 today.",
      period: "The long count",
      col: "#9B2F1F",
      logic: "By most accounts, Cape York carried upwards of 150,000 head of cattle at its pastoral peak in the mid-20th century. These were predominantly adapted Bos indicus animals, managed by experienced Aboriginal stockworkers with intimate knowledge of the country, and sold into a less demanding market with different price signals.",
      consequence: "Today the Cape carries approximately 50,000 head across a far larger managed estate — with modern helicopters, satellite water, improved roads, and decades of accumulated knowledge. The industry contracted by two-thirds not because the country degraded, but because the economic framework made it structurally unviable. The country is the same. The system is what changed.",
    },
  ];

  const shifted = [
    {
      label: "Asian protein demand",
      before: "Cape York cattle too small for the southern market",
      after: "Indonesian feedlots import Australian feeder cattle at an average of ~320kg liveweight — Bos indicus steers at 2–3 years of age. A small-frame Cape York cow with 400kg mature weight produces exactly these animals.",
      col: C.turquoise,
    },
    {
      label: "Carbon markets",
      before: "Low-input extensive country = low productivity by any metric",
      after: "Low-input extensive country = verifiable carbon abatement at scale — and cattle are the management tool",
      col: C.green,
    },
    {
      label: "ESG capital mandates",
      before: "No institutional investor case for remote pastoral land",
      after: "Biological infrastructure with embedded carbon controls meets sovereign fund ESG mandates",
      col: C.gold,
    },
    {
      label: "Climate pressure on the south",
      before: "Southern intensive production holds every advantage",
      after: "Drought, heat stress, and input cost inflation are eroding southern pastoral margins — remote Cape York is insulated",
      col: C.sky,
    },
    {
      label: "Biosecurity and origin premiums",
      before: "Isolation is a logistical liability with no compensating value",
      after: "Remote verified origin commands premiums in SE Asian markets increasingly wary of disease exposure",
      col: C.dirt,
    },
  ];

  const assets = [
    { label: "Wet-dry seasonality", liability: "Closes roads, stops mustering, shuts operations for 4 months", asset: "Natural production calendar. The dry season concentrates cattle and forces the annual processing event. No artificial forcing required.", col: C.turquoise },
    { label: "Sparse native pasture", liability: "Cannot support large-frame cattle at adequate condition without supplementation", asset: "Perfect selection pressure for small-frame efficient genetics. Cattle that survive and thrive here without supplement are the correct animal. The country is the breeding programme.", col: C.green },
    { label: "Remoteness", liability: "Transport costs consume the margin on the road to southern markets", asset: "Biosecurity moat. The distance that makes road transport uneconomic makes coastal shipping and direct export viable — and the isolation premium real.", col: C.gold },
    { label: "Small-frame cattle", liability: "Below carcase weight thresholds for southern processors", asset: "A 400kg mature cow produces steers that hit the Indonesian feeder import window (280–350kg) at 2–3 years of age — exactly what the market specifies. Smaller frames mean lower total maintenance cost, leaving more energy for growth, lactation, and calf-rearing on sparse country.", col: C.dirt },
    { label: "Low-input rearing", liability: "Low productivity per hectare by southern metrics", asset: "Low carbon intensity per kg of beef. Verifiable ACCU co-benefit. ESG premium embedded in every animal. And when cattle are well-adapted, they become the fine fuel manager the carbon project needs.", col: C.sky },
  ];

  return (
    <div className="cy-page">
      <div className="cy-eyebrow">First Principles Diagnosis</div>
      <div className="cy-section-num" style={{ color: C.border }}>—</div>
      <h1 className="cy-h1">How Rational Decisions<br />Built an<br /><em>Irrational System.</em></h1>
      <p className="cy-body" style={{ maxWidth: 640, fontSize: 15, marginBottom: 32 }}>
        Cape York's beef industry did not fail through incompetence or neglect. It failed because a series of individually reasonable decisions — each a logical response to real market signals — compounded into a system that is fundamentally wrong for this country, these cattle, and these conditions. Every step made sense. The destination was catastrophic.
      </p>

      <div className="cy-eyebrow" style={{ marginBottom: 16 }}>The Step-by-Step Collapse — click to expand</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 48 }}>
        {collapse.map((s, i) => {
          const open = activeStep === i;
          const isLast = i === collapse.length - 1;
          return (
            <div key={i} style={{ position: "relative" }}>
              {!isLast && (
                <div style={{ position: "absolute", left: 19, top: "100%", width: 2, height: 6, background: C.border, zIndex: 0 }}></div>
              )}
              <div
                onClick={() => setActiveStep(open ? null : i)}
                style={{ background: open ? C.bgMid : C.bgCard, border: `1px solid ${open ? s.col + "66" : C.border}`, borderRadius: 10, cursor: "pointer", transition: "all 0.15s", overflow: "hidden", position: "relative", zIndex: 1 }}
              >
                <div style={{ display: "flex", gap: 14, alignItems: "center", padding: "14px 18px" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: open ? s.col + "33" : C.faint, border: `2px solid ${open ? s.col : C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.15s" }}>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: open ? s.col : C.muted }}>{s.step}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: open ? C.sand : C.text, fontFamily: "'Sora', sans-serif" }}>{s.label}</div>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: C.muted, marginTop: 2 }}>{s.period}</div>
                  </div>
                  <div style={{ fontSize: 11, color: C.muted, flexShrink: 0 }}>{open ? "▲" : "▼"}</div>
                </div>
                {open && (
                  <div style={{ padding: "0 18px 18px 68px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div>
                        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C.turquoise, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>The Rational Logic</div>
                        <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.8, fontFamily: "'Sora', sans-serif" }}>{s.logic}</div>
                      </div>
                      <div>
                        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#9B2F1F", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>The Consequence</div>
                        <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.8, fontFamily: "'Sora', sans-serif" }}>{s.consequence}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ background: "linear-gradient(135deg, #1a0a0a, #111A16)", border: "1px solid #9B2F1F44", borderRadius: 14, padding: 24, marginBottom: 48 }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#E07060", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>The Core Insight</div>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: C.sand, lineHeight: 1.45, marginBottom: 12 }}>
          The fertility problem is a selection problem. Producers have been selecting replacement heifers and stud bulls for the southern industrial market — then wondering why the resulting animals cannot perform on Cape York country.
        </div>
        <div className="cy-body" style={{ margin: 0, fontSize: 13 }}>
          Small-frame animals eat more per kilogram of body weight per day — a higher metabolic rate per unit mass. But their total daily requirement is lower. On sparse country, this means more of what they eat is available for production: growing, lactating, and rearing a calf. Large-frame animals on the same country spend most of their intake on maintenance, with little left over for the things that generate income. The country has not changed. The selection criteria are simply wrong for it.
        </div>
      </div>

      <div className="cy-eyebrow" style={{ marginBottom: 16 }}>The Carbon Trap — When Two Good Ideas Conflict</div>
      <div className="cy-card" style={{ borderColor: C.gold + "55", marginBottom: 48 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C.gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>The Carbon Programme Logic</div>
            <div className="cy-body" style={{ margin: 0, fontSize: 12 }}>Reduce burning frequency. Allow vegetation to accumulate. Generate ACCU credits for avoided emissions. This is ecologically sound and financially rational. Savannah burning credits are real, auditable, and valuable.</div>
          </div>
          <div style={{ borderLeft: `1px solid ${C.border}`, paddingLeft: 20 }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#E07060", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>The Unintended Consequence</div>
            <div className="cy-body" style={{ margin: 0, fontSize: 12 }}>Reduce burning → lose annual green pick pulse that large-frame cattle depend on. Fine fuel accumulates uneaten → when fire arrives, it is hot enough to kill trees → carbon permanence is destroyed. Unadapted cattle on carbon project country perform worse, not better, under the programme.</div>
          </div>
        </div>
        <div style={{ marginTop: 16, padding: "12px 16px", background: C.gold + "11", borderRadius: 8, border: `1px solid ${C.gold}33` }}>
          <div style={{ fontSize: 12, color: C.sand, fontFamily: "'Sora', sans-serif", lineHeight: 1.7 }}>
            <strong style={{ color: C.gold, fontWeight: 600 }}>The resolution: </strong>Ecologically adapted small-frame cattle eat more per kilogram of bodyweight than large-frame animals — and by selecting for fertility, we select for the animals most willing and able to consume what the country provides. They convert fine fuel into production rather than leaving it to accumulate. They are not in conflict with the carbon programme — they are its management layer. The wrong cattle make the carbon project fragile. The right cattle make it self-reinforcing.
          </div>
        </div>
      </div>

      <div className="cy-eyebrow" style={{ marginBottom: 16 }}>What Changed — The World Shifted. The Framework Didn't.</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 48 }}>
        {shifted.map(s => (
          <div key={s.label} className="cy-card" style={{ borderLeft: `3px solid ${s.col}`, borderRadius: "0 12px 12px 0" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: s.col, fontFamily: "'Sora', sans-serif", marginBottom: 10 }}>{s.label}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: "#9B2F1F", marginTop: 2, flexShrink: 0 }}>✕</div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.75, fontFamily: "'Sora', sans-serif" }}>{s.before}</div>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: C.turquoise, marginTop: 2, flexShrink: 0 }}>✓</div>
                <div style={{ fontSize: 13, color: C.text, lineHeight: 1.75, fontFamily: "'Sora', sans-serif" }}>{s.after}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cy-eyebrow" style={{ marginBottom: 12 }}>The Answer That Was Always There</div>

      <div style={{ background: "linear-gradient(135deg, #0F4C3A55, #111A16)", border: "1px solid #40E0D066", borderRadius: 16, padding: 28, marginBottom: 48 }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: "#F5F0E1", lineHeight: 1.3, marginBottom: 16 }}>
          The cattle are at the top of the Peninsula.<br />The sea is right there.
        </div>
        <p className="cy-body" style={{ marginBottom: 20, fontSize: 15 }}>
          The distance from Weipa to Townsville by sea is approximately 800km. The same journey by road train is 900km to the nearest processor — and up to 2,500km to southeast Queensland. Marine freight is ten times more fuel efficient per tonne-kilometre than road. The cattle arrive in better condition. The cost saving is $40–170 per head. This should have been the obvious answer for decades.
        </p>
        <p className="cy-body" style={{ marginBottom: 24 }}>
          It has been tried before. The economics were sound. The vessel was ready. It failed — not because of logistics, but because of a coordination problem. Stations that committed head counts didn't deliver. The vessel sailed under-loaded. The operator couldn't sustain it.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
          <div style={{ background: "#1a0a0a", border: "1px solid #9B2F1F44", borderRadius: 12, padding: 20 }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#E07060", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Why It Failed</div>
            <p className="cy-body" style={{ margin: 0, fontSize: 13 }}>When stations are customers of a shipping service, they can walk away. A bad season, a late muster, a better offer — any of it reduces a committed consignment to nothing. The vessel operator carries all the risk. The commitment is asymmetric and therefore fragile.</p>
          </div>
          <div style={{ background: "#0F4C3A33", border: "1px solid #40E0D044", borderRadius: 12, padding: 20 }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#40E0D0", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>The Fix</div>
            <p className="cy-body" style={{ margin: 0, fontSize: 13 }}>Corporate Carbon owns the vessel. Neighbouring stations hold equity in it — proportional to their committed head count. When you own infrastructure, you don't walk away from it. The commitment problem dissolves because the incentive structure is entirely different. You fill what you own.</p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1E2E26", paddingTop: 20 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: "#9AADA4", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>What this creates</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "An infrastructure moat", detail: "The entity that owns the vessel controls the logistics backbone for every cattle station on Cape York. That position, once built, is extremely difficult to replicate." },
              { label: "A carbon integrity breakthrough", detail: "70–80% transport emissions reduction per head is not marginal. It is the difference between a carbon portfolio that is internally consistent and one that generates credits on-station while shipping cattle via the most emissions-intensive route available." },
              { label: "The proof-of-concept for Cape York 2040", detail: "You cannot walk into Canberra or Rio Tinto's boardroom asking for $1B to build an international export zone without first demonstrating you can move cattle through Weipa. Cape Passage does that — at $6–14M, before any sovereign capital is required." },
            ].map(it => (
              <div key={it.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#40E0D0", marginTop: 8, flexShrink: 0 }}></div>
                <div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#F5F0E1", fontFamily: "'Sora', sans-serif" }}>{it.label} — </span>
                  <span style={{ fontSize: 14, color: "#9AADA4", lineHeight: 1.75, fontFamily: "'Sora', sans-serif" }}>{it.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <button
            onClick={() => setView("passage")}
            style={{ padding: "11px 24px", background: "#40E0D022", border: "1px solid #40E0D066", borderRadius: 10, color: "#40E0D0", fontSize: 13, cursor: "pointer", fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
            onMouseEnter={e => { e.currentTarget.style.background = "#40E0D033"; e.currentTarget.style.borderColor = "#40E0D0"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#40E0D022"; e.currentTarget.style.borderColor = "#40E0D066"; }}>
            Cape Passage — full detail →
          </button>
        </div>
      </div>

            <div className="cy-eyebrow" style={{ marginBottom: 16 }}>The Cape as the Star — Every Liability Revalued</div>
      <p className="cy-body" style={{ maxWidth: 640, marginBottom: 16 }}>
        The Cape was never the obstacle. The framework was. In a system designed around the Cape's actual conditions — not imposed from the south — every supposed liability is a structural advantage.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
        {assets.map(a => (
          <div key={a.label} className="cy-card" style={{ borderLeft: `4px solid ${a.col}`, borderRadius: "0 12px 12px 0" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: a.col, fontFamily: "'Sora', sans-serif", marginBottom: 14 }}>{a.label}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: "#9B2F1F", letterSpacing: "0.1em", marginBottom: 6 }}>BEFORE</div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.75, fontFamily: "'Sora', sans-serif" }}>{a.liability}</div>
              </div>
              <div style={{ borderLeft: `1px solid ${C.border}`, paddingLeft: 16 }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: a.col, letterSpacing: "0.1em", marginBottom: 6 }}>AFTER</div>
                <div style={{ fontSize: 13, color: C.text, lineHeight: 1.75, fontFamily: "'Sora', sans-serif" }}>{a.asset}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: "linear-gradient(135deg, #0F4C3A88, #111A16)", border: "1px solid #40E0D044", borderRadius: 14, padding: 26 }}>
        <div className="cy-eyebrow" style={{ marginBottom: 10 }}>The Reframe</div>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, color: C.sand, lineHeight: 1.45, marginBottom: 14 }}>
          Cape York is not a problem to be solved.<br />It is an asset to be aligned.
        </div>
        <div className="cy-body" style={{ marginBottom: 20 }}>
          The conditions that made Cape York uncompetitive in the southern beef framework are precisely the conditions that make it exceptional in the correct one. Cape Passage and Cape York 2040 are not rescue operations. They are the first correct reading of what this country actually is — and what it has always been capable of producing, for the right market, with the right animals.
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button onClick={() => setView("passage")} style={{ padding: "10px 22px", background: C.sky + "22", border: `1px solid ${C.sky}55`, borderRadius: 10, color: C.sky, fontSize: 12, cursor: "pointer", fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
            onMouseEnter={e => { e.currentTarget.style.background = C.sky + "33"; e.currentTarget.style.borderColor = C.sky; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.sky + "22"; e.currentTarget.style.borderColor = C.sky + "55"; }}>
            Act I — Cape Passage →
          </button>
          <button onClick={() => setView("overview")} style={{ padding: "10px 22px", background: C.turquoise + "22", border: `1px solid ${C.turquoise}55`, borderRadius: 10, color: C.turquoise, fontSize: 12, cursor: "pointer", fontFamily: "'Sora', sans-serif", fontWeight: 600 }}
            onMouseEnter={e => { e.currentTarget.style.background = C.turquoise + "33"; e.currentTarget.style.borderColor = C.turquoise; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.turquoise + "22"; e.currentTarget.style.borderColor = C.turquoise + "55"; }}>
            Act II — Cape York 2040 →
          </button>
        </div>
      </div>
    </div>
  );
}

function PathSelector({ setView }) {
  const [hovered, setHovered] = useState(null);

  const paths = [
    {
      id: "passage",
      label: "Cape Passage",
      sub: "Phase Zero — 2027 to 2031",
      col: C.sky,
      colDim: C.sky + "22",
      border: C.sky + "66",
      desc: "Coastal shipping out of Weipa to southern markets — owned infrastructure, not a charter service. Partner stations hold equity in the vessel. The commitment problem that killed previous attempts is solved by ownership structure.",
      stats: [
        { v: "$6–14M", l: "Self-funded" },
        { v: "2027", l: "First voyage" },
        { v: "70–80%", l: "Emissions reduction" },
        { v: "15K+", l: "Head by 2031" },
      ],
      tag: "ACT I",
    },
    {
      id: "overview",
      label: "Cape York 2040",
      sub: "Ecological Protein Export Zone — 2030 to 2040",
      col: C.turquoise,
      colDim: C.turquoise + "22",
      border: C.turquoise + "66",
      desc: "The full international build. Process at Weipa. Ship north to Asia. Four export streams verified under PFES. $1B Special Purpose Vehicle — Federal Government, Rio Tinto, and Paniri as founding partners.",
      stats: [
        { v: "$1B", l: "SPV Capital" },
        { v: "150K", l: "Head by 2040" },
        { v: "4", l: "Export Streams" },
        { v: "2035", l: "Full export target" },
      ],
      tag: "ACT II",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'Sora', sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
      <div style={{ width: "100%", maxWidth: 860 }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: C.turquoise, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Paniri Agricultural Co. × Corporate Carbon</div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 48, color: C.sand, lineHeight: 1.05, marginBottom: 12 }}>Choose your path.</div>
          <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 14, color: C.muted, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Two distinct chapters of the same thesis. Cape Passage proves the model. Cape York 2040 deploys it at scale.
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <div
            onClick={() => setView("diagnosis")}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#E8F0EB66"}
            onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
            style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 14, padding: "20px 28px", cursor: "pointer", transition: "all 0.2s", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C.muted, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>Read First — First Principles Diagnosis</div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: C.sand, marginBottom: 6 }}>Why Cape York Is Failing — And Why That's the Opportunity</div>
              <div style={{ fontSize: 12, color: C.muted, fontFamily: "'Sora', sans-serif", lineHeight: 1.6, maxWidth: 580 }}>How individually rational decisions compounded into a structurally irrational system — and why every supposed liability of this country is, in the correct framework, a competitive asset.</div>
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 20, color: C.muted, flexShrink: 0 }}>→</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
          {paths.map(p => (
            <div
              key={p.id}
              onClick={() => setView(p.id)}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === p.id ? p.colDim : C.bgCard,
                border: `1px solid ${hovered === p.id ? p.border : C.border}`,
                borderRadius: 16,
                padding: 32,
                cursor: "pointer",
                transition: "all 0.2s",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: p.col, letterSpacing: "0.15em", textTransform: "uppercase", padding: "4px 10px", background: p.col + "18", borderRadius: 20, border: `1px solid ${p.col}33` }}>{p.tag}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: C.muted }}>{p.sub}</div>
              </div>

              <div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: p.col, lineHeight: 1.05, marginBottom: 10 }}>{p.label}</div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.75, fontFamily: "'Sora', sans-serif" }}>{p.desc}</div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {p.stats.map(s => (
                  <div key={s.l} style={{ borderTop: `1px solid ${C.faint}`, paddingTop: 10 }}>
                    <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: p.col }}>{s.v}</div>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C.muted, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                <div style={{ flex: 1, height: 1, background: hovered === p.id ? p.col + "66" : C.border, transition: "background 0.2s" }}></div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: hovered === p.id ? p.col : C.muted, transition: "color 0.2s", letterSpacing: "0.06em" }}>
                  {hovered === p.id ? "Enter →" : "Select"}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: C.muted, letterSpacing: "0.06em" }}>
          Both sections are accessible via the navigation bar once you enter.
        </div>
      </div>
    </div>
  );
}


const VIEWS = {
  choose: PathSelector,
  diagnosis: DiagnosisView,
  passage: CapePassageView,
  overview: OverviewView,
  strategy: StrategyView,
  problem: ProblemView,
  seasonal: SeasonalView,
  genetics: GeneticsView,
  exports: ExportsView,
  terminal: TerminalView,
  markets: MarketsView,
  capital: CapitalView,
  governance: GovernanceView,
  regulatory: RegulatoryView,
  phases: PhasesView,
  risks: RisksView,
  advisor: AdvisorView,
};


const safeStorage = {
  get: (key) => {
    if (typeof window === 'undefined') return null;
    try { return localStorage.getItem(key); } catch { return null; }
  },
  set: (key, value) => {
    if (typeof window === 'undefined') return;
    try { localStorage.setItem(key, value); } catch {}
  },
};

const ACCESS_PASSWORD = "PANIRI2040";
const ADMIN_PASSWORD = "BLACKMAT99";

function AccessGate({ onUnlock }) {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [log, setLog] = useState([]);
  const [logLoading, setLogLoading] = useState(false);

  async function loadLog() {
    setLogLoading(true);
    try {
      const result = safeStorage.get("cy2040_access_log");
      const entries = result ? JSON.parse(result) : [];
      setLog(entries);
    } catch {
      setLog([]);
    }
    setLogLoading(false);
  }

  async function handleSubmit() {
    if (!name.trim() || !org.trim() || !email.trim()) {
      setError("Please enter your name, organisation, and email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      setError("Access password required.");
      return;
    }

    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setError("");
      loadLog();
      return;
    }

    if (password !== ACCESS_PASSWORD) {
      setError("Incorrect password. Access is restricted to authorised parties. Contact Paniri Agricultural Co. to request authorisation.");
      return;
    }

    setLoading(true);
    setError("");

    const entry = {
      name: name.trim(),
      org: org.trim(),
      email: email.trim(),
      timestamp: new Date().toISOString(),
      ts_display: new Date().toLocaleString("en-AU", { timeZone: "Australia/Brisbane", day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
    };

    try {
      let existing = [];
      try {
        const result = safeStorage.get("cy2040_access_log");
        if (result) existing = JSON.parse(result);
      } catch {}
      existing.unshift(entry);
      if (existing.length > 200) existing = existing.slice(0, 200);
      safeStorage.set("cy2040_access_log", JSON.stringify(existing));
    } catch {}

    setLoading(false);
    onUnlock();
  }

  const C2 = {
    bg: "#090E0C", bgCard: "#111A16", bgMid: "#162019",
    border: "#1E2E26", turquoise: "#40E0D0", gold: "#DAA520",
    sand: "#F5F0E1", muted: "#7A9488", faint: "#2A3D33",
    dirt: "#A0522D", text: "#E8F0EB",
  };

  if (isAdmin) {
    return (
      <div style={{ minHeight: "100vh", background: C2.bg, color: C2.text, fontFamily: "'Sora', sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "40px 24px" }}>
        <div style={{ width: "100%", maxWidth: 700 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: C2.turquoise, letterSpacing: "0.15em", marginBottom: 8 }}>ADMIN — ACCESS LOG</div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: C2.sand, marginBottom: 6 }}>Cape York 2040</div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: C2.muted, marginBottom: 28 }}>Authorised party access record — confidential</div>

          {logLoading ? (
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: C2.muted }}>Loading log...</div>
          ) : log.length === 0 ? (
            <div style={{ background: C2.bgCard, border: `1px solid ${C2.border}`, borderRadius: 10, padding: 24, textAlign: "center", color: C2.muted, fontSize: 13 }}>No access entries recorded yet.</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, padding: "6px 14px", fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C2.muted, letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: `1px solid ${C2.border}`, marginBottom: 4 }}>
                <div>Name</div><div>Organisation</div><div>Email</div><div>Timestamp (AEST)</div>
              </div>
              {log.map((e, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, padding: "10px 14px", background: C2.bgCard, border: `1px solid ${C2.border}`, borderRadius: 8 }}>
                  <div style={{ fontSize: 13, color: C2.sand, fontWeight: 600 }}>{e.name}</div>
                  <div style={{ fontSize: 12, color: C2.turquoise, fontFamily: "'IBM Plex Mono', monospace" }}>{e.org}</div>
                  <div style={{ fontSize: 11, color: C2.muted, fontFamily: "'IBM Plex Mono', monospace" }}>{e.email || "—"}</div>
                  <div style={{ fontSize: 11, color: C2.muted, fontFamily: "'IBM Plex Mono', monospace" }}>{e.ts_display}</div>
                </div>
              ))}
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: C2.muted, marginTop: 8 }}>{log.length} access {log.length === 1 ? "entry" : "entries"} recorded.</div>
            </div>
          )}

          <div style={{ marginTop: 28, display: "flex", gap: 10 }}>
            <button onClick={onUnlock} style={{ padding: "10px 24px", background: C2.turquoise, border: "none", borderRadius: 10, color: "#060f0a", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "'Sora', sans-serif" }}>Enter Document</button>
            <button onClick={loadLog} style={{ padding: "10px 24px", background: "none", border: `1px solid ${C2.border}`, borderRadius: 10, color: C2.muted, fontSize: 13, cursor: "pointer", fontFamily: "'Sora', sans-serif" }}>Refresh Log</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: C2.bg, color: C2.text, fontFamily: "'Sora', sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
      <div style={{ width: "100%", maxWidth: 440 }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: C2.turquoise, letterSpacing: "0.18em", marginBottom: 12, textTransform: "uppercase" }}>Paniri Agricultural Co. × Corporate Carbon</div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: C2.sand, lineHeight: 1.1, marginBottom: 8 }}>Cape York 2040</div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: "0.12em", color: C2.muted }}>CONFIDENTIAL — AUTHORISED PARTIES ONLY</div>
        </div>

        <div style={{ background: C2.bgCard, border: `1px solid ${C2.border}`, borderRadius: 14, padding: 28, marginBottom: 16 }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C2.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18, textAlign: "center" }}>Authorised Party Registration</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C2.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Full Name</div>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                placeholder="Your name"
                style={{ width: "100%", background: C2.bgMid, border: `1px solid ${C2.border}`, borderRadius: 8, color: C2.text, fontSize: 13, padding: "10px 12px", outline: "none", fontFamily: "'Sora', sans-serif", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C2.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Organisation</div>
              <input
                value={org}
                onChange={e => setOrg(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                placeholder="Company / organisation"
                style={{ width: "100%", background: C2.bgMid, border: `1px solid ${C2.border}`, borderRadius: 8, color: C2.text, fontSize: 13, padding: "10px 12px", outline: "none", fontFamily: "'Sora', sans-serif", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C2.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Email Address</div>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                type="email"
                placeholder="your@email.com"
                style={{ width: "100%", background: C2.bgMid, border: `1px solid ${C2.border}`, borderRadius: 8, color: C2.text, fontSize: 13, padding: "10px 12px", outline: "none", fontFamily: "'Sora', sans-serif", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: C2.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Access Password</div>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                type="password"
                placeholder="••••••••••"
                style={{ width: "100%", background: C2.bgMid, border: `1px solid ${C2.border}`, borderRadius: 8, color: C2.text, fontSize: 13, padding: "10px 12px", outline: "none", fontFamily: "'Sora', sans-serif", boxSizing: "border-box" }}
              />
            </div>
          </div>

          {error && (
            <div style={{ background: "#9B2F1F22", border: "1px solid #9B2F1F55", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "#E07060", fontFamily: "'Sora', sans-serif", marginBottom: 12 }}>
              {error}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{ width: "100%", padding: "12px", background: C2.turquoise, border: "none", borderRadius: 10, color: "#060f0a", fontWeight: 700, fontSize: 14, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Sora', sans-serif", opacity: loading ? 0.6 : 1, letterSpacing: "0.02em" }}
          >
            {loading ? "Logging access..." : "Register & Enter"}
          </button>
        </div>

        <div style={{ borderTop: `1px solid ${C2.border}`, paddingTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ margin: 0, fontSize: 11, color: C2.muted, fontFamily: "'Sora', sans-serif", lineHeight: 1.7 }}>
            This document is confidential and prepared exclusively for authorised parties of Paniri Agricultural Co. and Corporate Carbon Group. Access is granted solely to individuals who have received express written authorisation.
          </p>
          <p style={{ margin: 0, fontSize: 11, color: C2.muted, fontFamily: "'Sora', sans-serif", lineHeight: 1.7 }}>
            By entering, you confirm you are an authorised party and agree not to copy, distribute, or disclose this document without prior written consent. All access is logged. Unauthorised access or distribution is prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CapeYork2040() {
  const [unlocked, setUnlocked] = useState(false);
  const [view, setView] = useState("choose");
  const View = VIEWS[view] || OverviewView;

  if (!unlocked) {
    return (
      <>
        <InjectStyles />
        <AccessGate onUnlock={() => setUnlocked(true)} />
      </>
    );
  }

  return (
    <div className="cy-root">
      <InjectStyles />
      <Nav view={view} setView={setView} />
      <View setView={setView} />
    </div>
  );
}
