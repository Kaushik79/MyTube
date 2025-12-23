  import React from 'react';
  import Thumbnail from './components/Thumbnail';
  import SearchNNavBar from './entities/SearchNNavBar';
  const App = () => {
    return (
      <>
        <div className='flex justify-center m-3'>
          <SearchNNavBar/>
        </div>
        <div className='max-w-7xl mx-auto px-3'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
            <Thumbnail/>
          </div>
        </div>
      </>
    );
  };

  export default App;