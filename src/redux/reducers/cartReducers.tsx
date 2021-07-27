export default function cartReducers(
  state: number[] = [1, 2],
  action: { type: string; id: string }
) {
  switch (action.type) {
    case "additemcart":
      return [...state, action.id];

    case "removeitemcart":
      let newlist = [...state];
      newlist.splice(state.indexOf(parseInt(action.id), 1));
      return newlist;

    case "removeallcart":
      return [];
    default:
      return state;
  }
}
