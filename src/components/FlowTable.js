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
                  id: 'seed-studies',
                  type: 'customNode',
                  position: {
                        x: 120,
                        y: 160
                  },
                  data: {
                        labels: [
                              { label: 'Seed Studies',link: '15'  } //TODO: Get fuction()
                        ]
                  }
            },
            
            //Designing-Tools:
            {
                  id: 'word-freq',
                  type: 'customTextNode',
                  position: {
                        x: 400,
                        y: 120
                  },
                  data: {
                        labels: [
                              {label:'Word Freq', link: 'https://tera-tools.com/word-freq'}
                        ]
                  }
            },
            {
                  id: 'search-refiner',
                  type: 'customTextNode',
                  position: {
                        x: 400,
                        y: 180
                  },
                  data: {
                        labels: [
                              {label: 'Search Refiner', link: 'https://tera-tools.com/searchrefiner'}
                        ]
                  }
            },
            {
                  id: 'tera-farmer',
                  type: 'customTextNode',
                  position: {
                        x: 400,
                        y: 240
                  },
                  data: {
                        labels: [
                              {label: 'TERA Farmer', link: 'https://tera-tools.com/terafarmer'}
                        ]
                  }
            },
            //Searching-Nodes:
            {
                  id: 'search-results',
                  type: 'customNode',
                  position: {
                        x: 700,
                        y: 160
                  },
                  data: {
                        labels: [
                              {label: 'Search Results', link: '1000'}
                        ]
                  }
            },
            {
                  id: 'title-abs',
                  type: 'customNode',
                  position: {
                        x: 677,
                        y: 326
                  },
                  data: {
                        labels: [
                              {label: 'Title/Abstract Screening', link: '200'}
                        ]
                  }
            },
            {
                  id: 'full-text',
                  type: 'customNode',
                  position: {
                        x: 697,
                        y: 480
                  },
                  data: {
                        labels: [
                              {label: 'Full Text Screening', link: '500'}
                        ]
                  }
            },
            {
                  id: 'incl-studies',
                  type: 'customNode',
                  position: {
                        x: 701,
                        y: 600
                  },
                  data: {
                        labels: [
                              {label: 'Included Studies', link: '800'}
                        ]
                  }
            },
            {
                  id: 'results-removed-2',
                  type: 'customNode',
                  position: {
                        x: 1126,
                        y: 160
                  },
                  data: {
                        labels: [
                              {label: 'Results Removed', link: '1000'}
                        ]
                  }
            },
            {
                  id: 'results-removed-3',
                  type: 'customNode',
                  position: {
                        x: 1130,
                        y: 326
                  },
                  data: {
                        labels: [
                              {label: 'Results Removed', link: '1400'}
                        ]
                  }
            },
            {
                  id: 'results-removed-4',
                  type: 'customNode',
                  position: {
                        x: 1100,
                        y: 429
                  },
                  data: {
                        labels: [
                              { label: 'Results Removed', link: '200' },
                              { label: 'Reason Wrong Population', link: '40' },
                              { label: 'Wrong Intervention', link: '20' }
                        ]
                  }
            },
            //Searching-Tools:
            {
                  id: 'pubmed',
                  type: 'customTextNode',
                  position: {
                        x: 650,
                        y: 90
                  },
                  data: {
                        labels: [
                              {label: 'PubMed', link: 'https://pubmed.ncbi.nlm.nih.gov/'}
                        ]
                  }
            },
            {
                  id: 'embase',
                  type: 'customTextNode',
                  position: {
                        x: 750,
                        y: 90
                  },
                  data: {
                        labels: [
                              {label: 'Embase', link: 'https://www.embase.com/'}
                        ]
                  }
            },
            {
                  id: 'cinahl',
                  type: 'customTextNode',
                  position: {
                        x: 850,
                        y: 90
                  },
                  data: {
                        labels: [
                              {label: 'CINAHL', link: ''}
                        ]
                  }
            },
            //Other-Nodes:
            {
                  id: 'other-results-1',
                  type: 'customNode',
                  position: {
                        x: 1450,
                        y: 135
                  },
                  data: {
                        labels: [
                              { label: 'Other Results', link: '500' },
                              { label: 'Citation Searching', link: '50'}
                        ]
                  }
            },
            {
                  id: 'title-abs-1',
                  type: 'customNode',
                  position: {
                        x: 1429,
                        y: 326
                  },
                  data: {
                        labels: [
                              {label: 'Title/Abstract Screening', link: '200'}
                        ]
                  }
            },
            {
                  id: 'full-text-1',
                  type: 'customNode',
                  position: {
                        x: 1449,
                        y: 480
                  },
                  data: {
                        labels: [
                              {label: 'Full Text Screening', link: '500'}
                        ]
                  }
            },
            
      ],
      edges: [
      //Nodes->Nodes           
            {
                  id: '5',
                  source: 'search-results',
                  target: 'title-abs',
                  type: 'smoothstep',
                  sourceHandle: 'bottom',
                  targetHandle: 'top',
      
            },
            {
                  id: '6',
                  source: 'title-abs',
                  target: 'full-text',
                  type: 'smoothstep',
                  sourceHandle: 'bottom',
                  targetHandle: 'top',
                  
      
            },
            {
                  id: '7',
                  source: 'full-text',
                  target: 'incl-studies',
                  type: 'smoothstep',
                  sourceHandle: 'bottom',
                  targetHandle: 'top',
                 
      
            },
            {
                  id: '8',
                  source: 'search-results',
                  target: 'results-removed-2',
                  type: 'smoothstep',
                  sourceHandle: 'right',
                  targetHandle: 'left',
                  label: 'Deduplicator',
                  data: {
                        //linkLabel: 'Deduplicator',
                        isLink: true,
                        linkUrl: 'https://tera-tools.com/deduplicator'
                  }
            },
            {
                  id: '9',
                  source: 'title-abs',
                  target: 'results-removed-3',
                  type: 'smoothstep',
                  sourceHandle: 'right',
                  targetHandle: 'left',
                  label: 'Screenatron',
                  data: {
                        //linkLabel: 'Screenatron',
                        linkUrl: 'https://tera-tools.com/screenatron'
                  }
            },
            {
                  id: '10',
                  source: 'full-text',
                  target: 'results-removed-4',
                  type: 'smoothstep',
                  sourceHandle: 'right',
                  targetHandle: 'left',
                  label: 'Screenatron',
                  data: {
                        //linkLabel: 'Screenatron',
                        linkUrl: 'https://tera-tools.com/screenatron'
                  }
            },
            {
                  id: '11',
                  source: 'other-results-1',
                  target: 'title-abs-1',
                  type: 'smoothstep',
                  sourceHandle: 'bottom',
                  targetHandle: 'top',
                  
            },
            {
                  id: '12',
                  source: 'title-abs-1',
                  target: 'full-text-1',
                  type: 'smoothstep',
                  sourceHandle: 'bottom',
                  targetHandle: 'top',
                  
            },
            {
                  id: '13',
                  source: 'full-text-1',
                  target: 'incl-studies',
                  type: 'smoothstep',
                  sourceHandle: 'bottom',
                  targetHandle: 'right',
            },
            {
                  id: '14',
                  source: 'incl-studies',
                  target: 'other-results-1',
                  type: 'smoothstep',
                  sourceHandle: 'bottom',
                  targetHandle: 'right',
                  label: 'SpiderCite',
                  data: {
                        //linkLabel: 'SpiderCite',
                        linkUrl: 'https://tera-tools.com/spidercite'
                  }
            },
            //Nodes->Tools
            {
                  id: 'nt-1',
                  source: 'seed-studies',
                  target: 'word-freq',
                  type: 'smoothstep',
                  sourceHandle: 'right',
                  targetHandle: 'left',
            },
            {
                  id: 'nt-2',
                  source: 'seed-studies',
                  target: 'search-refiner',
                  type: 'smoothstep',
                  sourceHandle: 'right',
                  targetHandle: 'left',
            },
            {
                  id: 'nt-3',
                  source: 'seed-studies',
                  target: 'tera-farmer',
                  type: 'smoothstep',
                  sourceHandle: 'right',
                  targetHandle: 'left',
                  
            },
            {
                  id: 'nt-4',
                  source: 'pubmed',
                  target: 'search-results',
                  type: 'smoothstep',
                  sourceHandle: 'bottom',
                  targetHandle: 'top',
                  
            },
            {
                  id: 'nt-5',
                  source: 'embase',
                  target: 'search-results',
                  type: 'smoothstep',
                  sourceHandle: 'bottom',
                  targetHandle: 'top',
                  
            },
            {
                  id: 'nt-6',
                  source: 'cinahl',
                  target: 'search-results',
                  type: 'smoothstep',
                  sourceHandle: 'bottom',
                  targetHandle: 'top',
                  
            }

      ].map(edges => ({
            ...edges,
            markerEnd: basicMarkerEnd
      }))
})

export {vueFlowTable}