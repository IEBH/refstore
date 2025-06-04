import { label } from "@primeuix/themes/aura/metergroup";
import { vueFlowTable } from "../components/FlowTable";

const getDefaultFieldList = () => {
  //console.log("[defaultFieldList]:", vueFlowTable.value.nodes);
  return vueFlowTable.value.nodes;
};

const getFlowTable = () => {
  //console.log("[defaultFlowTable]:", vueFlowTable.value);
  return vueFlowTable.value;
};

const state = {
  fieldList: getDefaultFieldList(),
  flowTable: getFlowTable(),
};

const getters = {
  getFieldList: (state) => state.fieldList,
  getFlowTable: (state) => state.flowTable,
};

const mutations = {
  //Reset all fieldList
  reset(state) {
    state.fieldList = getDefaultFieldList();
    console.log("[Mutations-reset-fieldList]:", state.fieldList);
    console.log("[Mutations-reset-flowTable]:", state.flowTable);
  },
  //Set the whole fieldlist
  setFieldList(state, fieldList) {
    state.fieldList = fieldList;
  },
  //Set a filepath & reference's num into the current fieldlist state
  setFieldRef(state, fieldObj) {
    const field = state.fieldList.find(
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
