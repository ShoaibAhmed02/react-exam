import React from 'react'

function PollDisplay() {
const obj ={"question": "What is your favorite programming language?",
  "choices": [

    { "id": 1, "label": "JavaScript", "votes": 0 },

    { "id": 2, "label": "Python", "votes": 0 },

    { "id": 3, "label": "Java", "votes": 0 },

    { "id": 4, "label": "C#", "votes": 0 }

  ]
}

const {question}=obj;

  return (
    <div>
    <div>Question1:{question}</div>
    
    </div>
    )
}

export default PollDisplay;



