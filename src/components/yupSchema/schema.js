import * as yup from "yup"


// regular expresion check for schema validation
const urlRegex = /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;
const usernameRegex = /^([a-z0-9]|[_](?![_])){4,14}$/
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9_.]+@+(\bnoroff|\bstud.noroff).+n+o$/

export const signInSchema = yup.object().shape({
    email: yup.string().required("Please enter email").email("Please enter valid email").matches(emailRegex, "Must end with (stud.noroff.no) or (noroff.no)"),
    password: yup.string().required("Please enter password").min(8, "must be at least 8 characters")
})


export const signUpSchema = yup.object().shape({

    username: yup.string().required("Please enter username").matches(usernameRegex, "Must not contain symbols except underscore '_'"),
    email: yup.string().required("Please enter email").email("Please enter valid email").matches(emailRegex, "Must end with (stud.noroff.no) or (noroff.no)"),
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