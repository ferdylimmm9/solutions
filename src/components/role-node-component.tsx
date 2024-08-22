import { Button, Card, Flex, Text, TextInput } from '@mantine/core';
import { RoleType } from '../hooks/use-roles';
import useRoleNodes from '../hooks/use-role-nodes';
import { Handle, Position } from '@xyflow/react';

export type RoleNodeComponentData = RoleType;
export interface RoleNodeComponentProps {
  data: RoleNodeComponentData;
  isConnectable: boolean;
}

export default function RoleNodeComponent(props: RoleNodeComponentProps) {
  const { data, isConnectable } = props;
  const { onAddNode, onRemoveNode, onUpdateRole, onUpdateTitle } =
    useRoleNodes();

  return (
    <Card withBorder>
      <Flex direction="column" gap={8}>
        <Handle
          type="target"
          position={Position.Top}
          style={{ top: 10, background: '#555' }}
          isConnectable={isConnectable}
        />
        <Text>Id: {data.id}</Text>
        {data.parent && <Text>Parent: {data.parent}</Text>}
        <TextInput
          value={data.title}
          label="Title"
          placeholder="Title"
          onChange={(e) => {
            const value = e.target.value;
            onUpdateTitle(data.id)(value);
          }}
        />
        <TextInput
          value={data.role}
          label="Role"
          placeholder="Role"
          onChange={(e) => {
            const value = e.target.value;
            onUpdateRole(data.id)(value);
          }}
        />
        <Button onClick={() => onAddNode(data.id)}>Add Child</Button>
        <Button
          onClick={() => onRemoveNode(data.id)}
          color="red"
          variant="subtle"
        >
          Delete Node
        </Button>
        <Handle
          type="source"
          position={Position.Top}
          style={{ top: 10, background: '#555' }}
          isConnectable={isConnectable}
        />
      </Flex>
    </Card>
  );
}
