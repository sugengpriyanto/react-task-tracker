import React from 'react';

export default function AddTask({ action }) {
  return (
    <form onSubmit={action} className="p-2 ">
      <div className="form-group mb">
        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="title">Task Title</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              placeholder="ex. : Sleep Routine"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="date">Date</label>
          </div>
          <div className="col-6">
            <input type="date" className="form-control" />
          </div>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" />
          <label>Set Reminder</label>
        </div>
      </div>
      <input type="submit" value="Save Task" className="btn btn-warning mt-2" />
    </form>
  );
}
