const lsKey = "plateEditorContent";

import { withProps } from "@udecode/cn";
import { createAlignPlugin } from "@udecode/plate-alignment";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createUnderlinePlugin,
} from "@udecode/plate-basic-marks";
import {
  ELEMENT_BLOCKQUOTE,
  createBlockquotePlugin,
} from "@udecode/plate-block-quote";
import {
  createExitBreakPlugin,
  createSoftBreakPlugin,
} from "@udecode/plate-break";
import { createCaptionPlugin } from "@udecode/plate-caption";
import {
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  ELEMENT_CODE_SYNTAX,
  createCodeBlockPlugin,
} from "@udecode/plate-code-block";
import { createComboboxPlugin } from "@udecode/plate-combobox";
import {
  CommentsProvider,
  MARK_COMMENT,
  createCommentsPlugin,
} from "@udecode/plate-comments";
import {
  Plate,
  PlateLeaf,
  RenderAfterEditable,
  createPlugins,
} from "@udecode/plate-common";
import { createDndPlugin } from "@udecode/plate-dnd";
import { createEmojiPlugin } from "@udecode/plate-emoji";
import {
  ELEMENT_EXCALIDRAW,
  createExcalidrawPlugin,
} from "@udecode/plate-excalidraw";
import {
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
} from "@udecode/plate-font";
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  createHeadingPlugin,
} from "@udecode/plate-heading";
import {
  MARK_HIGHLIGHT,
  createHighlightPlugin,
} from "@udecode/plate-highlight";
import {
  ELEMENT_HR,
  createHorizontalRulePlugin,
} from "@udecode/plate-horizontal-rule";
import { createIndentPlugin } from "@udecode/plate-indent";
import { createIndentListPlugin } from "@udecode/plate-indent-list";
import { MARK_KBD, createKbdPlugin } from "@udecode/plate-kbd";
import { createLineHeightPlugin } from "@udecode/plate-line-height";
import { ELEMENT_LINK, createLinkPlugin } from "@udecode/plate-link";
import { ELEMENT_TODO_LI, createTodoListPlugin } from "@udecode/plate-list";
import {
  ELEMENT_IMAGE,
  ELEMENT_MEDIA_EMBED,
  createImagePlugin,
  createMediaEmbedPlugin,
} from "@udecode/plate-media";
import {
  ELEMENT_MENTION,
  ELEMENT_MENTION_INPUT,
  createMentionPlugin,
} from "@udecode/plate-mention";
import { createNodeIdPlugin } from "@udecode/plate-node-id";
import {
  ELEMENT_PARAGRAPH,
  createParagraphPlugin,
} from "@udecode/plate-paragraph";
import { createResetNodePlugin } from "@udecode/plate-reset-node";
import {
  createDeletePlugin,
  createSelectOnBackspacePlugin,
} from "@udecode/plate-select";
import { createBlockSelectionPlugin } from "@udecode/plate-selection";
import { createDeserializeCsvPlugin } from "@udecode/plate-serializer-csv";
import { createDeserializeDocxPlugin } from "@udecode/plate-serializer-docx";
import { createDeserializeMdPlugin } from "@udecode/plate-serializer-md";
import { createTabbablePlugin } from "@udecode/plate-tabbable";
import {
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TH,
  ELEMENT_TR,
  createTablePlugin,
} from "@udecode/plate-table";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { BlockquoteElement } from "./plate-ui/blockquote-element";
import { CodeBlockElement } from "./plate-ui/code-block-element";
import { CodeLeaf } from "./plate-ui/code-leaf";
import { CodeLineElement } from "./plate-ui/code-line-element";
import { CodeSyntaxLeaf } from "./plate-ui/code-syntax-leaf";
import { CommentLeaf } from "./plate-ui/comment-leaf";
import { CommentsPopover } from "./plate-ui/comments-popover";
import { Editor } from "./plate-ui/editor";
import { EmojiCombobox } from "./plate-ui/emoji-combobox";
import { ExcalidrawElement } from "./plate-ui/excalidraw-element";
import { FixedToolbar } from "./plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "./plate-ui/fixed-toolbar-buttons";
import { FloatingToolbar } from "./plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "./plate-ui/floating-toolbar-buttons";
import { HeadingElement } from "./plate-ui/heading-element";
import { HighlightLeaf } from "./plate-ui/highlight-leaf";
import { HrElement } from "./plate-ui/hr-element";
import { ImageElement } from "./plate-ui/image-element";
import { KbdLeaf } from "./plate-ui/kbd-leaf";
import { LinkElement } from "./plate-ui/link-element";
import { LinkFloatingToolbar } from "./plate-ui/link-floating-toolbar";
import { MediaEmbedElement } from "./plate-ui/media-embed-element";
import { MentionCombobox } from "./plate-ui/mention-combobox";
import { MentionElement } from "./plate-ui/mention-element";
import { MentionInputElement } from "./plate-ui/mention-input-element";
import { ParagraphElement } from "./plate-ui/paragraph-element";
import { withPlaceholders } from "./plate-ui/placeholder";
import {
  TableCellElement,
  TableCellHeaderElement,
} from "./plate-ui/table-cell-element";
import { TableElement } from "./plate-ui/table-element";
import { TableRowElement } from "./plate-ui/table-row-element";
import { TodoListElement } from "./plate-ui/todo-list-element";
import { TooltipProvider } from "./plate-ui/tooltip";
import { withDraggables } from "./plate-ui/with-draggables";
const initialValue = [
  {
    id: "1",
    type: "p",
    children: [{ text: "Hello, World!" }],
  },
];

export function PlateEditor() {
  const plugins = createPlugins(
    [
      createParagraphPlugin(),
      createHeadingPlugin(),
      createBlockquotePlugin(),
      createCodeBlockPlugin(),
      createHorizontalRulePlugin(),
      createLinkPlugin({
        renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
      }),
      createImagePlugin(),
      createMediaEmbedPlugin(),
      createCaptionPlugin({
        options: {
          pluginKeys: [
            // ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED
          ],
        },
      }),
      createMentionPlugin(),
      createTablePlugin(),
      createTodoListPlugin(),
      createExcalidrawPlugin(),
      createBoldPlugin(),
      createItalicPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createCodePlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createFontColorPlugin(),
      createFontBackgroundColorPlugin(),
      createFontSizePlugin(),
      createHighlightPlugin(),
      createKbdPlugin(),
      createAlignPlugin({
        inject: {
          props: {
            validTypes: [
              ELEMENT_PARAGRAPH,
              // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
            ],
          },
        },
      }),
      createIndentPlugin({
        inject: {
          props: {
            validTypes: [
              ELEMENT_PARAGRAPH,
              // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_BLOCKQUOTE, ELEMENT_CODE_BLOCK
            ],
          },
        },
      }),
      createIndentListPlugin({
        inject: {
          props: {
            validTypes: [
              ELEMENT_PARAGRAPH,
              // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_BLOCKQUOTE, ELEMENT_CODE_BLOCK
            ],
          },
        },
      }),
      createLineHeightPlugin({
        inject: {
          props: {
            defaultNodeValue: 1.5,
            validNodeValues: [1, 1.2, 1.5, 2, 3],
            validTypes: [
              ELEMENT_PARAGRAPH,
              // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
            ],
          },
        },
      }),
      createComboboxPlugin(),
      createDndPlugin({
        options: { enableScroller: true },
      }),
      createEmojiPlugin({
        renderAfterEditable: EmojiCombobox,
      }),
      createExitBreakPlugin({
        options: {
          rules: [
            {
              hotkey: "mod+enter",
            },
            {
              hotkey: "mod+shift+enter",
              before: true,
            },
            {
              hotkey: "enter",
              query: {
                start: true,
                end: true,
                // allow: KEYS_HEADING,
              },
              relative: true,
              level: 1,
            },
          ],
        },
      }),
      createNodeIdPlugin(),
      createResetNodePlugin({
        options: {
          rules: [
            // Usage: https://platejs.org/docs/reset-node
          ],
        },
      }),
      createSelectOnBackspacePlugin({
        options: {
          query: {
            allow: [
              // ELEMENT_IMAGE, ELEMENT_HR
            ],
          },
        },
      }),
      createDeletePlugin(),
      createSoftBreakPlugin({
        options: {
          rules: [
            { hotkey: "shift+enter" },
            {
              hotkey: "enter",
              query: {
                allow: [
                  // ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD
                ],
              },
            },
          ],
        },
      }),
      createTabbablePlugin(),
      createTrailingBlockPlugin({
        options: { type: ELEMENT_PARAGRAPH },
      }),
      createCommentsPlugin(),
      createAutoformatPlugin({
        options: {
          rules: [
            // Usage: https://platejs.org/docs/autoformat
          ],
          enableUndoOnDelete: true,
        },
      }),
      createBlockSelectionPlugin({
        options: {
          sizes: {
            top: 0,
            bottom: 0,
          },
        },
      }),
      createDeserializeDocxPlugin(),
      createDeserializeCsvPlugin(),
      createDeserializeMdPlugin(),
      // createJuicePlugin(),
    ],
    {
      components: withDraggables(
        withPlaceholders({
          [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
          [ELEMENT_CODE_BLOCK]: CodeBlockElement,
          [ELEMENT_CODE_LINE]: CodeLineElement,
          [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
          [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
          [ELEMENT_HR]: HrElement,
          [ELEMENT_IMAGE]: ImageElement,
          [ELEMENT_LINK]: LinkElement,
          [ELEMENT_H1]: withProps(HeadingElement, { variant: "h1" }),
          [ELEMENT_H2]: withProps(HeadingElement, { variant: "h2" }),
          [ELEMENT_H3]: withProps(HeadingElement, { variant: "h3" }),
          [ELEMENT_H4]: withProps(HeadingElement, { variant: "h4" }),
          [ELEMENT_H5]: withProps(HeadingElement, { variant: "h5" }),
          [ELEMENT_H6]: withProps(HeadingElement, { variant: "h6" }),
          [ELEMENT_MEDIA_EMBED]: MediaEmbedElement,
          [ELEMENT_MENTION]: MentionElement,
          [ELEMENT_MENTION_INPUT]: MentionInputElement,
          [ELEMENT_PARAGRAPH]: ParagraphElement,
          [ELEMENT_TABLE]: TableElement,
          [ELEMENT_TR]: TableRowElement,
          [ELEMENT_TD]: TableCellElement,
          [ELEMENT_TH]: TableCellHeaderElement,
          [ELEMENT_TODO_LI]: TodoListElement,
          [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
          [MARK_CODE]: CodeLeaf,
          [MARK_COMMENT]: CommentLeaf,
          [MARK_HIGHLIGHT]: HighlightLeaf,
          [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
          [MARK_KBD]: KbdLeaf,
          [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: "s" }),
          [MARK_SUBSCRIPT]: withProps(PlateLeaf, { as: "sub" }),
          [MARK_SUPERSCRIPT]: withProps(PlateLeaf, { as: "sup" }),
          [MARK_UNDERLINE]: withProps(PlateLeaf, { as: "u" }),
        }),
      ),
    },
  );
  const handleChange = (newValue: any) => {
    const content = JSON.stringify(newValue);
    console.log({ content });
    localStorage.setItem(lsKey, content);
  };
  return (
    <TooltipProvider>
      <DndProvider backend={HTML5Backend}>
        <CommentsProvider users={{}} myUserId="1">
          <Plate
            plugins={plugins}
            initialValue={initialValue}
            onChange={handleChange}
          >
            <FixedToolbar>
              <FixedToolbarButtons />
            </FixedToolbar>

            <Editor onChange={handleChange} />

            <FloatingToolbar>
              <FloatingToolbarButtons />
            </FloatingToolbar>
            <MentionCombobox items={[]} />
            <CommentsPopover />
          </Plate>
        </CommentsProvider>
      </DndProvider>
    </TooltipProvider>
  );
}
