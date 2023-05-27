'use client'
//1. Import area



//2. Defination area RFC/RCC
function Home({ data }) {
    //2.1 Hooks area

    //2.3 functions defination

    //2.3 return statement
    return (
     <div className="container-fluid p-5 pt-2">
         <p>Data: {console.log(data)}</p>
        <h1 className="text-center mb-3">Online Code Playground</h1>
        <div className="d-flex flex-row mb-2">
          <select className="form-select a_w10 me-2" aria-label="Default select example">
            <option defaultValue>Select Langauage</option>
            {/* {
              langauages.lenght > 0 && langauages.data.map((cv,idx,arr)=>{
                return <option key={idx} value={1}>{cv}</option>
              })
            } */}
            
          </select>
          <select className="form-select a_w10 me-2" aria-label="Default select example">
            <option defaultValue>Select Version</option>
            <option value={1}>2</option>
            <option value={2}>3</option>
          </select>
          <button className="btn btn-success a_w5">Run <i className="fa-solid fa-chevron-right" /> </button>
        </div>
        <div className="row m-0">
          <div className="col-6 ps-0 pe-1  a_h600">
            <div className="shadow-sm bg-white h-100 p-2" contentEditable="true" id="editableContent" suppressContentEditableWarning={true}>1</div>
          </div>
          <div className="col-6 pe-0 ps-1 a_h600 ">
            <div className=" shadow-sm bg-black text-white h-100 p-2 a_consola">
              Hello, World!
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="position-absolute loader text-success spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export async function getServerSideProps() {
  // Fetch data from an external API or perform any other server-side tasks
  const response = await fetch('/api/getAllLanguages');
  const data = await response.json();

  // Pass the data as props to the page component
  return {
    props: {
      data,
    },
  };
}
//3 Export area
export default Home;
