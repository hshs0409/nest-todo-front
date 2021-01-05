/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditTodoInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: editTodoMutation
// ====================================================

export interface editTodoMutation_editTodo {
  __typename: "EditTodoOutput";
  ok: boolean;
  error: string | null;
}

export interface editTodoMutation {
  editTodo: editTodoMutation_editTodo;
}

export interface editTodoMutationVariables {
  editTodoInput: EditTodoInput;
}
