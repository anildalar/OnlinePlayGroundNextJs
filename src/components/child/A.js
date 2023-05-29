'use client'

export default function A() {

    let handleSubmit = (e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append('lng','py');
      formData.append('ver','3');
      formData.append('code','print(“hello world !”)');
        //alert('JIJIJI');
        fetch('/api/executeCode', {
          method: 'POST',
          body: formData
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
          console.error(error);
        });  
    }
  return (
      <>
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
      </>
  )
}
