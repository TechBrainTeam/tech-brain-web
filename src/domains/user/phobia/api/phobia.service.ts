import { api } from '../../../../shared/api/axios';
import type {
  PhobiaDetailsResponse,
  PhobiaListResponse,
  PhobiaQueryParams,
} from '../model/phobia.types';
import type { CreateUserPhobiaResponse } from '../model/userPhobia.types';

export const listPhobias = async (params: PhobiaQueryParams): Promise<PhobiaListResponse> => {
  const response = await api.get<PhobiaListResponse>('/phobia/list', { params });
  return response.data;
};

export const getPhobiaDetails = async (phobiaId: string): Promise<PhobiaDetailsResponse> => {
  const response = await api.get<PhobiaDetailsResponse>(`/phobia/${phobiaId}`);
  return response.data;
};

export const createUserPhobia = async (phobiaId: string): Promise<CreateUserPhobiaResponse> => {
  const response = await api.post<CreateUserPhobiaResponse>('/user-phobia/create', { phobiaId });
  return response.data;
};
