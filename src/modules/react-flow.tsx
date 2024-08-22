import { Background, Controls, Node, ReactFlow } from '@xyflow/react';
import { RoleComponentProps } from '../components/role-component';
import { Button } from '@mantine/core';
import '@xyflow/react/dist/style.css';
import useRoleNodes from '../hooks/use-role-nodes';
import RoleNodeComponent from '../components/role-node-component';
import React from 'react';

export type RoleNode = Node & { data: RoleComponentProps };

export default function ReactFlowPage() {
  const { nodes, onNodesChange, onAddNode, edges, onEdgesChange } =
    useRoleNodes();
  const nodeTypes = React.useMemo(() => {
    return { roleNodeComponent: RoleNodeComponent };
  }, []);
  console.log(edges);
  return (
    <div
      style={{
        height: '100dvh',
        width: '100dvw',
      }}
    >
      {nodes.length === 0 && (
        <Button
          onClick={() => {
            onAddNode();
          }}
        >
          Add Role
        </Button>
      )}

      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        fitView
        connectionLineStyle={{
          stroke: '#1e1e1e',
        }}
        snapGrid={[20, 20]}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
