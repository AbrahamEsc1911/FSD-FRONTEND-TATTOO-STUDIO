import React from 'react'

export const Cselect = ({ category, options, emitFunction, name }) => {
    return (
        <>
            <select defaultValue="" name={name} onChange={emitFunction}>
                <option disabled hidden value="">{category}</option>
                {options.map((option) => {
                    return <option value={option.id} key={option.id}>{option.name}</option>
                })}
            </select>
        </>
    );
};
