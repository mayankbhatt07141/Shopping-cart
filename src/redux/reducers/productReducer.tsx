const productReducer = (
  state = [],
  Action: { type: string; payload: any[] }
) => {
  if (Action.type === "addCourse") {
    return [...Action.payload];
  } else return state;
};
export default productReducer;
