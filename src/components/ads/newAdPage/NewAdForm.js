import FormField from "../../shared/FormField"
import React from 'react';

const NewAdForm = ({ tags }) => {
    const [details, setCredentials] = React.useState({
        item: '',
        price: '',
    });

    //El event lo recibe del onChange ("mezcla" del onchange y del oninput del form html)
    const handleChange = event => {
        setCredentials(oldDetails => {
            const newDetails = {
                ...oldDetails,
                [event.target.name]: event.target.value,
            };
            return newDetails;
        });
    };

    const { item, price } = details;
    return (
        <form className="has-text-left">
            <FormField
                className="input"
                labelClassName="label"
                type="text"
                name="item"
                label="¿Qué vas a vender?"

                onChange={handleChange}
                value={item}
            >
            </FormField>
            <FormField
                className="input"
                labelClassName="label"
                type="text"
                name="price"
                label="Ponle un precio"
                onChange={handleChange}
                value={price}
            >
            </FormField>
            <p className="label">¿Compras o vendes?</p>
            <FormField
                type="radio"
                name="question"
                label="Vender"
                onChange={handleChange}
                value="SI"
            >
            </FormField>
            <FormField
                type="radio"
                name="question"
                label="Comprar"
                onChange={handleChange}
                value="SI"
            >
            </FormField>
            <p className="label">Selecciona al menos una etiqueta</p>
            {tags.map(tag => (
                <FormField
                    labelClassName="checkbox"
                    type="checkbox"
                    //name="question"
                    label={`${tag} `}
                    name="questison"
                    onChange={handleChange}
                    value="SI"
                >
                </FormField>
            ))}

        </form>
    )
}

export default NewAdForm