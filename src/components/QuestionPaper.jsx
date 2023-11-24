import * as React from 'react';
import { useQuery } from "react-query";


const QuestionPaperData = async()=>{
    const res = await fetch('http://localhost:3000/generateQuestionPaper',{

    });
    return res.json();


}

const QuestionPaperGen = () => {
    
     const {data,status} = useQuery(['QuestionData'],QuestionPaperData);
     console.log(data);
       

     


    return (
        <>
        <section className=''>
            <h1 className='text-center text-[2rem] text-white'>Question Paper Generator</h1>
       <h2 className='text-center text-[2rem] text-white'>Total Questions in DB:<span>37</span></h2>
        {status==='success' && (<>
             
            {data.map((res)=>(
                <div className=''>
                   <div className=" mt-10 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
       
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
           <span className='text-blue-700'>Subject:</span> {res.subject}
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">
            {res.question}
          </p>
          <p className="mt-2 text-gray-500">
            Topic: {res.topic} | Difficulty: {res.difficulty} | Marks: {res.marks}
          </p>
        </div>
      </div>
    </div>
                </div>
            ))}
         
        
           

       
        </>)}
        
        </section>
        </>
    )
}

export default QuestionPaperGen;





