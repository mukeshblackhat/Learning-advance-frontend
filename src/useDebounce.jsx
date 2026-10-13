import { useRef,useEffect } from "react";

// Like useEffect, but waits `delay` ms after `deps` stop changing before calling `callback`
const useDebounce=(callback,delay,deps)=>{

  const callBackRef=useRef(callback);
  callBackRef.current =callback;

    useEffect(()=>{

        const abortCallback=new AbortController();
        const timer = setTimeout(()=>{
            callBackRef.current(abortCallback.signal);
        },delay);

        return ()=>{
            abortCallback.abort();
            clearTimeout(timer);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[...deps,delay]);
}
export default useDebounce;
