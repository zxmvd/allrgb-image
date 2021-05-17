import {useEffect} from 'react'
import { renderAllRgbImg } from '../services/renderAllRgbImg'

const AllRgbImage = ()=>{

    // render image once component loaded
    useEffect(()=>{
        renderAllRgbImg()
    },[])

    return (
        <canvas id="all_color_img"></canvas>
    )
}

export default AllRgbImage