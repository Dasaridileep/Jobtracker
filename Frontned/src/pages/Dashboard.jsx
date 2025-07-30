import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchJobs = async () => {
    try {
      const res = await axios.get(
        'https://jobtracker-1-0bdl.onrender.com/api/jobs',
        config
      );
      setJobs(res.data);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    }
  };

  const deleteJob = async (id) => {
    try {
      await axios.delete(
        `https://jobtracker-1-0bdl.onrender.com/api/jobs/${id}`,
        config
      );
      fetchJobs(); // Refresh the job list
    } catch (err) {
      console.error('Error deleting job:', err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {jobs.length === 0 ? (
        <p>No jobs found</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <button onClick={() => deleteJob(job._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
