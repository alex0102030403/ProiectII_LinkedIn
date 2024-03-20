import { Button, Form, Segment } from "semantic-ui-react";
import { Job } from "../../../app/models/job";
import { ChangeEvent } from "react";
import React from "react";
import { useState } from "react";

interface Props{
    job: Job | undefined;
    closeForm: () => void;
    createOrEdit: (job: Job) => void;
    submitting: boolean;
}

export default function JobForm({job: selectedJob, closeForm, createOrEdit, submitting}: Props) {

    const initialState = selectedJob ?? {
        id: '',
        title: '',
        description: '',
        date: '',
        category: '',
        city: '',
        country: '',
        company: ''
    }

    const [job, setJob] = useState(initialState);

    function handleSubmit() {
        createOrEdit(job);
    }

    function handleInputChange(event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setJob({...job, [event.target.name]: event.target.value})
    }
    
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Job Title' value={job.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={job.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='City' value={job.city} name='city' onChange={handleInputChange} />
                <Form.Input placeholder='Country' value={job.country} name='country' onChange={handleInputChange} />
                <Form.Input type="date" placeholder='Date' value={job.date} name='date' onChange={handleInputChange} />
                <Form.Input placeholder='Category' value={job.category} name='category' onChange={handleInputChange} />
                <Form.Input placeholder='Company' value={job.company} name='company' onChange={handleInputChange} />
                <Button loading={submitting} floated='right' positive type='submit' content='Submit'  />
                <Button onClick={() => closeForm()} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>

    )
}

