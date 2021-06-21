import { Card, Button } from "react-bootstrap"
const JobsList = ({ jobs }) => {
    {
        jobs.map((job) => {
            <Card style={{ width: '18rem' }} key={job.id} >

                <Card.Body>
                    <Card.Title>{job.Title}</Card.Title>
                    <Card.Text>
                        {job.description}
                    </Card.Text>
                    <Button variant="primary">Go details</Button>
                </Card.Body>
            </Card>
        })
    }
}
export default JobsList