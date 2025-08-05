import { api } from '../../../../shared/api/axios';
import type { TherapyListResponse, TherapyQueryParams } from '../model/therapy.types';

export const listTherapies = async (params: TherapyQueryParams): Promise<TherapyListResponse> => {
  const response = await api.get<TherapyListResponse>('/therapy/list', { params });
  return response.data;
};
