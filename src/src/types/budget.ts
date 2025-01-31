export interface Budget {
  id: string;
  category: string;
  amount: number;
  spent: number;
  period: 'daily' | 'weekly' | 'monthly';
}

export interface Transaction {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  type: 'income' | 'expense';
}
