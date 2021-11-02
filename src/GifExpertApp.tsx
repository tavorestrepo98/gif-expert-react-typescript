import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories: string[] = ;
    const [categories, setCategories] = useState<string[]>([]);


    // const handleAdd = () => {
    //     setCategories((cats: string[]) => [...cats, 'HunterXHunter']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ul>
                {
                    categories.map((cat: string, i: number) => (
                        <GifGrid key={i} category={cat} />
                    ))
                }
            </ul>
        </>
    );
};
