import React from 'react';

const TrainingCard = ({ clientName, exerciseList, date }) => {
  return (
    <div className="card" style={styles.card}>
      <div className="card-content">
        <p className="title is-4">{`Ficha de Treino - ${clientName}`}</p>
        <p className="subtitle is-6">{`Data: ${date}`}</p>
        <div className="content">
          <h6>Exercícios:</h6>
          <ul>
            {exerciseList.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: '400px',
    margin: '20px',
  },
};

export default TrainingCard;
