import { label } from "@primeuix/themes/aura/metergroup";
import { vueFlowTable } from "../components/FlowTable";
/*const getDefaultFieldList = () => {
  return [
    {
      fieldId: "seed-studies",
      dataKey: "Seed Studies(Designing)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "search-results",
      dataKey: "Search Results(Searching)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "title-abs",
      dataKey: "Title/Abstract Screening(Searching)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "full-text",
      dataKey: "Full Text Screening(Searching)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "incl-studies",
      dataKey: "Included Studies(Searching)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "results-removed-2",
      dataKey: "Search Results - Results Removed(Searching)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "results-removed-3",
      dataKey: "Title/Abstract Screening - Results Removed(Searching)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "results-removed-4",
      dataKey: "Full Text Screening - Results Removed(Searching)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "results-removed-4",
      dataKey: "Full Text Screening - Wrong Population(Searching)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "results-removed-4",
      dataKey: "Full Text Screening - Wrong Intervention(Searching)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "other-results-1",
      dataKey: "Other Results(Other)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "other-results-1",
      dataKey: "Citation Searching(Other)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "title-abs-1",
      dataKey: "Title/Abstract Screening(Other)",
      refs: 0,
      filepath: null,
    },
    {
      fieldId: "full-text-1",
      dataKey: "Full Text Screening(Other)",
      refs: 0,
      filepath: null,
    },
  ];
};*/
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
    console.log("state.fieldList:", state.fieldList);
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

  //Set a filepath & reference's num into the current fieldlist state
  setFilepath(state, { fieldId, dataKey, filepath, refnum }) {
    const field = state.fieldList.find(
      (field) => field.fieldId === fieldId && field.dataKey == dataKey
    );
    if (field) {
      field.link = refnum;
      field.filepath = filepath;
      console.log("[Mutations-setFilepath]:", state.fieldList);
    } else {
      console.error("Not found field!");
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
