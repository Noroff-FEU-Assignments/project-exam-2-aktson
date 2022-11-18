import * as yup from "yup";
import { nameRegex, emailRegex } from "./regex";

export const signUpSchema = yup.object().shape({

    name: yup.string().required("Please enter username").matches(nameRegex, "Must not contain symbols except underscore '_'"),
    email: yup.string().required("Please enter email").email("Please enter valid email").matches(emailRegex, "Must end with (stud.noroff.no) or (noroff.no)"),
    password: yup.string().required("Please enter password").min(8, "must be at least 8 characters"),
    confirmPassword: yup.string().required('Please retype your password.').oneOf([yup.ref('password')], 'Your passwords do not match.'),

})

// avatar: yup.string().when((value) => {
//     if (value?.length > 0) {  //if address exist then apply min max else not
//         return yup.string().matches(urlRegex, 'Please enter valid image URL')
//     } else {
//         return yup.mixed().notRequired();
//     }
// }),
// banner: yup.string().when((value) => {
//     if (value?.length > 0) {  //if address exist then apply min max else not
//         return yup.string().matches(urlRegex, 'Please enter valid image URL')
//     } else {
//         return yup.string().notRequired();
//     }
// }),