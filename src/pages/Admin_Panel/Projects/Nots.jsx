import React , { useState } from "react";
import ReactQuill from 'react-quill';

const Nots = () => {
  const [editorData, setEditorData] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean'] // Remove formatting button
    ]
  };

  const formats = [
    'header', 'font', 'list', 'bullet',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'script', 'align', 'link', 'image', 'video'
  ];
  return (
    <div className="space-y-2 shadow-cs mt-[20px] p-[10px] border border-[#dbdbdb] rounded-lg">
      <h1 className="text-[18px] font-semibold">Personal Notes</h1>
      <ReactQuill
        value={editorData}
        onChange={setEditorData}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Nots;
