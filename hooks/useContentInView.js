'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useActiveContext } from '@/context/sectionSelectionContext';
import { useEffect } from 'react';

const useContentInView = (sectionName,threshold=0.75) => {
    const{ref,inView }=useInView({threshold});
   
    const { setActiveSection, lastClick, isMobile } = useActiveContext();
  
    useEffect(() => {
      console.log("lastClick and sectionName--->",  lastClick,sectionName)
      if (inView && Date.now()-lastClick>1000 && !isMobile) {
        setActiveSection(sectionName);
      }
      else if(inView && isMobile){
        setActiveSection(sectionName)
      }
    }, [inView, sectionName, setActiveSection]);

  return (
    {ref, inView}
  )
}

export default useContentInView