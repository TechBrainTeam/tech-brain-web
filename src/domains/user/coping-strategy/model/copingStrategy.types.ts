export interface CopingStrategyData {
  id: string;
  title: string;
  content: string;
  stepNumber: number;
  durationInMinutes: number;
  createdAt: string;
  updatedAt: string;
  isCompleted: boolean;
}

export interface TherapyData {
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface CopingStrategyListResponse {
  success: boolean;
  therapy: TherapyData;
  data: {
    therapy: TherapyData;
    strategies: CopingStrategyData[];
  };
}

export interface CopingStrategyDetailResponse {
  success: boolean;
  data: CopingStrategyData;
}

export interface CompleteStrategyResponse {
  success: boolean;
  data: {
    completed: boolean;
    nextStrategyId: string | null;
  };
}
