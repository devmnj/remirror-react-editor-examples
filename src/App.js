import { MdEditor, RemirrorEditor, RichTextEditor } from "./RemirrorEditor";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hi I am from family of ProseMirror</h1>
      <h2>Social Editor</h2>
      <RemirrorEditor />
      <h2>RitchText Editor</h2>
      <RichTextEditor />
      <h2>Markdown Editor</h2>
      <MdEditor />
    </div>
  );
}
