import { useMutation } from '@tanstack/react-query';
import type { CreateUserPhobiaResponse } from '../model/userPhobia.types';
import { createUserPhobia } from '../api/phobia.service';

export const useCreateUserPhobia = () => {
  return useMutation<CreateUserPhobiaResponse, Error, string>({
    mutationFn: (phobiaId: string) => createUserPhobia(phobiaId),
  });
};
