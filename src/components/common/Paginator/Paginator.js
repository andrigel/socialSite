import React, {useState} from "react";
import cn from 'classnames'
import s from './Paginator.module.css'

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, step = 4, bigStep = 10}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const getLeftPageNumber = (someStep) => {
        if (currentPage - someStep <= 0) return 1;
        return currentPage - someStep;
    }

    const getRightPageNumber = (someStep) => {
        if (currentPage + someStep > pagesCount) return pagesCount;
        return currentPage + someStep;
    }

    const leftPageNumber = getLeftPageNumber(step);
    const rightPageNumber = getRightPageNumber(step);
    const leftPageNumberToButton = getLeftPageNumber(bigStep);
    const rightPageNumberToButton = getRightPageNumber(bigStep);

    return <div>
        <button onClick={(e) => {onPageChanged(leftPageNumberToButton)}}>Prew</button>
        {pages.filter(p => p >= leftPageNumber && p <= rightPageNumber)
            .map(p => <span className={ cn({
                [s.currentPage]: currentPage === p
            }, s.page
            )} key={p} onClick={(e) => {onPageChanged(p)
            }}>{p}</span>)}
        <button onClick={(e) => {onPageChanged(rightPageNumberToButton)}}>Next</button>
    </div>
}
export default Paginator;