import http from 'k6/http';
import { check, sleep } from 'k6';
/*export const options = {
   stages: [
    { duration: '3s', target: 140 },
    { duration: '11s', target: 10 },
   ],
};*/
 /*ENURANCE TEST
export const options = {
   stages: [
    { duration: '2m', target: 140 },
    { duration: '3m', target: 500 },
    { duration: '1m', target: 10 }, 
    ],
};
*/


// STRESS TEST
/*export const options = {
   stages: [
    { duration: '4s', target: 140 },
    { duration: '20s', target: 3100 },
    { duration: '3s', target: 0}
    ],
};*/

/* CAPACITY TEST
export const options = {
   stages: [
{duration: '2s', target: 100 }, // Endurance test
{ duration: '5s', target: 500 }, // Endurance test
{ duration: '5s', target: 800 }, // Endurance test
{ duration: '5s', target: 900 }, // Endurance test
{ duration: '5s', target: 1100 }, // Endurance test
    ],
};
*/


/*// SPIKE TEST
export const options = {
   stages: [
    { duration: '4s', target: 140 },
    { duration: '5s', target: 5500 },
    { duration: '3s', target: 0 }, 
    ],
};
//*/

export default function () {
   const res =  http.get('https://httpbin.test.k6.io/')
   check(res, {'status was 200': (r) => r.status == 200 });
    sleep(1);
}