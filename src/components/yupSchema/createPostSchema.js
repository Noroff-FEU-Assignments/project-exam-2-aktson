import * as yup from "yup";
import { urlRegex } from "./regex";

export const createPostSchema = yup.object().shape({

    title: yup.string().required("Please enter title").min(4, "Must be minimum 4 characters"),
    tags: yup.string().when((value) => {
        if (value?.length > 0) {  //if value exist then apply min max else not
            return yup.string().min(8, 'Description must be atleast 15 characters long')
        } else {
            return yup.mixed().notRequired();
        }
    }),
    media: yup.string().when((value) => {
        if (value?.length > 0) {  //if value exist then apply min max else not
            return yup.string().matches(urlRegex, 'Please enter valid image URL')
        } else {
            return yup.mixed().notRequired();
        }
    }),
})