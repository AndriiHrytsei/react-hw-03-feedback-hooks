import PropTypes from 'prop-types';
import css from './Stats.module.css'
export default function Statistics({ good, neutral, bad, total, positivePercentage}){
    return(
        <>
            <h1 className="stats-heading">Statistics</h1>
            <ul className={css.stats}>
              <li className="good">Good: {good}</li>
              <li className="neutral">Neutral: {neutral}</li>
              <li className="bad">Bad: {bad}</li>
              <li className="total">Total: {total}</li>
              <li className="positive-perecentage">Positive feedback: {positivePercentage}%</li>
            </ul>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}