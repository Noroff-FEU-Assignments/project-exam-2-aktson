import * as yup from "yup";
import { urlRegex } from "./regex";

export const editProfileSchema = yup.object().shape({
    avatar: yup.string().when((value) => {
        if (value?.length > 0) {  //if address exist then apply min max else not
            return yup.string().matches(urlRegex, 'Please enter valid image URL')
        } else {
            return yup.mixed().notRequired();
        }
    }),
    banner: yup.string().when((value) => {
        if (value?.length > 0) {  //if address exist then apply min max else not
            return yup.string().matches(urlRegex, 'Please enter valid image URL')
        } else {
            return yup.string().notRequired();
        }
    }),
})