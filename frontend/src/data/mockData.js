// Template data: change these values to match your team's investment topic.
export const appConfig = {
  appName: 'Straits Invest',
  bankName: 'Straits Digital Bank',
  productType: 'Markets',
}

export const markets = [
  {
    id: 'shares',
    label: 'Stocks or Shares',
    shortLabel: 'Shares',
    description: 'U.S Equities example products.',
  },
  {
    id: 'forex',
    label: 'Foreign Exchange',
    shortLabel: 'Forex',
    description: 'Currency pairs against SGD.',
  },
  {
    id: 'metals',
    label: 'Precious Metals',
    shortLabel: 'Commodities',
    description: 'Gold, silver, and platinum examples.',
  },
  {
    id: 'crypto',
    label: 'Cryptocurrency',
    shortLabel: 'Crypto',
    description: 'Digital asset example products.',
  },
]

export const customerProfile = {
  name: 'Test User',
  customerId: 'SDB-2048',
  accountType: 'Starter Account',
  availableBalance: 12500,
  portfolioValue: 28340,
  totalEarnings: 820,
  paypalEmail: 'test.demo@example.com',
}

export const summaryItems = [
  {
    label: 'Portfolio value',
    value: customerProfile.portfolioValue,
    note: 'Mock holdings total',
  },
  {
    label: 'Available balance',
    value: customerProfile.availableBalance,
    note: 'Ready to invest',
  },
  {
    label: 'Total earnings',
    value: customerProfile.totalEarnings,
    note: 'Demo performance',
  },
]

export const recentActivity = [
  {
    date: '06 Jul 2026',
    description: 'Viewed product prices',
    status: 'Viewed',
    amount: null,
  },
  {
    date: '05 Jul 2026',
    description: 'PayPal connection checked',
    status: 'Connected',
    amount: null,
  },
  {
    date: '03 Jul 2026',
    description: 'Portfolio value refreshed',
    status: 'Updated',
    amount: customerProfile.portfolioValue,
  },
]

export const products = [
  {
    code: 'INTC',
    name: 'Intel Corporation',
    marketId: 'shares',
    category: 'U.S Equities',
    unitPrice: 43.85,
    changePercent: 1.24,
    lastUpdated: '06 Jul 2026, 10:05 AM',
    description: 'Example stock/share product for the U.S equities topic.',
    mockTrend: [35, 42, 38, 48, 54, 50],
  },
  {
    code: 'GOOG',
    name: 'Alphabet Inc.',
    marketId: 'shares',
    category: 'U.S Equities',
    unitPrice: 249.43,
    changePercent: -0.42,
    lastUpdated: '06 Jul 2026, 10:05 AM',
    description: 'Example stock/share product for the U.S equities topic.',
    mockTrend: [58, 52, 54, 49, 45, 43],
  },
  {
    code: 'NVDA',
    name: 'NVIDIA Corporation',
    marketId: 'shares',
    category: 'U.S Equities',
    unitPrice: 174.02,
    changePercent: 2.18,
    lastUpdated: '06 Jul 2026, 10:05 AM',
    description: 'Example stock/share product for the U.S equities topic.',
    mockTrend: [36, 42, 48, 54, 61, 68],
  },
  {
    code: 'EUR/SGD',
    name: 'Euro to Singapore Dollar',
    marketId: 'forex',
    category: 'Foreign Exchange',
    unitPrice: 1.46,
    changePercent: 0.18,
    lastUpdated: '06 Jul 2026, 10:05 AM',
    description: 'Example currency pair for the foreign exchange topic.',
    mockTrend: [42, 44, 43, 47, 46, 49],
  },
  {
    code: 'GBP/SGD',
    name: 'British Pound to Singapore Dollar',
    marketId: 'forex',
    category: 'Foreign Exchange',
    unitPrice: 1.71,
    changePercent: -0.09,
    lastUpdated: '06 Jul 2026, 10:05 AM',
    description: 'Example currency pair for the foreign exchange topic.',
    mockTrend: [52, 50, 48, 49, 47, 46],
  },
  {
    code: 'USD/SGD',
    name: 'U.S. Dollar to Singapore Dollar',
    marketId: 'forex',
    category: 'Foreign Exchange',
    unitPrice: 1.35,
    changePercent: 0.05,
    lastUpdated: '06 Jul 2026, 10:05 AM',
    description: 'Example currency pair for the foreign exchange topic.',
    mockTrend: [45, 46, 46, 47, 48, 48],
  },
  {
    code: 'PLATINUM',
    name: 'Platinum',
    marketId: 'metals',
    category: 'Precious Metals',
    unitPrice: 1450,
    changePercent: 0.72,
    lastUpdated: '06 Jul 2026, 10:05 AM',
    description: 'Example precious metal product.',
    mockTrend: [44, 42, 48, 51, 49, 54],
  },
  {
    code: 'GOLD',
    name: 'Gold',
    marketId: 'metals',
    category: 'Precious Metals',
    unitPrice: 3180,
    changePercent: 0.31,
    lastUpdated: '06 Jul 2026, 10:05 AM',
    description: 'Example precious metal product.',
    mockTrend: [56, 58, 57, 60, 61, 63],
  },
  {
    code: 'SILVER',
    name: 'Silver',
    marketId: 'metals',
    category: 'Precious Metals',
    unitPrice: 42,
    changePercent: -0.14,
    lastUpdated: '06 Jul 2026, 10:05 AM',
    description: 'Example precious metal product.',
    mockTrend: [48, 46, 47, 45, 44, 43],
  },
  {
    code: 'BTC',
    name: 'Bitcoin',
    marketId: 'crypto',
    category: 'Cryptocurrency',
    unitPrice: 92500,
    changePercent: 1.85,
    lastUpdated: '06 Jul 2026, 10:05 AM',
    description: 'Example cryptocurrency product.',
    mockTrend: [45, 52, 49, 58, 64, 70],
  },
  {
    code: 'ETH',
    name: 'Ethereum',
    marketId: 'crypto',
    category: 'Cryptocurrency',
    unitPrice: 4800,
    changePercent: 1.12,
    lastUpdated: '06 Jul 2026, 10:05 AM',
    description: 'Example cryptocurrency product.',
    mockTrend: [40, 46, 50, 48, 56, 59],
  },
  {
    code: 'XRP',
    name: 'XRP',
    marketId: 'crypto',
    category: 'Cryptocurrency',
    unitPrice: 3.25,
    changePercent: -0.65,
    lastUpdated: '06 Jul 2026, 10:05 AM',
    description: 'Example cryptocurrency product.',
    mockTrend: [55, 53, 48, 44, 46, 42],
  },
]

export function getMarketById(marketId) {
  return markets.find((market) => market.id === marketId) || markets[0]
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: 'SGD',
  }).format(value)
}
