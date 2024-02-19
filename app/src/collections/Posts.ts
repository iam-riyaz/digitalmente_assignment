import { lexicalEditor,HTMLConverterFeature ,lexicalHTML,LinkFeature, BoldTextFeature} from "@payloadcms/richtext-lexical";
import { CollectionConfig, } from "payload/types";


import type { SerializedEditorState } from 'lexical'
import {
  type SanitizedEditorConfig,
  convertLexicalToHTML,
  consolidateHTMLConverters,
} from '@payloadcms/richtext-lexical'

async function lexicalToHTML(editorData: SerializedEditorState, editorConfig: SanitizedEditorConfig) {
  return await convertLexicalToHTML({
    converters: consolidateHTMLConverters({ editorConfig }),
    data: editorData,
  })
}



const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "content", type: "richText", 
    editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          
         
          HTMLConverterFeature({}),
        ], 
      }), },
      lexicalHTML('nameOfYourRichTextField', { name: 'nameOfYourRichTextField_html' }),
  ],
};

export default Posts;



