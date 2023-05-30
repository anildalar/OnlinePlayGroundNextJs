import { useEffect, useRef, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditor = ({ onChange }) => {
  const editorRef = useRef(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    const editor = editorRef.current.editor;
    editor.getSession().on('change', () => {
      const code = editor.getValue();
      setValue(code);
      onChange(code);
    });
  }, []);

  return (
    <AceEditor
      ref={editorRef}
      mode="javascript"
      theme="monokai"
      value={value}
      onChange={setValue}
      width="100%"
      fontSize={14}
      showPrintMargin={false}
      wrapEnabled={true}
      setOptions={{
        tabSize: 2,
      }}
    />
  );
};

export default CodeEditor;