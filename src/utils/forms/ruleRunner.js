export const ruleRunner = (field, name, ...validations) => {
    return (state) => {
        for (const v of validations) {
            const errorMessagesFunc = v(state[field], state);
            if (errorMessagesFunc) {
                return {
                    [field]: errorMessagesFunc(name),
                };
            }
        }
        return null;
    };
};

export const run = (state, runners) => {
    return runners.reduce((memo, runner) => {
        return Object.assign(memo, runner(state));
    }, {});
};
