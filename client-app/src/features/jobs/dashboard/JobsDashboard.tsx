import React from "react";
import { Grid, List } from "semantic-ui-react";
import JobsList from "./JobsList";
import { Job } from "../../../app/models/job";
import JobsDetails from "../details/JobsDetails";
import JobForm from "../form/JobForm";


interface Props{
    jobs: Job[];
    selectedJob: Job | undefined;
    selectJob: (id: string) => void;
    cancelSelectJob: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (job: Job) => void;
    handleDeleteJob: (id: string) => void;
    submitting: boolean;

}

export default function JobsDashboard({jobs, selectJob, selectedJob, cancelSelectJob, editMode, 
    openForm, closeForm, createOrEdit, handleDeleteJob, submitting}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <JobsList 
                jobs={jobs} 
                selectJob={selectJob} 
                handleDeleteJob={handleDeleteJob}
                submitting={submitting}
                />
            </Grid.Column>

            <Grid.Column width='6'>
                {selectedJob && !editMode && 
                <JobsDetails 
                jobs={selectedJob} 
                cancelSelectJob={cancelSelectJob}
                openForm={openForm}
                />}
                {editMode && 
                <JobForm  
                job={selectedJob} 
                closeForm={closeForm} 
                createOrEdit={createOrEdit}
                submitting={submitting}
                />
                }
            </Grid.Column>

            
            
        </Grid>
    )
}