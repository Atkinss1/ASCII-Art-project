$(() => {
  // Storing the queued images in an array

  let queuedImages = [];
  let deletedImages = []; 

  // ------------------------------------------

  const $savedForm = $('#saved-form');
  const $queuedForm = $('#queued-form');
  const $savedDiv = $('.saved-div');
  const $queuedDiv = $('.queued-div');
  const $inputDiv = $('.input-div');
  const $input = $('.file');
  const $serverMessage = $('.server-message');

  // Queue images to front-end

  $input.on('change', () => {
    $input.each(() => {
      const $files = $input[0].files;
      for (let i = 0; i < $files.length; i++) {
        queuedImages.push($files[i]);
      }
      // resetting the form after each upload
      $queuedForm.reset();
    })
  });

  $inputDiv.on('drop', (event) => {
    event.preventDefault();
    const files = event.originalEvent.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (!files[i].type.match('image')) continue
      queuedImages.push(files[i]);

      if (queuedImages.every(image => image.name !== files[i].name)) {
        queuedImages.push(files[i]);
      }
    }
  });

});