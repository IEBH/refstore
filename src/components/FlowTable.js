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
          {
            key: "Seed Studies(Designing)",
            label: "Seed Studies",
            link: 0,
            filepath: null,
          },
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
        x: 650,
        y: 160,
      },
      data: {
        labels: [
          {
            key: "Search Results(Searching)",
            label: "Search Results",
            link: 0,
            filepath: null,
          },
        ],
      },
    },
    {
      id: "title-abs",
      type: "customNode",
      position: {
        x: 627,
        y: 326,
      },
      data: {
        labels: [
          {
            key: "Title/Abstract Screening(Searching)",
            label: "Title/Abstract Screening",
            link: 0,
            filepath: null,
          },
        ],
      },
    },
    {
      id: "full-text",
      type: "customNode",
      position: {
        x: 647,
        y: 480,
      },
      data: {
        labels: [
          {
            key: "Full Text Screening(Searching)",
            label: "Full Text Screening",
            link: 0,
            filepath: null,
          },
        ],
      },
    },
    {
      id: "incl-studies",
      type: "customNode",
      position: {
        x: 651,
        y: 600,
      },
      data: {
        labels: [
          {
            key: "Included Studies(Searching)",
            label: "Included Studies",
            link: 0,
            filepath: null,
          },
        ],
      },
    },
    {
      id: "results-removed-2",
      type: "customNode",
      position: {
        x: 1100,
        y: 160,
      },
      data: {
        labels: [
          {
            key: "Search Results - Results Removed(Searching)",
            label: "Results Removed",
            link: 0,
            filepath: null,
          },
        ],
      },
    },
    {
      id: "results-removed-3",
      type: "customNode",
      position: {
        x: 1100,
        y: 326,
      },
      data: {
        labels: [
          {
            key: "Title/Abstract Screening - Results Removed(Searching)",
            label: "Results Removed",
            link: 0,
            filepath: null,
          },
        ],
      },
    },
    {
      id: "results-removed-4",
      type: "customNode",
      position: {
        x: 1070,
        y: 429,
      },
      data: {
        labels: [
          {
            key: "Full Text Screening - Results Removed(Searching)",
            label: "Results Removed",
            link: 0,
            filepath: null,
          },
          {
            key: "Full Text Screening - Wrong Population(Searching)",
            label: "Reason Wrong Population",
            link: 0,
            filepath: null,
          },
          {
            key: "Full Text Screening - Wrong Intervention(Searching)",
            label: "Wrong Intervention",
            link: 0,
            filepath: null,
          },
        ],
      },
    },
    //Other-Nodes:
    {
      id: "other-results-1",
      type: "customNode",
      position: {
        x: 1400,
        y: 135,
      },
      data: {
        labels: [
          {
            key: "Other Results(Other)",
            label: "Other Results",
            link: 0,
            filepath: null,
          },
          {
            key: "Citation Searching(Other)",
            label: "Citation Searching",
            link: 0,
            filepath: null,
          },
        ],
      },
    },
    {
      id: "title-abs-1",
      type: "customNode",
      position: {
        x: 1379,
        y: 326,
      },
      data: {
        labels: [
          {
            key: "Title/Abstract Screening(Other)",
            label: "Title/Abstract Screening",
            link: 0,
            filepath: null,
          },
        ],
      },
    },
    {
      id: "full-text-1",
      type: "customNode",
      position: {
        x: 1399,
        y: 480,
      },
      data: {
        labels: [
          {
            key: "Full Text Screening(Other)",
            label: "Full Text Screening",
            link: 0,
            filepath: null,
          },
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