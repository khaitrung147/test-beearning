import React, { useEffect, useState } from 'react'
import style from './index.module.scss';
import BackIcon from '../../assets/icons/back.svg';
import CopyIcon from '../../assets/icons/copy.svg';
import { chunkArray, unique} from '../../constants/const';
import json from '../bai2/data.json'

function Bai3() {
    const [data24, setData24] = useState([]);
    const [data18, setData18] = useState([]);
    const [data6, setData6] = useState([]);

    useEffect(()=>{
        const mang24 = unique(json.data, 24);
        setData24(mang24);
    }, [])
      
    useEffect(()=>{
        const mang18 = unique(data24, 18);
        setData18(mang18);
    }, [data24])

    useEffect(()=>{
        const mang6 = chunkArray(data18, 3, data24);
        setData6(mang6);
    }, [data18, data24])

    return ( 
        <div className={style.bai3}>
            <div className={style.navigator}>
                <div className={style.icon}>
                    <img src={BackIcon} alt="" />
                </div>
                <div className={style.title}>
                    Create New Wallet
                </div>
            </div>
            <div className={style.body}>
                <div className={style.title}>
                    Auto Gen Seed Phrase?
                </div>
                <div className={style.word}>
                    {
                        data24.map((item, index) => 
                        <div className={style.item}>
                            <div className={style.index}>{index}</div>
                            <div className={style.value}>{item}</div>
                        </div>    )
                    }
                </div>
                <div className={style.copy}>
                    <div className={style.description}>
                        Tap to Copy or Carefully write down your seed phrase and store it in a safe place
                    </div>
                    <div className={style.icon}>
                        <img src={CopyIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.description}>
                    <div className={style.title}>
                        How does this work?
                    </div>
                    <div className={style.icon}>
                        <img src={BackIcon} alt="" />
                    </div>
                </div>
                <button className={style.submit}>
                    next    
                </button>
            </div>
        </div>
     );
}

export default Bai3;