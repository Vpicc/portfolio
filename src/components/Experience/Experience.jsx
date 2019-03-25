import React from 'react';
import Card from '../Card/Card';
import { ufrgs, iit, owlbytes } from './Popups';

const Experience = () => (
  <div className="row">
    <Card
      classes="col-md-4"
      title="Owlbytes"
      logo="/src/static/Owlbytes.png"
      subTitle="Software Engineer Intern"
      popUp={owlbytes}
    >
      Jan. 2018 – Aug. 2018 : Porto Alegre, Brazil
    </Card>
    <Card
      classes="col-md-4"
      title="UFRGS"
      logo="/src/static/UFRGS.png"
      subTitle="Web Developer"
      popUp={ufrgs}
    >
      Apr. 2017 – Dec. 2017 : Porto Alegre, Brazil
    </Card>
    <Card
      classes="col-md-4"
      title="IIT"
      logo="/src/static/iit.png"
      subTitle="Summer Research Experience"
      popUp={iit}
    >
      May 2016 – July 2016 : Chicago, Illinois
    </Card>
    <Card
      classes="col-md-6"
      title="Drawphone"
      subTitle=""
      link="https://www.google.com"
    >
      Lorem ipsum
    </Card>
    <Card
      classes="col-md-6"
      title="Drawphone"
      subTitle=""
    >
      Lorem ipsum
    </Card>
  </div>
);

export default Experience;
