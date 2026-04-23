import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExt from "@tiptap/extension-link";
import ImageExt from "@tiptap/extension-image";
import {
  Bold, Italic, Heading2, Heading3, List, ListOrdered, Link as LinkIcon, Image as ImageIcon,
} from "lucide-react";
import { useEffect } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
  onImageRequest?: () => Promise<string | null>;
};

const ToolBtn = ({
  active, onClick, label, children,
}: {
  active?: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    title={label}
    className={`h-9 w-9 inline-flex items-center justify-center rounded-md border transition-colors ${
      active
        ? "bg-olive text-primary-foreground border-olive"
        : "bg-card text-charcoal border-border hover:border-olive"
    }`}
  >
    {children}
  </button>
);

const Toolbar = ({
  editor, onImageRequest,
}: { editor: Editor | null; onImageRequest?: () => Promise<string | null> }) => {
  if (!editor) return null;

  const setLink = () => {
    const previous = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Enter URL", previous ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const insertImage = async () => {
    if (onImageRequest) {
      const url = await onImageRequest();
      if (url) editor.chain().focus().setImage({ src: url }).run();
      return;
    }
    const url = window.prompt("Image URL");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  return (
    <div className="flex flex-wrap gap-1.5 p-2 border border-border border-b-0 rounded-t-md bg-secondary/60">
      <ToolBtn label="Bold" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
        <Bold className="w-4 h-4" />
      </ToolBtn>
      <ToolBtn label="Italic" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
        <Italic className="w-4 h-4" />
      </ToolBtn>
      <ToolBtn label="Heading 2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
        <Heading2 className="w-4 h-4" />
      </ToolBtn>
      <ToolBtn label="Heading 3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
        <Heading3 className="w-4 h-4" />
      </ToolBtn>
      <ToolBtn label="Bulleted list" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <List className="w-4 h-4" />
      </ToolBtn>
      <ToolBtn label="Numbered list" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <ListOrdered className="w-4 h-4" />
      </ToolBtn>
      <ToolBtn label="Insert link" active={editor.isActive("link")} onClick={setLink}>
        <LinkIcon className="w-4 h-4" />
      </ToolBtn>
      <ToolBtn label="Insert image" onClick={insertImage}>
        <ImageIcon className="w-4 h-4" />
      </ToolBtn>
    </div>
  );
};

const RichTextEditor = ({ value, onChange, onImageRequest }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      LinkExt.configure({ openOnClick: false, autolink: true, HTMLAttributes: { class: "text-olive underline" } }),
      ImageExt.configure({ HTMLAttributes: { class: "rounded-xl my-6 w-full" } }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          "prose-content min-h-[280px] max-w-none px-4 py-4 bg-card border border-border rounded-b-md text-charcoal focus:outline-none focus:ring-2 focus:ring-olive/30",
      },
    },
  });

  useEffect(() => {
    if (editor && value === "" && editor.getHTML() !== "<p></p>") {
      editor.commands.setContent("");
    }
  }, [value, editor]);

  return (
    <div>
      <Toolbar editor={editor} onImageRequest={onImageRequest} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
