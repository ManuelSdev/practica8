import Layout from "../../layout/Layout"
import { getTags } from '../../../api/ads'
import React from 'react';
import NewAdForm from "./NewAdForm";


const NewAdPage = () => {
    const [tags, setTags] = React.useState([]);

    React.useEffect(() => {
        getTags().then(setTags);
    }, []);

    console.log(tags)
    return (
        <Layout>
            <NewAdForm tags={tags} />
        </Layout>
    )
}

export default NewAdPage