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
                        <h1 class="m-0 mx-3">Key To Success</h1>
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
                    <div class="fulfilling-bouncing-circle-spinner">
                                <div class="circle"></div>
                                <div class="orbit"></div>
                        </div>
                <textarea name="content" id="editor">

                    &lt;p&gt;Add Your Content Here .&lt;/p&gt;
                </textarea>

                </div>
                <button type="submit" id="keyToSuccessAdd" class="common-btn-padding btn btn-success "> Save </button>
            </div>

        </div>
    </div>
</div>

<script>
    ClassicEditor
        .create(document.querySelector('#editor'))
        .then(editor => {
            // Set the editor's content to the value from localStorage on page load
            let htmlContent = localStorage.getItem("last_keyToS_cnt");
            if (htmlContent) {
                editor.setData(htmlContent);
            }
            editor.model.document.on('change:data', () => {
                // Save the latest HTML content to localStorage whenever the editor content changes
                let editorData = editor.getData();
                let htmlContent = editorData.trim();
                localStorage.setItem("keyToSuccessContent", htmlContent);
            });
        })
        .catch(error => {
            console.error(error);
        });
</script>

