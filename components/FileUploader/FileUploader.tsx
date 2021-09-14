import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import classes from './FileUploader.module.css'
import Compressor from 'compressorjs'

const FileUploader: React.FC<{ label: string, name: string, updateValue: (name: string, value: File) => {} ,defaultValue?:string}> = ({ label, name, updateValue,defaultValue=undefined }) => {
    const [files, setFiles] = useState<{ preview: string,name:string ,}[]>([]);
    const [value, setValue] = useState("")
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        maxFiles: 1,
        multiple: false,
        onDrop: acceptedFiles => {
            setFiles([{
                preview: URL.createObjectURL(acceptedFiles[0]),
                name:acceptedFiles[0].name
            }]);
            updateValue(name, acceptedFiles[0])
                    
            
        }
    });


    return (
        <section className="container">
            <label htmlFor=""></label>
            <div {...getRootProps({ className: 'dropzone' })} className={classes.dropFile}>
                <label htmlFor="check" className={classes.inputLabel}>صورة توضيحية</label>
                <input
                    id="check"
                    {...getInputProps()}

                />
                <p>
                    <i className={`ri-image-add-fill ${classes.icon}`}></i>
                    <span>
                        {label}
                    </span>
                </p>
            </div>
            <div className={classes.preview}>
                {
                    files.length >0 ?
                    files.map(file => (
                        <div>
                            <img src={file.preview} alt="" />
                            <span>{file.name}</span>
                        </div>

                    )):defaultValue &&(
                        <div>
                            <img src={defaultValue} alt="" />
                        </div>
                    )
                }
                        
            </div>
            {/* <input
                name={name}
                type="text"
                value={value}
                hidden

            /> */}
        </section>
    )
}

export default FileUploader;