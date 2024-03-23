import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import axiosHeaderForFiles from '../../helpers/axiosHeaderForFiles';
import axiosHeaders from '../../helpers/axiosHeader';
import PageTitle from '../../helpers/pageTitle';

/**
 * Form to add new products
 */
const AddNewProduct = ( { setSiteType } ) => {

    const [mainImage, setMainImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [isOnSale, setIsOnSale] = useState(false);
    const [youtubeVideo, setYoutubeVideo] = useState('');
    const [category, setCategory] = useState([]);
    const [checkedCategories, setCheckedCategories] = useState([]);
    const [formLoading, setFormLoading] = useState(false);

    /**
     * Get and set categories linked
     */
    const [{ data, loading }] = useAxios(
        origin + '/wp-json/wp/v2/categories_linked'
    );
    useEffect(() => {
        !loading && setCategory(data);
    }, [data]);

    /**
     * Check checkbox changes for categories
     */
    const handleCheckboxChange = event => {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedCategories(prevState => [...prevState, parseInt(value)]);
        } else {
            setCheckedCategories(prevState => prevState.filter(item => item !== parseInt(value)));
        }
    };

    /**
     * Create product with form
     */
    const postForm = (response) => {
        const productData = {
            title: title,
            content: description,
            status: 'publish',
            featured_media: mainImage ? response.data.id : 0,
            meta: {
                price: price,
                sale_price: salePrice,
                is_on_sale: isOnSale,
                youtube_video: youtubeVideo,
            },
            categories_linked: checkedCategories
        };
        axios.post( origin + '/wp-json/wp/v2/product', productData, axiosHeaders).then(({data})=> {setSiteType( "products" )});
        setFormLoading(true);
    }
    const submitForm = async(e) => {
        e.preventDefault();
        setFormLoading(true);
        if(mainImage){
            const formData = new FormData();
            formData.append('file', mainImage);
            try {
                const response = await axios.post( origin + '/wp-json/wp/v2/media', formData, axiosHeaderForFiles);
                if (response.status === 201) {
                    postForm(response);
                } else {
                    setFormLoading(false);
                }
            } catch (error) {
                setFormLoading(false);
            }
        }else{
            postForm();
        }
    }

    return(
        <div className="add-product">
            <PageTitle title={"Add product"} />
            <button className="btn btn-secondary" onClick={ () => setSiteType( "products" ) }>Back</button>
            <form onSubmit={(e) => submitForm(e)}>
                <div className="form-group mt-4 mb-3">
                    <label for="featured_image">Select a file:</label>
                    <input type="file" id="featured_image" className="form-control-file" name="featured_image" onChange={(e) => setMainImage(e.target.files[0])} accept="image/png, image/jpeg"></input>
                </div>
                <div className="form-group"><label><div>Title: </div><input className="form-control" type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} required/></label></div>
                <div className="form-group"><label><div>Description: </div><textarea className="form-control" placeholder="" onChange={(e) => {setDescription(e.target.value)}} value={description} required>{description}</textarea></label></div>
                <div className="form-group"><label><div>Price: </div><input className="form-control" type="number" value={price} onChange={(e) => {setPrice(e.target.value)}} required/></label></div>
                <div className="form-group"><label><div>Sale price: </div><input className="form-control" type="number" value={salePrice} onChange={(e) => {setSalePrice(e.target.value)}} /></label></div>
                <div className="form-group"><label><div>Is on sale </div><input className="form-control" type="checkbox" value={isOnSale} onChange={(e) => {setIsOnSale(e.target.checked)}}/></label></div>
                <div className="form-group"><label><div>Youtube video: </div><input className="form-control" type="text" value={youtubeVideo} onChange={(e) => {setYoutubeVideo(e.target.value)}} /></label></div>
                <div className="form-group">
                <label>
                    <div>
                        Category: 
                    </div>
                    <div>
                    {category.map((singleCateogry) => {
                        return <div><label><input className="form-control" type="checkbox" name="categories_linked" value={singleCateogry.id} onChange={handleCheckboxChange}/> {singleCateogry.name}</label></div>
                    })}
                    </div>
                    </label>
                </div>
                <input type="submit" value="Submit" disabled={formLoading} className="btn btn-success"/> <span>{formLoading && "Work in progress..."}</span>
            </form>
        </div>
    )
}

export default AddNewProduct;
