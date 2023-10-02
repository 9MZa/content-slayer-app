import remarkSlug from "remark-slug";
import remarkEmoji from "remark-emoji";
import readingTime from "reading-time";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    thumbnail: {
      type: "string",
      description: "The thumbnail of the post",
      required: true,
    },
    category: {
      type: "string",
      description: "The category of the post",
      require: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "The Tag of the post",
      required: true,
    },
    createdAt: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    updatedAt: {
      type: "date",
      description: "The date updated of the post",
      required: false,
    },
    published: {
      type: "boolean",
      required: true,
      default: true,
    },
    feature: {
      type: "boolean",
      required: false,
      default: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/post/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
        rehypeHighlight,
      rehypeSlug,
    ],
    remarkPlugins: [remarkEmoji, remarkSlug],
  },
});
