import { api } from '../../../../shared/api/axios';
import type { PhobiaListResponse, PhobiaQueryParams } from '../model/phobia.types';

export const listPhobias = async (params: PhobiaQueryParams): Promise<PhobiaListResponse> => {
  const response = await api.get<PhobiaListResponse>('/phobia/list', { params });
  return response.data;
};
