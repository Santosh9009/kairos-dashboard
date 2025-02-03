export interface TimeframeData {
  label: string;
  percentage: number;
  selected?: boolean;
}

export interface BuysellProps {
  buyTransactions: number;
  sellTransactions: number;
  buyVolume: number;
  sellVolume: number;
  buyMakers: number;
  sellMakers: number;
  timeframes?: TimeframeData[];
}
