// eslint-disable-next-line import/extensions
import parseGraphData from './parseGraphData.js';
import getGraphData from '../API/getGraphData';

describe('parseGraphData', () => {
  test('should return array of dates as lebels', () => {
    expect(parseGraphData(getGraphData()).labels).toEqual(['2020-11-02', '2020-11-09', '2020-11-16', '2020-11-23', '2020-11-30', '2020-12-07', '2020-12-14', '2020-12-21', '2020-12-28', '2021-01-04', '2021-01-11', '2021-01-18']);
  });

  test('should return array of typeAData', () => {
    expect(parseGraphData(getGraphData()).typeAData).toEqual([
      23, 27, 29, 32, 35,
      37, 40, 45, 46, 49,
      53, 59,
    ]);
  });

  test('should return array of typeBData', () => {
    expect(parseGraphData(getGraphData()).typeBData).toEqual([
      47, 45, 42, 44, 48,
      52, 59, 63, 65, 62,
      61, 64,
    ]);
  });

  test('should return array of typeCData', () => {
    expect(parseGraphData(getGraphData()).typeCData).toEqual([
      12, 13, 15, 18, 22,
      27, 34, 40, 47, 45,
      52, 53,
    ]);
  });
});
