const clientAPI = require('../clients/salesloftApi').client;

exports.peopleResolver = async (_, args) => {
  try {
    const { perPage = 25, page = 1 } = args;
    const {
      data: { data, metadata }
    } = await clientAPI.get(`people?per_page=${perPage}&page=${page}&include_paging_counts=true`);

    return {
      metadata: { ...metadata.paging },
      people: data
    };
  } catch (e) {
    throw new Error(e.message);
  }
}
