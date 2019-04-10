document.addEventListener("DOMContentLoaded", () => {
  // Grab references to the DOM elements we'll be listening to.
  const userInputForm = document.querySelector(".userinput form")
  const thumbnailField = userInputForm.querySelector(".userinput .thumbnail");
  const lengthField = userInputForm.querySelector(".userinput .length");
  const titleField = userInputForm.querySelector(".userinput .title");
  const channelField = userInputForm.querySelector(".userinput .channel");
  const viewcountField = userInputForm.querySelector(".userinput .viewcount");
  const uploadagoField = userInputForm.querySelector(".userinput .uploadago");

  // Create previews based on our form.
  Desktop(
    thumbnailField,
    channelField,
    lengthField,
    titleField,
    viewcountField
  );
  SuggestedHome(
    thumbnailField,
    lengthField,
    titleField,
    channelField,
    viewcountField,
    uploadagoField,
  );
  SuggestedSidebar(
    thumbnailField,
    lengthField,
    titleField,
    channelField,
    viewcountField,
  );

  // Title Input: Hard Limit of 100ch
  titleField.addEventListener( "input", e => {
    // Grab the children.
    let input = titleField.querySelector('input');
    let chLabel = titleField.querySelector('.ch');
    // Grab the value length.
    let count = input.value.length;
    // If it's over the max, truncate it.
    if(count>100) {
      // Code Smell: Magic Number for ch limit
      input.value = input.value.slice(0,99)
    }
    // Show the character count in the label below.
    chLabel.textContent = input.value.length;
  });

  // Prevent Form Submission (just in case..)
  userInputForm.addEventListener( "submit", e => e.preventDefault() );
});

const Desktop = ( thumbnailField, channelField, lengthField, titleField, viewcountField ) => {
  const desktopEl = document.querySelector(".desktop-full");
  const thumbnailOutput = desktopEl.querySelector(".thumbnail");
  const channelOutput = desktopEl.querySelector(".channel");
  const lengthOutput = desktopEl.querySelector(".length");
  const titleOutput = desktopEl.querySelector(".title");
  const viewcountOutput = desktopEl.querySelector(".viewcount");
  thumbnailField.addEventListener("input", e => { fileToPreview(thumbnailField.querySelector('input[type=file]'), thumbnailOutput) });
  channelField.addEventListener("input", e => { channelOutput.textContent = e.target.value; });
  lengthField.addEventListener("input", e => { lengthOutput.textContent = e.target.value; });
  titleField.addEventListener("input", e => { titleOutput.textContent = e.target.value; });
  viewcountField.addEventListener("input", e => { viewcountOutput.textContent = e.target.value; });
};

const SuggestedHome = ( thumbnailField, lengthField, titleField, channelField, viewcountField, uploadagoField ) => {
  const shomeEl = document.querySelector(".suggested > .home");
  const thumbnailOutput = shomeEl.querySelector(".thumbnail");
  const lengthOutput = shomeEl.querySelector(".length");
  const titleOutput = shomeEl.querySelector(".title");
  const channelOutput = shomeEl.querySelector(".channel");
  const viewcountOutput = shomeEl.querySelector(".viewcount");
  const uploadagoOutput = shomeEl.querySelector(".uploadago");
  thumbnailField.addEventListener("input", e => { fileToPreview(thumbnailField.querySelector('input[type=file]'), thumbnailOutput) });
  lengthField.addEventListener("input", e => { lengthOutput.textContent = e.target.value; });
  titleField.addEventListener("input", e => { titleOutput.textContent = e.target.value; $clamp(titleOutput, { clamp: 2 }); });
  channelField.addEventListener("input", e => { channelOutput.textContent = e.target.value; });
  viewcountField.addEventListener("input", e => { viewcountOutput.textContent = e.target.value; });
  uploadagoField.addEventListener("input", e => { uploadagoOutput.textContent = e.target.value; });
};

const SuggestedSidebar = ( thumbnailField, lengthField, titleField, channelField, viewcountField ) => {
  const ssidebarEl = document.querySelector(".suggested > .sidebar");
  const thumbnailOutput = ssidebarEl.querySelector(".thumbnail");
  const lengthOutput = ssidebarEl.querySelector(".length");
  const titleOutput = ssidebarEl.querySelector(".title");
  const channelOutput = ssidebarEl.querySelector(".channel");
  const viewcountOutput = ssidebarEl.querySelector(".viewcount");
  thumbnailField.addEventListener("input", e => { fileToPreview(thumbnailField.querySelector('input[type=file]'), thumbnailOutput) })
  lengthField.addEventListener("input", e => { lengthOutput.textContent = e.target.value; })
  titleField.addEventListener("input", e => { titleOutput.textContent = e.target.value; $clamp(titleOutput, { clamp: 2 }); })
  channelField.addEventListener("input", e => { channelOutput.textContent = e.target.value; })
  viewcountField.addEventListener("input", e => { viewcountOutput.textContent = e.target.value; })
};

const fileToPreview = (fileInput, imgTag) => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = e => { imgTag.src = e.target.result }
  reader.readAsDataURL(file);
}