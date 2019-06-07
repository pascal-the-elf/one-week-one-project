Alert = (title, text="", type="", confirm={"show": true, "text": "Confirm"}, cancel={"show": false, "text": "Cancel"}, func=(r)=>{console.log(r)}) => {
    Swal.fire({
        title: title,
        text: text,
        type: type,
        showConfirmButton: confirm.show,
        showCancelButton: cancel.show,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirm.text,
        cancelButtonText: cancel.text
    }).then((result) => {
        func(result);
    })
};
