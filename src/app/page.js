//1. Import area
import A from "@/components/child/A";




//2. Defination area RFC/RCC
async function Home() {
  const res = await fetch('http://localhost:3000/api/getAllLanguages2',{ cache:'no-store'});
  const langs = await res.json();

    //2.3 functions defination
    
    console.log(langs);
    //2.3 return statement
    return (
      <>
        <div className="container-fluid p-4 pt-3">
          <h1 className="text-center mb-4">Online Code Playground</h1>
          <A langs={langs} />
        </div>
      </>
    )
}

//3 Export area
export default Home;
