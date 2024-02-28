import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useDropzone } from 'react-dropzone';

function Accept(props: any) {
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: {
            'application/pdf': []
        }
    });

    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <ul>
                {errors.map(e => (
                    <li key={e.code}>{e.message}</li>
                ))}
            </ul>
        </li>
    ));

    return (
        <div className="DropzoneDiv">


            <section className="container" id='DropZone'>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <Typography gutterBottom component="div">
                        Drop files here, or click to select files
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        (Only pdf files will be accepted)
                    </Typography>

                </div>

            </section>

        </div>

    );
}

<Accept />

export default Accept