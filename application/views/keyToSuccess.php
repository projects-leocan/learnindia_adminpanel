<style>
    .ck-editor__editable {
        height: 30vh;
    }
</style>
<div class="wrapper ScrollStyle">
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 heading-align">Key To Success</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <!-- <button type="button" class="btn btn-block btn-primary" id="" style=" width: 100%">Add Category</button> -->
                        </ol>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="form-group">
                    <textarea name="content" id="editor">

                    &lt;p&gt;Add Your Content Here .&lt;/p&gt;
                </textarea>

                </div>

                <button type="submit" id="keyToSuccessAdd" class="common-btn-padding btn btn-success "> Save </button>
                <button type="submit" id="keyToSuccessClear" class="mx-2 common-btn-padding btn btn-danger "> Clear </button>

                <!-- Loader HTML code -->
                <div id="loader" class="fulfilling-bouncing-circle-spinner">
                    <div class="circle"></div>
                    <div class="orbit"></div>
                </div>
            </div>

        </div>
    </div>
</div>

<script>
    ClassicEditor
    .create(document.querySelector('#editor'))
    .then(editor => {
        // Define a function to fetch the editor content asynchronously
        const fetchEditorContent = () => {
            return new Promise((resolve, reject) => {
                // Fetch the value from localStorage
                let htmlContent = localStorage.getItem("last_keyToS_cnt");

                // Resolve the promise with the fetched value
                resolve(htmlContent);
            });
        };

        // Fetch the editor content asynchronously
        fetchEditorContent()
            .then(htmlContent => {
                // Set the editor content with the fetched value
                if (htmlContent) {
                    editor.setData(htmlContent);
                }
            })
            .catch(error => {
                console.error(error);
            });

        editor.model.document.on('change:data', () => {
            // Save the latest HTML content to localStorage whenever the editor content changes
            let editorData = editor.getData();
            let htmlContent = editorData.trim();
            localStorage.setItem("keyToSuccessContent", htmlContent);
        });

        // Clear the editor's content when the "Clear" button is clicked
        $('#keyToSuccessClear').on('click', () => {
            editor.setData('');
        });
    })
    .catch(error => {
        console.error(error);
    });

</script>