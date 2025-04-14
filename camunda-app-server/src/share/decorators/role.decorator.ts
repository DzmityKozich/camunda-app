import { SetMetadata } from '@nestjs/common';
import { Roles } from '../model';

export const ROLE_KEY = 'roles';
export const Role = (...args: Roles[]) => SetMetadata(ROLE_KEY, args);
