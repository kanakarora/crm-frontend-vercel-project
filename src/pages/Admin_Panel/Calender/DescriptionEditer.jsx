import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';


const DescriptionEditer = () => {
    const [content, setContent] = useState('A modified <strong>Edit</strong> menu.');

    const handleEditorChange = (newContent) => {
        setContent(newContent);
    };

    const handleSave = () => {
        // Logic to save content, e.g., sending to a server
        console.log('Saved content:', content);
    };

  return (
    <div>
           <Editor
                initialValue={content}
                init={{
                    height: 400,
                    menubar: true,
                    menu: {
                        edit: { title: 'Edit', items: 'undo redo | selectall' }
                    },
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code a wordcount'
                    ],
                    toolbar: 'undo redo | styleselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | link image | \
                        media | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                onEditorChange={handleEditorChange}
            />
            <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default DescriptionEditer