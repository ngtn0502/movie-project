const init = {
  isModalOpen: false,
};

// For all animation

export const mainReducer = (state = init, action) => {
  if (action.type === 'OPEN__MODAL') {
    state.isModalOpen = false;
    return { ...state };
  }
  return state;
};
