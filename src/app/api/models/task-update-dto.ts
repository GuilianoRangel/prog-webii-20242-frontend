/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { GenericDto } from '../models/generic-dto';

/**
 * DTO para tarefas
 */
export type TaskUpdateDto = GenericDto & {

/**
 * ID da tarefa
 */
'id'?: number;

/**
 * Descrição da tarefa
 */
'description'?: string;
'completed'?: boolean;

/**
 * ID da Categoria da tarefa
 */
'category_id'?: number;
'dueDate'?: string;
} & {
};
