import React from 'react';
import { List, Checkbox } from 'antd';

const Todolist = () => {
  const todos = [
    '待办事项1',
    '待办事项2',
    '待办事项3',
    '待办事项4',
    '待办事项5',
    '待办事项6',
    // 更多待办事项...
  ];

  return (
    <List
      bordered
      dataSource={todos}
      renderItem={item => (
        <List.Item>
          <Checkbox>{item}</Checkbox>
        </List.Item>
      )}
    />
  );
};

export default Todolist;
