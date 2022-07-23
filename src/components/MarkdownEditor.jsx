// https://editor.dev-source.ru/ - Bootstrap Markdown

import $ from 'jquery';
import React from "react";

import 'bootstrap-markdown/js/bootstrap-markdown';
import 'bootstrap-markdown/css/bootstrap-markdown.min.css';

export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.rootElement = React.createRef();
  }

  componentDidMount() {
    $(this.rootElement.current).markdown({
      iconlibrary: 'fa', // fontawesome
      onChange: this.onChange,
    });
  }

  onChange = (event) => {
    const { onContentChange } = this.props;
    const content = event.getContent();
    onContentChange(content);
  }

  render() {
    return <div data-provide="markdown-editable" ref={this.rootElement} />;
  }
}