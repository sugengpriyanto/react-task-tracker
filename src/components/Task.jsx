import React, { useState } from 'react';

export default function Task({ title, date, reminder, deleteaction }) {
  const [reminding, setReminding] = useState(reminder)
  const toggleReminder = () => {
    setReminding(!reminding)
  }
  return (
    <div className="d-flex justify-content-between align-items-center p-2 border border-2 border-success rounded m-2">
      <div className="task-desc">
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      <div className="task-alarm">
        <Alarm action={toggleReminder} remind={reminding} />
        <Delete action={deleteaction} />
      </div>
    </div>
  );
}


Task.defaultProps = {
  title: 'Record Guitar',
  date: new Date('2021-12-15').toLocaleString(),
  reminder: true,
}


const Alarm = ({ remind, action }) => {
  return (
    <button onClick={action}
      className={remind ? 'btn btn-primary' : 'btn btn-secondary'}
    >
      <i className="fa fa-bell"></i>
    </button>
  );
};

Alarm.defaultProps = {
  remind: true,
};

const Delete = ({action}) => {
  return <button className="btn btn-danger">
    <i className="fa fa-trash"></i>
  </button>
}
