/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteTodoInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: deleteTodoMutation
// ====================================================

export interface deleteTodoMutation_deleteTodo {
  __typename: "DeleteTodoOutput";
  ok: boolean;
  error: string | null;
}

export interface deleteTodoMutation {
  deleteTodo: deleteTodoMutation_deleteTodo;
}

export interface deleteTodoMutationVariables {
  deleteTodoInput: DeleteTodoInput;
}
