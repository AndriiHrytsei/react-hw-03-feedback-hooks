import React, { Component } from "react";
import Stats from "../Stats/Stats"
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions"
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  feedback = (e) => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1
    }))
  }
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    return (Math.round(100 * this.state.good / this.countTotalFeedback()))
  }
  render(){
    const { good, neutral, bad } = this.state
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.feedback}/>
          {!this.countTotalFeedback() ? (
            <Notification message='There is no feedback'/>
          ) : (
            <Stats good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
          )}
        </Section>
      </>
    )
  }
}