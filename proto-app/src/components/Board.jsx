import React from 'react';
import './Board.scss';
import Card from './Card.jsx';
import CardList from './CardList.jsx';

function Board(props) {
  return (
    <div className="Board"> 
      <h1 class="title">{props.title}</h1>
      <div class="card-lists">
        <CardList
          title="Todo"
          cards={
            [
              <Card title="Simplify README to get people started quickly" />,
            ]
          }
        />
        <CardList
          title="Done"
          cards={
            [
              <Card title="Lay out columns horizontally" />,
              <Card title="Refactor to Board component" />,
              <Card title="Basic layout styling" />,
              <Card title="Configure Sass" />,
              <Card title="Test on Linux" />,
              <Card title="Get VS Code up and runnning" />,
              <Card title="Get basic component structure" />,
              <Card title="Publish the codebase" />, 
            ]
          }
        />
      </div>
    </div>
  );
}

export default Board;