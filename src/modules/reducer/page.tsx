import { Button, Container, Flex } from '@mantine/core';

import { v4 } from 'uuid';
import React from 'react';
import useRoles, { RoleType } from './hooks/use-roles';
import RoleComponent from './components/role-component';

export default function ReducerPage() {
  const { roles, onAddRole, onDeleteRole, onEditRole } = useRoles();

  const onChangeRole = React.useCallback(
    (role: RoleType) => (value: string) => {
      onEditRole({
        ...role,
        role: value,
      });
    },
    [onEditRole],
  );

  const onAddChild = React.useCallback(
    (role: RoleType) => () => {
      const newId = v4();
      const parent = role.id;
      onAddRole(newId, parent);
    },
    [onAddRole],
  );

  const onChangeTitle = React.useCallback(
    (role: RoleType) => (value: string) => {
      onEditRole({
        ...role,
        title: value,
      });
    },
    [onEditRole],
  );

  const _onDeleteRole = React.useCallback(
    (role: RoleType) => () => {
      onDeleteRole(role.id);
    },
    [onDeleteRole],
  );

  return (
    <Container fluid p={16}>
      {roles.length === 0 && (
        <Button
          onClick={() => {
            const newId = v4();
            const parent = ''; // there's no parent
            onAddRole(newId, parent);
          }}
        >
          Add Role
        </Button>
      )}
      <Flex direction="column" gap={16}>
        {roles.map((role) => {
          return (
            <RoleComponent
              key={role.id}
              role={role}
              onChangeRole={onChangeRole(role)}
              onAddChild={onAddChild(role)}
              onChangeTitle={onChangeTitle(role)}
              onDeleteRole={_onDeleteRole(role)}
            />
          );
        })}
      </Flex>
    </Container>
  );
}
