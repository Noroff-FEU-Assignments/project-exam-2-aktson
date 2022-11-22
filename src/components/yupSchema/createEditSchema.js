import * as yup from "yup";

import { SUPPORTED_FORMATS } from "./imageValidation";

export const createEditSchema = yup.object().shape({

    title: yup.string().required("Please enter title").min(4, "Must be minimum 4 characters"),
    tags: yup.string().when((value) => {
        if (value?.length > 0) {  //if value exist then apply min max else not
            return yup.string().min(8, 'Description must be atleast 15 characters long')
        } else {
            return yup.mixed().notRequired();
        }
    }),
    image: yup.mixed()
        .test("FILE_SIZE", "Uploaded file is too big.",
            value => !value.length || (value[0].size && value[0].size <= 2000000))
        .test("FILE_FORMAT", "Uploaded file has unsupported format.",
            value => !value.length || (value && SUPPORTED_FORMATS.includes(value[0].type)))

})