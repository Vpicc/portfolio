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
      title="CThreads"
      subTitle=""
      link="https://github.com/Vpicc/cthreads"
    >
      A program made for Operational Systems course.
       It is a simplified implementation of a multithreading library in C,
       based on a priority scheduler.
    </Card>
    <Card
      classes="col-md-6"
      title="TextoMusical"
      subTitle=""
      link="https://github.com/Vpicc/TextoMusical"
    >
      A simple Java program that translates a text into a song in MIDI format.
       It was made for Program Construction Techniques course.
    </Card>
  </div>
);

export default Experience;
