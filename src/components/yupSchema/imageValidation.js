import * as yup from "yup";

export const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];


export const imageValidation = yup.object().shape({

    image: yup.mixed()
        .test("FILE_SIZE", "Uploaded file is too big.",
            value => !value.length || (value[0].size && value[0].size <= 2000000))
        .test("FILE_FORMAT", "Uploaded file has unsupported format.",
            value => !value.length || (value && SUPPORTED_FORMATS.includes(value[0].type)))
})