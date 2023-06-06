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
                        <h1 class="m-0 mx-2">Our Student Success Stories</h1>
                    </div>
                    <div class="col-sm-2">
                        <ol class="breadcrumb float-sm-right">
                            <button type="button" class="btn btn-block btn-success" id="show_story" style=" width: 100%"> Show Story </button>
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
                    <label for="" class="col-sm-2 col-form-label">Student Name </label>
                    <div class="col-sm-4">
                        <input type="text"  id="student_name" value="" class="form-control" placeholder="Student Name Here" >
                    </div>

                </div>
                <button type="submit" id="studentSuceessAdd" class="common-btn-padding btn btn-success "> Save </button>
                <button type="submit" id="clear" class="mx-2 common-btn-padding btn btn-danger "> Clear </button>

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
        let editorInstance; // Declare a variable to store the CKEditor instance
        

    ClassicEditor
        .create(document.querySelector('#editor'))
        .then(editor => {

            editorInstance = editor; // Store the CKEditor instance in the variable
            // Set the editor's content to the value from localStorage on page load
            let htmlContent = localStorage.getItem("latest_succ_story_cnt");
            if (htmlContent) {
                editor.setData(htmlContent);
            }
            editor.model.document.on('change:data', () => {
                // Save the latest HTML content to localStorage whenever the editor content changes
                let editorData = editor.getData();
                let htmlContent = editorData.trim();
                localStorage.setItem("latest_succ_story_cnt", htmlContent);
            });

            // Clear the editor's content when the "Clear" button is clicked
            $('#clear').on('click', () => {
                editor.setData('');
                $("#student_name").val("")
            });
        })
        .catch(error => {
            console.error(error);
        });
</script>