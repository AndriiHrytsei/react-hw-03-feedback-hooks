import PropTypes from 'prop-types';
import css from './FeedBackOptions.module.css';
export default function FeedbackOptions({ options }) {
  return (
    <>
      {options.map(option => (
        <button
          key={option.id}
          name={option.name}
          onClick={option.action}
          className={css.btn}
          type="button"
        >
          {option.name}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
