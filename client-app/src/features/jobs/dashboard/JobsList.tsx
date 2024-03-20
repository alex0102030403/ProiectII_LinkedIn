import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Job } from "../../../app/models/job";

interface Props{
    jobs: Job[];
    selectJob: (id: string) => void;
    handleDeleteJob: (id: string) => void;
    submitting: boolean;
}

export default function JobsList({jobs, selectJob, handleDeleteJob, submitting}: Props) {

    const [target, setTarget] = React.useState('');

    function handleDeleteJobButton(event: React.MouseEvent<HTMLButtonElement>, id: string) {
        setTarget(event.currentTarget.name);
        handleDeleteJob(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {jobs.map(job => (
                    <Item key={job.id}>
                        <Item.Content>
                            <Item.Header as='a'>{job.title}</Item.Header>
                            <Item.Meta>{job.date}</Item.Meta>
                            <Item.Description>
                                <div>{job.description}</div>
                                <div>{job.city}, {job.country}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectJob(job.id)} floated='right' content='View' color='blue' />
                                <Button name={job.id} loading={submitting && target === job.id} onClick={(e) => handleDeleteJobButton(e, job.id)} floated='right' content='Delete' color='red' />
                                <Label basic content={job.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}