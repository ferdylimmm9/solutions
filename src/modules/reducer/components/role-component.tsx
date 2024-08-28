import { Button, Card, Flex, Text, TextInput } from '@mantine/core';
import { RoleType } from '../../../hooks/use-roles';

export type RoleComponentData = {
  role: RoleType;
  onAddChild: () => void;
  onChangeTitle: (value: string) => void;
  onChangeRole: (value: string) => void;
  onDeleteRole: () => void;
};
export interface RoleComponentProps extends RoleComponentData {}

export default function RoleComponent(props: RoleComponentProps) {
  const role = props.role;
  const onChangeTitle = props.onChangeTitle;
  const onChangeRole = props.onChangeRole;
  const onAddChild = props.onAddChild;
  const onDeleteRole = props.onDeleteRole;

  return (
    <Card withBorder>
      <Flex direction="column" gap={8}>
        <Text>Id: {role.id}</Text>
        {role.parent && <Text>Parent: {role.parent}</Text>}
        <TextInput
          value={role.title}
          label="Title"
          placeholder="Title"
          onChange={(e) => {
            const value = e.target.value;
            onChangeTitle(value);
          }}
        />
        <TextInput
          value={role.role}
          label="Role"
          placeholder="Role"
          onChange={(e) => {
            const value = e.target.value;
            onChangeRole(value);
          }}
        />
        <Button onClick={onAddChild}>Add Child</Button>
        <Button onClick={onDeleteRole} color="red" variant="subtle">
          Delete Node
        </Button>
      </Flex>
    </Card>
  );
}
