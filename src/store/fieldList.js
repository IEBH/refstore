import { vueFlowTable } from "../FlowTable";

const getFlowTable = () => {
  return vueFlowTable.value;
};

const state = {
  flowTable: getFlowTable(),
};

const getters = {
  getFlowTable: (state) => state.flowTable,
};

const mutations = {
  //Reset all fieldList
  reset(state) {
    state.flowTable = getFlowTable();
    console.log("[Mutations-reset-flowTable]:", state.flowTable);
  },

  //Set a filepath & reference's num into the current table state
  setFlowTableRef(state, fieldObj) {
    const field = state.flowTable.nodes.find(
      (field) =>
        field.id === fieldObj.fieldId &&
        field.data.labels.some((label) => label.key === fieldObj.dataKey)
    );
    if (field) {
      const index = field.data.labels.findIndex(
        (label) => label.key === fieldObj.dataKey
      );
      field.data.labels[index].link = fieldObj.refnum;
      field.data.labels[index].filepath = fieldObj.filepath;
    } else {
      console.error("Not found this field!", {
        Id: fieldObj.fieldId,
        Key: fieldObj.dataKey,
      });
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
