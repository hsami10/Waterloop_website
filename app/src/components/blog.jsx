import React from 'react';
import NavBar from './navbar.jsx';
//BOOTSTRAP IMPORTS
import { Grid, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { AutoAffix } from 'react-overlays';

let images = '/app/bin/Images/'; //all images stored here

//bg stands for blog below
export default class Blog extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row id="bgBackgrnd">
                    <NavBar />
                </Row>

                <Row id="bgTitleRow">
                    <h1 id="bgTitle">THE JOURNEY TO CALIFORNIA</h1>
                </Row>

                <Row id="bgContent">
                    <Col md={8} mdOffset={2}>
                        <Post1 />
                        <Post2 />
                        <Post3 />
                    </Col>
                </Row>

            </Grid>
        );
    }
}

const Post1 = () => {
    return (
        <Row>
            <h1>FULLY FUNDED!</h1>
            <h2>NOV 30, 2016</h2>
            <p>A HUGE thank you to each and every backer from the Waterloop team! We are all so
                            thrilled at the outpouring of support. The kickstarter campaign successfully closed
                            with over 500 backers bringing in $43 000 in funding. Thank you friends! <br /><br />
                Let us celebrate with this track created by our backer James from Edinburgh! <br /><br />
                You can check out his Waterloop inspired sounds below. Thank you very much James!</p>
            <div></div>
            <p>Thank you all for supporting us!</p>
        </Row>
    );
}

const Post2 = () => {
    return (
        <Row>
            <h1>HYPERLOOP SETS A NEW BAR FOR SUSTAINABILITY IN TRANSIT</h1>
            <h2>NOV 9, 2016</h2>
            <p>A futuristic concept of how we move between city centers may be hurtling into our reality.
                            Since being proposed by Elon Musk in 2013, the Hyperloop concept has made significant strides
                            forward. With passenger capsules shooting through a near-vacuum tube approaching the speed
                            of sound, Musk once described it as, “a cross between a rail gun, the concord, and an air
                            hockey table.”
                            <br /><br />
                SpaceX has continued its open-sourced, international design competition to build and test
                            the first Hyperloop pods. Since its start in August 2015, 31 of the original 1200+ teams are
                            left in the race to build the best pod prototype, to be tested in the final round at the SpaceX
                            headquarters in January 2017. After two rounds of elimination, there is only one Canadian
                            representative remaining in the competition – “Waterloop”- the determined and imaginative
                            University of Waterloo team.</p>
            <h3>Hyperloop's vision for sustainability</h3>
            <p>The Hyperloop offers the potential for a radical leap forward, able to combat concerns about our
                            economic and energy future. The technology is still in its naissance but predictions estimate top
                            speeds of 1,200 km/h (making the Hyperloop comparable to long-distance commercial air travel in
                            speed) on only its own generated power.
                            <br /><br />
                In fact, should the advancement of Hyperloop technology prove successful, it is projected to produce
                            far in excess of the amount of energy it needs to run. Solar panels lining the tube supply the
                            necessary energy for periodic acceleration or deceleration of the pod. The same design features which
                            enable the Hyperloop to travel incredibly fast, are also the same features which radically improve the
                            design’s efficiency. Unlike every other method of transit other than space shuttles in orbit, continuous
                            power isn’t necessary due to the near elimination of friction and drag on the capsule in the tube’s low
                            pressure environment and the magnetic or pneumatic levitation of the vehicle. Excess energy can be stored
                            in battery packs to allow for use during nighttime and cloudy conditions, or simply used to supply the
                            grid. These aspects of the Hyperloop which set a new standard for sustainability in transit infrastructure
                            have enabled our team to work with partners such as sustainable.TO, a sustainably oriented architecture and
                            building firm in Toronto, who have supported the development of the technology at Waterloop.</p>
            <h3>The challenge</h3>
            <p>One major hurdle is how to maintain a partial vacuum along the length of a several hundred-kilometer tube.
                            There are obvious concerns relating to the possibility of air leaks and that maintaining a low-pressure
                            environment may require more energy than the solar panels could provide. In response, the SpaceX design
                            proposes a low-pressure system set at a level that commercial pumps could easily respond and overcome an
                            air leak.</p>
            <h3>The solution</h3>
            <p>To minimize ground disruption, the Hyperloop was designed to be elevated on columns rather than being an
                            entirely ground-based system. This should also drastically decrease construction time and cost as well.
                            <br /><br />
                Finally, with a projected carrying capacity of 840 passengers per hour, the Hyperloop could remove drivers
                            from highly congested roads. For the original route proposal between Los Angeles and San Francisco, it
                            would be sufficient to transport all 6 million passengers travelling each year and account for 70 per cent
                            of travelers during rush hour.
                            <br /><br />
                While Musk initially proposed the Hyperloop to solve the issue of the hyper-congested traffic between Los
                            Angeles and San Francisco, the excitement surrounding this futuristic infrastructure is palpable throughout
                            North America, perhaps partially due to the failure of train infrastructure in the continent.
                            <br /><br />
                Across the country, Canadian infrastructure has either failed to be properly maintained or built. Too much
                            responsibility has been shifted from the federal government onto the municipal, territorial and provincial
                            levels of government and today, roughly 95 per cent of Canada’s public infrastructure falls to them. A
                            Hyperloop line between Toronto and Montreal for example, could stand to be the most technologically advanced
                            and exciting undertaking in Canadian public infrastructure.</p>
            <h3>Will Canada take on Hyperloop?</h3>
            <p>Even if the Hyperloop is not the future-focused infrastructure that Canada decides to implement, the sparked
                            passions around this unbelievable technology as it is thrown into our world could spur Canada to be imaginative
                            with this opportunity. Right now Canada is at a unique moment in time where historically low long-term interest
                            rates and a large infrastructure need present an opportunity for significant investment in public infrastructure.
                            When the argument against implementing sustainable technology is often that it isn’t economically viable, the
                            Hyperloop proposes a situation where economics and environmental concerns support movement forward. While
                            incremental steps forward are good, the state of our world demands leaps as well.
                            <br /><br />
                While a lot of work and innovation still remains before the Hyperloop has the potential to reach these lofty
                            goals, perhaps the biggest success of the Hyperloop has already happened: exciting the world, especially North
                            America, with a vision for a technologically feasible, economically viable, and sustainably ambitious alternative
                            to the vast network of highways and airports that dominate our continent.
            </p>
        </Row>
    );
}

const Post3 = () => {
    return (
        <Row>
            <h1>GOOSE I TAKES FLIGHT</h1>
            <h2>NOV 8, 2016</h2>
            <p>Team Waterloop is thrilled to announce we have successfully demonstrated the world's first functional pneumatic
                hyperloop levitation system!</p>
            <div>[VIDEO GOES HERE!]</div>
            <p>This was the video we showed at the event before doing a LIVE demonstration!</p>
            <h3>The Public Launch:</h3>
            <p>A week ago today on a Tuesday evening, Team Waterloop held an event at the University of Waterloo geared towards
                sharing our project with attendees ranging from the local Waterloo tech talent to various media outlets.
                Please look out for us online and in print, and join in the Waterloop excitement! The live stream from this event
                can be found on our Facebook page.
                <br /><br />
                Articles documenting the event:
                <br /><br />
                <ul>
                    <li>Communitech</li>
                    <li>Tech Crunch</li>
                    <li>Betakit</li>
                    <li>Ruptly</li>
                    <li>The Record</li>
                </ul>
            </p>
            <h3>The Track:</h3>
            <p>Lot 41 and Camino Modular Systems has graciously sponsored an amazing warehouse facility and 12,000 sqft of
                            flooring so that we can build a 300 foot test track to help prepare for SpaceX's competition in January.</p>
            <Image src={images + "blog-imgs/blog-lot41-desk-meet.jpg"} responsive />
            <p>Team Waterloop held a team wide reddit session from the lot for our followers to ask us questions. Check out
                            the discussion and get to know more about some of our members on Reddit!</p>
            <h3>Subsystem updates:</h3>
            <Row>
                <Col md={6}>
                    <Image src={images + "blog-imgs/subsystem1.jpg"} responsive />
                </Col>
                <Col md={6}>
                    <p>Slow speed lateral is ready and working!
                        <br /><br />
                        The slow speed lateral wheels help to stabilize the levitation, allowing the pod to move in a straight
                        line.
                        <br /><br />
                        Wood was chosen for lateral control as a cost effective material and for ease of manufacturing.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col md={6} mdPush={6}>
                    <Image src={images + "blog-imgs/subsystem2.jpg"} responsive />
                </Col>
                <Col md={6} mdPull={6}>
                    <p>The EC braking system is on its way, this week the team will continue to build - stay tuned
                        for more updates!
                        <br /><br />
                        Shown here is a segment of the magnet braking array, with thermal insulation and milling on one side
                    </p>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Image src={images + "blog-imgs/subsystem3.png"} responsive />
                </Col>
                <Col md={6}>
                    <p>Shell is in production mode! Here is one of the first joint pieces being printed by our 3D
                                    printing sponsor, Inksmith!
                    </p>
                </Col>
            </Row>

            <Row>
                <Col md={6} mdPush={6}>
                    <Image src={images + "blog-imgs/subsystem4.jpg"} responsive />
                </Col>
                <Col md={6} mdPull={6}>
                    <p>Embedded and Electrical systems are operational!
                        <br /><br />
                        For more details on our team progress, check out our kickstarter update.
                    </p>
                </Col>
            </Row>

            <h3>Stretch Goals:</h3>
            <p>Team Waterloop is so thrilled to have surpassed our goal by over $8,000! However to fully complete our
                pod with the best and newest technology and help our pod perform at its highest capacity, we would
                love see this campaign reach $42,000! Our stretch goals will help us to finish our pod with all the
                bells and whistles.
                <br /><br />
                If we reach $30 000.00 CAD:
                <br /><br />
                <ul>
                    <li>Release a video update featuring our pneumatic levitation system! </li>
                    <li>Host an additional AMA on Reddit after our pod is complete (approximately January 2017), Follow
                                    our first AMA here.  </li>
                    <li>Help us build a 300 ft test track in our 40k sq. ft testing facility (LOT41)!</li>
                    <li>Release a video of our test runs if we meet this mark!</li>
                </ul>
                <br />
                If we reach $35 000.00 CAD:
                <br /><br />
                <ul>
                    <li>Install a 100 ft aluminum I-beam in our test track to test braking systems.</li>
                    <li>Host a LIVE stream update at some point during the competition in January 2017 where our followers
                                    can ask team members questions!</li>
                </ul>
                <br />
                If we reach $40 000.00 CAD:
                <br /><br />
                <ul>
                    <li>Material costs to reduce weight and increase levitation performance. </li>
                    <li>Build a carbon fiber frame.</li>
                </ul>
                <br />
                If we reach $50 000.00 CAD:
                <br /><br />
                <ul>
                    <li>Release a 360 degree video live stream to see what GOOSE I experiences during the race.</li>
                </ul>
                <br />
                We have 10 more days until the campaign ends on Nov 18th, 2016. Help us to not only build our pod but
                build the best pod to win the race!
                <br /><br />
                Until next time,
                <br /><br />
                - Team Waterloop
            </p>
        </Row>
    );
}

