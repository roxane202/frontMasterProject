export const groupBy = (objectArray, ...properties) => {
  return [
    ...Object.values(
      objectArray.reduce((accumulator, object) => {
        const key = JSON.stringify(properties.map((x) => object[x] || null));

        if (!accumulator[key]) {
          accumulator[key] = [];
        }
        accumulator[key].push(object);
        return accumulator;
      }, {})
    ),
  ];
};

export const partition = (items, size) => {
  var result = items.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / size);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
  return result;
};

export const formatageSomme = (montant) => {
  var p = montant.toFixed(2).split(".");
  return (
    p[0]
      .split("")
      .reverse()
      .reduce((acc, montant, i) => {
        return montant == "-"
          ? acc
          : montant + (i && !(i % 3) ? "." : "") + acc;
      }, "") + " F CFA"
  );
};

export const formatageSommeSansFCFA = (montant) => {
  var p = montant.toFixed(2).split(".");
  return p[0]
    .split("")
    .reverse()
    .reduce((acc, montant, i) => {
      return montant == "" ? acc : montant + (i && !(i % 3) ? " " : "") + acc;
    }, "");
};
