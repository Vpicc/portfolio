import React from 'react';
import Card from '../Card/Card';
import { firstPopUp } from './Popups';

const Experience = () => (
  <div className="row">
    <Card
      classes="col-md-4"
      title="Drawphone"
      subTitle="Software Engineer Intern"
      popUp={firstPopUp}
    >
      Summer 2018 - Seattle, WA
    </Card>
    <Card
      classes="col-md-4"
      title="Drawphone"
      subTitle="Software Engineer Intern"
      popUp={firstPopUp}
    >
      Summer 2018 - Seattle, WA
    </Card>
    <Card
      classes="col-md-4"
      title="Drawphone"
      subTitle="Software Engineer Intern"
      popUp={firstPopUp}
    >
      Summer 2018 - Seattle, WA
    </Card>
    <Card
      classes="col-md-6"
      title="Drawphone"
      subTitle=""
      link="https://www.google.com"
    >
      Summer 2018 - Seattle, WA
    </Card>
    <Card
      classes="col-md-6"
      title="Drawphone"
      subTitle=""
    >
      Summer 2018 - Seattle, WA
    </Card>
    <Card
      classes="col-md-6"
      title="Drawphone"
      subTitle=""
    >
      Summer 2018 - Seattle, WA
    </Card>
    <Card
      classes="col-md-6"
      title="Drawphone"
      subTitle=""
    >
      Summer 2018 - Seattle, WA
    </Card>
  </div>
);

export default Experience;
