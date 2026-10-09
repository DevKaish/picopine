// All content comes from the PICOPINE Business Plan PDF.
export const NAV = [
  { label: 'Home', id: 'home' },
  { label: 'Ecosystem', id: 'ecosystem' },
  { label: 'Technology', id: 'technology' },
  { label: 'Model', id: 'model' },
  { label: 'Vision', id: 'vision' },
  { label: 'FAQ', id: 'faq' },
]

// section id -> nav id that should be highlighted
export const SECTION_TO_NAV = {
  home: 'home', technology: 'technology', model: 'model',
  ecosystem: 'ecosystem', products: 'ecosystem', vision: 'vision', faq: 'faq',
}

export const NODES = [
  ['Zero Supply Token', 'Supply starts at zero and grows only through user-initiated minting.'],
  ['Smart Contract', 'All minting, burning and reward logic is automated on-chain.'],
  ['Mint & Burn Engine', 'Every deposit drives minting and liquidity. Every sell drives burn and stability.'],
  ['Liquidity', 'Built-in mechanisms support liquidity growth and price stability.'],
  ['DAO Partner Program', '5% of every smart contract deposit goes to the DAO Partner Pool, shared weekly among qualified partners.'],
  ['AI Wallet', 'An AI-powered portfolio intelligence wallet. Planned for Phase 2.'],
  ['PicoPine Pay', 'A branded crypto payment card for everyday payments. Planned for Phase 3.'],
  ['Atlas AI', 'An AI market intelligence engine that tracks trends and discovers opportunities. Planned for Phase 4.'],
]

export const NUMS = [
  { n: 100, prefix: '$', suffix: '', label: 'Minimum direct requirement', rest: 'to qualify for Generation Income and Rank Incentive' },
  { n: 1, prefix: '', suffix: '%', label: 'Daily minting reward', rest: ', up to, on full deposit, capped at 2.5X' },
  { n: 50, prefix: '', suffix: '%', label: 'Generation Income', rest: ', Level 1 community staking reward, 25 levels in total' },
  { n: 40, prefix: '', suffix: '%', label: 'Rank Incentive', rest: 'at the highest rank (P11)' },
]

export const PHASES = [
  ['M0 to M6', 'Community Foundation', 'Brand launch, community growth and onboarding, strategic partnerships.'],
  ['M6 to M12', 'AI Wallet Launch', 'Portfolio intelligence wallet, wallet health scoring, daily market insights.'],
  ['M12 to M21', 'Pay Launch', 'Crypto payment card launch, global spending and merchant access.'],
  ['M21 to M30', 'Atlas AI Launch', 'Market intelligence engine, trend and opportunity discovery, AI research reports.'],
  ['M30 to M42', 'Global Expansion and Web3 Infrastructure', 'Global ecosystem growth, developer APIs and integrations, governance framework.'],
]

export const FAQS = [
  ['What is PicoPine?', 'PicoPine Protocol is a fair, transparent and sustainable economic model built on zero supply, smart contract logic and community-driven value growth.'],
  ['What does zero supply mean?', 'Tokens are not pre-created. Supply starts from zero and grows only through on-chain participation.'],
  ['What does ownership renounced mean?', 'No admin can mint, pause or change the contract after deployment, and there is no hidden control.'],
  ['Which blockchain does it use?', 'BNB Smart Chain, with BEP-20 compatibility, fast transactions, low gas fees and broad wallet support.'],
  ['What are the deposit limits?', 'The minimum deposit is $10 and the maximum is $1,000 per account. 10% of each deposit goes to the Ecosystem Development Fund.'],
  ['What limits apply to rewards?', 'Reward income is limited to 2.5X of the mint amount and working income to 3.5X. The minimum claim is $10 with a 5% claim fee and a $3,000 daily claim limit.'],
  ['Which products are planned?', 'PicoPine AI Wallet, PicoPine Pay and PicoPine Atlas AI, delivered across a 42-month, five-phase roadmap.'],
]

export const PARTNER_LABELS = ['AI services', 'Strategic partners', 'Developer APIs', 'Integrations', 'Merchant access', 'Wallet and Pay']

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
