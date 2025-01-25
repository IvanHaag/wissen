export interface Account {
  id: number
  currency: string
  amount: number
}

export const accounts: Account[] = [
  { id: 3691087518, currency: 'ARS', amount: 788761.95 },
  { id: 3752437765, currency: 'USD', amount: 605499.7 },
  { id: 7462045020, currency: 'ARS', amount: 328806.57 },
  { id: 4613319786, currency: 'USD', amount: 663501.07 },
  { id: 4385706136, currency: 'ARS', amount: 287368.88 },
  { id: 9308719295, currency: 'USD', amount: 986439.17 },
  { id: 4911561183, currency: 'USD', amount: 339876.08 },
  { id: 8488776280, currency: 'ARS', amount: 923407.03 },
  { id: 1502672211, currency: 'ARS', amount: 185591.72 },
  { id: 7230083755, currency: 'USD', amount: 195071.28 },
]

export interface Transaction {
  date: string
  description: string
  amount: number
  id: number
}

export const transactions: Transaction[] = [
  { date: '2025-01-01', description: 'Salary', amount: 3456.78, id: 1 },
  { date: '2025-01-01', description: 'Rent', amount: -1200.5, id: 2 },
  { date: '2025-01-02', description: 'Groceries', amount: -245.67, id: 3 },
  { date: '2025-01-02', description: 'Freelance', amount: 750.0, id: 4 },
  { date: '2025-01-03', description: 'Investment', amount: 10000.0, id: 5 },
  { date: '2025-01-03', description: 'Dining', amount: -145.89, id: 6 },
  { date: '2025-01-04', description: 'Gift', amount: 500.0, id: 7 },
  { date: '2025-01-04', description: 'Utilities', amount: -345.2, id: 8 },
  { date: '2025-01-05', description: 'Bonus', amount: 1500.0, id: 9 },
  { date: '2025-01-05', description: 'Loan', amount: -2000.0, id: 10 },
  { date: '2025-01-06', description: 'Insurance', amount: -678.9, id: 11 },
  { date: '2025-01-06', description: 'Refund', amount: 120.5, id: 12 },
  { date: '2025-01-07', description: 'Shopping', amount: -890.12, id: 13 },
  { date: '2025-01-07', description: 'Sale', amount: 300.0, id: 14 },
  { date: '2025-01-08', description: 'Travel', amount: -450.75, id: 15 },
  { date: '2025-01-08', description: 'Savings', amount: 2000.0, id: 16 },
  { date: '2025-01-09', description: 'Donation', amount: -100.0, id: 17 },
  { date: '2025-01-09', description: 'Profit', amount: 5678.9, id: 18 },
  { date: '2025-01-10', description: 'Expense', amount: -123.45, id: 19 },
  { date: '2025-01-10', description: 'Dividend', amount: 890.0, id: 20 },
]
