import type { TaskTab } from '../../types/tabs';
import { Tabs, Text } from '@mantine/core';

type TaskTabsPrps = {
  incompleteCount: number;
  completedCount: number;
  activeTab: TaskTab;
  setActiveTab: (value: TaskTab) => void;
};

export const TaskTabs = ({
  incompleteCount,
  completedCount,
  activeTab,
  setActiveTab,
}: TaskTabsPrps) => {
  return (
    <Tabs
      defaultValue='incomplete'
      color='cyan'
      value={activeTab}
      onChange={(value) => {
        if (
          value === 'incomplete' ||
          value === 'completed' ||
          value === 'all'
        ) {
          setActiveTab(value);
        }
      }}
    >
      <Tabs.List>
        <Tabs.Tab
          color='cyan'
          value='incomplete'
          style={{ paddingInline: '24px' }}
        >
          未完了
          <Text span size='xl' fw={700} ml='sm'>
            {incompleteCount}
          </Text>
        </Tabs.Tab>
        <Tabs.Tab value='completed' style={{ paddingInline: '24px' }}>
          完了
          <Text span size='xl' fw={700} ml='sm'>
            {completedCount}
          </Text>
        </Tabs.Tab>
        <Tabs.Tab value='all' style={{ paddingInline: '24px' }}>
          すべて
          <Text span size='xl' fw={700} ml='sm'></Text>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
