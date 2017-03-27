import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

let images = '/app/bin/Images/'; //all images stored here

export default class Goose1 extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row id="g1Backgrnd">
                    <NavBar/>
                </Row>
                <Row id="g1TitleRow">
                    <h1 id="g1Title">INITIAL PROTOTYPE: <br />GOOSE I</h1>
                </Row>
                <Row id="g1Content">
                    <Row>
                        <h2>SPECIFICATIONS</h2>
                        <p>This is the Hyperloop pod that we are building. The GOOSE I is our half-scale, functional 
                            prototype vehicle pod. Fabrication for the pod is already underway and the funding from 
                            our Kickstarter will be used to complete its construction. This pod is entered in the SpaceX 
                            Hyperloop Pod Competition to perform full systems tests on SpaceX’s one mile long test track at 
                            high-speeds and in a vacuum. <br /><br /> The prototype is about 0.8m (32") wide, 2.5m (8') long,   
                            0.9m (36") tall, around 250 kg in weight, and will travel at 550km/h (150m/s).</p>
                    </Row>
                    <Row>
                        <Image src={images + 'flock-imgs/shell.jpg'} responsive />
                        <h2>POD SHELL</h2>
                        <p>The shell is designed to be as lightweight as possible while withstanding all of the forces it will 
                            be subjected to in the one-mile long test drive. This is made possible by introducing a geodetic 
                            diagrid frame which is designed to accept the applied forces better than a standard rectilinear frame. 
                            Although this style of framing has traditionally been considered more difficult to manufacture, this 
                            is quickly overcome with modern technology by precision modelling of the entire assembly in 3D, and 
                            the use of rapid fabrication technology including laser cutting and 3D printing.</p>
                    </Row>
                    <Row>
                        <Image src={images + 'flock-imgs/levitation.png'} responsive />
                        <h2>LEVITATION SYSTEM</h2>
                        <p>Air levitation through the form of four air casters is supplied via two on-board air tanks. The air 
                            casters create a thin sheet of air similar to an air hockey table upon which our pod floats. Air 
                            levitation is significantly less expensive and produces less drag than magnetic levitation. Although 
                            air caster technology has been in use for decades and is well understood, our levitation system is 
                            the first of its kind.</p>
                    </Row>
                    <Row>
                        <h2>BRAKING</h2>
                        <p>Our hybrid braking system is mechanically fail-safe and functions even if all other systems fail. A 
                            combination of eddy current braking and friction braking is used. This allows for greater control over 
                            heat generation, higher performance, lower maintenance, and safety through redundancy.</p>
                        <Image src={images + 'flock-imgs/eddy-brake.png'} responsive />
                        <h3>EDDY CURRENT BRAKING</h3>
                        <p>Our state-of-the-art contactless eddy current braking system uses 84 neodymium magnets arranged in a Halbach
                            array. This arrangement doubles the magnetic strength on one side and cancels it out on the other. 
                            Braking force is achieved by exploiting the same drag produced in magnetic levitation - or when a permanent 
                            magnet is dropped down a copper tube. As the permanent magnets approach the I-beam while the pod is in motion, 
                            tiny circular electrical currents called eddy currents are induced within the beam which smoothly slows the 
                            pod down in a highly controlled fashion. </p>
                        <Image src={images + 'flock-imgs/friction-brake.png'} responsive />
                        <h3>FRICTION BRAKING</h3>
                        <p>Our friction braking system is simple yet effective. Special brake linings made of resin-bonded synthetic 
                            rubber with steel fibres allow for effective energy transformation and heat dissipation, sparing damage 
                            to the I-beam.</p>
                    </Row>
                    <Row>
                        <Image src={images + 'flock-imgs/lateral.png'} responsive />
                        <h2>LATERAL CONTROL</h2>
                        <p>The lateral control system uses two sets of spring-loaded caster wheels to maintain the lateral stability 
                            of the Goose I, with respect to the I-beam of the Hypertube. The system combines reliability, efficiency, 
                            safety, and comfort by using high speed, high performance, and dampened wheels.</p>
                    </Row>
                    <Row>
                        <Image src={images + 'flock-imgs/drive-train.png'} responsive />
                        <h2>DRIVE TRAIN</h2>
                        <p>The Low-speed Drive system allows for taxiing before the test, in order to position for launch, and after 
                            the test so that the pod can exit the Hypertube. This system uses an air cylinder to retract the drive 
                            wheel into the pod during high speed travel. A set of four idler wheels keep the air casters from contacting 
                            the ground when levitation stops.</p>
                    </Row>
                    <Row>
                        <Image src={images + 'flock-imgs/elec-embedded.jpg'} responsive />
                        <h2>ELECTRICAL AND EMBEDDED SYSTEMS</h2>
                        <h3>ELECTRICAL</h3>
                        <p>The Electrical system is responsible for power distribution. Onboard power is delivered by a rechargeable 48V 
                            battery pack surrounded by a phase changing, fire-retardant matrix and enclosed in a sturdy PVC shell enclosure
                             to keep it cool and secure.</p>
                        <h3>EMBEDDED</h3>
                        <p>The nervous system of our pod - using a multitude of sensors and actuators, the embedded system is responsible 
                            for the control of all other subsystems, position detection within the Hypertube, and communications between 
                            the pod and a remote control dashboard. This dashboard acts as a control center and a feed displaying 
                            information on the status of the pod.</p>
                    </Row>
                </Row>
            </Grid>
        );
    }
}