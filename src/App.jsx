import * as React from 'react';

import { QueryClient,QueryClientProvider } from 'react-query';
import QuestionPaperGen from './components/QuestionPaper';

const queryClient = new QueryClient();
function App() {

  return (
    <>



    <main className=''>

     <QuestionPaperGen/>

    </main>
    
      
    </>
  )
}

export default App
