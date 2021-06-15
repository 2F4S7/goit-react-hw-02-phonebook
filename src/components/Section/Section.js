import React from 'react';
import PropTypes from 'prop-types';
import style from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={style.section}>
      <h2 className={style.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.defaultProps = {
  title: 'New section',
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
