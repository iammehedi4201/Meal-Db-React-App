import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Home.css'

const Home = () => {
    return (
        <div className="row Home-section ">
      <Card className="text-center col-5 space bg-color">
        <Card.Body>
          <Card.Title><h2 className="border-bottom">What We Do</h2></Card.Title>
          <Card.Text className="">
          Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. 
          Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led.
          Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion .  
          </Card.Text>
          <Button variant="danger">Read More</Button>
        </Card.Body>
      </Card>

      <Card className="text-center col-5 bg-color">
        <Card.Body>
          <Card.Title><h2 className="border-bottom">Who We Are</h2></Card.Title>
          <Card.Text>
          Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.
          Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.
          Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.
          </Card.Text>
          <Button variant="danger">Read More</Button>
        </Card.Body>
      </Card>
    </div>
    );
};

export default Home;