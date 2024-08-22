import {
  Edge,
  Node,
  OnEdgesChange,
  OnNodesChange,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import React from 'react';
import { v4 } from 'uuid';
export type RoleNode = Node<{
  id: string;
  role: string;
  title: string;
  parent: string;
}>;

export type RoleNodeContextType = {
  nodes: RoleNode[];
  setNodes: React.Dispatch<React.SetStateAction<RoleNode[]>>;
  onNodesChange: OnNodesChange<RoleNode>;
  onReplaceNode: (nodes: RoleNode[]) => void;
  onRemoveNode: (id: string) => void;
  onAddNode: (parent?: string) => void;
  onUpdateRole: (id: string) => (role: string) => void;
  onUpdateTitle: (id: string) => (title: string) => void;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: OnEdgesChange<Edge>;
};

export const RoleNodeContext = React.createContext<RoleNodeContextType>({
  nodes: [],
  setNodes() {},
  onAddNode(parent) {},
  onNodesChange(changes) {},
  onRemoveNode(id) {},
  onReplaceNode(nodes) {},
  onUpdateRole(id) {
    return (role) => {};
  },
  onUpdateTitle(id) {
    return (title) => {};
  },
  edges: [],
  onEdgesChange(changes) {},
  setEdges(edges) {},
});

export function RoleNodesProvider({ children }) {
  const [nodes, setNodes, onNodesChange] = useNodesState<RoleNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const onAddNode = React.useCallback(
    (parent = '') => {
      const id = v4();
      setNodes((prev) => {
        return [
          ...prev,
          {
            id,
            type: 'roleNodeComponent',
            position: {
              x: Math.random() * 500,
              y: Math.random() * 500,
            },
            data: {
              id,
              parent,
              role: '',
              title: '',
            },
          },
        ];
      });
      if (parent) {
        setEdges((prev) => {
          return [
            ...prev,
            {
              id: `${id}-${parent}`,
              source: parent,
              target: id,
              type: 'smoothstep',
              style: { stroke: '#1e1e1e' },
              animated: true,
            },
          ];
        });
      }
    },
    [setEdges, setNodes],
  );

  const onUpdateTitle = React.useCallback(
    (id: string) => (title: string) => {
      setNodes((prev) => {
        return prev.map((node) => {
          if (node.data.id === id) {
            return {
              ...node,
              data: {
                ...node.data,
                title,
              },
            };
          }

          return node;
        });
      });
    },
    [setNodes],
  );

  const onUpdateRole = React.useCallback(
    (id: string) => (role: string) => {
      setNodes((prev) => {
        return prev.map((node) => {
          if (node.data.id === id) {
            return {
              ...node,
              data: {
                ...node.data,
                role,
              },
            };
          }

          return node;
        });
      });
    },
    [setNodes],
  );

  const onRemoveNode = React.useCallback(
    (id: string) => {
      setNodes((prev) => {
        return prev.filter((node) => node.data.id !== id);
      });
    },
    [setNodes],
  );

  const onReplaceNode = React.useCallback(
    (nodes: RoleNode[]) => {
      setNodes(nodes);
    },
    [setNodes],
  );

  const value = React.useMemo(() => {
    return {
      nodes,
      setNodes,
      onNodesChange,
      onReplaceNode,
      onRemoveNode,
      onAddNode,
      onUpdateTitle,
      onUpdateRole,
      edges,
      setEdges,
      onEdgesChange,
    };
  }, [
    edges,
    nodes,
    onAddNode,
    onEdgesChange,
    onNodesChange,
    onRemoveNode,
    onReplaceNode,
    onUpdateRole,
    onUpdateTitle,
    setEdges,
    setNodes,
  ]);

  return (
    <RoleNodeContext.Provider value={value}>
      {children}
    </RoleNodeContext.Provider>
  );
}

export default function useRoleNodes() {
  const context = React.useContext(RoleNodeContext);
  return context;
}
