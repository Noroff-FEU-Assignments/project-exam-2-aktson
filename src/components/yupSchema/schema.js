import * as yup from "yup"

export const signInSchema = yup.object().shape({
    email: yup.string().required("Must be one of valid stud.noroff.no or noroff.no email address").email("Please enter valid email address"),
    password: yup.string().required("Please enter password").min(8, "must be at least 8 characters")
})



const urlRegex = /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;


export const signUpSchema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    email: yup.string().required("Must be one of valid stud.noroff.no or noroff.no email address").email("Please enter valid email address"),
    password: yup.string().required("Please enter password").min(8, "must be at least 8 characters"),
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