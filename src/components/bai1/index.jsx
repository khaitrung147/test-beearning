import React, { useEffect } from 'react';
import style from './index.module.scss';

function Bai1() {
    const a = [0,10,1,99,9,8,79,91,22,32,12];
    const b = [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90];
    const c = [1, 10, 19, 11, 13, 16, 19];

    const getMaxInt = (arr) => {
        
       return arr.sort((a, b)=>{
            let var_a= a.toString().split('');
            let var_b= b.toString().split('');

           if(parseInt(var_b[0]) > parseInt(var_a[0])){
               return 1
           } 
           
           if(parseInt(var_b[0]) < parseInt(var_a[0])) {
               return -1
           }

           if(parseInt(var_b[0]) === parseInt(var_a[0])) {
               if(!var_b[1]) var_b[1] = '1';
               if(!var_a[1]) var_a[1] = '1';

                if(parseInt(var_b[1]) > parseInt(var_a[1])){
                    return 1
                } 
                
                if(parseInt(var_b[1]) < parseInt(var_a[1])) {
                    return -1
                }

                if(parseInt(var_b[1]) === parseInt(var_a[1])){
                    return 0
                }
           }
       }).join('');

    }

    return ( 
        <div className={style.bai1}>
            <h1>Viết hàm sắp xếp</h1>
            
            <h4>Result: </h4>
            {`${a} => ${getMaxInt(a)}`} <br />
            {`${b} => ${getMaxInt(b)}`} <br />
            {`${c} => ${getMaxInt(c)}`} 
        </div>
     );
}

export default Bai1;