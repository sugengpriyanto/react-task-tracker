import React, { useState } from 'react';
import './style.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const data = [
  {
    id: 0,
    title: 'Record Guitar',
    date: new Date('2021-12-12').toLocaleString(),
    reminder: true,
  },
  {
    id: 1,
    title: 'Record Drum',
    date: new Date('2021-12-12').toLocaleString(),
    reminder: false,
  },
];

export default function App() {
  const [tasklist, setTasklist] = useState(data);
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const handleDelete = (id) => {
    data.filter((item) => item.id !== id);
  };

  return (
    <div className="border m-1 border-success border-2">
      <Header
        action={handleToggle}
        name="Jack"
        text={toggle ? 'Add' : 'Close'}
        color={toggle ? 'btn btn-warning' : 'btn btn-danger'}
      />
      {!toggle && <AddTask action={handleSubmit} />}
      {tasklist.length > 0 ? (
        <Tasks datalist={tasklist} />
      ) : (
        'No task to display'
      )}
    </div>
  );
}
