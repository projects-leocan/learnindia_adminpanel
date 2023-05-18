<style>
    .ck-editor__editable {
        height: 30vh;
    }

    .add-option-container {
        display: flex;
        align-items: center;
    }

    .editable-option {
        display: flex;
        margin-top: 10px;

    }

    .add-option-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        font-size: 25px;
        color: #ffffff;
        background-color: #046A38;
        border-radius: 50%;
        cursor: pointer;
        margin-left: 10px;
    }

    .edit-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        font-size: 16px;
        color: #007bff;
        background-color: #ffffff;
        border: 1px solid #007bff;
        border-radius: 50%;
        cursor: pointer;
        margin-left: 10px;
    }

    .delete-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        font-size: 16px;
        color: #ff0000;
        border: 1px solid #ff0000;
        /* background-color: #ff0000; */
        border-radius: 50%;
        cursor: pointer;
        margin-left: 10px;
    }

    .fa-pencil-alt:before {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
    }

    .editable-option.editing {
    border-bottom: 2px solid #046A38;
    border-top: none;
    border-left: none;
    border-right: none;
}

</style>
<div class="wrapper ScrollStyle">
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-10">
                        <h1 class="m-0 mx-2">Add Questionnaire</h1>
                    </div>
                    <div class="col-sm-2">
                        <ol class="breadcrumb float-sm-right">
                            <button type="button" class="btn btn-block btn-success" id="show_question" style=" width: 100%"> Show Question </button>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="form-group">

                    <textarea name="content" id="editor">
                    &lt;p&gt; Untitled Question .&lt;/p&gt;
                </textarea>

                </div>

                <h4>Add Options</h4>
                <div class="form-group row">
                    <div class="col-sm-4" id="optionsContainer">
                        <div class="form-check add-option-container">
                            <label class="form-check-label" for="addOption">
                                Add option
                            </label>
                            <span class="add-option-icon" id="addOptionIcon">&#43;</span>
                        </div>
                    </div>
                </div>

            </div>
            <button type="submit" id="submitQuestion" class="common-btn-padding btn btn-success  mx-3"> Save </button>
        </div>

    </div>
</div>
</div>

<script>

    
    
    ClassicEditor
        .create(document.querySelector('#editor'))
        .then(editor => {
            // Set the editor's content to the value from localStorage on page load
            let htmlContent = localStorage.getItem("letest_question");
            if (htmlContent) {
                editor.setData(htmlContent);
            }else{
                // Clear the editor content
                editor.setData('Untitled Question');
            }
            editor.model.document.on('change:data', () => {
                // Save the latest HTML content to localStorage whenever the editor content changes
                let editorData = editor.getData();
                let htmlContent = editorData.trim();
                localStorage.setItem("letest_question", htmlContent);
            });
        })
        .catch(error => {
            console.error(error);
        });
</script>