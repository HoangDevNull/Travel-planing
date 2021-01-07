import React, { Component } from 'react';
import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import { Box } from '@material-ui/core';

class HtmlPreviewer extends Component {
  constructor(props) {
    super(props);
    if (this.props.data) {
      const contentBlock = htmlToDraft(this.props.data);
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState
      };
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  render() {
    const editorState = this.state?.editorState;
    return (
      <>
        <Box overflow="hidden" width="100%" className="rdw-storybook-root">
          <Editor
            editorState={editorState}
            toolbarHidden
            onEditorStateChange={this.onEditorStateChange}
          />
        </Box>
      </>
    );
  }
}

export default HtmlPreviewer;
