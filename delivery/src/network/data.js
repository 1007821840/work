import {request} from './request'
export function getSYMultidata(){
    return request({
        url:'/api/data.json'
    })
}
