import { api } from '../../../../shared/api/axios';
import type { CopingStrategyListResponse } from '../model/copingStrategy.types';

export const listCopingStrategies = async (
  therapyId: string
): Promise<CopingStrategyListResponse> => {
  const response = await api.get<CopingStrategyListResponse>('/coping-strategy/list', {
    params: { therapyId },
  });
  return response.data;
};
