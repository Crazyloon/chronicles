import React from 'react';
import { CardColumns, Card, Button } from 'react-bootstrap'

import chickenBroccoli from '../images/chicken_broccoli.jpg';
import dalgona from '../images/dalgona.jpg';
import lapulapu from '../images/lapulapu-fish.jpg';
import tacos from '../images/tacos.jpg';


const Cooking = () => {
  return (
    <CardColumns className='m-4'>
      <Card>
        <Card.Img variant="top" src={chickenBroccoli} />
        <Card.Body className="bg-t">
          <Card.Title>Chicken Stir-fry</Card.Title>
          <Card.Text>
            Chicken stir-fry is one of my boyfriend's favorite meals to cook.
            Secretly I think that's just because it's really easy 
          </Card.Text>
          <Button variant="blue">Get the Recipie</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={dalgona} />
        <Card.Body className="bg-blue">
          <Card.Title>Dalgona Coffee</Card.Title>
          <Card.Text>
            Dalgona coffee is the latest Tik-Tok craze. We couldn't quite
            get the mixture to thicken properly, but it was always delicious.
          </Card.Text>
          <Button variant="ternary">See How It's Made</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={lapulapu} />
        <Card.Body className="bg-lblue">
          <Card.Title>Sweet n' Sour Lapulapu</Card.Title>
          <Card.Text>
            Lapulapu is one of my favorite fish to eat. And I LOVE fish!
            They are a white fish and make a fabulous addition to almost any meal.
            This meal features a sweet and sour sauce that is sure to be a mouth
            watering delight.
          </Card.Text>
          <Button variant="lpurple">See How It's Made</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={tacos} />
        <Card.Body className="bg-q">
          <Card.Title>Tacos</Card.Title>
          <Card.Text>
            Tacos are a classic mexican dish, my boyfriend just loves! They're
            super easy to make and can be crafted with a variety of different
            toppings so you'll never tire of them! 
          </Card.Text>
          <Button variant="prime">Make this Tasty Treat!</Button>
        </Card.Body>
      </Card>
      
    </CardColumns>
   );
}
 
export default Cooking;