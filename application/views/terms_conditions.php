<style>
.ck-editor__editable {
    height: 30vh;
}

.btn-success {
    color: #fff;
    background-color:#046A38;
    border-color: #046A38;
    box-shadow: none;
}


</style>
<div class="wrapper ScrollStyle">
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-10">
                    <h1 class="m-0 mx-3">Terms & Condition</h1>
                    </div>
                    <div class="col-sm-2">
                        <ol class="breadcrumb float-sm-right">
                        <button type="button" class="btn btn-block btn-success" id="show_terms" style=" width: 100%"> Show Terms</button>
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

                <div class="form-group row">
                    <label for="" class="col-sm-2 col-form-label">Heading </label>
                    <div class="col-sm-4">
                        <input type="text" id="heading" value="" class="form-control" placeholder="Heading Here" >
                    </div>

                </div>
                <button type="submit" id="addTerms_condition" class="common-btn-padding btn btn-success "> Save </button>
            </div>

        </div>
    </div>
</div>

<script>
    ClassicEditor
        .create(document.querySelector('#editor'))
        .then(editor => {
            // Set the editor's content to the value from localStorage on page load
            let htmlContent = localStorage.getItem("latest_terms_cnt");
            if (htmlContent) {
                editor.setData(htmlContent);
            }
            editor.model.document.on('change:data', () => {
                // Save the latest HTML content to localStorage whenever the editor content changes
                let editorData = editor.getData();
                let htmlContent = editorData.trim();
                localStorage.setItem("latest_terms_cnt", htmlContent);
            });
        })
        .catch(error => {
            console.error(error);
        });
</script>