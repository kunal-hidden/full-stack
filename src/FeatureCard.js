import Card from 'react-bootstrap/Card';
function FeatureCard({ title, description }) {
    return (
         <Card style={{ width: '18rem' }}>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </Card>

    )
}
export default FeatureCard;