import { ref } from "vue";

const basicMarkerEnd = {
      type: 'arrow',
      color: '#1a192b',
      width: 20,
      height: 20
}
const vueFlowTable = ref({
  nodes: [
    //Designing-Nodes:
    {
      id: "seed-studies",
      type: "customNode",
      position: {
        x: 120,
        y: 160,
      },
      data: {
        labels: [
          { key: "Seed Studies", label: "Seed Studies", link: 0 }, //TODO: Get fuction()
        ],
      },
    },

    //Designing-Tools:
    {
      id: "word-freq",
      type: "customTextNode",
      position: {
        x: 400,
        y: 120,
      },
      data: {
        labels: [
          { label: "Word Freq", link: "https://tera-tools.com/word-freq" },
        ],
      },
    },
    {
      id: "search-refiner",
      type: "customTextNode",
      position: {
        x: 400,
        y: 180,
      },
      data: {
        labels: [
          {
            label: "Search Refiner",
            link: "https://tera-tools.com/searchrefiner",
          },
        ],
      },
    },
    {
      id: "tera-farmer",
      type: "customTextNode",
      position: {
        x: 400,
        y: 240,
      },
      data: {
        labels: [
          { label: "TERA Farmer", link: "https://tera-tools.com/terafarmer" },
        ],
      },
    },
    //Searching-Nodes:
    {
      id: "search-results",
      type: "customNode",
      position: {
        x: 700,
        y: 160,
      },
      data: {
        labels: [{ key: "Search Results", label: "Search Results", link: 0 }],
      },
    },
    {
      id: "title-abs",
      type: "customNode",
      position: {
        x: 677,
        y: 326,
      },
      data: {
        labels: [
          {
            key: "Title/Abstract Screening",
            label: "Title/Abstract Screening",
            link: 0,
          },
        ],
      },
    },
    {
      id: "full-text",
      type: "customNode",
      position: {
        x: 697,
        y: 480,
      },
      data: {
        labels: [
          { key: "Full Text Screening", label: "Full Text Screening", link: 0 },
        ],
      },
    },
    {
      id: "incl-studies",
      type: "customNode",
      position: {
        x: 701,
        y: 600,
      },
      data: {
        labels: [
          { key: "Included Studies", label: "Included Studies", link: 0 },
        ],
      },
    },
    {
      id: "results-removed-2",
      type: "customNode",
      position: {
        x: 1126,
        y: 160,
      },
      data: {
        labels: [{ key: "Results Removed", label: "Results Removed", link: 0 }],
      },
    },
    {
      id: "results-removed-3",
      type: "customNode",
      position: {
        x: 1130,
        y: 326,
      },
      data: {
        labels: [{ key: "Results Removed", label: "Results Removed", link: 0 }],
      },
    },
    {
      id: "results-removed-4",
      type: "customNode",
      position: {
        x: 1100,
        y: 429,
      },
      data: {
        labels: [
          { key: "Results Removed", label: "Results Removed", link: 0 },
          {
            key: "Reason Wrong Population",
            label: "Reason Wrong Population",
            link: 0,
          },
          { key: "Wrong Intervention", label: "Wrong Intervention", link: 0 },
        ],
      },
    },
    //Other-Nodes:
    {
      id: "other-results-1",
      type: "customNode",
      position: {
        x: 1450,
        y: 135,
      },
      data: {
        labels: [
          { key: "Other Results", label: "Other Results", link: 0 },
          { key: "Citation Searching", label: "Citation Searching", link: 0 },
        ],
      },
    },
    {
      id: "title-abs-1",
      type: "customNode",
      position: {
        x: 1429,
        y: 326,
      },
      data: {
        labels: [
          {
            key: "Title/Abstract Screening",
            label: "Title/Abstract Screening",
            link: 0,
          },
        ],
      },
    },
    {
      id: "full-text-1",
      type: "customNode",
      position: {
        x: 1449,
        y: 480,
      },
      data: {
        labels: [
          { key: "Full Text Screening", label: "Full Text Screening", link: 0 },
        ],
      },
    },
  ],
  edges: [
    //Nodes->Nodes
    {
      id: "5",
      source: "search-results",
      target: "title-abs",
      type: "smoothstep",
      sourceHandle: "bottom",
      targetHandle: "top",
    },
    {
      id: "6",
      source: "title-abs",
      target: "full-text",
      type: "smoothstep",
      sourceHandle: "bottom",
      targetHandle: "top",
    },
    {
      id: "7",
      source: "full-text",
      target: "incl-studies",
      type: "smoothstep",
      sourceHandle: "bottom",
      targetHandle: "top",
    },
    {
      id: "8",
      source: "search-results",
      target: "results-removed-2",
      type: "smoothstep",
      sourceHandle: "right",
      targetHandle: "left",
      label: "Deduplicator",
      data: {
        //linkLabel: 'Deduplicator',
        isLink: true,
        linkUrl: "https://tera-tools.com/deduplicator",
      },
    },
    {
      id: "9",
      source: "title-abs",
      target: "results-removed-3",
      type: "smoothstep",
      sourceHandle: "right",
      targetHandle: "left",
      label: "Screenatron",
      data: {
        //linkLabel: 'Screenatron',
        linkUrl: "https://tera-tools.com/screenatron",
      },
    },
    {
      id: "10",
      source: "full-text",
      target: "results-removed-4",
      type: "smoothstep",
      sourceHandle: "right",
      targetHandle: "left",
      label: "Screenatron",
      data: {
        //linkLabel: 'Screenatron',
        linkUrl: "https://tera-tools.com/screenatron",
      },
    },
    {
      id: "11",
      source: "other-results-1",
      target: "title-abs-1",
      type: "smoothstep",
      sourceHandle: "bottom",
      targetHandle: "top",
    },
    {
      id: "12",
      source: "title-abs-1",
      target: "full-text-1",
      type: "smoothstep",
      sourceHandle: "bottom",
      targetHandle: "top",
    },
    {
      id: "13",
      source: "full-text-1",
      target: "incl-studies",
      type: "smoothstep",
      sourceHandle: "bottom",
      targetHandle: "right",
    },
    {
      id: "14",
      source: "incl-studies",
      target: "other-results-1",
      type: "smoothstep",
      sourceHandle: "bottom",
      targetHandle: "right",
      label: "SpiderCite",
      data: {
        //linkLabel: 'SpiderCite',
        linkUrl: "https://tera-tools.com/spidercite",
      },
    },
    //Nodes->Tools
    {
      id: "nt-1",
      source: "seed-studies",
      target: "word-freq",
      type: "smoothstep",
      sourceHandle: "right",
      targetHandle: "left",
    },
    {
      id: "nt-2",
      source: "seed-studies",
      target: "search-refiner",
      type: "smoothstep",
      sourceHandle: "right",
      targetHandle: "left",
    },
    {
      id: "nt-3",
      source: "seed-studies",
      target: "tera-farmer",
      type: "smoothstep",
      sourceHandle: "right",
      targetHandle: "left",
    },
  ].map((edges) => ({
    ...edges,
    markerEnd: basicMarkerEnd,
  })),
});

export {vueFlowTable}