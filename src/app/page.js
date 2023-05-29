//1. Import area

import { Suspense } from "react";
import Loading from "./loading";
import A from "@/components/child/A";



export const getServerSideProps = async () => {
  
  return {
    props: {
      langs: ['python','java']
    }
  }
}

//2. Defination area RFC/RCC
function Home() {
    //2.1 Hooks area
    //const [language, setLanguage] = useState(langs)

    //2.3 functions defination
    
    
    //2.3 return statement
    return (
      <>
        <div className="container-fluid p-4 pt-3">
          <h1 className="text-center mb-4">Online Code Playground</h1>
          <div class="row m-0">
            <div class="col-6">
             <A />
            </div>
            <div class="col-6">
              <div className="row m-0 mb-2">
                <div className="col-12 col-sm-2 p-0 mb-2 me-2">
                  &nbsp;
                </div>
              </div>
              <div className="row m-0">
                <div className="col-12 col-lg-12 position-relative  pe-0 ps-1 a_h600">
                    <div className="mt-3 shadow-sm bg-black text-white h-100 p-2 a_consola">
                      <Suspense fallback={<Loading />}>
                        Hello, World!
                      </Suspense>
                    </div>
                  </div>
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
