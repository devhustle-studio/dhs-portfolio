import React from 'react'

export default function ProjectShow() {
    return (
        <>
            <div className="grid md:grid-cols-3 grid-cols-2 items-center  md:px-20 py-2">
              {[1,2,3,4,5,6].map((item, index) => (<ProjectCard key={index} />))}
            </div>
        </>
    )
}

const ProjectCard = () => {
    return (<div className="box h-56 w-full even:bg-myorange bg-white"></div>)
}