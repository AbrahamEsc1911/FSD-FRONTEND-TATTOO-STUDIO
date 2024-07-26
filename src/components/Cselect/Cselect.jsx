import React from 'react'

export const Cselect = ({ category, options, emitFunction }) => {
    return (
        <>
            <select defaultValue="" onChange={emitFunction}>
                <option disabled hidden value="">
                    {category}
                </option>
                {options.map((option) => {
                    return <option value={option.id} key={option.id}>{option.serviceName}</option>
                })}
            </select>
        </>
    )
}
