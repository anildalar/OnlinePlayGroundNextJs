'use client'

import { useState } from "react";

export default function A() {
    //const [output,setOutput] = useState('Hello, World!');

    let handleSubmit = (e)=>{
      e.preventDefault();
      let output = document.querySelector('.a_output');
      output.innerHTML = `<div class="position-absolute top-0 start-0 d-flex justify-content-center align-items-center h-100 w-100">
                              <div class="loader text-success spinner-border" role="status">
                                  <span class="visually-hidden">Loading...</span>
                              </div>
                            </div>
                          `;
      /*
      
      */

      const formData = new FormData();
      formData.append('lng','py');
      formData.append('ver','3');
      formData.append('code','print(“hello world !”)');
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
  return (
      <>
        <div class="row m-0">
            <div class="col-12 col-sm-6">
              <form id="myform">
                <div className="row m-0 mb-2">
                  <div className="col-12 col-sm-4 p-0 mb-2 me-2">
                    <select className="form-select shadow-sm w-100" aria-label="Default select example">
                        <option>Select Langauage</option>

                        <option defaultValue value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="php">PHP</option>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="csharp">C#</option>
                        <option value="r">R</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-4 p-0 mb-2 me-2">
                    <select className="form-select shadow-sm w-100" aria-label="Default select example">
                        <option>Select Version</option>
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
                <div class="row m-0">
                  <div className="col-12 bg-white col-lg-12 a_c1 shadow-sm ps-0 pe-1 a_h600 python">
                    <pre className="p-2 h-100 mb-0 bg-white shadow-none" contentEditable="true" suppressContentEditableWarning={true}><code data-language="python" className="h-100 shadow-none">def openFile(path):{"\n"}{"  "}file = open(path, "r"){"\n"}{"  "}content = file.read(){"\n"}{"  "}file.close(){"\n"}{"  "}return content{"\n"}{"              "}</code>{"\n"}{"              "}</pre>
                  </div>
                </div>
              </form>     
            </div>
            <div class="col-12 col-sm-6">
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
