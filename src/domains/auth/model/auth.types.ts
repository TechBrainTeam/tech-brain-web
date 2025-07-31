export interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginRequest {
  emailOrUsername: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  data: {
    token: string;
    user: {
      id: string;
      email: string;
      username: string;
      firstName: string;
      lastName: string;
      profileImage: string;
    };
  };
}
