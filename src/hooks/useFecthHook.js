import { useEffect , useState} from "react";
import { getGifs } from "../helpers/getGifs";


export const useFecthHook = (categories) => {
        const [state, setState] = useState({
            data: [],
            loading: true
        }) 
        useEffect(() => {
            getGifs( categories )
            .then( imgs => {
                setTimeout(() => {

                    setState({
                        data: imgs,
                        loading: false
                    })
    
                    
                }, 3500);
            })
            
          }, [categories]);

        return state;


}
