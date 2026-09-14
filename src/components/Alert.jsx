import Alert from 'react-bootstrap/Alert';
import JointheWaitlist from './JointheWaitlist';

function Remind() {
  return (
    <>
      {[    'success',  ].map((variant) => (
        <Alert key={JointheWaitlist} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default Remind;