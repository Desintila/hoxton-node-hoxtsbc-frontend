
export type Transaction = {
  id: number;
  user_id: number;
  amount: number;
  currency: string;
  receiverOrSender: string;
  completedAt: string;
  isPositive: boolean;
}

export type User = {
  id: number;
  email: string;
  fullname: string;
  amountInAccount: number;
  transactions: Transaction[]
}

export type RequestBody = Record<string, any>
