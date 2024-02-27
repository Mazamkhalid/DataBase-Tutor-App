import React from 'react';

const SQLAnswers = () => {
  const answers = [
    {
      question: 'How to select all columns from the table "users"?',
      answer: 'SELECT * FROM users;',
      example: 'SELECT * FROM users;'
    },
    {
      question: 'How to select the name and email columns from the table "users"?',
      answer: 'SELECT name, email FROM users;',
      example: 'SELECT name, email FROM users;'
    },
    {
      question: 'How to select the name and email columns from the table "users" where the id is greater than 5?',
      answer: 'SELECT name, email FROM users WHERE id > 5;',
      example: 'SELECT name, email FROM users WHERE id > 5;'
    },
    {
      question: 'How to select all columns from the table "users"?',
      answer: 'SELECT * FROM users;',
      example: 'SELECT * FROM users;'
    },
    {
      question: 'How to select the name and email columns from the table "users"?',
      answer: 'SELECT name, email FROM users;',
      example: 'SELECT name, email FROM users;'
    },
    {
      question: 'How to select the name and email columns from the table "users" where the id is greater than 5?',
      answer: 'SELECT name, email FROM users WHERE id > 5;',
      example: 'SELECT name, email FROM users WHERE id > 5;'
    },
  ];

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid black',backgroundColor:'#f5f5f5' }}>
      <h1 style={{textAlign: 'center', color: '#3F51B5', backgroundColor:'#F5F5F5'}}>Assignment Solutions</h1>
      {answers.map((answer, index) => (
        <div key={index} style={{ margin: '20px', padding: '20px', border: '1px solid grey',backgroundColor:'#fff'}}>
          <p style={{ fontWeight: 'bold',color:'#3f51b5' }}>{answer.question}</p>
          <p style={{ color:'#4caf50'}}>Answer: {answer.answer}</p>
          <p style={{ color:'#ff9800'}}>Example: {answer.example}</p>
        </div>
      ))}
    </div>
  );
};

export default SQLAnswers;