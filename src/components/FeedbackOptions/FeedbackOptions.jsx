import PropTypes from 'prop-types';
import css from "./FeedBackOptions.module.css"
export default function FeedbackOptions({ options, onLeaveFeedback }){
    return(
        <>
            {options.map(option => (
                <button key={option} name={option} onClick={onLeaveFeedback} className={css.btn} type="button">{option}</button>
            ))}
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}