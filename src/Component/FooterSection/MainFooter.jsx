import React from 'react';
import {Jumbotron,Col,Row} from "react-bootstrap"
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
export const MainFooter = () => {
    return (
        <div>
            <Jumbotron>
      <Row>
                    <Col lg={4}>
                        <h3>Stay Connected With Us</h3>
                        <FacebookIcon /> 
                        <YouTubeIcon /> 
                        <TwitterIcon />
                         <TelegramIcon />
                     </Col>
      </Row>
      <hr/>
      <p class="c-copyright c-font-grey">
                    2021 © PMU, Prince Mohammad Bin Fahd University. <br/>   
								<span class="c-font-grey-3">All Rights Reserved.</span>
                </p>
</Jumbotron>
        </div>
    );
};

