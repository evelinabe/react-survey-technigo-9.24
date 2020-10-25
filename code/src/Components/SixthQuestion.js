import React from 'react';
import SubmitButton from './SubmitButton';

const SixthQuestion = ({ userTextInput, onTextInputChange, section, setSection }) => {

  return (
    <section className="question-section">
      <h2 className="question-header">Har du några ytterligare synpunkter om aktiviteten?</h2>
        
        <label htmlFor="userTextInput">Skriv här:</label>
        <input 
          value={userTextInput}
          onChange={e => onTextInputChange(e.target.value)}
          id="userTextInput"
          type="textarea"
          required
        />
        <SubmitButton 
            disable={onTextInputChange} 
            btnText="Skicka"
          />
    </section>
  );
}

export default SixthQuestion;