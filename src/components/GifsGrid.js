import { useFecthHook } from "../hooks/useFecthHook";
import { GridItem } from "./GridItem";
import '../index.css';


export const GifsGrid = ({ categories }) => {
  
  
   const {data:gifs, loading} = useFecthHook(categories)
  
  
  return (
    <>

    {loading && <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>}
      {gifs.map((img) => {
        return (
        
            <GridItem 
            {...img}
            key={img.id}

            />
        
          
        );
      })}
    </>
  );
};
