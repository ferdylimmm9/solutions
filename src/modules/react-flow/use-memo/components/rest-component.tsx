import { Button, Checkbox, Flex } from '@mantine/core';

export enum TabEnum {
  all = 'all',
  active = 'active',
  completed = 'completed',
}

export interface RestComponentProps {
  setTab: React.Dispatch<React.SetStateAction<TabEnum>>;
  tab: TabEnum;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
}

export default function RestComponent(props: RestComponentProps) {
  const { isDark, setIsDark, setTab, tab } = props;
  return (
    <>
      <Flex direction="row" gap={16}>
        <Button
          variant={TabEnum.all === tab ? 'filled' : 'subtle'}
          onClick={() => setTab(TabEnum.all)}
        >
          All
        </Button>
        <Button
          variant={TabEnum.active === tab ? 'filled' : 'subtle'}
          onClick={() => setTab(TabEnum.active)}
        >
          Active
        </Button>
        <Button
          variant={TabEnum.completed === tab ? 'filled' : 'subtle'}
          onClick={() => setTab(TabEnum.completed)}
        >
          Completed
        </Button>
      </Flex>
      <br />
      <Checkbox
        label="Dark Mode"
        type="checkbox"
        checked={isDark}
        onChange={(e) => setIsDark(e.currentTarget.checked)}
      />
    </>
  );
}
