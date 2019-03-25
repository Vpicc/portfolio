import Swal from 'sweetalert2';
import cref from '../../static/cref.png';
import trafficLights from '../../static/trafficLights.png';
import owlbytesTeam from '../../static/OwlbytesTeam.png';

function ufrgs() {
  const innerHTML = `<p>Developed a theme and plugins for WordPress that served as an educational tool. The theme is focused on
  being a customizable website where all kinds of people can ask questions to a specialist of a certain field of
  study. The theme was written in PHP, HTML, JavaScript and CSS. Website using the theme:
  <a href="https://www.if.ufrgs.br/novocref/" target="_blank" rel="noopener noreferrer">https://www.if.ufrgs.br/novocref/</a></p>`;
  Swal.fire({
    html: innerHTML,
    showConfirmButton: false,
    showCloseButton: true,
    imageUrl: cref,
  });
}

function iit() {
  const innerHTML = `<p>Developed, with a group of 3 more students, a program to detect traffic lights (and it's state) in real time
  using computer vision. The software was written in C++ and used the OpenCV library for the machine vision.
  The program was tested in a laptop and later on implemented on a FPGA development board with an ARM
  processor (Zedboard) where we compiled Linux from Source (Xilinux).</p>`;
  Swal.fire({
    html: innerHTML,
    showConfirmButton: false,
    showCloseButton: true,
    imageUrl: trafficLights,
  });
}

function owlbytes() {
  const innerHTML = `<p>Developed a project in C++ and Python that used Augmented Reality, Facial detection and Facial
  Recognition; Developed an Android app using React Native, as well as a bridge between said app and an
  SDK that focused on biometry; Participated in the development of a blockchain in Javascript, running in
  browsers ( <a href="https://apocritaaccess.com/" target="_blank" rel="noopener noreferrer">https://apocritaaccess.com/</a>
  ). Developed the blockchain’s transactions and a blockchain explorer,
  helped developing the blockchain’s functions; Practiced Agile and Scrum in 2 week sprints with 15 other
  developers.</p>`;
  Swal.fire({
    html: innerHTML,
    showConfirmButton: false,
    showCloseButton: true,
    imageUrl: owlbytesTeam,
  });
}


export { ufrgs, iit, owlbytes };
