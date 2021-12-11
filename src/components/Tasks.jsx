import React from 'react';
import Task from './Task';

export default function Taks({ datalist, del }) {
  return datalist.map((item) => (
    <Task
      key={item.id}
      title={item.title}
      date={item.date}
      reminder={item.reminder}
      deleteaction={del}
    />
  ));
}
