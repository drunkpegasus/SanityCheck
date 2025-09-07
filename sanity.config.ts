import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Reviews',

  projectId: '3doib97o',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
