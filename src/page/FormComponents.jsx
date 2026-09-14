import  { useState } from 'react';

function FormComponents() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Form submitted with name:', name);
    setName(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" disabled={name === ''}>
        Submit
      </button>
    </form>
  );
}

export default FormComponents;