import {Suspense} from "react";
import Preloader from "../components/common/Preloader/Preloader";
import React from "react";

export const withLazyLoading = (Component) => (props) => {
    return <Suspense fallback={<div>Loading...</div>}>
        <Component {...props}/>
    </Suspense>
}