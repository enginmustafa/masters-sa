let brands = [
    {
        "id": 1,
        "name": 'test',
        'description':'test'
    },
    {
        "id": 2,
        "name": 'test',
        'description':'test'
    }
];

function renderbrandList(){
    console.log('in')
    $list = $('#brand-list');
    $list.empty();
    brands.forEach(brand => {
        const $template = getTemplate(brand);
        $list.append($template);
    })
}

function handleCreate(item) {
    console.log(item);
}

function handleEdit(item) {
    console.log(item);
}

function handleDelete(id) {
    console.log(id);
}

function getTemplate(item){
    const $template = `<tr>
                        <td class="brand-id" scope="row">${item.id}</th>
                        <td class="brand-name">${item.name}</td>
                        <td class="brand-description">${item.description}</td>
                        <td>
                            <button type="button" 
                                class="btn btn-primary" 
                                data-toggle="modal" 
                                data-target="#editModal" 
                                data-id=${item.id}
                                data-name=${item.name}
                                data-description=${item.description}>Edit</button>
                            <button type="button" onClick="handleDelete(value)" value=${item.id} class="btn btn-danger">Delete</button>
                        </td>
                        </tr>`;

    return $template;
}

function editModal() {
    $('#editModal').on('show.bs.modal', function(e) {
      let btn = $(e.relatedTarget);
      let id = btn.data('id'); 
      let name = btn.data('name'); 
      let description = btn.data('description'); 
      $('.editNameInput').val(name);
      $('.editDescriptionInput').val(description);

      $('.edit').data('id', id); 
    })
  
    $('.edit').on('click', function() {
      let id = $(this).data('id'); 
       
      let name = $('.editNameInput').val();
      let description = $('.editDescriptionInput').val();
  
      handleEdit({id,name,description});

      $('#editModal').modal('toggle'); 
    })
  }

  function createModal() {
    $('.create').on('click', function() {
        let name = $('.createNameInput').val();
        let description = $('.createDescriptionInput').val();
        
        handleCreate({name, description});
      $('#createModal').modal('toggle'); 
    })
  }


setTimeout(renderbrandList, 100);
setTimeout(editModal,100);
setTimeout(createModal,100);
