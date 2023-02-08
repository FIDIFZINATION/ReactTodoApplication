import React from 'react'

export const CardItem = ({menuData}) => {
    
    return (
        <>
            {menuData.map((menuItem) => {
                return <div key={menuItem.id} className="card text-white bg-primary mb-3 col-lg-4 mx-5 my-5" style={{ 'maxWidth': '18em' }}>
                    <div className="card-header"><strong>{menuItem.id}</strong></div>
                    <div className="card-body">
                        <h5 className="card-title">{menuItem.name}</h5>
                        <p className="card-text">{menuItem.description}</p>
                    </div>
                </div>
                
            })}

        </>
    )
}
