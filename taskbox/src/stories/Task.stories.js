import React from 'react'
import {action} from '@storybook/addon-actions';

import Task from '../components/Task';

export default {
    component : Task,
    title : 'Task',
    excludeStories: /.*Data$/,
};

export const TaskData = {
    id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(),
}

export const actionData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

export const Default = () => <Task task={{...TaskData}} {...actionData} />;

export const Pinned = () => <Task task={{...TaskData,state:'TASK_PINNED'}} {...actionData} />;

export const Archived = () => <Task task={{...TaskData,state:'TASK_ARCHIVED'}} {...actionData} />;