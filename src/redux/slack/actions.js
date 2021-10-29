import {
    SEND_SLACK,
    SLACK_SENT,
    SLACK_ERROR,
} from './constants';

export const sendSlack = (message) => ({
    type: SEND_SLACK,
    message,
});

export const slackSent = () => ({
    type: SLACK_SENT,
});

export const slackError = (error) => ({
    type: SLACK_ERROR,
    error,
});