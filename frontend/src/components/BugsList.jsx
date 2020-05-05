import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs, getUnresolvedBugs, resolveBug } from "../store/bugs";

const BugsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  const bugs = useSelector(getUnresolvedBugs);

  return (
    <div>
      <ul>
        {bugs.map((bug, index) => (
          <div>
            <li key={index}>{bug.description}</li>
            <span>
              <button onClick={() => dispatch(resolveBug(bug.id))}>
                resolved
              </button>
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BugsList;
