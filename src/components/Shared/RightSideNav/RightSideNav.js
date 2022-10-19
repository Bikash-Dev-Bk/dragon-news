import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle , FaFacebook, FaWhatsapp, faTwitch, FaTwitter, FaYoutube, FaTwitch} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../assets/brands/brand1.png'
import brand2 from '../../../assets/brands/brand2.jpg'


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-3' variant="outline-primary"><FaGoogle/> Log in with Google</Button>
                <Button className='mb-3' variant="outline-dark"><FaGithub/> Log in with Github</Button>
            </ButtonGroup>
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src = {brand1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src = {brand2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;