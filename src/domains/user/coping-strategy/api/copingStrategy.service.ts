import { api } from '../../../../shared/api/axios';
import type {
  CompleteStrategyResponse,
  CopingStrategyListResponse,
  CopingStrategyDetailResponse,
} from '../model/copingStrategy.types';

export const listCopingStrategies = async (
  therapyId: string
): Promise<CopingStrategyListResponse> => {
  const response = await api.get<CopingStrategyListResponse>('/coping-strategy/list', {
    params: { therapyId },
  });
  return response.data;
};

export const getCopingStrategyById = async (
  strategyId: string
): Promise<CopingStrategyDetailResponse> => {
  const response = await api.get<CopingStrategyDetailResponse>(`/coping-strategy/${strategyId}`);
  return response.data;
};

export const completeStrategy = async (strategyId: string): Promise<CompleteStrategyResponse> => {
  const response = await api.post<CompleteStrategyResponse>('/coping-strategy/complete', {
    strategyId,
  });
  return response.data;
};
