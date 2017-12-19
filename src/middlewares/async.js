export default function({ dispatch }) {
    return next => action => {
        console.log(action);
        // if action has no payload or .then send it through
        if (!action.payload || !action.payload.then) {
            return next(action)
        }

        // Make sure actions promise resolves
        action.payload
            .then(response => {
                const newAction = {
                    ...action,
                    payload: response
                };
                dispatch(newAction);
            });
    };
}
