interface ParagraphContent {
  type: 'paragraph';
  text: string[];
}

interface ListItem {
  text: string;
}

interface ListContent {
  type: 'list';
  listType: 'ordered' | 'unordered';
  items: ListItem[];
}

type ContentItem = ParagraphContent | ListContent;

export interface LegalContentSection {
  title: string;
  titleVariant: 'h4' | 'h5';
  content: ContentItem[];
}
