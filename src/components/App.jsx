import { Component } from 'react';
import Section from './Statistics/SectionTitle';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Statistics/FeedbackOptions';
import NotificationMesage from './Statistics/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = feedbackName => {
    this.setState(prevState => {
      return {
        [feedbackName]: prevState[feedbackName] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = Math.round((good / total) * 100);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <NotificationMesage message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
