import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.css';

const Card = (props) => {
  const {
    classes,
    title,
    logo,
    subTitle,
    children,
    popUp,
    link,
  } = props;

  return (
    <div className={`${classes} ${Style.cardCol}`}>
      <div className={`${Style.card}`}>
        {
        (
        logo
          ? (
            <div className={`${Style.imgSpace} justify-content-center`}>
              <img src={logo} className={`${Style.companyLogo} align-self-center`} alt={title} />
            </div>
          )
          : (
            <div className={`${Style.cardTitle}`}>
              {title}
            </div>
          )
        )
        }
        <div className={`${Style.cardSubTitle}`}>
          {subTitle}
        </div>
        <div className={`${Style.cardText}`}>
          {children}
        </div>
        <div className={`${Style.cardButton}`}>
          {
            (
              popUp
                ? <button type="button" className="btn btn-outline-dark" onClick={popUp}>More Info</button>
                : (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <button type="button" className="btn btn-outline-dark">View on GitHub</button>
                  </a>
                )
            )
          }
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  classes: PropTypes.string.isRequired,
  title: PropTypes.string,
  logo: PropTypes.string,
  subTitle: PropTypes.string,
  popUp: PropTypes.func,
  link: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: '',
  logo: '',
  subTitle: '',
  popUp: undefined,
  link: '',
};

export default Card;
