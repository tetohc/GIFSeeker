import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";

export const GifSeekerApp = () => {
    
    const [categories, setCategories] = useState(['One Punch', 'Dragon Quest']);
    
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories,]);
    }

    return (
        <>
            <h1>GIFSeeker</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            <div className="custom-container">
                {categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))}
            </div>
        </>
    )
}