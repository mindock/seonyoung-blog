import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

class MarkdownEditor extends React.Component<any, { editorState: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState: any) => {
    this.setState({ editorState });
  };

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        toolbarClassName="editor-toolbar"
        wrapperClassName="editor-wrapper"
        editorClassName="editor"
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}

export default MarkdownEditor;
