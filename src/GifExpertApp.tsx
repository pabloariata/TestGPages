import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory: string) => {

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);

    }

    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
            onNewCategory = { (event: any) =>  onAddCategory(event)}
             />

                {categories.map((category: any) => (
                     <GifGrid key={category} category={category}/> 
                      ))

                }
        </>
    )
}