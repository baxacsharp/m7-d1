import { Component } from "react";
import { Card, Button } from 'react-bootstrap'
class Home extends Component {
    state = {
        jobs: []
    }
    componentDidMount = async () => {
        try {
            const resp = await fetch('https://remotive.io/api/remote-jobs')
            if (resp.ok) {
                const data = await resp.json()
                this.setState({ jobs: data })
                console.log(data)
            } else {
                console.log('response is bad')
            }
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <>

                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text>
                            blablabla
                        </Card.Text>
                        <Button variant="primary">Go details</Button>
                    </Card.Body>
                </Card>


            </>
        )

    }
}
export default Home