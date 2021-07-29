export default function addCourse(products: any[]) {
  return {
    type: "addCourse",
    payload: products,
  };
}
