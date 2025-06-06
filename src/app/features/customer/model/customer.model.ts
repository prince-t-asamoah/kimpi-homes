export interface CustomerOrder {
  id: string;
  date: string;
  totalPrice: string;
  status: string;
  totalItems?: number;
}

export interface CustomerMenuActionItem {
  id: string;
  label: string;
  iconName?: string;
}
