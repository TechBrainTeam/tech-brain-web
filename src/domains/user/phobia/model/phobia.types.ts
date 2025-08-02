import type { Meta } from '../../../../shared/types/types';

export interface Category {
  id: string;
  name: string;
}

export interface Phobia {
  id: string;
  name: string;
  englishName: string;
  description: string;
  categories: Category[];
  percentage: number;
  imageUrl: string;
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

export interface PhobiaQueryParams {
  search?: string;
  categoryId?: string;
  page?: number;
  limit?: number;
}
