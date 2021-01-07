import React, { Component } from 'react';
import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';

import { Editor } from 'react-draft-wysiwyg';
import { Box } from '@material-ui/core';

import draftToHtml from 'draftjs-to-html';
import { uploadRequest } from 'utils/apiRequest';
class ConvertToRawDraftContent extends Component {
  constructor(props) {
    super(props);

    const editorState = EditorState.createEmpty();
    this.state = {
      editorState
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    this.props.onChange(html);
  };

  uploadImageCallBack = async (file) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await uploadRequest(file);
        resolve({ data: { link: data.url } });
      } catch (err) {
        reject(err);
      }
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <>
        <Box minHeight="100vh" padding="15px" className="rdw-storybook-root">
          <Editor
            editorState={editorState}
            toolbar={{
              image: {
                uploadCallback: this.uploadImageCallBack,
                alt: { present: true, mandatory: true }
              }
            }}
            onEditorStateChange={this.onEditorStateChange}
          />
        </Box>
      </>
    );
  }
}

export default ConvertToRawDraftContent;
