import {
    SEND_SLACK,
    SLACK_SENT,
    SLACK_ERROR,
} from './constants';

const initState = {
    loading: true,
    error: null,
}

const Slack = (state = initState, action) => {
    switch (action.type) {
        case SEND_SLACK:
            return { ...state, loading: true, error: null };
        case SLACK_SENT:
            return { ...state, loading: false, error: null };
        case SLACK_ERROR:
            return { ...state, loading: false, error: action.error };
        default:
            return { ...state };
    }
};

export default Slack;