/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { PageableObject } from '../models/pageable-object';
import { SecurityGroupDto } from '../models/security-group-dto';
import { SortObject } from '../models/sort-object';
export interface PageSecurityGroupDto {
  content?: Array<SecurityGroupDto>;
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
