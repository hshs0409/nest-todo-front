/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateTodoInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createTodoMutation
// ====================================================

export interface createTodoMutation_createTodo {
  __typename: "CreateTodoOutput";
  ok: boolean;
  error: string | null;
}

export interface createTodoMutation {
  createTodo: createTodoMutation_createTodo;
}

export interface createTodoMutationVariables {
  createTodoInput: CreateTodoInput;
}
