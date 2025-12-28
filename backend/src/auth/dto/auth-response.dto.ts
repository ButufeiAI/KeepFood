import { UserRole } from '../../common/enums/role.enum';

export class AuthResponseDto {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    restaurantId?: string;
  };
}



