import React from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { PostStore } from '../../../stores/post';

class MarkdownEditor extends React.Component<{ postStore: PostStore }, { editorState: EditorState }> {
  constructor(props: { postStore: PostStore }) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  setContent = (event: EditorState) => {
    this.setState({ editorState: event });
    const content = JSON.stringify(convertToRaw(event.getCurrentContent()));
    this.props.postStore.setContent(content);
  };

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        toolbarClassName="editor-toolbar"
        wrapperClassName="editor-wrapper"
        editorClassName="editor"
        onEditorStateChange={this.setContent}
      />
    );
  }
}

export default MarkdownEditor;
