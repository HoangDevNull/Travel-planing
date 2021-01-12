import React, { Component } from 'react';
import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';

import { html } from './data';
import {Container ,Grid, Box } from '@material-ui/core';
import { Edit } from '@material-ui/icons';

class ConvertToRawDraftContent extends Component {
  constructor(props) {
    super(props);
    // const html = `<p></p`;
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
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
    const { editorState } = this.state;
    return (
      <>
      <Container>
        <Grid Flex container>
          <Grid item md={3} justify="center" alignItems="center">Tmidori</Grid>
          <Grid item md={9} justify="center">
            <Box overflow="hidden" width="100%" className="rdw-storybook-root">
              <Editor
                editorState={editorState}
                toolbarHidden
                onEditorStateChange={this.onEditorStateChange}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      </>
    );
  }
}

export default ConvertToRawDraftContent;
