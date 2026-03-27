// Kenya Artificial Intelligence Bill 2026 — Structured Data

export const billMeta = {
  title: "The Artificial Intelligence Bill, 2026",
  shortTitle: "AI Act Kenya 2026",
  gazetteRef: "Kenya Gazette Supplement No. 15 (Senate Bills No. 4)",
  introducedDate: "19th February, 2026",
  sponsor: "Senator Karen Nyamu",
  status: "Senate Bill — Pending Enactment",
  description:
    "An Act of Parliament to provide for the regulation and governance of artificial intelligence in Kenya; to establish the Office of the Kenya Artificial Intelligence Commissioner; and for connected purposes.",
  references: [
    { label: "EU AI Act", url: "https://artificialintelligenceact.eu/" },
    {
      label: "Kenya National AI Strategy 2025–2030",
      url: "https://ict.go.ke",
    },
    { label: "Data Protection Act (Cap. 411C)", url: "https://www.odpc.go.ke" },
  ],
};

export const parts = [
  {
    id: "part-1",
    number: "I",
    title: "Preliminary",
    sections: [
      {
        id: "s1",
        number: 1,
        title: "Short Title",
        content:
          "This Act may be cited as the Artificial Intelligence Act, 2026.",
        tags: ["preliminary"],
      },
      {
        id: "s2",
        number: 2,
        title: "Interpretation",
        content:
          "Defines key terms including: artificial intelligence, Cabinet Secretary, Advisory Committee, Artificial Intelligence Commissioner, data subject, deployer, generative artificial intelligence, high-risk artificial intelligence system, Office, provider, regulatory sandbox, synthetic media, and user.",
        tags: ["definitions", "preliminary"],
        definitions: [
          {
            term: "Artificial Intelligence",
            definition:
              "A machine-based system or collection of technologies that leverage machine learning, data processing, algorithmic systems, or other methods to operate with varying levels of autonomy and adaptiveness, inferring outputs such as predictions, content, recommendations, or decisions from inputs.",
          },
          {
            term: "Deployer",
            definition:
              "A natural or legal person who puts an AI system into service or uses it under their authority, but excludes end-users acting in a personal non-professional capacity.",
          },
          {
            term: "Provider",
            definition:
              "A natural or legal person who develops an AI system or has it developed and places it on the market or puts it into service under their own name or trademark.",
          },
          {
            term: "High-Risk AI System",
            definition:
              "An AI system that poses significant risks to health, safety, fundamental rights, or societal welfare, as prescribed by regulations.",
          },
          {
            term: "Generative AI",
            definition:
              "An AI system capable of generating text, images, audio, video, or other content based on learned patterns from data inputs.",
          },
          {
            term: "Synthetic Media",
            definition:
              "Media content generated or manipulated using generative AI that depicts events, speech, or appearances that did not occur.",
          },
          {
            term: "Regulatory Sandbox",
            definition:
              "A controlled environment for testing artificial intelligence under regulatory oversight.",
          },
          {
            term: "User",
            definition:
              "A natural or legal person who interacts with or is affected by an AI system, including end-users in a personal or professional capacity.",
          },
        ],
      },
      {
        id: "s3",
        number: 3,
        title: "Objects of the Act",
        content:
          "The Act aims to: provide a regulatory framework; ensure ethical, transparent and accountable AI use; foster innovation; safeguard human rights and data protection; establish the Office of the AI Commissioner; promote AI literacy at county level; and align with international standards.",
        tags: ["preliminary", "objectives"],
      },
    ],
  },
  {
    id: "part-2",
    number: "II",
    title: "Office of the AI Commissioner",
    sections: [
      {
        id: "s4",
        number: 4,
        title: "Establishment of the Office",
        content:
          "Establishes the Office of the Artificial Intelligence Commissioner as a State Office under Article 260(q) of the Constitution. The Office is a body corporate with perpetual succession, capable of suing, owning property, and entering contracts. It shall be independent in the performance of its functions.",
        tags: ["institution", "governance"],
      },
      {
        id: "s5",
        number: 5,
        title: "Appointment of the AI Commissioner",
        content:
          "The Public Service Commission initiates recruitment within 7 days of a vacancy. Applications are processed within 21 days; a shortlist is published, interviews conducted, and 3 nominees submitted to the President in order of merit. The President nominates and Parliament approves the appointment.",
        tags: ["appointment", "institution"],
      },
      {
        id: "s6",
        number: 6,
        title: "Qualifications",
        content:
          "The Commissioner must hold a master's degree in AI, computer science, IT, engineering, data science, law, ethics or related field; have at least 10 years' experience in AI governance, data protection, technology policy or risk management; have at least 10 years' management experience; and meet Chapter Six requirements of the Constitution. Term: 5 years, renewable once.",
        tags: ["appointment", "qualifications"],
        highlights: [
          "Master's degree required",
          "10+ years relevant experience",
          "5-year term, once renewable",
          "Chapter Six compliance required",
        ],
      },
      {
        id: "s7",
        number: 7,
        title: "Oath of Office",
        content:
          "Before assuming office, the Commissioner takes an oath of fidelity to the Act and of confidentiality, administered by a magistrate or judge.",
        tags: ["appointment"],
      },
      {
        id: "s8",
        number: 8,
        title: "Vacancy",
        content:
          "The Office becomes vacant on death, resignation (written notice to President), conviction and imprisonment exceeding 6 months without fine option, or removal under section 9.",
        tags: ["governance"],
      },
      {
        id: "s9",
        number: 9,
        title: "Removal from Office",
        content:
          "The Commissioner may be removed by the President on Cabinet Secretary recommendation for: serious constitutional violation, gross misconduct, physical or mental incapacity, incompetence, or bankruptcy. Due process applies: written notice and opportunity to defend. PSC investigates and reports.",
        tags: ["governance"],
      },
      {
        id: "s10",
        number: 10,
        title: "Functions of the Office",
        content:
          "Key functions include: overseeing Act implementation; conducting risk assessments and conformity audits; developing AI governance policies and standards; managing regulatory sandboxes; receiving and investigating complaints (bias, discrimination, rights infringements); collaborating with regional and international bodies; advising national and county governments; promoting AI literacy and capacity building; conducting research and foresight studies on job displacement and environmental impact; maintaining the public register of high-risk AI systems; and promoting equitable access.",
        tags: ["functions", "governance", "enforcement"],
      },
      {
        id: "s11",
        number: 11,
        title: "Powers of the Office",
        content:
          "The Office may: enter premises for inspection (on reasonable notice); require production of records; issue enforcement notices and directives; impose administrative fines; summon persons to give evidence; collaborate with international bodies; establish appeals mechanisms; and delegate powers to authorised officers.",
        tags: ["enforcement", "powers"],
      },
      {
        id: "s12",
        number: 12,
        title: "Staff",
        content:
          "The Commissioner may appoint deputy commissioners, assistant commissioners and other staff in consultation with the Salaries and Remuneration Commission and Public Service Commission.",
        tags: ["institution"],
      },
      {
        id: "s13",
        number: 13,
        title: "Remuneration",
        content:
          "The Commissioner and staff are paid as determined by the Salaries and Remuneration Commission.",
        tags: ["institution"],
      },
      {
        id: "s14",
        number: 14,
        title: "Delegation",
        content:
          "The Commissioner may delegate powers to a regulator established by an Act of Parliament, subject to conditions.",
        tags: ["governance"],
      },
      {
        id: "s15",
        number: 15,
        title: "Protection from Liability",
        content:
          "The Commissioner and staff are protected from personal liability for functions performed in good faith under this Act.",
        tags: ["governance"],
      },
      {
        id: "s16",
        number: 16,
        title: "Confidentiality",
        content:
          "The Commissioner and staff must not disclose any information obtained under this Act without lawful authority.",
        tags: ["governance", "data"],
      },
    ],
  },
  {
    id: "part-3",
    number: "III",
    title: "Advisory Committee",
    sections: [
      {
        id: "s17",
        number: 17,
        title: "Establishment",
        content:
          "Establishes an 8-member Advisory Committee chaired by the AI Commissioner. Members include: Cabinet Secretary representative (ICT), Office of the Data Protection Commissioner representative, NACOSTI representative, 2 AI ethics/human rights experts (nominated by professional bodies), 2 persons nominated by the Council of Governors (gender-balanced), 1 private sector representative, and 1 civil society representative. Gender balance, regional representation and disability inclusion are required. Advisory members hold 3-year terms, renewable once.",
        tags: ["institution", "governance"],
        highlights: [
          "8-member composition",
          "Gender-balanced mandate",
          "3-year terms, once renewable",
          "Includes civil society & private sector",
        ],
      },
      {
        id: "s18",
        number: 18,
        title: "Functions",
        content:
          "The Advisory Committee advises on: emerging AI trends, risks and opportunities; proposed guidelines and regulations; stakeholder engagement strategies; multidisciplinary research; and workforce reskilling strategies for AI-induced job displacement.",
        tags: ["functions", "governance"],
      },
      {
        id: "s19",
        number: 19,
        title: "Meetings",
        content:
          "The Committee meets at least 4 times per financial year. Quorum is half of members. The Committee may regulate its own procedure.",
        tags: ["governance"],
      },
      {
        id: "s20",
        number: 20,
        title: "Allowances",
        content:
          "Members are paid allowances as determined by the Cabinet Secretary in consultation with the Salaries and Remuneration Commission.",
        tags: ["governance"],
      },
    ],
  },
  {
    id: "part-4",
    number: "IV",
    title: "Financial Provisions",
    sections: [
      {
        id: "s21",
        number: 21,
        title: "Funds",
        content:
          "The Office is funded by: National Assembly allocations, grants/gifts/donations, and funds accruing from its functions.",
        tags: ["finance"],
      },
      {
        id: "s22",
        number: 22,
        title: "Annual Estimates",
        content:
          "The Commissioner prepares annual estimates at least 3 months before each financial year, covering staff costs, operations, pensions, equipment, training, research, reserve funds, and other expenditure. Estimates are submitted to the Cabinet Secretary for tabling in the National Assembly.",
        tags: ["finance"],
      },
      {
        id: "s23",
        number: 23,
        title: "Accounts and Audit",
        content:
          "Accounts are prepared, audited and reported per Articles 226 and 229 of the Constitution, the Public Finance Management Act (Cap. 412A), and the Public Audit Act (Cap. 412B).",
        tags: ["finance", "accountability"],
      },
      {
        id: "s24",
        number: 24,
        title: "Annual Reports",
        content:
          "The Commissioner submits an annual report within 3 months after each financial year, covering: financial statements, activity descriptions, AI developments, risk assessments conducted, impact of the Commissioner's mandate, and impediments to Act objectives. The Cabinet Secretary tables the report in Parliament within 14 days of receipt.",
        tags: ["finance", "accountability"],
      },
    ],
  },
  {
    id: "part-5",
    number: "V",
    title: "Governance of AI",
    sections: [
      {
        id: "s25",
        number: 25,
        title: "Risk Classification",
        content:
          "The Commissioner classifies AI systems by risk level. Four tiers are prescribed: (a) Unacceptable Risk — systems posing severe threats (prohibited); (b) High Risk — systems in critical sectors including healthcare, education, agriculture, finance, security, employment, and public administration; (c) Limited Risk — moderate risk systems; (d) Minimal Risk — negligible risk systems. Classification criteria are updated periodically with reference to international standards.",
        tags: ["risk", "classification", "governance"],
        riskLevels: [
          {
            level: "Unacceptable",
            color: "#dc2626",
            description: "Severe threat to rights or safety — PROHIBITED",
          },
          {
            level: "High",
            color: "#ea580c",
            description:
              "Healthcare, finance, education, security, employment, public admin",
          },
          {
            level: "Limited",
            color: "#d97706",
            description: "Moderate risks — disclosure and transparency apply",
          },
          {
            level: "Minimal",
            color: "#16a34a",
            description: "Negligible risks — general good practice",
          },
        ],
      },
      {
        id: "s26",
        number: 26,
        title: "High-Risk Obligations",
        content:
          "Providers/deployers of high-risk AI systems must: conduct pre-deployment risk assessments with mitigation measures; conduct human rights impact assessments; ensure transparency, traceability, and explainability; maintain data records (inputs, training datasets, outputs, metrics) for at least 5 years; comply with the Data Protection Act; incorporate robustness, accuracy and cybersecurity measures; and obtain explicit consent before generating or manipulating images, voice or likeness, with clear AI-generated labelling.",
        tags: ["high-risk", "obligations", "compliance"],
        highlights: [
          "Pre-deployment risk assessment mandatory",
          "Human rights impact assessment required",
          "5-year data record retention",
          "Explicit consent for biometric content",
          "Data Protection Act compliance",
        ],
      },
      {
        id: "s27",
        number: 27,
        title: "High-Risk Register",
        content:
          "The Commissioner maintains a public register of all high-risk AI systems, including those deployed by county governments.",
        tags: ["high-risk", "transparency", "governance"],
      },
      {
        id: "s28",
        number: 28,
        title: "Transparency and Safeguards",
        content:
          "All providers and deployers must disclose to users: the nature, purpose and limitations of the system; the extent of automated decision-making and human intervention; and bias mitigation measures. For decisions with significant legal effects, users must provide Data Protection Act safeguards including right to human review, right to express views, and right to contest. High-risk system providers must submit annual compliance reports; non-confidential information must be made public.",
        tags: ["transparency", "rights", "compliance"],
        highlights: [
          "Nature and limitations disclosure required",
          "Right to human review for legal decisions",
          "Right to contest automated decisions",
          "Annual public compliance reports",
        ],
      },
      {
        id: "s29",
        number: 29,
        title: "Regulatory Sandboxes",
        content:
          "The Commissioner establishes and manages regulatory sandboxes for controlled testing of AI systems. Conditions include ethics, data protection, and risk monitoring safeguards. Priority is given to innovations addressing national priorities; county government collaboration is encouraged.",
        tags: ["innovation", "sandbox"],
      },
      {
        id: "s30",
        number: 30,
        title: "Ethical Guidelines",
        content:
          "The Commissioner develops and publishes ethical guidelines addressing: prevention of bias, discrimination and exclusion (particularly for vulnerable groups); privacy, personal data and human dignity; human oversight, accountability and redress; environmental sustainability (energy and carbon footprint assessments); equitable access to AI benefits; and prohibition of non-consensual use of personal images or likenesses in AI-generated content.",
        tags: ["ethics", "guidelines"],
      },
      {
        id: "s31",
        number: 31,
        title: "AI Literacy",
        content:
          "The Commissioner implements AI literacy programmes educating the public on AI benefits, risks, and ethical implications. Programmes are delivered at national and county levels in partnership with educational institutions and ICT hubs.",
        tags: ["literacy", "public"],
      },
      {
        id: "s32",
        number: 32,
        title: "Human-Centric AI",
        content:
          "Designers and deployers must: build systems that enhance rather than replace human capabilities; incorporate human involvement features; and provide human oversight in critical decisions. Oversight must include review mechanisms allowing qualified persons to intervene or override outputs where human rights, safety, or societal wellbeing may be affected. Regulations will define specific requirements.",
        tags: ["human-centric", "oversight", "rights"],
        highlights: [
          "Systems must enhance, not replace, human capabilities",
          "Override mechanism required for critical decisions",
          "Qualified human review for rights-affecting outputs",
        ],
      },
      {
        id: "s33",
        number: 33,
        title: "Workforce Impact Obligations",
        content:
          "Providers/deployers of AI systems likely to impact employment must: conduct workforce impact assessments including job displacement analysis; and implement mitigation measures including reskilling programmes in collaboration with national and county agencies. The Commissioner develops guidelines on workforce transition including vocational training partnerships and job-creating AI adoption incentives.",
        tags: ["employment", "workforce", "social"],
        highlights: [
          "Workforce impact assessment required",
          "Job displacement analysis mandatory",
          "Reskilling programmes to be implemented",
        ],
      },
      {
        id: "s34",
        number: 34,
        title: "Public Sector AI",
        content:
          "All public entities, including county governments, using AI systems must comply with this Act.",
        tags: ["public-sector", "compliance"],
      },
    ],
  },
  {
    id: "part-6",
    number: "VI",
    title: "General Provisions",
    sections: [
      {
        id: "s35",
        number: 35,
        title: "Offences and Penalties",
        content:
          "Offences include: deploying prohibited (unacceptable-risk) AI; deploying high-risk AI without required assessments; failing transparency/disclosure obligations; breaching sandbox conditions; failing workforce impact assessments; violating ethical guidelines causing bias, discrimination or harm; using AI in public sector contrary to the Act; obstructing the Commissioner's Office (including false information); and generating/distributing synthetic media using a person's image, voice or likeness without consent where harm, misinformation, defamation, or privacy infringement results.",
        tags: ["enforcement", "penalties"],
        penalties: [
          {
            category: "Tier 1 Offences (s.35(a),(b),(d),(e),(g),(i))",
            fine: "Up to KES 5,000,000",
            imprisonment: "Up to 2 years",
            description:
              "Deploying prohibited AI, missing assessments, public sector misuse, non-consensual synthetic media",
          },
          {
            category: "Tier 2 Offences (s.35(c),(f),(h))",
            fine: "Up to KES 1,000,000",
            imprisonment: "Up to 6 months",
            description: "Disclosure failures, ethical guideline breaches, obstructing the Commissioner",
          },
          {
            category: "Corporate Liability",
            fine: "Director/officer liability",
            imprisonment: "Where knowledge and lack of due diligence proven",
            description:
              "Directors and officers with knowledge who failed to ensure compliance are personally liable",
          },
        ],
      },
      {
        id: "s36",
        number: 36,
        title: "Regulations",
        content:
          "The Cabinet Secretary, in consultation with the Commissioner, may make regulations covering: risk classification criteria; risk and human rights assessment procedures; sandbox conditions; ethical guidelines and compliance report formats; data governance frameworks; enforcement and appeals procedures; AI literacy and public participation mechanisms; consent and labelling procedures for AI-generated content; and any other prescribed matters.",
        tags: ["regulations", "implementation"],
      },
      {
        id: "s37",
        number: 37,
        title: "Review of the Act",
        content:
          "The Cabinet Secretary commissions a review every 3 years from commencement, covering: consultations with the Commissioner, Advisory Committee, stakeholders and the public; assessment of emerging risks, opportunities, and international best practices; and recommendations for amendments. A report is submitted to Parliament within 6 months of review completion.",
        tags: ["review", "governance"],
        highlights: [
          "3-year mandatory review cycle",
          "Parliament receives review report",
          "6-month submission deadline",
        ],
      },
    ],
  },
];

export const allSections = parts.flatMap((p) =>
  p.sections.map((s) => ({ ...s, partId: p.id, partTitle: p.title, partNumber: p.number }))
);

export const allTags = [
  ...new Set(parts.flatMap((p) => p.sections.flatMap((s) => s.tags))),
].sort();
