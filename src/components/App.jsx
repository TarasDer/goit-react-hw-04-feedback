import { useState } from 'react';
import Section from './Statistics/SectionTitle';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Statistics/FeedbackOptions';
import NotificationMesage from './Statistics/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const leaveFeedback = feedbackName => {
    switch (feedbackName) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
    }
  };

  const total = good + neutral + bad;
  const positiveFeedback = Math.round((good / total) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={leaveFeedback}
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
