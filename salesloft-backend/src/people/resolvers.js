const APIClient = require('../clients/salesloftApi');

exports.peopleResolver = async (_, args) => {
  try {
    const apiClient = new APIClient();
    const { perPage = 25, page = 1, getAll = false, totalCount } = args;
    let peopleData = {};
    let meta = {};

    if (getAll && totalCount > 0) {
      //resolver to retrieve all counts
      const pages = Math.ceil(totalCount / 100);
      let promises = [];

      for (let i = 1; i <= pages; i++) {
        promises.push(apiClient.getQuery({ perPage: 100, page: i }));
      }

      const allData = await Promise.all(promises);
      const peoples = allData.map(queryData => {
        return queryData.data.data;
      });

      peopleData = [].concat(...peoples);

    } else {
      const {
        data: { data, metadata }
      } = await apiClient.getQuery({ perPage, page });
      peopleData = data;
      meta = metadata
    }

    return {
      metadata: { ...meta.paging },
      people: peopleData
    };
  } catch (e) {
    throw new Error(e.message);
  }
}
