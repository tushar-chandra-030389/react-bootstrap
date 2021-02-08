export const getApp = (state) => state.app;

export const getAppCreated = (state) => getApp(state)?.isCreated;
