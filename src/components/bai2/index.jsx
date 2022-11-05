import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import json from './data.json'
import { chunkArray, unique} from '../../constants/const';

function Bai2() {
    const [data24, setData24] = useState([]);
    const [data18, setData18] = useState([]);
    const [data6, setData6] = useState([]);

    useEffect(()=>{
        const mang24 = unique(json.data, 24);
        setData24(mang24);
        console.log('mang24 :>> ', mang24);
    }, [])
      
    useEffect(()=>{
        const mang18 = unique(data24, 18);
        setData18(mang18);
        console.log('mang18 :>> ', mang18);
    }, [data24])

    useEffect(()=>{
        const mang6 = chunkArray(data18, 3, data24);
        setData6(mang6);
        console.log('mang6 :>> ', mang6);
    }, [data18, data24])

    return ( 
        <div className={style.bai2}>
            <h1>Tạo 1 danh sách phần tử không trùng lặp</h1>

            <div className="list">
                <h4>Danh sách 24:</h4>
                <ul>
                    {data24.map(item => <li>{item}</li>)}
                </ul>
            </div>

            <div className="list">
                <h4>Danh sách 18:</h4>
                <ul>
                    {data18.map(item => <li>{item}</li>)}
                </ul>
            </div>

            <div className="list">
                <h4>Danh sách 6:</h4>
                <ul>
                    {data6.map(item => <li>
                        Values: {item.values} <br />
                        Primary_index: {item.primary_index}
                    </li>)}
                </ul>
            </div>
        </div>
     );
}

export default Bai2;