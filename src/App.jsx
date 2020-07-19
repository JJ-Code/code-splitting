import React, { useState } from 'react';
import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
import AsyncComponent from "./components/AsyncComponent";
import './App.css';


const App = () => {
  const initialState = {
    route: 'page1',
    PageComponent: null
  }

  const [pageId, setPageId] = useState(initialState)
  const { route, PageComponent } = pageId;


  const onRouteChange = (route) => {
    //no code splitting
    setPageId({ route: route })
    console.log(route);

    //code splitting
    // if (route === 'page1') {
    //   setPageId({ route: route })
    // } else if (route === 'page2') {
    //   import('./components/Page2').then((Page2) => {
    //     setPageId({ route: route, PageComponent: Page2.default  })
    //   })
    // } else if (route === 'page3') {
    //   import('./components/Page3').then((Page3) => {
    //     setPageId({ route: route, PageComponent: Page3.default })
    //   })
    // }


  }

  //no code splitting 
  if (route === 'page1') {
    return <Page1 onRouteChange={onRouteChange} />
  } else if (route === 'page2') {
    const AsyncPage2 = AsyncComponent(() => import('./components/Page2'))
    return <AsyncPage2 onRouteChange={onRouteChange} />
  } else if (route === 'page3') {
    const AsyncPage3 = AsyncComponent(() => import('./components/Page3'))
    return <AsyncPage3 onRouteChange={onRouteChange} />

  }

  //code spitting 
  // if (route === 'page1') {
  //   return <Page1 onRouteChange={onRouteChange} />
  // } else {
  //   return <PageComponent onRouteChange={onRouteChange} />
  // }

}




export default App;
