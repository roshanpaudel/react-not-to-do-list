import React from "react";

export const UserInput = () => {

  
  return (
    <div>
      <form
        onsubmit="handleOnSubmit"
        action="javascript:void(0)"
        class="border p-5 rounded shadow-lg mt-5"
      >
        <div class="row g-2">
          <div class="col-md-7">
            <input
              type="text"
              class="form-control"
              placeholder="Task"
              aria-label="First name"
              name="task"
              id="task"
            />
          </div>
          <div class="col-md-2">
            <input
              type="number"
              class="form-control"
              placeholder="40"
              aria-label="Last name"
              name="hr"
              min="1"
            />
          </div>
          <div class="col-md-3 d-grid">
            <button class="btn btn-primary">Add New Task</button>
          </div>
        </div>
      </form>
    </div>
  );
};
