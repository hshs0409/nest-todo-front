/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRole {
  Admin = "Admin",
  Client = "Client",
}

export interface CreateAccountInput {
  email: string;
  password: string;
  role: UserRole;
}

export interface CreateTodoInput {
  name: string;
  isDone?: boolean | null;
  description: string;
}

export interface DeleteTodoInput {
  todoId: number;
}

export interface EditProfileInput {
  email?: string | null;
  password?: string | null;
}

export interface EditTodoInput {
  name?: string | null;
  isDone?: boolean | null;
  description?: string | null;
  todoId: number;
}

export interface LoginInput {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
