import React from "react";
import {
    Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Icon,
  Image,
} from "semantic-ui-react";
import { Job } from "../../../app/models/job";

interface Props {
    jobs: Job;
    cancelSelectJob: () => void;
    openForm: (id: string) => void;
   
}

export default function JobsDetails({ jobs, cancelSelectJob, openForm }: Props) {
  return (
    <Card fluid>
      <Image src={`faang.png`} wrapped ui={false} />
      <CardContent>
        <CardHeader>{jobs.title}</CardHeader>
        <CardMeta>
          <span className="date">{jobs.date}</span>
        </CardMeta>
        <CardDescription>
          {jobs.description}
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <Card.Content extra>
            <Button.Group widths="2">
                <Button onClick={() => openForm(jobs.id)} basic color="blue" content="Edit" />
                <Button onClick={() => cancelSelectJob()} basic color="grey" content="Cancel" />
            </Button.Group>
        </Card.Content>
      </CardContent>
    </Card>
  );
}
