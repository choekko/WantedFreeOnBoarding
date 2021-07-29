import './style.css';
import getComments from '../../apis/getComments';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Card from '../Card';
import { useState, useRef, useCallback } from 'react';


function App() {

    const [commentData, setCommentData] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);

    const observerTarget = useRef();

    const _onIntersect = useCallback(async() => {
        let resData;
        resData = await getComments(pageIndex, 10);
        if (resData.length) {
            setCommentData(preState => [...preState, ...resData]);
            setPageIndex((preState) => preState + 1);
        }
    }, [pageIndex]);
    
    
    const [target, setTarget] = useIntersectionObserver({
        onIntersect: _onIntersect,
        targetElement: observerTarget, 
        options: {rootMargin: '500px'},
        changeDetection: pageIndex,
    })  // 지금은 target, setTarget이 쓸일이 없지만 확장성을 위해 선언만 하고 남겨두었습니다.  

    return (
        <div className="App">
        <main className="comments">
            {commentData.map((e) => {
                return (
                    <Card
                    key={e.id}
                    commentId={e.id}
                    commentEmail={e.email}
                    commentBody={e.body}
                    />
                )
            })}
            <footer ref={observerTarget}/>
        </main>
        </div>
    );
}

export default App;
