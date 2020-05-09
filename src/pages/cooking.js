import React from 'react';
import { CardColumns, Card, Button } from 'react-bootstrap'

import chickenBroccoli from '../images/cooking/chicken_broccoli.jpg';
import dalgona from '../images/cooking/dalgona.jpg';
import lapulapu from '../images/cooking/lapulapu-fish.jpg';
import garlic_shrimp from '../images/cooking/garlic_shrimp.jpg';
import tacos from '../images/cooking/tacos.jpg';
import food_stand from '../images/cooking/food_stand.jpg';
import fried_rice_spam from '../images/cooking/fried_rice_and_spam.jpg';


const Cooking = () => {
  return (
    <CardColumns className='mt-4 mb-4 col-md-10 offset-md-1 col-xl-8 offset-xl-2'>
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
      <Card>
        <Card.Img variant="top" src={garlic_shrimp} />
        <Card.Body className="bg-green">
          <Card.Title>Garlic Shrimp</Card.Title>
          <Card.Text>
            A combination of two of our favorite combinations, garlic and 
            anything <span role='img' aria-label='toung smile'>😝</span>.
            This garlic shrimp will drown your tongue in saliva. 
          </Card.Text>
          <Button variant="orange">Taste Me!</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={food_stand} />
        <Card.Body className="bg-red">
          <Card.Title>Food Stand</Card.Title>
          <Card.Text>
            I love to support the familiy food stands in Cebu whenever we
            get a chance to go shopping outside the city.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={fried_rice_spam} />
        <Card.Body className="bg-purple">
          <Card.Title>Fried Rice & Spam</Card.Title>
          <Card.Text>
            Fried rice never lasts long in our house. Not shown here are the
            mixed vegetables we love to add for an extra dose of healthy eating.
            The spam adds a nice crispy texture <span role='img' aria-label='smily face'>😃</span>
          </Card.Text>
          <Button variant="teal">What's Inside?</Button>
        </Card.Body>
      </Card>
      
    </CardColumns>
   );
}
export default Cooking;