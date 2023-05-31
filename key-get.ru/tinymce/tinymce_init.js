function MCEInit(element, height = 400) {
    tinymce.init({
        language: 'ru',
        selector: '.mytextarea',
        height: 400,
        autoresize_min_height: 400,
        autoresize_max_height: 800,

        gecko_spellcheck: true,
        plugins: [
            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table directionality",
            "emoticons template paste textpattern media imagetools autoresize"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | forecolor backcolor emoticons | " +
            "alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | " +
            "formatselect fontsizeselect | code media emoticons ",
        image_advtab: true,
        image_title: true,
        automatic_uploads: true,
        file_picker_types: 'image',
        images_reuse_filename: true,
        imagetools_toolbar: 'editimage imageoptions',
        images_upload_url: 'updateProductFunc',

        //обработчик загрузки изображений
        images_upload_handler: function (file, success, fail) {

            let formdata = new FormData

            formdata.append('file', file.blob(), file.filename())

            formdata.append('ajax', 'wyswyg_file')

            formdata.append('table', document.querySelector('input[name="table"]'))

            //alert(formdata)

            $.ajax({
                url: 'updateProductFunc',
                type: 'POST',
                contentType: false,
                processData: false,
                cache: false,
                data: formdata,
                //dataType: 'JSON.stringify(formData)',
                success: function (html) {
                    alert('op')
                    console.log(html);
                    success(JSON.parse(html).location)
                },
                error: function (html) {
                    alert(html);
                }
            })

        },

        //обратный вызов средства выбора файлов
        file_picker_callback: function (callback, value, meta) {
            let input = document.createElement('input')

            input.setAttribute('type', 'file')

            input.setAttribute('accept', 'image/*')

            input.click()

            input.onchange = function(){
                let reader = new FileReader

                reader.readAsDataURL(this.files[0])

                reader.onload = () => {
                    let blobCache = tinymce.activeEditor.editorUpload.blobCache

                    let base64 = reader.result.split(',')[1]

                    let blobInfo = blobCache.create(this.files[0].name, this.files[0], base64)

                    blobCache.add(blobInfo)

                    callback(blobInfo.blobUri(), {title: this.files[0].name})
                }
            }
        }


    });
}
MCEInit();

    let mceElements = document.querySelectorAll('input.tynyMCEInit')

    if(mceElements.length){

        mceElements.forEach(item =>{

            item.onchange = () =>{

                let blockContent = item.closest('.vh-content')
                let textArea = item.closest('.vg-element').querySelector('textarea')
                let textAreaName = textArea.getAttribute('name')
            }
        })
    }
