import React from 'react';

export interface RoleType {
  id: string;
  role: string;
  title: string;
  parent: string;
}

export enum RoleActionEnum {
  add = 'add',
  edit = 'edit',
  delete = 'delete',
  replace = 'replace',
}

export type RoleActionType =
  | {
      action: RoleActionEnum.add;
      payload: {
        id: string;
        parent: string;
      };
    }
  | {
      action: RoleActionEnum.edit;
      payload: RoleType;
    }
  | {
      action: RoleActionEnum.delete;
      payload: {
        id: string;
      };
    }
  | {
      action: RoleActionEnum.replace;
      payload: {
        roles: RoleType[];
      };
    };

export function roleReducer(state: RoleType[], action: RoleActionType) {
  switch (action.action) {
    case RoleActionEnum.add:
      return [
        ...state,
        {
          title: '',
          role: '',
          id: action.payload.id,
          parent: action.payload.parent,
        },
      ];
    case RoleActionEnum.edit:
      return state.map((role) => {
        if (role.id === action.payload.id) {
          return action.payload;
        }
        return role;
      });
    case RoleActionEnum.delete:
      return state.filter((role) => role.id !== action.payload.id);
    case RoleActionEnum.replace:
      return action.payload.roles;
    default:
      return state;
  }
}

export interface UseRolesReturn {
  roles: RoleType[];
  onAddRole: (id: string, parent: string) => void;
  onEditRole: (role: RoleType) => void;
  onDeleteRole: (id: string) => void;
  onReplaceRoles: (roles: RoleType[]) => void;
}

export default function useRoles(): UseRolesReturn {
  const [state, dispatch] = React.useReducer(roleReducer, []);

  const onAddRole = React.useCallback((id: string, parent: string) => {
    dispatch({
      action: RoleActionEnum.add,
      payload: {
        id,
        parent,
      },
    });
  }, []);

  const onEditRole = React.useCallback((role: RoleType) => {
    dispatch({
      action: RoleActionEnum.edit,
      payload: role,
    });
  }, []);

  const onDeleteRole = React.useCallback((id: string) => {
    dispatch({
      action: RoleActionEnum.delete,
      payload: {
        id,
      },
    });
  }, []);

  const onReplaceRoles = React.useCallback((roles: RoleType[]) => {
    dispatch({
      action: RoleActionEnum.replace,
      payload: {
        roles,
      },
    });
  }, []);

  return {
    roles: state,
    onAddRole,
    onEditRole,
    onDeleteRole,
    onReplaceRoles,
  };
}
