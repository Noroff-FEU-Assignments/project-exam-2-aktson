import * as yup from "yup";

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const avatarValidation = yup.object().shape({
    avatar: yup.mixed()
        .required("You need to provide a file")
        .test("FILE_SIZE", "Uploaded file is too big.",
            value => !value || (value[0].size && value[0].size <= 2000000))
        .test("FILE_FORMAT", "Uploaded file has unsupported format.",
            value => !value || (value && SUPPORTED_FORMATS.includes(value[0].type))),

})

export const bannerValidation = yup.object().shape({

    banner: yup.mixed()
        .required("You need to provide a file")
        .test("FILE_SIZE", "Uploaded file is too big.",
            value => !value || (value[0].size && value[0].size <= 2000000))
        .test("FILE_FORMAT", "Uploaded file has unsupported format.",
            value => !value || (value && SUPPORTED_FORMATS.includes(value[0].type))),
})