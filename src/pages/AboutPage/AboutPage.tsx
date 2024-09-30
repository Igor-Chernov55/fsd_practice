import {useEffect, useState} from "react";


const AboutPage = () => {
    const items = ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4'];
    const [index, setIndex] = useState(0)
    const [arr, setArr] = useState([])

    useEffect(() => {
       const timer = setTimeout(() => {
            if (index < items.length) {
                // @ts-ignore
                setArr(prev => prev?.length ? [...prev, items[index]] : [items[0]])

                setIndex(prev => prev + 1)
            }


        }, 2000)


        return () => {
            clearTimeout(timer)
        }

    },[items, index])

    return (
        <ul>
            {arr.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};
export default AboutPage;