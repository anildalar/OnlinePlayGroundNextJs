//1. Import area

import { Suspense } from "react";
import Loading from "./loading";



export const getServerSideProps = async () => {
  
  return {
    props: {
      langs: ['python','java']
    }
  }
}

//2. Defination area RFC/RCC
function Home({ langs }) {
    //2.1 Hooks area
    //const [language, setLanguage] = useState(langs)

    //2.3 functions defination
    console.log(langs);
    //2.3 return statement
    return (
      <>
        <div className="container-fluid p-4 pt-3">
          <h1 className="text-center mb-4">Online Code Playground</h1>
          <div className="row m-0 mb-2">
            <div className="col-12 col-sm-2 p-0 mb-2 me-2">
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
            <div className="col-12 col-sm-2 p-0 mb-2 me-2">
              <select className="form-select shadow-sm w-100" aria-label="Default select example">
                <option>Select Version</option>
                <option value={1}>2</option>
                <option defaultValue value={2}>3</option>
              </select>
            </div>
            <div className="col-12 col-sm-2 p-0 mb-2">
              <button className="btn btn-success shadow-sm">
                Run <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-12 bg-white col-lg-6 a_c1 shadow-sm ps-0 pe-1 a_h600 python">
              <pre className="p-2 h-100 mb-0 bg-white shadow-none" contentEditable="true" suppressContentEditableWarning={true}><code data-language="python" className="h-100 shadow-none">def openFile(path):{"\n"}{"  "}file = open(path, "r"){"\n"}{"  "}content = file.read(){"\n"}{"  "}file.close(){"\n"}{"  "}return content{"\n"}{"              "}</code>{"\n"}{"              "}</pre>
            </div>
            <div className="col-12 col-lg-6 position-relative  pe-0 ps-1 a_h600">
                <div className="shadow-sm bg-black text-white h-100 p-2 a_consola">
                  <Suspense fallback={<Loading />}>
                    Hello, World!
                  </Suspense>
                </div>
            </div>
          </div>
        </div>
      </>
    )
}

/* export async function getServerSideProps() {
  // Fetch data from an external API or perform any other server-side tasks
  const response = await fetch('/api/getAllLanguages');
  const data = await response.json();

  // Pass the data as props to the page component
  return {
    props: {
      data,
    },
  };
} */
//3 Export area
export default Home;
