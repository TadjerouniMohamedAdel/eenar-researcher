import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import classes from './FileUploader.module.css'
import Compressor from 'compressorjs'

const FileUploader: React.FC<{ label: string, name: string, updateValue: (name: string, value: File|string) => {} ,defaultValue?:string,isBase64?:boolean}> = ({ label, name, updateValue,defaultValue=undefined,isBase64=false }) => {
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
            if(isBase64){
                new Compressor(acceptedFiles[0], {
                    quality: 0.8,
                    width: 1000,
                    convertSize: 50000,
                    success(result) {
                        const reader = new FileReader()
                        reader.readAsDataURL(result)
                        reader.onloadend = function () {
                            const base64data = reader.result
                            updateValue(name,`${base64data}`)
                        }
                    },
                    error(err) {
                        console.log(err.message)
                    }
                })
            }
            else updateValue(name, acceptedFiles[0])
                    
            
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
            
        </section>
    )
}

export default FileUploader;