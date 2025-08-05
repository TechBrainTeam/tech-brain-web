import type { Meta } from '../../../../shared/types/types';

export interface PhobiaSummary {
  id: string;
  name: string;
}

export interface Therapy {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  phobia: PhobiaSummary;
}

export interface TherapyData {
  therapies: Therapy[];
  meta: Meta;
}

export interface TherapyListResponse {
  success: boolean;
  data: TherapyData;
}

export interface TherapyQueryParams {
  search?: string;
  page?: number;
  limit?: number;
}
