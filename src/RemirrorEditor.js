import { SocialEditor } from "@remirror/react-editors/social";
import { WysiwygEditor } from "@remirror/react-editors/wysiwyg";
import { useHelpers } from "@remirror/react";
import { MarkdownEditor } from "@remirror/react-editors/markdown";

const RemirrorEditor = () => {
  const USERS = [
    { id: "joe", label: "Joe" },
    { id: "john", label: "John" }
  ];
  const TAGS = ["remirror", "editor"];

  return (
    <div style={{ padding: 16 }}>
      <SocialEditor users={USERS} tags={TAGS} />
    </div>
  );
};

const RichTextEditor = () => {
  return (
    <div>
      <WysiwygEditor />
    </div>
  );
};

function MarkdownPreview() {
  const { getMarkdown } = useHelpers(true);

  return (
    <pre>
      <code>{getMarkdown()}</code>
    </pre>
  );
}

const MdEditor = () => {
  return (
    <MarkdownEditor placeholder="Start typing...">
      <MarkdownPreview />
    </MarkdownEditor>
  );
};

export { RemirrorEditor, RichTextEditor, MdEditor };
