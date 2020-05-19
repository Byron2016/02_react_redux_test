// Estos son actions creators.
// Define una función que te regresa un objeto
// y ese objeto es una action.

export const type = "findCurrentItem";

const findCurrentItem = (id) => {
  return {
    type,
    payload: id,
  };
};

export default findCurrentItem;
