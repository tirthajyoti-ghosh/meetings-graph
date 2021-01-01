// Format input graph data to match react-chartjs dataset.

const parseGraphData = graphData => {
  const labels = [];
  const typeAData = [];
  const typeBData = [];
  const typeCData = [];

  graphData.forEach(data => {
    labels.push(data.weekStart);
    typeAData.push(data.numberOfTypeA);
    typeBData.push(data.numberOfTypeB);
    typeCData.push(data.numberOfTypeC);
  });

  return {
    labels,
    typeAData,
    typeBData,
    typeCData,
  };
};

export default parseGraphData;
