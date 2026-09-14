import Heading from "../components/Heading";
import features from "../data/features";
import FeatureCard from "../FeatureCard";
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import { Gamepad2 } from 'lucide-react';



function Home() {
  return (
    <div className="App">
      <Heading/> 
      <div className="row">
        {features.map((feature)=>{
          return(<FeatureCard title={feature.title} description={feature.description} />)
        })}
        <hr/>
      
       <Alert  variant={"success"}>
        We Added one more feature of fun this year
        </Alert>
        <h1>
       <Gamepad2/> Ps5 <Badge bg="primary">New</Badge>
      </h1>
        

      
      
        

      </div>
    </div>
  )
}
export default Home;

