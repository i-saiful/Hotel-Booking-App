import { useState } from "react"

const CategoryList = ({ handleFilter }) => {
    const [categories, setCategories] = useState([
        ['All', true],
        ['Single', false],
        ['Double', false],
        ['Twin', false],
        ['Quadruple', false]
    ])

    const handleActive = index => {
        const list = categories.map((item, i) =>
            i === index ? [item[0], true] : [item[0], false]
        )
        setCategories(list)
    }

    const categoryList = categories.map((item, index) => {
        return (
            <div key={item} className={item[1] ?
                'btn border mx-2 btn-primary' : 'btn border mx-2'}
                onClick={() => { handleActive(index); handleFilter(item[0])}}>
                {item[0]}
            </div>
        )
    }
    )

    return (
        <div className="d-flex align-items-center justify-content-center mt-3
        overflow-scroll scrollbar-hidden">
            {categoryList}
        </div>
    )
}

export default CategoryList