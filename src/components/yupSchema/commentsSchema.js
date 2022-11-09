import * as yup from "yup";



export const commentsSchema = yup.object().shape({

    comments: yup.string().required("Please enter title").min(4, "Must be minimum 4 characters"),

})