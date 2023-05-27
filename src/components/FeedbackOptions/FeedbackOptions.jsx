import PropTypes from 'prop-types'; 
import ss from '../App/App.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button  className={ss.buttons } key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;