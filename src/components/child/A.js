'use client'

import { useState } from "react";
import CodeEditor from "../CodeEditor";

export default function A({langs}) {
    //2.1 Hooks area
    const [code, setCode] = useState('');

    

    //2.2 Functiond defination area
    const handleCodeChange = (value) => {
      setCode(value);
    };
    let handleSubmit = (e)=>{
      e.preventDefault();
      
      let lang = document.querySelector('.a_language').value;
      let ver = document.querySelector('.a_version').value;



      //var code = document.querySelector('code[data-language]').innerHTML;
      
      //code = code.replace(/<div>/g, '\n<div>');
      // Remove HTML tags
     // code = code.replace(/<[^>]+>/g, '');

      // Add line breaks after <div> tags
      //code = code.replace(/<div>/g, '\n<div>');
     // code = code.replace(/print\(/g, 'print(\n');

      if(lang ===''  || ver === '' || code === ''){
        alert('need validation');
      }else{
        let output = document.querySelector('.a_output');
          output.innerHTML = `<div class="position-absolute top-0 start-0 d-flex justify-content-center align-items-center h-100 w-100">
                                  <div class="loader text-success spinner-border" role="status">
                                      <span class="visually-hidden">Loading...</span>
                                  </div>
                                </div>`;

          const formData = new FormData();

          formData.append('lng',lang);
          formData.append('ver',ver);
          formData.append('code',code);
          //alert('JIJIJI');
          fetch('/api/executeCode2', {
            method: 'POST',
            body: formData
          })
          .then(response => {
            return response.text();
          })
          .then(data => {
              output.innerHTML = data;
              
          })
          .catch(error => {
            console.error(error);
          });  
      }
    }
    //2.3 return area
    return (
        <>
          <div className="row m-0">
              <div className="col-12 col-sm-6">
                <form id="myform">
                  <div className="row m-0 mb-2">
                    <div className="col-12 col-sm-4 p-0 mb-2 me-2">
                      <select className="form-select shadow-sm w-100 a_language" aria-label="Default select example">
                          <option value="">Select Langauage</option>
                          {
                            langs.map((cv,idx,arr)=>{
                              return <option value={cv.language_name} key={idx}>{cv.language_name.charAt(0).toUpperCase() + cv.language_name.slice(1)}</option>
                            })
                          }
                      </select>
                    </div>
                    <div className="col-12 col-sm-4 p-0 mb-2 me-2">
                      <select className="form-select shadow-sm w-100 a_version" aria-label="Default select example">
                          <option value="">Select Version</option>
                          <option value={1}>2</option>
                          <option defaultValue value={2}>3</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-2 p-0 mb-2">
                      <button  className="btn btn-success shadow-sm" onClick={handleSubmit}>
                          Run <i className="fa-solid fa-chevron-right" />
                      </button>
                    </div>
                  </div>
                  <div className="row m-0">
                    <div className="col-12 bg-white col-lg-12 a_c1 shadow-sm ps-0 pe-1 a_h600 python">
                       <CodeEditor value={code} onChange={handleCodeChange} />   
                    </div>
                  </div>
                </form>     
              </div>
              <div className="col-12 col-sm-6">
                <div className="row m-0 mb-2">
                  <div className="col-12 col-sm-2 p-0 mb-2 me-2">
                    &nbsp;
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-12 col-lg-12 position-relative  pe-0 ps-1 a_h600">
                      <div className="mt-3 shadow-sm bg-black text-white h-100 p-2 a_consola a_output">                 
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </>
    )
}
