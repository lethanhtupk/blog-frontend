import { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints'

export interface IPagination {
  total: number
  page: number
  pageSize: number
  pageCount: number
}

export interface IMeta {
  pagination: IPagination
}

interface UploadFile {
  name?: string
  alternativeText?: string
  caption?: string
  width?: number
  height?: number
  size: number
  url: string
  previewUrl?: string
  provider: string
}

interface UploadFileEntity {
  id: string
  attributes: UploadFile
}

interface IAnnotation {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface UploadFileEntityResponse {
  data: UploadFileEntity
}

export const getTableOfContents = (page: ListBlockChildrenResponse) => {
  const headings = page.results.filter((block: any) => block.type.startsWith('heading'))

  return headings
}

export const getTextStyleByAnnotations = (annotations: IAnnotation) => {
  let style = ''
  if (annotations.bold) style += 'font-bold'
  if (annotations.italic) style += 'italic'
  if (annotations.strikethrough) style += 'line-through'
  if (annotations.underline) style += 'underline'
  if (annotations.color !== 'default') style += `text-[${annotations.color}]`

  return style
}
