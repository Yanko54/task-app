import { Tabs } from '@mantine/core';
import type { TaskTab } from '../../types/tabs';

type TaskTabsPrps = {
  incompleteCount: number;
  completedCount: number;
  allCount: number;
  activeTab: TaskTab;
  setActiveTab: (value: TaskTab) => void;
};

export const TaskTabs = ({
  incompleteCount,
  completedCount,
  allCount,
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
        <Tabs.Tab color='cyan' value='incomplete'>
          未完了 {incompleteCount}{' '}
        </Tabs.Tab>
        <Tabs.Tab value='completed'>完了 {completedCount}</Tabs.Tab>
        <Tabs.Tab value='all'>すべて {allCount}</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};
