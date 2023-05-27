import PropTypes from 'prop-types';
import ss from '../App/App.module.css'

const Section = ({ title, children }) => (
  <div className={ss.section }>
    <h2 className={ss.tittle }>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;