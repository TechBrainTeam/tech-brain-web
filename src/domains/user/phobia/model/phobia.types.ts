import type { Meta } from '../../../../shared/types/types';

export interface Category {
  id: string;
  name: string;
}

export interface CopingStrategy {
  id: string;
  title: string;
}

export interface Therapy {
  id: string;
  name: string;
  strategies: CopingStrategy[];
}

export interface Phobia {
  id: string;
  name: string;
  englishName: string;
  description?: string;
  categories: Category[];
  percentage?: number;
  imageUrl?: string;
  commonSymptoms?: string[];
  therapies: Therapy[];
  createdAt: string;
  updatedAt: string;
}

export interface PhobiaData {
  categories: Category[];
  data: Phobia[];
  meta: Meta;
}

export interface PhobiaListResponse {
  success: boolean;
  data: PhobiaData;
}

export interface PhobiaDetailsResponse {
  success: boolean;
  data: Phobia;
}

export interface PhobiaQueryParams {
  search?: string;
  categoryId?: string;
  page?: number;
  limit?: number;
}
