// const recycle = (array) => {
//   const sort = (reducer) => (object) => (type) => (
//     object.material === type || object.secondMaterial === type
//       ? [...reducer, object.type]
//       : reducer
//   );
//   const papers = array.reduce((bin, object) => sort(bin)(object)('paper'), []);
//   const glasses = array.reduce((bin, object) => sort(bin)(object)('glass'), []);
//   const organics = array.reduce((bin, object) => sort(bin)(object)('organic'), []);
//   const plastics = array.reduce((bin, object) => sort(bin)(object)('plastic'), []);

//   return [papers, glasses, organics, plastics];
// };

const recycle = (recyclables) => {
  const sort = (object) => (material) => (
    object.material === material || object.secondMaterial === material
  );
  const bin = (material) => recyclables.filter((object) => sort(object)(material));
  return ['paper', 'glass', 'organic', 'plastic']
    .map((material) => bin(material).map((object) => object.type));
};
