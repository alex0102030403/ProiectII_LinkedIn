import { Fragment, useEffect, useState } from 'react'
import './styles.css';
import { Container, Header, List } from 'semantic-ui-react';
import { Job } from '../models/job';
import NavBar from './NavBar';
import JobsDashboard from '../../features/jobs/dashboard/JobsDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponents from './LoadingComponents';

function App() {
  
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<undefined | Job>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  

  useEffect(() => {

    agent.Jobs.list()
      .then(response => {
        let jobs: Job[] = [];
        response.forEach(job => {
          job.date = job.date.split('T')[0];
          jobs.push(job);
        })
        setJobs(jobs);
        setLoading(false);
      });

  }, []);

  function handleSelectJob(id: string) {
    setSelectedJob(jobs.find(x => x.id === id));
  }

  function handleCancelSelectJob() {
    setSelectedJob(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectJob(id) : handleCancelSelectJob();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditJob(job: Job) {

    setSubmitting(true);
    if (job.id) {
      agent.Jobs.update(job)
        .then(() => {
          setJobs([...jobs.filter(x => x.id !== job.id), job]);
          setSelectedJob(job);
          setEditMode(false);
          setSubmitting(false);
        })
    } else {
      job.id = uuid();
      agent.Jobs.create(job)
        .then(() => {
          setJobs([...jobs, job]);
          setSelectedJob(job);
          setEditMode(false);
          setSubmitting(false);
        })
    }

  }

  function handleDeleteJob(id: string) {
    setSubmitting(true);

    agent.Jobs.delete(id)
      .then(() => {
        setJobs([...jobs.filter(x => x.id !== id)]);
        setSubmitting(false);
      })
    
  }

  if (loading) return <LoadingComponents inverted={false} content={''} />
  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <Header as='h1' content='Job List' />
        <JobsDashboard 
        jobs={jobs} 
        selectedJob={selectedJob}
        selectJob={handleSelectJob}
        cancelSelectJob={handleCancelSelectJob}
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        createOrEdit={handleCreateOrEditJob}
        handleDeleteJob={handleDeleteJob}
        submitting={submitting}
        />
      </Container>
      
    </>
  )
}

export default App
