import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './VoiceToText.css'; // Make sure to create this CSS file

const CATEGORY = {
  'schedule': 'Schedule new visit',
  'manage' : 'Manage shifts', 
  'update' : 'Update patients data',
  'reminder' : 'Set reminder',
  'letter' : 'Create a letter'
};

const VoiceToText = () => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [history, setHistory] = useState([]);
  const [tempTranscript, setTempTranscript] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  
  useEffect(() => {
    if (!listening && transcript) {
      setTempTranscript(transcript);
    }
  }, [listening, transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleCategoryClick = (category) => {
    if (tempTranscript) {
      const newEntry = {
        date: new Date().toLocaleString(),
        transcript: tempTranscript,
        category: category
      };
      setHistory([...history, newEntry]);
      setTempTranscript('');
      resetTranscript();
    }
  };

  const handleCheckboxChange = (index) => {
    const newSelectedItems = [...selectedItems];
    if (newSelectedItems.includes(index)) {
      newSelectedItems.splice(newSelectedItems.indexOf(index), 1);
    } else {
      newSelectedItems.push(index);
    }
    setSelectedItems(newSelectedItems);
  };

  const handleDelete = () => {
    const newHistory = history.filter((_, index) => !selectedItems.includes(index));
    setHistory(newHistory);
    setSelectedItems([]);
  };

  return (
    <div className="voice-to-text">
      <div className="control-panel">
        <h2>Voice to Text</h2>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.abortListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <textarea value={transcript} readOnly />
      </div>
      
      <div className="category-buttons">
        {Object.entries(CATEGORY).map(([key, value]) => (
          <button key={key} onClick={() => handleCategoryClick(value)}>{value}</button>
        ))}
      </div>
      
      <div className="history-table">
        <h3>History</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td>{entry.date}</td>
                <td>{entry.transcript}</td>
                <td>{entry.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedItems.length > 0 && (
          <button className="delete-button" onClick={handleDelete}>
            Delete Selected
          </button>
        )}
      </div>
    </div>
  );
};

export default VoiceToText;
