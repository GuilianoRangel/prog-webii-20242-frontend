/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { PageableObject } from '../models/pageable-object';
import { SecurityUserDto } from '../models/security-user-dto';
import { SortObject } from '../models/sort-object';
export interface PageSecurityUserDto {
  content?: Array<SecurityUserDto>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: SortObject;
  totalElements?: number;
  totalPages?: number;
}
